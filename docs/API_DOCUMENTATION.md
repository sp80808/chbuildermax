# ChordSeqAI API Documentation

## WebSocket Communication Protocol

### Connection Details
- Endpoint: `ws://localhost:8080`
- Handshake: Automatic on device load
- Ping/Pong: 30 second interval

### Message Types

#### Transport Updates (Ableton → Web)
```json
{
  "type": "transportUpdate",
  "payload": {
    "bpm": 120.0,
    "isPlaying": true,
    "loopEnabled": false,
    "timeSignature": [4, 4]
  }
}
```

#### Parameter Changes (Bidirectional)
```json
{
  "type": "parameterChange", 
  "payload": {
    "name": "zoom|selectedChord|...",
    "value": 1.2
  }
}
```

#### Error Messages
```json
{
  "type": "error",
  "payload": {
    "code": "CONNECTION|PARAMETER|SYNC",
    "message": "Detailed error description"
  }
}
```

## Max for Live Device API

### Exposed Parameters
1. `zoom` (float): UI zoom level (0.5-2.0)
2. `selectedChord` (int): Currently selected chord index
3. `playbackVolume` (float): Master volume (0-1)

### Required Objects
- `[websocket]`: Max WebSocket external
- `[live.thisdevice]`: For Ableton integration
- `[live.observer]`: For transport updates

## JavaScript API

### Web App Methods
```javascript
// Connect to Max device
function connectToMaxDevice(url = 'ws://localhost:8080') {
  // Implementation...
}

// Handle transport updates
function handleTransportUpdate(data) {
  // Implementation... 
}
```

### Event Listeners
```javascript
socket.addEventListener('message', (event) => {
  const data = JSON.parse(event.data);
  switch(data.type) {
    case 'transportUpdate':
      handleTransportUpdate(data.payload);
      break;
    // Other cases...
  }
});