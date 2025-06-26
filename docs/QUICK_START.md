# ChordSeqM4L Quick Start

## 1. Installation

The ChordSeqM4L device now runs a self-contained AI engine. For it to function, you need the entire project folder, not just the `.amxd` file.

1.  Place the entire `chbuildermax` project folder in a location you can access from Ableton Live.
2.  Inside Ableton, you can locate the `chordseqm4l.amxd` file via Max's file browser or add the project folder to your Places in Live's browser.
3.  For the AI features to work, you must first follow the **[AI Integration Setup Guide](./AI_SETUP_GUIDE.md)**.

## 2. Basic Usage
1.  Create a MIDI track in Ableton Live.
2.  Add the ChordSeqM4L device to the track.
3.  **Use AI Suggestions**:
    *   Select an AI model from the dropdown menu in the device.
    *   Click on a chord in the timeline. The AI will automatically generate a sequence of suggested chords that follow it.
4.  **Manual Editing**: Click the "+" button to add chords manually or edit the AI's suggestions.
5.  Press the spacebar to play your progression.

## Key Shortcuts
| Shortcut | Action |
|----------|--------|
| A | Add chord |
| Del | Delete selected |
| Space | Play/pause |
| V | Show variants |

## Need Help?
- Check `Troubleshooting` in [ABLETON_SETUP.md](./ABLETON_SETUP.md)
- For a detailed guide on setting up the AI engine, consult the **[AI Integration Setup Guide](./AI_SETUP_GUIDE.md)**.

# ChordSeqM4L Documentation

## Features

### 1. AI-Generated Chord Progressions
- Automatically generate chord progressions based on the selected chord and key signature.
- AI models can be selected from the dropdown menu (`modelSelector`).

### 2. Manual Chord Selection
- Use the chord palette (`chordPalette`) to manually select chords.
- Selected chords are sent to the AI engine for contextual suggestions.

### 3. MIDI Output
- Generated chords are routed to the `midiout` object for playback or recording in Ableton Live.

### 4. Timeline Editing
- Use the timeline (`timeline`) to visualize and edit chord progressions.

## Setup Instructions

1. **Install Dependencies**:
   - Ensure `onnxruntime-node` is installed for the AI engine.
   - Place the `chordseqm4l.amxd` file and the `js` folder in the same directory.

2. **Load the Device**:
   - Add the `chordseqm4l.amxd` device to a MIDI track in Ableton Live.

3. **Select an AI Model**:
   - Use the dropdown menu (`modelSelector`) to choose an AI model.

4. **Generate Chords**:
   - Click on the timeline or select a chord from the palette to trigger chord generation.

5. **Playback**:
   - Press play in Ableton Live to hear the generated chords.

## Troubleshooting
- Ensure the `models` directory contains valid `.onnx` files.
- Check the Max Console for error messages if the AI engine fails to load.