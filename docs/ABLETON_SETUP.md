# Ableton Live Setup Guide

## Prerequisites
- [ ] Ableton Live 11+ installed
- [ ] Max for Live enabled
- [ ] 2GB free disk space
- [ ] Internet connection (for first-time model download)

## Installation Steps

1. **Device Installation**
   ```bash
   # Copy to User Library
   cp ChordSeqM4L.amxd ~/Music/Ableton/User\ Library/Presets/MIDI\ Effects/Max\ MIDI\ Effect/
   ```

2. **Model Files Setup**
   ```javascript
   // First-run auto-download script
   if(!modelsExist()) {
     downloadBaseModels();
   }
   ```

## First Run Procedure
1. Create new MIDI track
2. Add ChordSeqM4L device
3. Wait for model initialization (LED turns green)
4. Load demo progression: `File > Load Demo`

## Test Files
- `tests/demo1.chseq` - Basic chord progression
- `tests/demo2.chseq` - Style variations
- `tests/stress_test.chseq` - 200-chord stress test

## Troubleshooting
| Symptom | Solution |
|---------|----------|
| Red LED | Check Max Console for errors |
| No sound | Verify MIDI routing |
| Slow performance | Reduce model size in settings |

## Recommended Settings
```json
{
  "model": "transformer_medium",
  "buffer_size": 512,
  "threads": 2,
  "enable_hardware_accel": true
}