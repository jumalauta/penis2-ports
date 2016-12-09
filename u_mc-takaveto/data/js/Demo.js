Demo.prototype.init = function()
{
	//00001/00001 - 34.56		1 image ( name paskaa2.jpg add scale 150 150 )
	this.loader.addAnimation([{
		 "start": 34.56, "duration": 15.36
		,"layer": "00001", "image": "paskaa2.png"
		,"additive": true
		,"scale":[
			 {"x":1.5,"y":1.5}
			,{"start":34.56, "duration":15.36, "x":1.00, "y":1.00}
		]
	}]);
	//00001/00002 - 49.92		1 image ( name irtopaeae.jpg add scale 150 150 )
	this.loader.addAnimation([{
		 "start": 49.92, "duration": 15.36
		,"layer": "00001", "image": "irtopaeae.png"
		,"additive": true
		,"scale":[
			 {"x":1.5,"y":1.5}
			,{"start":49.92, "duration":15.36, "x":1.00, "y":1.00}
		]
	}]);
	//00001/00003 - 65.28		1 image ( name paskaa3.jpg add scale 150 150 )
	this.loader.addAnimation([{
		 "start": 65.28, "duration": 7.68
		,"layer": "00001", "image": "paskaa3.png"
		,"additive": true
		,"scale":[
			 {"x":1.5,"y":1.5}
			,{"start":65.28, "duration":7.68, "x":1.00, "y":1.00}
		]
	}]);
	//00001/00004 - 72.96		1 image ( name paskaa5.jpg add scale 150 150 )
	this.loader.addAnimation([{
		 "start": 72.96, "duration": 15.36
		,"layer": "00001", "image": "paskaa5.png"
		,"additive": true
		,"scale":[
			 {"x":1.5,"y":1.5}
			,{"start":72.96, "duration":15.36, "x":1.00, "y":1.00}
		]
	}]);
	//00001/00005 - 111.36		1 image ( name paskaa7.jpg add scale 150 150 )
	this.loader.addAnimation([{
		 "start": 111.36, "duration": 15.36
		,"layer": "00001", "image": "paskaa7.png"
		,"additive": true
		,"scale":[
			 {"x":1.5,"y":1.5}
			,{"start":111.36, "duration":15.36, "x":1.00, "y":1.00}
		]
	}]);
	//00004/00001 - 0		4 scene ( name noise.3ds camera Camera01 fps 5.5 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 0.00, "duration": 34.56
		,"layer": "00004", "object": "noise.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera01"
		,"fps": 5.5
	}]);
	//00004/00002 - 72.96		4 scene ( name kaihdin.3ds camera Camera01 fps 5.5 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 72.96, "duration": 15.36
		,"layer": "00004", "object": "kaihdin.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera01"
		,"fps": 5.5
	}]);
	//00004/00003 - 103.68		4 scene ( name noise.3ds camera Camera01 fps 5.5 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 103.68, "duration": 7.68
		,"layer": "00004", "object": "noise.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera01"
		,"fps": 5.5
	}]);
	//00004/00004 - 111.36		4 scene ( name laatat.3ds camera Camera03 fps 5.5 )
	this.loader.addAnimation([{
		 "start": 111.36, "duration": 15.36
		,"layer": "00004", "object": "laatat.3ds"
		,"camera": "Camera03"
		,"fps": 5.5
	}]);
	//00004/00005 - 0		4 scene ( name noise.3ds camera Camera01 fps 5.5 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 149.76, "duration": 15.36
		,"layer": "00004", "object": "noise.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera01"
		,"fps": 5.5
	}]);
	//00005/00001 - 0		5 scene ( name arty1.3ds camera Camera02 fps 2.8 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 0.00, "duration": 34.56
		,"layer": "00005", "object": "arty1.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera02"
		,"fps": 2.8
	}]);
	//00005/00002 - 34.56		5 scene ( name arty1.3ds camera Camera03 fps 5.5 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 34.56, "duration": 15.36
		,"layer": "00005", "object": "arty1.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera03"
		,"fps": 5.5
	}]);
	//00005/00003 - 49.92		5 scene ( name arty2.3ds camera Camera02 fps 5.5 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 49.92, "duration": 15.36
		,"layer": "00005", "object": "arty2.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera02"
		,"fps": 5.5
	}]);
	//00005/00004 - 65.28		5 scene ( name arty1.3ds camera Camera01 fps 8 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 65.28, "duration": 7.68
		,"layer": "00005", "object": "arty1.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera01"
		,"fps": 8
	}]);
	//00005/00005 - 72.96		5 scene ( name arty2.3ds camera Camera01 fps 5.5 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 72.96, "duration": 15.36
		,"layer": "00005", "object": "arty2.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera01"
		,"fps": 5.5
	}]);
	//00005/00006 - 88.32		5 scene ( name risu.3ds camera Camera04 fps 10 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 88.32, "duration": 7.68
		,"layer": "00005", "object": "risu.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera04"
		,"fps": 10
	}]);
	//00005/00007 - 96		5 scene ( name risu.3ds camera Camera03 fps 10 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 96.00, "duration": 7.68
		,"layer": "00005", "object": "risu.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera03"
		,"fps": 10
	}]);
	//00005/00008 - 103.68		5 scene ( name kaihdin.3ds camera Camera01 fps 5.5 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 103.68, "duration": 7.68
		,"layer": "00005", "object": "kaihdin.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera01"
		,"fps": 5.5
	}]);
	//00005/00009 - 111.36		5 scene ( name arty2.3ds camera Camera03 fps 5.5 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 111.36, "duration": 15.36
		,"layer": "00005", "object": "arty2.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera03"
		,"fps": 5.5
	}]);
	//00005/00010 - 126.72		5 scene ( name risu.3ds camera Camera01 fps 11 )
	this.loader.addAnimation([{
		 "start": 126.72, "duration": 7.68
		,"layer": "00005", "object": "risu.3ds"
		,"camera": "Camera01"
		,"fps": 11
	}]);
	//00005/00011 - 134.4		5 scene ( name risu.3ds camera Camera02 fps 11 )
	this.loader.addAnimation([{
		 "start": 134.40, "duration": 7.68
		,"layer": "00005", "object": "risu.3ds"
		,"camera": "Camera02"
		,"fps": 11
	}]);
	//00005/00012 - 142.08		5 scene ( name palikat.3ds camera Camera02 fps 3 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 142.08, "duration": 7.68
		,"layer": "00005", "object": "palikat.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera02"
		,"fps": 3
	}]);
	//00005/00013 - 0		5 scene ( name kaihdin.3ds camera Camera01 fps 5.5 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 149.76, "duration": 15.36
		,"layer": "00005", "object": "kaihdin.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera01"
		,"fps": 5.5
	}]);
	//00006/00001 - 88.32		6 image ( name addi2.jpg add scale 100 100 )
	this.loader.addAnimation([{
		 "start": 88.32, "duration": 7.68
		,"layer": "00006", "image": "addi2.png"
		,"additive": true
		,"scale":[
			 {"x":1,"y":1}
			,{"start":88.32, "duration":7.68, "x":1.00, "y":1.00}
		]
	}]);
	//00006/00002 - 96		6 image ( name addi1.jpg add scale 150 150 position 480 240 )
	this.loader.addAnimation([{
		 "start": 96.00, "duration": 7.68
		,"layer": "00006", "image": "addi1.png"
		,"additive": true
		,"scale":[
			 {"x":1.5,"y":1.5}
			,{"start":96.00, "duration":7.68, "x":1.00, "y":1.00}
		]
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00006/00003 - 126.72		6 scene ( name laatat.3ds camera Camera02 fps 5.5 )
	this.loader.addAnimation([{
		 "start": 126.72, "duration": 15.36
		,"layer": "00006", "object": "laatat.3ds"
		,"camera": "Camera02"
		,"fps": 5.5
	}]);
	//00006/00004 - 142.08		6 image ( name paskaa6.jpg add scale 150 150 )
	this.loader.addAnimation([{
		 "start": 142.08, "duration": 7.68
		,"layer": "00006", "image": "paskaa6.png"
		,"additive": true
		,"scale":[
			 {"x":1.5,"y":1.5}
			,{"start":142.08, "duration":7.68, "x":1.00, "y":1.00}
		]
	}]);
	//00007/00001 - 88.32		7 image ( name boing.jpg add scale 50 50 color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 88.32, "duration": 7.68
		,"layer": "00007", "image": "boing.png"
		,"additive": true
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":88.32, "duration":7.68, "x":1.50, "y":1.50}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":88.32, "duration":7.68, "r":255, "g":255, "b":255, "a":255}
		]
	}]);
	//00007/00002 - 126.72		7 image ( name addi3.jpg add scale 150 150 position 420 240 )
	this.loader.addAnimation([{
		 "start": 126.72, "duration": 15.36
		,"layer": "00007", "image": "addi3.png"
		,"additive": true
		,"scale":[
			 {"x":1.5,"y":1.5}
			,{"start":126.72, "duration":15.36, "x":1.00, "y":1.00}
		]
		,"position":[
			 {"x":420,"y":240}
		]
	}]);
	//00007/00003 - 142.08		7 image ( name cred.jpg add position 510 130 )
	this.loader.addAnimation([{
		 "start": 142.08, "duration": 7.68
		,"layer": "00007", "image": "cred.png"
		,"additive": true
		,"position":[
			 {"x":510,"y":130}
		]
	}]);
	//00007/00004 - 0		7 image ( name musta.jpg )
	this.loader.addAnimation([{
		 "start": 149.76, "duration": 15.26
		,"layer": "00007", "image": "musta.png"
	}]);
	//00008/00001 - 0		8 image ( name musta.jpg alphaname mustaalpha.jpg scale 150 150 )
	this.loader.addAnimation([{
		 "start": 0.00, "duration": 34.56
		,"layer": "00008", "image": "musta.png"
		,"scale":[
			 {"x":1.5,"y":1.5}
			,{"start":0.00, "duration":34.56, "x":1.00, "y":1.00}
		]
	}]);
	//00008/00002 - 103.68		8 image ( name greets.jpg add scale 200 200 color 255 255 255 255 angle 45 )
	this.loader.addAnimation([{
		 "start": 103.68, "duration": 9.68
		,"layer": "00008", "image": "greets.png"
		,"additive": true
		,"angle":[
			 {"degreesZ":45}			,{"start":103.68, "duration":7.68, "degreesZ":0}
		]
		,"scale":[
			 {"x":2,"y":2}
			,{"start":103.68, "duration":7.68, "x":1.00, "y":1.00}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":103.68, "duration":7.68, "r":255, "g":255, "b":255, "a":255}
			,{"start":111.36, "duration":2.00, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00008/00003 - 0		8 image ( name taka2.jpg add color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 149.76, "duration": 4.00
		,"layer": "00008", "image": "taka2.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":149.76, "duration":2.00, "r":255, "g":255, "b":255, "a":255}
			,{"start":151.76, "duration":2.00, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00008/00004 - 4		8 image ( name taka4.jpg add color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 153.76, "duration": 4.00
		,"layer": "00008", "image": "taka4.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":153.76, "duration":2.00, "r":255, "g":255, "b":255, "a":255}
			,{"start":155.76, "duration":2.00, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00008/00005 - 8		8 image ( name taka5.jpg add color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 157.76, "duration": 4.00
		,"layer": "00008", "image": "taka5.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":157.76, "duration":2.00, "r":255, "g":255, "b":255, "a":255}
			,{"start":159.76, "duration":2.00, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00009/00001 - 0		9 image ( name television.jpg add color 0 255 255 255 scale 200 200 angle 45 )
	this.loader.addAnimation([{
		 "start": 0.00, "duration": 28.88
		,"layer": "00009", "image": "television.png"
		,"additive": true
		,"angle":[
			 {"degreesZ":45}			,{"start":0.00, "duration":4.00, "degreesZ":0}
			,{"start":4.00, "duration":22.88, "degreesZ":0}
		]
		,"scale":[
			 {"x":2,"y":2}
			,{"start":0.00, "duration":4.00, "x":1.00, "y":1.00}
			,{"start":4.00, "duration":22.88, "x":1.00, "y":1.00}
			,{"start":26.88, "duration":2.00, "x":4.00, "y":2.00}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":0.00, "duration":4.00, "r":255, "g":255, "b":255, "a":255}
			,{"start":4.00, "duration":22.88, "r":255, "g":255, "b":255, "a":255}
			,{"start":26.88, "duration":2.00, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00009/00002 - 2		9 image ( name taka1.jpg add color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 151.76, "duration": 4.00
		,"layer": "00009", "image": "taka1.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":151.76, "duration":2.00, "r":255, "g":255, "b":255, "a":255}
			,{"start":153.76, "duration":2.00, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00009/00003 - 6		9 image ( name taka3.jpg add color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 155.76, "duration": 4.00
		,"layer": "00009", "image": "taka3.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":155.76, "duration":2.00, "r":255, "g":255, "b":255, "a":255}
			,{"start":157.76, "duration":2.00, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00010/00001 - 0		10 image ( name unique2.jpg alphaname unique.jpg scale 200 200 color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 34.56, "duration": 7.68
		,"layer": "00010", "image": "unique2.png"
		,"scale":[
			 {"x":2,"y":2}
			,{"start":34.56, "duration":0.12, "x":1.00, "y":1.00}
			,{"start":34.68, "duration":0.36, "x":1.50, "y":1.50}
			,{"start":35.04, "duration":0.24, "x":1.00, "y":1.00}
			,{"start":35.28, "duration":0.12, "x":1.40, "y":1.40}
			,{"start":35.40, "duration":0.24, "x":1.00, "y":1.00}
			,{"start":35.64, "duration":0.24, "x":1.30, "y":1.30}
			,{"start":35.88, "duration":0.12, "x":1.00, "y":1.00}
			,{"start":36.00, "duration":0.24, "x":1.20, "y":1.20}
			,{"start":36.24, "duration":0.24, "x":1.00, "y":1.00}
			,{"start":36.48, "duration":0.12, "x":1.10, "y":1.10}
			,{"start":36.60, "duration":0.36, "x":1.00, "y":1.00}
			,{"start":36.96, "duration":4.80, "x":1.00, "y":1.00}
			,{"start":41.76, "duration":0.24, "x":3.00, "y":3.00}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":34.56, "duration":0.12, "r":255, "g":255, "b":255, "a":255}
			,{"start":34.68, "duration":0.36, "r":255, "g":255, "b":255, "a":127}
			,{"start":35.04, "duration":0.24, "r":255, "g":255, "b":255, "a":255}
			,{"start":35.28, "duration":0.12, "r":255, "g":255, "b":255, "a":191}
			,{"start":35.40, "duration":0.24, "r":255, "g":255, "b":255, "a":255}
			,{"start":35.64, "duration":0.24, "r":255, "g":255, "b":255, "a":216}
			,{"start":35.88, "duration":0.12, "r":255, "g":255, "b":255, "a":255}
			,{"start":36.00, "duration":0.24, "r":255, "g":255, "b":255, "a":216}
			,{"start":36.24, "duration":0.24, "r":255, "g":255, "b":255, "a":255}
			,{"start":36.48, "duration":0.12, "r":255, "g":255, "b":255, "a":216}
			,{"start":36.60, "duration":0.36, "r":255, "g":255, "b":255, "a":255}
			,{"start":36.96, "duration":4.80, "r":255, "g":255, "b":255, "a":255}
			,{"start":41.76, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00010/00002 - 0		10 image ( name mattcurrent2.jpg alphaname mattcurrent.jpg scale 200 200 color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 42.24, "duration": 7.68
		,"layer": "00010", "image": "mattcurrent2.png"
		,"scale":[
			 {"x":2,"y":2}
			,{"start":42.24, "duration":0.12, "x":1.00, "y":1.00}
			,{"start":42.36, "duration":0.36, "x":1.50, "y":1.50}
			,{"start":42.72, "duration":0.24, "x":1.00, "y":1.00}
			,{"start":42.96, "duration":0.12, "x":1.40, "y":1.40}
			,{"start":43.08, "duration":0.24, "x":1.00, "y":1.00}
			,{"start":43.32, "duration":0.24, "x":1.30, "y":1.30}
			,{"start":43.56, "duration":0.12, "x":1.00, "y":1.00}
			,{"start":43.68, "duration":0.24, "x":1.20, "y":1.20}
			,{"start":43.92, "duration":0.24, "x":1.00, "y":1.00}
			,{"start":44.16, "duration":0.12, "x":1.10, "y":1.10}
			,{"start":44.28, "duration":0.36, "x":1.00, "y":1.00}
			,{"start":44.64, "duration":4.80, "x":1.00, "y":1.00}
			,{"start":49.44, "duration":0.24, "x":3.00, "y":3.00}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":42.24, "duration":0.12, "r":255, "g":255, "b":255, "a":255}
			,{"start":42.36, "duration":0.36, "r":255, "g":255, "b":255, "a":127}
			,{"start":42.72, "duration":0.24, "r":255, "g":255, "b":255, "a":255}
			,{"start":42.96, "duration":0.12, "r":255, "g":255, "b":255, "a":191}
			,{"start":43.08, "duration":0.24, "r":255, "g":255, "b":255, "a":255}
			,{"start":43.32, "duration":0.24, "r":255, "g":255, "b":255, "a":216}
			,{"start":43.56, "duration":0.12, "r":255, "g":255, "b":255, "a":255}
			,{"start":43.68, "duration":0.24, "r":255, "g":255, "b":255, "a":216}
			,{"start":43.92, "duration":0.24, "r":255, "g":255, "b":255, "a":255}
			,{"start":44.16, "duration":0.12, "r":255, "g":255, "b":255, "a":216}
			,{"start":44.28, "duration":0.36, "r":255, "g":255, "b":255, "a":255}
			,{"start":44.64, "duration":4.80, "r":255, "g":255, "b":255, "a":255}
			,{"start":49.44, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00001 - 0.48		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 50.40, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":50.40, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00002 - 1.2		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 51.12, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":51.12, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00003 - 2.4		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 52.32, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":52.32, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00004 - 3.12		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 53.04, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":53.04, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00005 - 4.32		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 54.24, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":54.24, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00006 - 5.04		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 54.96, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":54.96, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00007 - 6.24		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 56.16, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":56.16, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00008 - 6.96		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 56.88, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":56.88, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00009 - 0.48		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 58.08, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":58.08, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00010 - 1.2		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 58.80, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":58.80, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00011 - 2.4		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 60.00, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":60.00, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00012 - 3.12		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 60.72, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":60.72, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00013 - 4.32		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 61.92, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":61.92, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00014 - 5.04		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 62.64, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":62.64, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00015 - 6.24		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 63.84, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":63.84, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00016 - 6.96		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 64.56, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":64.56, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00017 - 0.48		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 65.76, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":65.76, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00018 - 1.2		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 66.48, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":66.48, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00019 - 2.4		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 67.68, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":67.68, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00020 - 3.12		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 68.40, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":68.40, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00021 - 4.32		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 69.60, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":69.60, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00022 - 5.04		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 70.32, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":70.32, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00023 - 0.48		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 73.44, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":73.44, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00024 - 1.2		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 74.16, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":74.16, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00025 - 2.4		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 75.36, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":75.36, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00026 - 3.12		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 76.08, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":76.08, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00027 - 4.32		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 77.28, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":77.28, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00028 - 5.04		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 78.00, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":78.00, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00029 - 6.24		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 79.20, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":79.20, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00030 - 6.96		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 79.92, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":79.92, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00031 - 0.48		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 81.12, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":81.12, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00032 - 1.2		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 81.84, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":81.84, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00033 - 2.4		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 83.04, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":83.04, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00034 - 3.12		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 83.76, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":83.76, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00035 - 4.32		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 84.96, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":84.96, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00036 - 5.04		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 85.68, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":85.68, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00037 - 6.24		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 86.88, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":86.88, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00038 - 6.96		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 87.60, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":87.60, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00039 - 0.48		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 88.80, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":88.80, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00040 - 1.2		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 89.52, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":89.52, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00041 - 2.4		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 90.72, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":90.72, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00042 - 3.12		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 91.44, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":91.44, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00043 - 4.32		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 92.64, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":92.64, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00044 - 5.04		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 93.36, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":93.36, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00045 - 6.24		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 94.56, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":94.56, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00046 - 6.96		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 95.28, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":95.28, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00047 - 0.48		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 96.48, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":96.48, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00048 - 1.2		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 97.20, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":97.20, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00049 - 2.4		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 98.40, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":98.40, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00050 - 3.12		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 99.12, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":99.12, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00051 - 4.32		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 100.32, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":100.32, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00052 - 5.04		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 101.04, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":101.04, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00053 - 6.72		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 102.72, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":102.72, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00054 - 0.48		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 111.84, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":111.84, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00055 - 1.2		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 112.56, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":112.56, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00056 - 2.4		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 113.76, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":113.76, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00057 - 3.12		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 114.48, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":114.48, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00058 - 4.32		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 115.68, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":115.68, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00059 - 5.04		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 116.40, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":116.40, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00060 - 6.24		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 117.60, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":117.60, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00061 - 6.96		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 118.32, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":118.32, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00062 - 0.48		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 119.52, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":119.52, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00063 - 1.2		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 120.24, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":120.24, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00064 - 2.4		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 121.44, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":121.44, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00065 - 3.12		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 122.16, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":122.16, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00066 - 4.32		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 123.36, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":123.36, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00067 - 5.04		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 124.08, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":124.08, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00068 - 6.24		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 125.28, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":125.28, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00069 - 0.48		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 127.20, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":127.20, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00070 - 1.2		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 127.92, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":127.92, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00071 - 2.4		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 129.12, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":129.12, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00072 - 3.12		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 129.84, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":129.84, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00073 - 4.32		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 131.04, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":131.04, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00074 - 5.04		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 131.76, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":131.76, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00075 - 6.24		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 132.96, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":132.96, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00076 - 6.96		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 133.68, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":133.68, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00077 - 0.48		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 134.88, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":134.88, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00078 - 1.2		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 135.60, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":135.60, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00079 - 2.4		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 136.80, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":136.80, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00080 - 3.12		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 137.52, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":137.52, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00081 - 4.32		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 138.72, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":138.72, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00082 - 5.04		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 139.44, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":139.44, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00011/00083 - 6.24		11 image ( name viivanoiz.jpg add )
	this.loader.addAnimation([{
		 "start": 140.64, "duration": 0.24
		,"layer": "00011", "image": "viivanoiz.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":140.64, "duration":0.24, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00012/00001 - 149.76		12 image ( name moving.jpg add position 320 450 color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 149.76, "duration": 15.36
		,"layer": "00012", "image": "moving.png"
		,"additive": true
		,"position":[
			 {"x":320,"y":450}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":149.76, "duration":2.24, "r":255, "g":255, "b":255, "a":255}
			,{"start":152.00, "duration":11.00, "r":255, "g":255, "b":255, "a":255}
			,{"start":163.00, "duration":2.12, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
}
