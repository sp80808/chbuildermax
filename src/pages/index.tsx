import { useState, useEffect } from 'react';

export default function Home() {
  // State for parameters controlled by Ableton
  const [bpm, setBpm] = useState(120);
  const [loop, setLoop] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // State for parameters controlled by the UI
  const [zoom, setZoom] = useState(1);
  const [selectedChord, setSelectedChord] = useState(-1);

  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => console.log('WebSocket connected');
    socket.onclose = () => console.log('WebSocket disconnected');

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'transportUpdate' && data.payload) {
          const { bpm, loop, 'tempo-enabled': tempoEnabled } = data.payload;
          if (bpm) setBpm(bpm);
          if (loop !== undefined) setLoop(loop === 1);
          if (tempoEnabled !== undefined) setIsPlaying(tempoEnabled === 1);
        }
      } catch (error) {
        console.error('Error parsing message:', error);
      }
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  const sendParameter = (name: string, value: number | boolean) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(
        JSON.stringify({
          type: 'parameterChange',
          payload: { name, value: typeof value === 'boolean' ? (value ? 1 : 0) : value },
        })
      );
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Max for Live Control Surface</h1>
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
        <h2>Live Status</h2>
        <p>BPM: {bpm.toFixed(2)}</p>
        <p>Loop: {loop ? 'On' : 'Off'}</p>
        <p>Playback: {isPlaying ? 'Playing' : 'Stopped'}</p>
      </div>
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
        <h2>Controls</h2>
        <div>
          <label>Zoom:</label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={zoom}
            onChange={(e) => {
              const value = parseFloat(e.target.value);
              setZoom(value);
              sendParameter('zoom', value);
            }}
          />
        </div>
        <div>
          <label>Selected Chord:</label>
          <input
            type="number"
            value={selectedChord}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              setSelectedChord(value);
              sendParameter('selectedChord', value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
