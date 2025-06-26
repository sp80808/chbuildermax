# ChordSeqM4L AI Integration (Enhanced)

## Model Specifications
### Supported Architectures
- Transformer (S/M/L)
- Conditional Transformer  
- Recurrent Network

```javascript
// Model Metadata Example
{
  "name": "conditional_medium",
  "input_shape": [64, 12],
  "output_size": 128, 
  "quantized": true,
  "size": "45MB"
}
```

## Detailed Workflow

### 1. Model Loading
```javascript
// Max JS Object Example
function loadModel() {
  const modelPath = getModelPath();
  const session = new ort.InferenceSession();
  try {
    await session.loadModel(modelPath);
    post("Model loaded successfully");
  } catch (e) {
    post("Load error: " + e);
  }
}
```

### 2. Input Preparation
| Feature        | Normalization | Example Value |
|---------------|--------------|--------------|
| Chord Sequence | One-hot      | [0,1,0,...]  |
| Style Weights | 0-1 range    | [0.8, 0.2]   |
| Tempo         | 30-300 BPM   | 120 → 0.5    |

### 3. Inference Execution
```max
[prepend model_name]
|
[js run_inference.js]
|
[route outputs]
```

### Performance Benchmarks
| Model          | CPU (ms) | RAM (MB) |
|----------------|---------|---------|
| Transformer S  | 45      | 120     |
| Transformer L  | 210     | 580     |

## Error Handling Guide

### Common Issues
1. **Model Not Found**  
   - Check file permissions
   - Verify model path

2. **Input Shape Mismatch**  
   ```javascript
   // Validation example
   if(input.length !== expectedLength) {
     throw "Input size mismatch";
   }
   ```

3. **GPU Acceleration**  
   - Fallback to CPU if no GPU detected
   - Memory management tips

## Platform Support
| OS         | ONNX Runtime | Notes               |
|------------|--------------|---------------------|
| Windows    | ✅           | Best performance    |
| macOS      | ✅           | M1 optimized        |
| Linux      | ⚠️           | Requires manual setup|