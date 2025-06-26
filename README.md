# Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
   - 2.1. [Prerequisites](#prerequisites)
   - 2.2. [Installation](#installation)
   - 2.3. [Running the App](#running-the-app)
3. [Max for Live Integration](#max-for-live-integration)
4. [Support](#support)
5. [Usage](#usage)
6. [API Documentation](#api-documentation)
7. [Contributing](#contributing)
8. [Development Roadmap](#development-roadmap)
9. [FAQ](#faq)
10. [Web Stack](#web-stack)
11. [License](#license)

# ChordSeqAI Web App

## Introduction

The ChordSeqAI Web App is a dynamic interface for composing chord progressions with AI assistance, featuring integration with Ableton Live via Max for Live.

## Max for Live Integration

The ChordSeqAI Max for Live device provides:
- Real-time BPM sync with Ableton's transport
- Playback control from the web interface
- Parameter automation from Ableton to the web app

### Setup Instructions:
1. Install the `chordseqm4l.amxd` device in Ableton Live
2. Ensure the web app is running (localhost:3000)
3. The device automatically connects via WebSocket (port 8080)

### Communication Protocol:
The WebSocket API uses JSON messages with this structure:
```json
{
  "type": "transportUpdate|parameterChange",
  "payload": {
    "bpm": 120,
    "isPlaying": true,
    "parameter": "zoom",
    "value": 1.2
  }
}
```

## API Documentation

### WebSocket Endpoints:
- `ws://localhost:8080` - Main communication channel
- Message types:
  - `transportUpdate` - Syncs Ableton's transport state
  - `parameterChange` - Sends parameter updates both ways

## Contributing

### Development Setup:
1. Clone the repository
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`

### Code Standards:
- Follow existing patterns for WebSocket communication
- Document new features in both code and README
- Include unit tests for new functionality

## Development Roadmap

### Phase 1 (Current):
- [x] Basic WebSocket communication
- [x] Transport sync (BPM, play state)
- [ ] Parameter automation

### Phase 2 (Next):
- [ ] Advanced device control
- [ ] MIDI mapping integration
- [ ] Preset system

### Phase 3 (Future):
- [ ] Multi-device support
- [ ] Push controller integration
- [ ] Custom UI themes

## Web Stack
This is a Next.js 14 app using:
- WebSocket (ws) for Live communication
- ONNX runtime for AI models
- Tone.js for audio playback
