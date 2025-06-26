# MIDI Test Plan for ChordSeqM4L

## Test Files
1. `mid.mid` - Basic chord progression
2. `mid1.mid` - Varied note durations  
3. `mid2.mid` - Complex chords
4. `mid3.mid` - Rapid sequences
5. `mid4.mid` - Different time signature
6. `mid5.mid` - Stress test
7. `mid6.mid` - Special cases

## Test Cases

### TC1: Basic Progression (mid.mid)
**Steps**:
1. Load into ChordSeqM4L
2. Play through once
3. Verify chord detection

**Expected**:
- Correctly identifies 4 chords
- Maintains original timing

### TC2: Complex Chords (mid2.mid)
**Steps**:
1. Import file
2. Check chord analysis

**Expected**:
- Handles 7th, 9th chords
- Preserves voicings

### TC3: Timing Stress (mid5.mid)
**Steps**:
1. Load file  
2. Play at 200BPM
3. Monitor CPU

**Expected**:
- No dropped notes
- CPU < 30%

## Verification Methods
1. Visual inspection in piano roll
2. Audio playback check
3. MIDI output analysis

## Pass Criteria
- All chords correctly identified
- No timing drift > 5ms  
- CPU usage within limits