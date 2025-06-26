import { useState, useEffect } from 'react';

export default function Home() {
  const [sliderValue, setSliderValue] = useState(0);
  const [bpm, setBpm] = useState(120);
  const [loop, setLoop] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [selectedChord, setSelectedChord] = useState(-1);
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => console.log('WebSocket connected');
    socket.onclose = () => console.log('WebSocket disconnected');
    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSliderValue(Number(value));

    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(
        JSON.stringify({
          type: 'parameterChange',
          payload: { name: 'cutoff', value: Number(value) },
        })
      );
    }
  };

  const sendParameter = (name: string, value: number | boolean) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(
        JSON.stringify({
          type: 'parameterChange',
          payload: { name, value },
        })
      );
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Max for Live Control Surface</h1>
      <div>
        <label>BPM:</label>
        <input
          type="range"
          min="60"
          max="200"
          value={bpm}
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            setBpm(value);
            sendParameter('bpm', value);
          }}
        />
      </div>
      <div>
        <label>Loop:</label>
        <input
          type="checkbox"
          checked={loop}
          onChange={(e) => {
            const value = e.target.checked;
            setLoop(value);
            sendParameter('loop', value ? 1 : 0);
          }}
        />
      </div>
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
      <input
        type="range"
        min="0"
        max="127"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <p>Slider Value: {sliderValue}</p>
    </div>
  );
}
