Settings.demoScript = {
  "music": "data/jumalauta_europe.ogg",
  "totalTime": "3:25",
  "kanttuCompatibility": true,
  "window":
  {
    "title": "Jumalauta!"
  },
  "screen":
  {
     "width": 640
    ,"height": 480
  },
  "clearColor":
  {
    "r": 0,
	"g": 0,
	"b": 0,
	"a": 1
  },
  "effects": [
    {
      "name": "Jumalauta",
      "reference": "data/js/Jumalauta.js"
    }
  ],
  "scenes": [
    {
      "name": "Jumalauta",
      "effect": "Jumalauta",
      "startTime": "0:00",
      "durationTime": "3:25"
    }
  ]
}