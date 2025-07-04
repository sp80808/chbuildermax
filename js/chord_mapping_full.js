const CHORD_MAP = {
  "0": "Cmaj7",
  "1": "G7",
  "2": "Am7",
  "3": "Fmaj7",
  "4": "Dm7",
  "5": "E7",
  "6": "D#2/F",
  "7": "D#add9/F",
  "8": "G7#5#9",
  "9": "G9#5",
  "10": "D#add9#11",
  "11": "Fm7b5/G",
  "12": "D#add4add9",
  "13": "G#mmaj9/F",
  "14": "Badd+11",
  "15": "D#madd9",
  "16": "Bsus2/E",
  "17": "F#7",
  "18": "F#m7",
  "19": "A6/9",
  "20": "F#7#9",
  "21": "F#7sus2",
  "22": "D#5/B",
  "23": "D#aug",
  "24": "G#madd9",
  "25": "G#5/A",
  "26": "G#m/A",
  "27": "D#3",
  "28": "D#add-13",
  "29": "B7+5",
  "30": "D#dim",
  "31": "B7",
  "32": "D#m/A",
  "33": "BM7/A",
  "34": "G#5/F#",
  "35": "G#m7",
  "36": "D#sus4",
  "37": "G#madd9",
  "38": "G#5/A",
  "39": "G#m/A",
  "40": "D#3",
  "41": "D#aug",
  "42": "G#madd9",
  "43": "G#5/A",
  "44": "G#m/A",
  "45": "D#3",
  "46": "D#add-13",
  "47": "B7+5",
  "48": "D#dim",
  "49": "B7",
  "50": "D#m/A",
  "51": "BM7/A",
  "52": "G#5/F#",
  "53": "G#m7",
  "54": "D#sus4",
  "55": "G#madd9",
  "56": "G#5/A",
  "57": "G#m/A",
  "58": "D#3",
  "59": "D#aug",
  "60": "G#madd9",
  "61": "G#5/A",
  "62": "G#m/A",
  "63": "D#3",
  "64": "D#add-13",
  "65": "B7+5",
  "66": "D#dim",
  "67": "B7",
  "68": "D#m/A",
  "69": "BM7/A",
  "70": "G#5/F#",
  "71": "G#m7",
  "72": "D#sus4",
  "73": "G#madd9",
  "74": "G#5/A",
  "75": "G#m/A",
  "76": "D#3",
  "77": "D#aug",
  "78": "G#madd9",
  "79": "G#5/A",
  "80": "G#m/A",
  "81": "D#3",
  "82": "D#add-13",
  "83": "B7+5",
  "84": "D#dim",
  "85": "B7",
  "86": "D#m/A",
  "87": "BM7/A",
  "88": "G#5/F#",
  "89": "G#m7",
  "90": "D#sus4",
  "91": "G#madd9",
  "92": "G#5/A",
  "93": "G#m/A",
  "94": "D#3",
  "95": "D#aug",
  "96": "G#madd9",
  "97": "G#5/A",
  "98": "G#m/A",
  "99": "D#3",
  "100": "D#add-13",
  "101": "B7+5",
  "102": "D#dim",
  "103": "B7",
  "104": "D#m/A",
  "105": "BM7/A",
  "106": "G#5/F#",
  "107": "G#m7",
  "108": "D#sus4",
  "109": "G#madd9",
  "110": "G#5/A",
  "111": "G#m/A",
  "112": "D#3",
  "113": "D#aug",
  "114": "G#madd9",
  "115": "G#5/A",
  "116": "G#m/A",
  "117": "D#3",
  "118": "D#add-13",
  "119": "B7+5",
  "120": "D#dim",
  "121": "B7",
  "122": "D#m/A",
  "123": "BM7/A",
  "124": "G#5/F#",
  "125": "G#m7",
  "126": "D#sus4",
  "127": "G#madd9",
  "128": "G#5/A",
  "129": "G#m/A",
  "130": "D#3",
  "131": "D#aug",
  "132": "G#madd9",
  "133": "G#5/A",
  "134": "G#m/A",
  "135": "D#3",
  "136": "D#add-13",
  "137": "B7+5",
  "138": "D#dim",
  "139": "B7",
  "140": "D#m/A",
  "141": "BM7/A",
  "142": "G#5/F#",
  "143": "G#m7",
  "144": "D#sus4",
  "145": "G#madd9",
  "146": "G#5/A",
  "147": "G#m/A",
  "148": "D#3",
  "149": "D#aug",
  "150": "G#madd9",
  "151": "G#5/A",
  "152": "G#m/A",
  "153": "D#3",
  "154": "D#add-13",
  "155": "B7+5",
  "156": "D#dim",
  "157": "B7",
  "158": "D#m/A",
  "159": "BM7/A",
  "160": "G#5/F#",
  "161": "G#m7",
  "162": "D#sus4",
  "163": "G#madd9",
  "164": "G#5/A",
  "165": "G#m/A",
  "166": "D#3",
  "167": "D#aug",
  "168": "G#madd9",
  "169": "G#5/A",
  "170": "G#m/A",
  "171": "D#3",
  "172": "D#add-13",
  "173": "B7+5",
  "174": "D#dim",
  "175": "B7",
  "176": "D#m/A",
  "177": "BM7/A",
  "178": "G#5/F#",
  "179": "G#m7",
  "180": "D#sus4",
  "181": "G#madd9",
  "182": "G#5/A",
  "183": "G#m/A",
  "184": "D#3",
  "185": "D#aug",
  "186": "G#madd9",
  "187": "G#5/A",
  "188": "G#m/A",
  "189": "D#3",
  "190": "D#add-13",
  "191": "B7+5",
  "192": "D#dim",
  "193": "B7",
  "194": "D#m/A",
  "195": "BM7/A",
  "196": "G#5/F#",
  "197": "G#m7",
  "198": "D#sus4",
  "199": "G#madd9",
  "200": "G#5/A",
  "201": "G#m/A",
  "202": "D#3",
  "203": "D#aug",
  "204": "G#madd9",
  "205": "G#5/A",
  "206": "G#m/A",
  "207": "D#3",
  "208": "D#add-13",
  "209": "B7+5",
  "210": "D#dim",
  "211": "B7",
  "212": "D#m/A",
  "213": "BM7/A",
  "214": "G#5/F#",
  "215": "G#m7",
  "216": "D#sus4",
  "217": "G#madd9",
  "218": "G#5/A",
  "219": "G#m/A",
  "220": "D#3",
  "221": "D#aug",
  "222": "G#madd9",
  "223": "G#5/A",
  "224": "G#m/A",
  "225": "D#3",
  "226": "D#add-13",
  "227": "B7+5",
  "228": "D#dim",
  "229": "B7",
  "230": "D#m/A",
  "231": "BM7/A",
  "232": "G#5/F#",
  "233": "G#m7",
  "234": "D#sus4",
  "235": "G#madd9",
  "236": "G#5/A",
  "237": "G#m/A",
  "238": "D#3",
  "239": "D#aug",
  "240": "G#madd9",
  "241": "G#5/A",
  "242": "G#m/A",
  "243": "D#3",
  "244": "D#add-13",
  "245": "B7+5",
  "246": "D#dim",
  "247": "B7",
  "248": "D#m/A",
  "249": "BM7/A",
  "250": "G#5/F#",
  "251": "G#m7",
  "252": "D#sus4",
  "253": "G#madd9",
  "254": "G#5/A",
  "255": "G#m/A",
};

module.exports = { CHORD_MAP };
