Demo.prototype.init = function()
{
	//00003/00001 - 8.7273	3 image ( name theevilplace.jpg add scale 50 50 )
	this.loader.addAnimation([{
		 "start": 8.73, "duration": 8.73
		,"layer": "00003", "image": "theevilplace.png"
		,"additive": true
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":8.73, "duration":8.73, "x":0.60, "y":0.60}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":8.73, "duration":8.73, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00004/00001 - 8.7273	4 image ( name black.jpg scale 100 100 )
	this.loader.addAnimation([{
		 "start": 8.73, "duration": 1.27
		,"layer": "00004", "image": "black.png"
		,"scale":[
			 {"x":1,"y":1}
			,{"start":8.73, "duration":1.27, "x":0.00, "y":0.50}
		]
	}]);
	//00005/00001 - 0		5 image ( name trees_1.jpg add scale 50 50 position 480 240 color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 17.45, "duration": 34.91
		,"layer": "00005", "image": "trees_1.png"
		,"additive": true
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":17.45, "duration":4.36, "x":0.75, "y":0.75}
			,{"start":21.82, "duration":4.36, "x":1.00, "y":1.00}
		]
		,"position":[
			 {"x":480,"y":240}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":17.45, "duration":4.36, "r":255, "g":255, "b":255, "a":255}
			,{"start":21.82, "duration":4.36, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00005/00002 - 0		5 image ( name courtyard.jpg add scale 50 50 position 320 240 color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 52.36, "duration": 187.64
		,"layer": "00005", "image": "courtyard.png"
		,"additive": true
		,"angle":[
			 {"degreesZ":0}
			,{"start":52.36, "duration":8.73, "degreesZ":10}
		]
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":52.36, "duration":8.73, "x":1.00, "y":1.00}
		]
		,"position":[
			 {"x":320,"y":240}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":52.36, "duration":4.36, "r":255, "g":255, "b":255, "a":255}
			,{"start":56.73, "duration":4.36, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00006/00001 - 4.3636		6 image ( name trees_3.jpg add scale 50 50 position 120 240 color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 21.82, "duration": 30.55
		,"layer": "00006", "image": "trees_3.png"
		,"additive": true
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":21.82, "duration":4.36, "x":0.75, "y":0.75}
			,{"start":26.18, "duration":4.36, "x":1.00, "y":1.00}
		]
		,"position":[
			 {"x":120,"y":240}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":21.82, "duration":4.36, "r":255, "g":255, "b":255, "a":255}
			,{"start":26.18, "duration":4.36, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00006/00002 - 4.3636		6 image ( name crow.jpg add scale 30 30 position 200 300 color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 56.73, "duration": 183.27
		,"layer": "00006", "image": "crow.png"
		,"additive": true
		,"angle":[
			 {"degreesZ":0}
			,{"start":56.73, "duration":8.73, "degreesZ":10}
		]
		,"scale":[
			 {"x":0.3,"y":0.3}
			,{"start":56.73, "duration":8.73, "x":0.50, "y":0.50}
		]
		,"position":[
			 {"x":200,"y":300}
			,{"start":56.73, "duration":8.73, "x":140, "y":400}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":56.73, "duration":4.36, "r":255, "g":255, "b":255, "a":255}
			,{"start":61.09, "duration":4.36, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00007/00001 - 8.7272			7 image ( name trees_7.jpg add scale 50 50 position 500 300 color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 26.18, "duration": 26.18
		,"layer": "00007", "image": "trees_7.png"
		,"additive": true
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":26.18, "duration":4.36, "x":0.75, "y":0.75}
			,{"start":30.55, "duration":4.36, "x":1.00, "y":1.00}
		]
		,"position":[
			 {"x":500,"y":300}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":26.18, "duration":4.36, "r":255, "g":255, "b":255, "a":255}
			,{"start":30.55, "duration":4.36, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00007/00002 - 8.7272			7 image ( name crypt.jpg add scale 50 50 position 420 300 color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 61.09, "duration": 178.91
		,"layer": "00007", "image": "crypt.png"
		,"additive": true
		,"angle":[
			 {"degreesZ":0}
			,{"start":61.09, "duration":8.73, "degreesZ":-30}
		]
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":61.09, "duration":4.36, "x":0.75, "y":0.75}
			,{"start":65.45, "duration":4.36, "x":1.00, "y":1.00}
		]
		,"position":[
			 {"x":420,"y":300}
			,{"start":61.09, "duration":8.73, "x":320, "y":240}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":61.09, "duration":4.36, "r":255, "g":255, "b":255, "a":255}
			,{"start":65.45, "duration":4.36, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00008/00001 - 13.0909		8 image ( name trees_5.jpg add scale 50 50 position 120 240 color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 30.55, "duration": 21.82
		,"layer": "00008", "image": "trees_5.png"
		,"additive": true
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":30.55, "duration":4.36, "x":0.75, "y":0.75}
			,{"start":34.91, "duration":4.36, "x":1.00, "y":1.00}
		]
		,"position":[
			 {"x":120,"y":240}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":30.55, "duration":4.36, "r":255, "g":255, "b":255, "a":255}
			,{"start":34.91, "duration":4.36, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00008/00002 - 13.0909		8 image ( name clown.jpg add scale 70 70 position 320 240 color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 65.45, "duration": 174.55
		,"layer": "00008", "image": "clown.png"
		,"additive": true
		,"scale":[
			 {"x":0.7,"y":0.7}
			,{"start":65.45, "duration":8.73, "x":1.50, "y":1.50}
		]
		,"position":[
			 {"x":320,"y":240}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":65.45, "duration":4.36, "r":255, "g":255, "b":255, "a":255}
			,{"start":69.82, "duration":4.36, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00009/00001 - 0		9 image ( name womanscream.jpg add scale 120 120 position 320 240 color 0 255 255 255 angle 3 )
	this.loader.addAnimation([{
		 "start": 69.82, "duration": 170.18
		,"layer": "00009", "image": "womanscream.png"
		,"additive": true
		,"angle":[
			 {"degreesZ":3}			,{"start":69.82, "duration":8.73, "degreesZ":-3}
		]
		,"scale":[
			 {"x":1.2,"y":1.2}
			,{"start":69.82, "duration":8.73, "x":0.80, "y":0.80}
		]
		,"position":[
			 {"x":320,"y":240}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":69.82, "duration":4.36, "r":255, "g":255, "b":255, "a":255}
			,{"start":74.18, "duration":4.36, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00010/00001 - 0	10 image ( name wolf.jpg add scale 70 70 position 120 360 color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 34.91, "duration": 34.91
		,"layer": "00010", "image": "wolf.png"
		,"additive": true
		,"scale":[
			 {"x":0.7,"y":0.7}
			,{"start":34.91, "duration":8.73, "x":0.50, "y":0.50}
		]
		,"position":[
			 {"x":120,"y":360}
			,{"start":34.91, "duration":8.73, "x":50, "y":450}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":34.91, "duration":4.36, "r":255, "g":255, "b":255, "a":255}
			,{"start":39.27, "duration":4.36, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00010/00002 - 0	10 image ( name black.jpg scale 100 100 )
	this.loader.addAnimation([{
		 "start": 74.18, "duration": 0.55
		,"layer": "00010", "image": "black.png"
		,"scale":[
			 {"x":1,"y":1}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":74.18, "duration":0.55, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00010/00003 - 0.5455 10 image ( name black.jpg scale 100 100 )
	this.loader.addAnimation([{
		 "start": 74.73, "duration": 0.55
		,"layer": "00010", "image": "black.png"
		,"scale":[
			 {"x":1,"y":1}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":74.73, "duration":0.55, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00010/00004 - 1.0909 10 image ( name black.jpg scale 100 100 )
	this.loader.addAnimation([{
		 "start": 75.27, "duration": 0.55
		,"layer": "00010", "image": "black.png"
		,"scale":[
			 {"x":1,"y":1}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":75.27, "duration":0.55, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00010/00005 - 1.6364 10 image ( name black.jpg scale 100 100 )
	this.loader.addAnimation([{
		 "start": 75.82, "duration": 0.55
		,"layer": "00010", "image": "black.png"
		,"scale":[
			 {"x":1,"y":1}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":75.82, "duration":0.55, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00010/00006 - 0	10 image ( name black.jpg scale 100 100 )
	this.loader.addAnimation([{
		 "start": 76.36, "duration": 0.55
		,"layer": "00010", "image": "black.png"
		,"scale":[
			 {"x":1,"y":1}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":76.36, "duration":0.55, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00010/00007 - 0.5455 10 image ( name black.jpg scale 100 100 )
	this.loader.addAnimation([{
		 "start": 76.91, "duration": 0.55
		,"layer": "00010", "image": "black.png"
		,"scale":[
			 {"x":1,"y":1}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":76.91, "duration":0.55, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00010/00008 - 1.0909 10 image ( name black.jpg scale 100 100 )
	this.loader.addAnimation([{
		 "start": 77.45, "duration": 0.55
		,"layer": "00010", "image": "black.png"
		,"scale":[
			 {"x":1,"y":1}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":77.45, "duration":0.55, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00010/00009 - 1.6364 10 image ( name black.jpg scale 100 100 )
	this.loader.addAnimation([{
		 "start": 78.00, "duration": 0.55
		,"layer": "00010", "image": "black.png"
		,"scale":[
			 {"x":1,"y":1}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":78.00, "duration":0.55, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00001 - 4.3636		11 image ( name moon.jpg add scale 10 10 position 320 120 color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 39.27, "duration": 30.55
		,"layer": "00011", "image": "moon.png"
		,"additive": true
		,"scale":[
			 {"x":0.1,"y":0.1}
			,{"start":39.27, "duration":4.36, "x":0.30, "y":0.30}
			,{"start":43.64, "duration":4.36, "x":0.40, "y":0.40}
		]
		,"position":[
			 {"x":320,"y":120}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":39.27, "duration":4.36, "r":255, "g":255, "b":255, "a":255}
			,{"start":43.64, "duration":4.36, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00002 - 0	11 image ( name handknife.jpg add scale 50 50 position 320 160 scale 50 50 color 255 255 255 255 angle 10 )
	this.loader.addAnimation([{
		 "start": 74.18, "duration": 0.55
		,"layer": "00011", "image": "handknife.png"
		,"additive": true
		,"angle":[
			 {"degreesZ":10}		]
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":74.18, "duration":0.55, "x":0.50, "y":0.50}
		]
		,"position":[
			 {"x":320,"y":160}
			,{"start":74.18, "duration":0.55, "x":220, "y":360}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":74.18, "duration":0.55, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00003 - 0.5455	11 image ( name handknife.jpg add scale 50 50 position 320 160 scale 50 50 color 255 255 255 255 angle 10 )
	this.loader.addAnimation([{
		 "start": 74.73, "duration": 0.55
		,"layer": "00011", "image": "handknife.png"
		,"additive": true
		,"angle":[
			 {"degreesZ":10}		]
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":74.73, "duration":0.55, "x":0.50, "y":0.50}
		]
		,"position":[
			 {"x":320,"y":160}
			,{"start":74.73, "duration":0.55, "x":220, "y":360}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":74.73, "duration":0.55, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00004 - 1.0909	11 image ( name handknife.jpg add scale 50 50 position 320 160 scale 50 50 color 255 255 255 255 angle 10  )
	this.loader.addAnimation([{
		 "start": 75.27, "duration": 0.55
		,"layer": "00011", "image": "handknife.png"
		,"additive": true
		,"angle":[
			 {"degreesZ":10}		]
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":75.27, "duration":0.55, "x":0.50, "y":0.50}
		]
		,"position":[
			 {"x":320,"y":160}
			,{"start":75.27, "duration":0.55, "x":220, "y":360}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":75.27, "duration":0.55, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00005 - 1.6364 11 image ( name handknife.jpg add scale 50 50 position 320 160 scale 50 50 color 255 255 255 255 angle 10  )
	this.loader.addAnimation([{
		 "start": 75.82, "duration": 0.55
		,"layer": "00011", "image": "handknife.png"
		,"additive": true
		,"angle":[
			 {"degreesZ":10}		]
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":75.82, "duration":0.55, "x":0.50, "y":0.50}
		]
		,"position":[
			 {"x":320,"y":160}
			,{"start":75.82, "duration":0.55, "x":220, "y":360}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":75.82, "duration":0.55, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00006 - 0	11 image ( name handknife.jpg add scale 50 50 position 320 160 scale 50 50 color 255 255 255 255 angle 10 )
	this.loader.addAnimation([{
		 "start": 76.36, "duration": 0.55
		,"layer": "00011", "image": "handknife.png"
		,"additive": true
		,"angle":[
			 {"degreesZ":10}		]
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":76.36, "duration":0.55, "x":0.50, "y":0.50}
		]
		,"position":[
			 {"x":320,"y":160}
			,{"start":76.36, "duration":0.55, "x":220, "y":360}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":76.36, "duration":0.55, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00007 - 0.5455	11 image ( name handknife.jpg add scale 50 50 position 320 160 scale 50 50 color 255 255 255 255 angle 10 )
	this.loader.addAnimation([{
		 "start": 76.91, "duration": 0.55
		,"layer": "00011", "image": "handknife.png"
		,"additive": true
		,"angle":[
			 {"degreesZ":10}		]
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":76.91, "duration":0.55, "x":0.50, "y":0.50}
		]
		,"position":[
			 {"x":320,"y":160}
			,{"start":76.91, "duration":0.55, "x":220, "y":360}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":76.91, "duration":0.55, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00008 - 1.0909	11 image ( name handknife.jpg add scale 50 50 position 320 160 scale 50 50 color 255 255 255 255 angle 10  )
	this.loader.addAnimation([{
		 "start": 77.45, "duration": 0.55
		,"layer": "00011", "image": "handknife.png"
		,"additive": true
		,"angle":[
			 {"degreesZ":10}		]
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":77.45, "duration":0.55, "x":0.50, "y":0.50}
		]
		,"position":[
			 {"x":320,"y":160}
			,{"start":77.45, "duration":0.55, "x":220, "y":360}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":77.45, "duration":0.55, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00009 - 1.6364 11 image ( name handknife.jpg add scale 50 50 position 320 160 scale 50 50 color 255 255 255 255 angle 10  )
	this.loader.addAnimation([{
		 "start": 78.00, "duration": 0.55
		,"layer": "00011", "image": "handknife.png"
		,"additive": true
		,"angle":[
			 {"degreesZ":10}		]
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":78.00, "duration":0.55, "x":0.50, "y":0.50}
		]
		,"position":[
			 {"x":320,"y":160}
			,{"start":78.00, "duration":0.55, "x":220, "y":360}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":78.00, "duration":0.55, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00012/00001 - 8.7272		12 image ( name castle.jpg add scale 50 50 position 500 300 color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 43.64, "duration": 26.18
		,"layer": "00012", "image": "castle.png"
		,"additive": true
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":43.64, "duration":4.36, "x":0.75, "y":0.75}
			,{"start":48.00, "duration":4.36, "x":1.00, "y":1.00}
		]
		,"position":[
			 {"x":500,"y":300}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":43.64, "duration":4.36, "r":255, "g":255, "b":255, "a":255}
			,{"start":48.00, "duration":4.36, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00013/00001 - 13.0909		13 image ( name lightning_1.jpg add scale 70 70 position 130 170 color 255 255 255 255 )
	this.loader.addAnimation([{
		 "start": 48.00, "duration": 17.36
		,"layer": "00013", "image": "lightning_1.png"
		,"additive": true
		,"angle":[
			 {"degreesZ":0}
			,{"start":48.00, "duration":8.73, "degreesZ":1}
		]
		,"scale":[
			 {"x":0.7,"y":0.7}
			,{"start":48.00, "duration":8.73, "x":1.30, "y":1.30}
		]
		,"position":[
			 {"x":130,"y":170}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":48.00, "duration":8.73, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00013/00002 - 13.0909		13 image ( name lightning_1.jpg add scale 70 70 position 130 170 color 255 255 255 255 )
	this.loader.addAnimation([{
		 "start": 65.45, "duration": 4.36
		,"layer": "00013", "image": "lightning_1.png"
		,"additive": true
		,"angle":[
			 {"degreesZ":0}
			,{"start":65.45, "duration":8.73, "degreesZ":1}
		]
		,"scale":[
			 {"x":0.7,"y":0.7}
			,{"start":65.45, "duration":8.73, "x":1.30, "y":1.30}
		]
		,"position":[
			 {"x":130,"y":170}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":65.45, "duration":8.73, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00013/00003 - 1.0909	13 image ( name grave.jpg add scale 100 100 position 320 240 color 0 255 255 255 angle 3 )
	this.loader.addAnimation([{
		 "start": 79.64, "duration": 160.36
		,"layer": "00013", "image": "grave.png"
		,"additive": true
		,"angle":[
			 {"degreesZ":3}			,{"start":79.64, "duration":7.64, "degreesZ":-3}
		]
		,"scale":[
			 {"x":1,"y":1}
			,{"start":79.64, "duration":7.64, "x":0.60, "y":0.60}
		]
		,"position":[
			 {"x":320,"y":240}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":79.64, "duration":3.27, "r":255, "g":255, "b":255, "a":255}
			,{"start":82.91, "duration":4.36, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00014/00001 - 15.2727		14 image ( name lightning_1.jpg add scale 70 70 position 470 150 color 255 255 255 255 )
	this.loader.addAnimation([{
		 "start": 50.18, "duration": 15.18
		,"layer": "00014", "image": "lightning_1.png"
		,"additive": true
		,"angle":[
			 {"degreesZ":0}
			,{"start":50.18, "duration":6.55, "degreesZ":-1}
		]
		,"scale":[
			 {"x":0.7,"y":0.7}
			,{"start":50.18, "duration":6.55, "x":1.30, "y":1.30}
		]
		,"position":[
			 {"x":470,"y":150}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":50.18, "duration":6.55, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00014/00002 - 15.2727		14 image ( name lightning_1.jpg add scale 70 70 position 470 150 color 255 255 255 255 )
	this.loader.addAnimation([{
		 "start": 67.64, "duration": 2.18
		,"layer": "00014", "image": "lightning_1.png"
		,"additive": true
		,"angle":[
			 {"degreesZ":0}
			,{"start":67.64, "duration":6.55, "degreesZ":-1}
		]
		,"scale":[
			 {"x":0.7,"y":0.7}
			,{"start":67.64, "duration":6.55, "x":1.30, "y":1.30}
		]
		,"position":[
			 {"x":470,"y":150}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":67.64, "duration":6.55, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00014/00003 - 0		14 image ( name ouija_board.jpg add scale 60 60 position 320 240 color 0 255 255 255 angle 3 )
	this.loader.addAnimation([{
		 "start": 88.36, "duration": 17.45
		,"layer": "00014", "image": "ouija_board.png"
		,"additive": true
		,"angle":[
			 {"degreesZ":3}			,{"start":88.36, "duration":1.40, "degreesZ":0}
		]
		,"scale":[
			 {"x":0.6,"y":0.6}
			,{"start":88.36, "duration":1.40, "x":0.50, "y":0.50}
		]
		,"position":[
			 {"x":320,"y":240}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":88.36, "duration":1.40, "r":255, "g":255, "b":255, "a":255}
		]
	}]);
	//00015/00001 - 1.4	15 image ( name ouija_control.jpg alphaname ouija_control_alpha.jpg scale 70 70 position 320 240 color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 89.76, "duration": 16.05
		,"layer": "00015", "image": "ouija_control.png"
		,"angle":[
			 {"degreesZ":0}
			,{"start":89.76, "duration":0.72, "degreesZ":0}
			,{"start":90.49, "duration":2.13, "degreesZ":10}
			,{"start":92.61, "duration":2.13, "degreesZ":10}
			,{"start":94.74, "duration":2.13, "degreesZ":40}
			,{"start":96.86, "duration":2.13, "degreesZ":40}
			,{"start":98.99, "duration":2.17, "degreesZ":24}
			,{"start":101.16, "duration":1.20, "degreesZ":24}
			,{"start":102.36, "duration":1.00, "degreesZ":0}
		]
		,"scale":[
			 {"x":0.7,"y":0.7}
			,{"start":89.76, "duration":0.72, "x":0.70, "y":0.70}
			,{"start":90.49, "duration":2.13, "x":0.70, "y":0.70}
			,{"start":92.61, "duration":2.13, "x":0.70, "y":0.70}
			,{"start":94.74, "duration":2.13, "x":0.70, "y":0.70}
			,{"start":96.86, "duration":2.13, "x":0.70, "y":0.70}
			,{"start":98.99, "duration":2.17, "x":0.70, "y":0.70}
			,{"start":101.16, "duration":1.20, "x":0.70, "y":0.70}
		]
		,"position":[
			 {"x":320,"y":240}
			,{"start":89.76, "duration":0.72, "x":320, "y":240}
			,{"start":90.49, "duration":2.13, "x":385, "y":170}
			,{"start":92.61, "duration":2.13, "x":385, "y":170}
			,{"start":94.74, "duration":2.13, "x":449, "y":216}
			,{"start":96.86, "duration":2.13, "x":449, "y":216}
			,{"start":98.99, "duration":2.17, "x":430, "y":198}
			,{"start":101.16, "duration":1.20, "x":430, "y":198}
			,{"start":102.36, "duration":1.00, "x":320, "y":390}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":89.76, "duration":0.72, "r":255, "g":255, "b":255, "a":255}
		]
	}]);
	//00016/00001 - 0.0	16 image ( name jml2015.jpg scale 50 50 )
	this.loader.addAnimation([{
		 "start": 105.82, "duration": 134.18
		,"layer": "00016", "image": "jml2015.png"
		,"scale":[
			 {"x":0.5,"y":0.5}
		]
	}]);
	//00102/00001 - 0		102 scene ( name noise.3ds camera Camera01 fps 100 )
	this.loader.addAnimation([{
		 "start": 0.00, "duration": 300.00
		,"layer": "00102", "object": "noise.3ds"
		,"camera": "Camera01"
		,"fps": 100
	}]);
}
