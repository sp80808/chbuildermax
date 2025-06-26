# ChordSeqM4L - Max for Live Device
## Overview
## Features
- Real-time BPM sync with Ableton Live
- Bidirectional parameter control
- WebSocket API for web app integration
- Lightweight design (under 5MB)

## Installation
1. Copy `chordseqm4l.amxd` to your Ableton User Library:
   - Mac: `/Users/[you]/Music/Ableton/User Library/Presets/MIDI Effects/Max MIDI Effect`
   - Windows: `C:\Users\[you]\Documents\Ableton\User Library\Presets\MIDI Effects\Max MIDI Effect`

2. Add to an Ableton MIDI track

## Web App Integration
1. Ensure the ChordSeqAI web app is running (localhost:3000)
2. The device automatically connects via WebSocket (port 8080)

### Connection Status
- Blue LED: Connected to web app
- Red LED: Connection error
- Off: Web app not running

## API Reference
See [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) for full details.

### Basic Usage Example
```javascript
// Web app connection handler
const socket = new WebSocket('ws://localhost:8080');

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.type === 'transportUpdate') {
    console.log(`BPM: ${data.payload.bpm}`);
  }
};
```

## Known Limitations
1. Requires Ableton Live 11+ 
2. Web app must be running before device load
3. Limited to one instance per Live set

## Troubleshooting
- **Connection issues**: Verify web app is running on port 3000
- **Parameter sync problems**: Check Ableton's MIDI mapping conflicts
- **Performance**: Reduce Max polling rate if CPU usage is high

## Development
See [CONTRIBUTING.md](./CONTRIBUTING.md) for:
- Building from source
- Testing procedures
- Code standards