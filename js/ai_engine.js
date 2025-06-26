const Max = require('max-api');
const ort = require('onnxruntime-node');
const fs = require('fs');
const path = require('path');
const { CHORD_MAP } = require('./chord_mapping_full.js');

let currentSession = null;
let currentModelName = '';

// --- Model Loading & Management ---

async function findModels() {
    try {
        const modelsPath = path.join(__dirname, '..', 'models');
        const files = fs.readdirSync(modelsPath);
        const onnxModels = files.filter(file => file.endsWith('.onnx')).map(file => file.replace('.onnx', ''));
        if (onnxModels.length > 0) {
            Max.outlet('models', 'clear');
            onnxModels.forEach(modelName => Max.outlet('models', 'append', modelName));
        } else {
            Max.post('No .onnx models found in the /models directory.', Max.POST_LEVEL.ERROR);
        }
    } catch (e) {
        Max.post(`Error finding models: ${e}`, Max.POST_LEVEL.ERROR);
    }
}

async function loadModel(modelName) {
    if (modelName === currentModelName) {
        Max.post(`Model "${modelName}" is already loaded.`);
        return;
    }
    try {
        const modelPath = path.join(__dirname, '..', 'models', `${modelName}.onnx`);
        Max.post(`Loading model: ${modelPath}`);
        currentSession = await ort.InferenceSession.create(modelPath);
        currentModelName = modelName;
        Max.post(`Successfully loaded model: ${modelName}`);
    } catch (e) {
        Max.post(`Error loading model "${modelName}": ${e}`, Max.POST_LEVEL.ERROR);
        currentSession = null;
        currentModelName = '';
    }
}

// --- Chord Generation ---

async function generateProgression(inputChordIndex, keySignature, styleWeights = null) {
    if (!currentSession) {
        Max.post('Cannot generate progression: No model loaded.', Max.POST_LEVEL.WARN);
        return;
    }
    Max.post(`Generating with context: Chord Index ${inputChordIndex}, Key ${keySignature}`);

    try {
        const inputTensor = new ort.Tensor('int64', [BigInt(inputChordIndex)], [1]);
        const feeds = { [currentSession.inputNames[0]]: inputTensor };

        if (styleWeights) {
            const styleTensor = new ort.Tensor('float32', styleWeights, [styleWeights.length]);
            feeds[currentSession.inputNames[1]] = styleTensor;
        }

        const results = await currentSession.run(feeds);
        const outputTensor = results[currentSession.outputNames[0]];
        
        const outputTokens = Array.from(outputTensor.data);
        const generatedChords = outputTokens.map(token => CHORD_MAP[token] || 'Unknown');

        Max.post(`Generated Chords: ${generatedChords.join(', ')}`);
        Max.outlet('chords', ...generatedChords);

    } catch (e) {
        Max.post(`Inference error: ${e}`, Max.POST_LEVEL.ERROR);
    }
}

// --- Max Handlers ---

Max.addHandler('find_models', () => {
    findModels();
});

Max.addHandler('load_model', (modelName) => {
    loadModel(modelName);
});

Max.addHandler('generate', (inputChordIndex, keySignature) => {
    const key = 'C Major'; 
    generateProgression(inputChordIndex, key);
});

Max.post('AI Engine script loaded.');
