Jumalauta.prototype.init = function()
{
	//00001/00001 - 0	1 image ( name tausta.jpg )
	this.loader.addAnimation([{
		 "start": 56.32, "duration": 28.16
		,"layer": "00001", "image": "tausta.png"
	}]);
	//00001/00002 - 0	1 image ( name pyor.jpg scale 150 150 )
	this.loader.addAnimation([{
		 "start": 84.48, "duration": 28.16
		,"layer": "00001", "image": "pyor.png"
		,"angle":[
			 {"degreesZ":0}
			,{"start":84.48, "duration":28.16, "degreesZ":2880}
		]
		,"scale":[
			 {"x":1.5,"y":1.5}
		]
	}]);
	//00001/00003 - 0	1 image ( name tkuva.jpg )
	this.loader.addAnimation([{
		 "start": 112.64, "duration": 28.16
		,"layer": "00001", "image": "tkuva.png"
	}]);
	//00002/00001 - 0	2 image ( name pyor.jpg scale 50 50 )
	this.loader.addAnimation([{
		 "start": 84.48, "duration": 28.16
		,"layer": "00002", "image": "pyor.png"
		,"angle":[
			 {"degreesZ":0}
			,{"start":84.48, "duration":28.16, "degreesZ":-5760}
		]
		,"scale":[
			 {"x":0.5,"y":0.5}
		]
	}]);
	//00007/00001 - 0	7 scene ( name 1.3ds camera Camera01 fps 455 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 0, "duration": 5.28
		,"layer": "00007", "objectLighting": false, "object": "1.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera01"
		,"fps": 455
	}]);
	//00007/00002 - 5.28	7 scene ( name 1.3ds camera Camera01 fps 29 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 5.28, "duration": 1.76
		,"layer": "00007", "objectLighting": false, "object": "1.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera01"
		,"fps": 29
	}]);
	//00007/00003 - 0	7 scene ( name 1.3ds camera Camera01 fps 455 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 7.04, "duration": 5.28
		,"layer": "00007", "objectLighting": false, "object": "1.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera01"
		,"fps": 455
	}]);
	//00007/00004 - 5.28	7 scene ( name 1.3ds camera Camera01 fps 29 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 12.32, "duration": 1.76
		,"layer": "00007", "objectLighting": false, "object": "1.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera01"
		,"fps": 29
	}]);
	//00007/00005 - 0	7 scene ( name 1.3ds camera Camera01 fps 455 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 14.08, "duration": 5.28
		,"layer": "00007", "objectLighting": false, "object": "1.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera01"
		,"fps": 455
	}]);
	//00007/00006 - 5.28	7 scene ( name 1.3ds camera Camera01 fps 29 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 19.36, "duration": 1.76
		,"layer": "00007", "objectLighting": false, "object": "1.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera01"
		,"fps": 29
	}]);
	//00007/00007 - 0	7 scene ( name 1.3ds camera Camera01 fps 455 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 21.12, "duration": 5.28
		,"layer": "00007", "objectLighting": false, "object": "1.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera01"
		,"fps": 455
	}]);
	//00007/00008 - 5.28	7 scene ( name 1.3ds camera Camera01 fps 57 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 26.4, "duration": 1.76
		,"layer": "00007", "objectLighting": false, "object": "1.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera01"
		,"fps": 57
	}]);
	//00007/00009 - 0	7 scene ( name 1.3ds camera Camera01 fps 57 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 28.16, "duration": 28.16
		,"layer": "00007", "objectLighting": false, "object": "1.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera01"
		,"fps": 57
	}]);
	//00007/00010 - 0	7 scene ( name 3.3ds camera Camera01 fps 29 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 56.32, "duration": 28.16
		,"layer": "00007", "objectLighting": false, "object": "3.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera01"
		,"fps": 29
	}]);
	//00007/00011 - 0	7 image ( name family.jpg alphaname familya.jpg angle -10 )
	this.loader.addAnimation([{
		 "start": 84.48, "duration": 14.08
		,"layer": "00007", "image": "family.png"
		,"angle":[
			 {"degreesZ":-10}			,{"start":84.48, "duration":7.03999999999999, "degreesZ":10}
			,{"start":91.52, "duration":7.04000000000001, "degreesZ":-10}
		]
	}]);
	//00007/00012 - 0	7 image ( name family2.jpg alphaname familya2.jpg angle -10 )
	this.loader.addAnimation([{
		 "start": 98.56, "duration": 7.03999999999999
		,"layer": "00007", "image": "family2.png"
		,"angle":[
			 {"degreesZ":-10}			,{"start":98.56, "duration":7.03999999999999, "degreesZ":10}
		]
	}]);
	//00007/00013 - 0	7 image ( name family3.jpg alphaname familya3.jpg angle 10 )
	this.loader.addAnimation([{
		 "start": 105.6, "duration": 7.04000000000001
		,"layer": "00007", "image": "family3.png"
		,"angle":[
			 {"degreesZ":10}			,{"start":105.6, "duration":7.04000000000001, "degreesZ":-10}
		]
	}]);
	//00007/00014 - 0	7 image ( name teevee.jpg color 100 255 255 255 position 400 30 )
	this.loader.addAnimation([{
		 "start": 112.64, "duration": 28.16
		,"layer": "00007", "image": "teevee.png"
		,"position":[
			 {"x":400,"y":30}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":100}
			,{"start":112.64, "duration":7.04000000000001, "r":255, "g":255, "b":255, "a":255}
			,{"start":119.68, "duration":7.03999999999999, "r":255, "g":255, "b":255, "a":200}
			,{"start":126.72, "duration":7.03999999999999, "r":255, "g":255, "b":255, "a":255}
			,{"start":133.76, "duration":7.04000000000002, "r":255, "g":255, "b":255, "a":200}
		]
	}]);
	//00008/00001 - 0	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 28.16, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00002 - 0.11	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 28.27, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00003 - 0.22	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 28.38, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00004 - 0.33	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 28.49, "duration": 0.110000000000003
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00005 - 0.44	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 28.6, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00006 - 0.55	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 28.71, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00007 - 0.66	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 28.82, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00008 - 0.77	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 28.93, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00009 - 0.88	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 29.04, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00010 - 0.99	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 29.15, "duration": 0.110000000000003
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00011 - 1.1	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 29.26, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00012 - 1.21	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 29.37, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00013 - 1.32	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 29.48, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00014 - 1.43	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 29.59, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00015 - 1.54	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 29.7, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00016 - 1.65	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 29.81, "duration": 0.110000000000003
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00017 - 1.76	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 29.92, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00018 - 1.87	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 30.03, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00019 - 1.98	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 30.14, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00020 - 2.09	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 30.25, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00021 - 2.2	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 30.36, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00022 - 2.31	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 30.47, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00023 - 2.42	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 30.58, "duration": 0.110000000000003
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00024 - 2.53	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 30.69, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00025 - 2.64	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 30.8, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00026 - 2.75	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 30.91, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00027 - 2.86	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 31.02, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00028 - 2.97	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 31.13, "duration": 0.110000000000003
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00029 - 3.08	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 31.24, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00030 - 3.19	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 31.35, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00031 - 3.3	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 31.46, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00032 - 3.41	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 31.57, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00033 - 0	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 31.68, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00034 - 0.11	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 31.79, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00035 - 0.22	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 31.9, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00036 - 0.33	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 32.01, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00037 - 0.44	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 32.12, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00038 - 0.55	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 32.23, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00039 - 0.66	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 32.34, "duration": 0.110000000000007
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00040 - 0.77	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 32.45, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00041 - 0.88	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 32.56, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00042 - 0.99	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 32.67, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00043 - 1.1	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 32.78, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00044 - 1.21	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 32.89, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00045 - 1.32	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 33, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00046 - 1.43	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 33.11, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00047 - 1.54	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 33.22, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00048 - 1.65	8 image ( name esso3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 33.33, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00049 - 1.76	8 image ( name esso2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 33.44, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00050 - 1.87	8 image ( name esso3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 33.55, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00051 - 1.98	8 image ( name esso4.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 33.66, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso4.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00052 - 2.09	8 image ( name esso5.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 33.77, "duration": 0.110000000000007
		,"layer": "00008", "image": "esso5.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00053 - 2.2	8 image ( name esso6.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 33.88, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso6.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00054 - 2.31	8 image ( name esso7.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 33.99, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso7.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00055 - 2.42	8 image ( name esso8.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 34.1, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso8.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00056 - 2.53	8 image ( name esso9.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 34.21, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso9.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00057 - 2.64	8 image ( name esso10.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 34.32, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso10.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00058 - 2.75	8 image ( name esso11.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 34.43, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso11.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00059 - 2.86	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 34.54, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00060 - 2.97	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 34.65, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00061 - 3.08	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 34.76, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00062 - 3.19	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 34.87, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00063 - 3.3	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 34.98, "duration": 0.110000000000007
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00064 - 3.41	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 35.09, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00065 - 0	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 35.2, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00066 - 0.11	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 35.31, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00067 - 0.22	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 35.42, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00068 - 0.33	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 35.53, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00069 - 0.44	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 35.64, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00070 - 0.55	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 35.75, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00071 - 0.66	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 35.86, "duration": 0.110000000000007
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00072 - 0.77	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 35.97, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00073 - 0.88	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 36.08, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00074 - 0.99	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 36.19, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00075 - 1.1	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 36.3, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00076 - 1.21	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 36.41, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00077 - 1.32	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 36.52, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00078 - 1.43	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 36.63, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00079 - 1.54	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 36.74, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00080 - 1.65	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 36.85, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00081 - 1.76	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 36.96, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00082 - 1.87	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 37.07, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00083 - 1.98	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 37.18, "duration": 0.110000000000007
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00084 - 2.09	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 37.29, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00085 - 2.2	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 37.4, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00086 - 2.31	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 37.51, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00087 - 2.42	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 37.62, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00088 - 2.53	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 37.73, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00089 - 2.64	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 37.84, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00090 - 2.75	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 37.95, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00091 - 2.86	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 38.06, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00092 - 2.97	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 38.17, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00093 - 3.08	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 38.28, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00094 - 3.19	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 38.39, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00095 - 3.3	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 38.5, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00096 - 3.41	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 38.61, "duration": 0.110000000000007
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00097 - 0	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 38.72, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00098 - 0.11	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 38.83, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00099 - 0.22	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 38.94, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00100 - 0.33	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 39.05, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00101 - 0.44	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 39.16, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00102 - 0.55	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 39.27, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00103 - 0.66	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 39.38, "duration": 0.110000000000007
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00104 - 0.77	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 39.49, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00105 - 0.88	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 39.6, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00106 - 0.99	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 39.71, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00107 - 1.1	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 39.82, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00108 - 1.21	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 39.93, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00109 - 1.32	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 40.04, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00110 - 1.43	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 40.15, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00111 - 1.54	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 40.26, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00112 - 1.65	8 image ( name esso3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 40.37, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00113 - 1.76	8 image ( name esso2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 40.48, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00114 - 1.87	8 image ( name esso3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 40.59, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00115 - 1.98	8 image ( name esso4.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 40.7, "duration": 0.110000000000007
		,"layer": "00008", "image": "esso4.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00116 - 2.09	8 image ( name esso5.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 40.81, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso5.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00117 - 2.2	8 image ( name esso6.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 40.92, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso6.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00118 - 2.31	8 image ( name esso7.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 41.03, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso7.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00119 - 2.42	8 image ( name esso8.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 41.14, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso8.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00120 - 2.53	8 image ( name esso9.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 41.25, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso9.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00121 - 2.64	8 image ( name esso10.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 41.36, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso10.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00122 - 2.75	8 image ( name esso11.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 41.47, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso11.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00123 - 2.86	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 41.58, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00124 - 2.97	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 41.69, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00125 - 3.08	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 41.8, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00126 - 3.19	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 41.91, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00127 - 3.3	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 42.02, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00128 - 3.41	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 42.13, "duration": 0.110000000000007
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00129 - 0	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 42.24, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00130 - 0.11	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 42.35, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00131 - 0.22	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 42.46, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00132 - 0.33	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 42.57, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00133 - 0.44	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 42.68, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00134 - 0.55	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 42.79, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00135 - 0.66	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 42.9, "duration": 0.110000000000007
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00136 - 0.77	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 43.01, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00137 - 0.88	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 43.12, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00138 - 0.99	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 43.23, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00139 - 1.1	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 43.34, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00140 - 1.21	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 43.45, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00141 - 1.32	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 43.56, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00142 - 1.43	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 43.67, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00143 - 1.54	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 43.78, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00144 - 1.65	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 43.89, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00145 - 1.76	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 44, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00146 - 1.87	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 44.11, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00147 - 1.98	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 44.22, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00148 - 2.09	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 44.33, "duration": 0.110000000000007
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00149 - 2.2	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 44.44, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00150 - 2.31	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 44.55, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00151 - 2.42	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 44.66, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00152 - 2.53	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 44.77, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00153 - 2.64	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 44.88, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00154 - 2.75	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 44.99, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00155 - 2.86	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 45.1, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00156 - 2.97	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 45.21, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00157 - 3.08	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 45.32, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00158 - 3.19	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 45.43, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00159 - 3.3	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 45.54, "duration": 0.110000000000007
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00160 - 3.41	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 45.65, "duration": 0.109999999999992
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00161 - 0	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 45.76, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00162 - 0.11	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 45.87, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00163 - 0.22	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 45.98, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00164 - 0.33	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 46.09, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00165 - 0.44	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 46.2, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00166 - 0.55	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 46.31, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00167 - 0.66	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 46.42, "duration": 0.110000000000007
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00168 - 0.77	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 46.53, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00169 - 0.88	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 46.64, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00170 - 0.99	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 46.75, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00171 - 1.1	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 46.86, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00172 - 1.21	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 46.97, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00173 - 1.32	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 47.08, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00174 - 1.43	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 47.19, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00175 - 1.54	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 47.3, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00176 - 1.65	8 image ( name esso3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 47.41, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00177 - 1.76	8 image ( name esso2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 47.52, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00178 - 1.87	8 image ( name esso3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 47.63, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00179 - 1.98	8 image ( name esso4.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 47.74, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso4.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00180 - 2.09	8 image ( name esso5.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 47.85, "duration": 0.110000000000007
		,"layer": "00008", "image": "esso5.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00181 - 2.2	8 image ( name esso6.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 47.96, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso6.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00182 - 2.31	8 image ( name esso7.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 48.07, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso7.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00183 - 2.42	8 image ( name esso8.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 48.18, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso8.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00184 - 2.53	8 image ( name esso9.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 48.29, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso9.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00185 - 2.64	8 image ( name esso10.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 48.4, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso10.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00186 - 2.75	8 image ( name esso11.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 48.51, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso11.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00187 - 2.86	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 48.62, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00188 - 2.97	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 48.73, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00189 - 3.08	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 48.84, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00190 - 3.19	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 48.95, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00191 - 3.3	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 49.06, "duration": 0.110000000000007
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00192 - 3.41	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 49.17, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00193 - 0	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 49.28, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00194 - 0.11	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 49.39, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00195 - 0.22	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 49.5, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00196 - 0.33	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 49.61, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00197 - 0.44	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 49.72, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00198 - 0.55	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 49.83, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00199 - 0.66	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 49.94, "duration": 0.110000000000007
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00200 - 0.77	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 50.05, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00201 - 0.88	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 50.16, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00202 - 0.99	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 50.27, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00203 - 1.1	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 50.38, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00204 - 1.21	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 50.49, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00205 - 1.32	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 50.6, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00206 - 1.43	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 50.71, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00207 - 1.54	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 50.82, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00208 - 1.65	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 50.93, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00209 - 1.76	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 51.04, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00210 - 1.87	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 51.15, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00211 - 1.98	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 51.26, "duration": 0.110000000000007
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00212 - 2.09	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 51.37, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00213 - 2.2	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 51.48, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00214 - 2.31	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 51.59, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00215 - 2.42	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 51.7, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00216 - 2.53	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 51.81, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00217 - 2.64	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 51.92, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00218 - 2.75	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 52.03, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00219 - 2.86	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 52.14, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00220 - 2.97	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 52.25, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00221 - 3.08	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 52.36, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00222 - 3.19	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 52.47, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00223 - 3.3	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 52.58, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00224 - 3.41	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 52.69, "duration": 0.110000000000007
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00225 - 0	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 52.8, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00226 - 0.11	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 52.91, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00227 - 0.22	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 53.02, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00228 - 0.33	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 53.13, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00229 - 0.44	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 53.24, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00230 - 0.55	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 53.35, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00231 - 0.66	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 53.46, "duration": 0.110000000000007
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00232 - 0.77	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 53.57, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00233 - 0.88	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 53.68, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00234 - 0.99	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 53.79, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00235 - 1.1	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 53.9, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00236 - 1.21	8 image ( name exxo3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 54.01, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00237 - 1.32	8 image ( name exxo0.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 54.12, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo0.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00238 - 1.43	8 image ( name exxo1.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 54.23, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo1.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00239 - 1.54	8 image ( name exxo2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 54.34, "duration": 0.109999999999999
		,"layer": "00008", "image": "exxo2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00240 - 1.65	8 image ( name esso3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 54.45, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00241 - 1.76	8 image ( name esso2.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 54.56, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso2.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00242 - 1.87	8 image ( name esso3.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 54.67, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso3.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00243 - 1.98	8 image ( name esso4.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 54.78, "duration": 0.110000000000007
		,"layer": "00008", "image": "esso4.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00244 - 2.09	8 image ( name esso5.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 54.89, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso5.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00245 - 2.2	8 image ( name esso6.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 55, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso6.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00246 - 2.31	8 image ( name esso7.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 55.11, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso7.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00247 - 2.42	8 image ( name esso8.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 55.22, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso8.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00248 - 2.53	8 image ( name esso9.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 55.33, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso9.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00249 - 2.64	8 image ( name esso10.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 55.44, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso10.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00250 - 2.75	8 image ( name esso11.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 55.55, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso11.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00251 - 2.86	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 55.66, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00252 - 2.97	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 55.77, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00253 - 3.08	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 55.88, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00254 - 3.19	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 55.99, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00255 - 3.3	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 56.1, "duration": 0.109999999999999
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00256 - 3.41	8 image ( name esso12.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 56.21, "duration": 0.110000000000007
		,"layer": "00008", "image": "esso12.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00257 - 0       8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 56.32, "duration": 0.439999999999998
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00258 - 0.44    8 image ( name vdr01.jpg alphaname vdr01a.jpg position 500 200 ) 
	this.loader.addAnimation([{
		 "start": 56.76, "duration": 0.880000000000003
		,"layer": "00008", "image": "vdr01.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00259 - 1.32    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 57.64, "duration": 0.880000000000003
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00260 - 2.2    8 image ( name vdr02.jpg alphaname vdr02a.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 58.52, "duration": 0.879999999999995
		,"layer": "00008", "image": "vdr02.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00261 - 3.08    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 59.4, "duration": 0.880000000000003
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00262 - 3.96    8 image ( name vdr03.jpg alphaname vdr03a.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 60.28, "duration": 0.879999999999995
		,"layer": "00008", "image": "vdr03.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00263 - 4.84    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 61.16, "duration": 0.440000000000005
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00264 - 5.28    8 image ( name vdr04.jpg alphaname vdr04a.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 61.6, "duration": 0.439999999999998
		,"layer": "00008", "image": "vdr04.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00265 - 5.72    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 62.04, "duration": 0.440000000000005
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00266 - 6.16    8 image ( name vdr04.jpg alphaname vdr04a.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 62.48, "duration": 0.439999999999998
		,"layer": "00008", "image": "vdr04.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00267 - 6.6    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 62.92, "duration": 0.879999999999995
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00268 - 0.44    8 image ( name vdr05.jpg alphaname vdr05a.jpg position 500 200 ) 
	this.loader.addAnimation([{
		 "start": 63.8, "duration": 0.879999999999995
		,"layer": "00008", "image": "vdr05.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00269 - 1.32    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 64.68, "duration": 0.88000000000001
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00270 - 2.2    8 image ( name vdr06.jpg alphaname vdr06a.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 65.56, "duration": 0.879999999999995
		,"layer": "00008", "image": "vdr06.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00271 - 3.08    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 66.44, "duration": 0.879999999999995
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00272 - 3.96    8 image ( name vdr07.jpg alphaname vdr07a.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 67.32, "duration": 0.88000000000001
		,"layer": "00008", "image": "vdr07.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00273 - 4.84    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 68.2, "duration": 0.439999999999998
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00274 - 5.28    8 image ( name vdr08.jpg alphaname vdr08a.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 68.64, "duration": 0.439999999999998
		,"layer": "00008", "image": "vdr08.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00275 - 5.72    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 69.08, "duration": 0.439999999999998
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00276 - 6.16    8 image ( name vdr08.jpg alphaname vdr08a.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 69.52, "duration": 0.439999999999998
		,"layer": "00008", "image": "vdr08.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00277 - 6.6    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 69.96, "duration": 0.88000000000001
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00278 - 0.44    8 image ( name vdr09.jpg alphaname vdr09a.jpg position 500 200 ) 
	this.loader.addAnimation([{
		 "start": 70.84, "duration": 0.879999999999995
		,"layer": "00008", "image": "vdr09.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00279 - 1.32    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 71.72, "duration": 0.88000000000001
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00280 - 2.2    8 image ( name vdr10.jpg alphaname vdr10a.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 72.6, "duration": 0.879999999999995
		,"layer": "00008", "image": "vdr10.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00281 - 3.08    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 73.48, "duration": 0.879999999999995
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00282 - 3.96    8 image ( name vdr11.jpg alphaname vdr11a.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 74.36, "duration": 0.88000000000001
		,"layer": "00008", "image": "vdr11.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00283 - 4.84    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 75.24, "duration": 0.439999999999998
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00284 - 5.28    8 image ( name vdr12.jpg alphaname vdr12a.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 75.68, "duration": 0.439999999999998
		,"layer": "00008", "image": "vdr12.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00285 - 5.72    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 76.12, "duration": 0.439999999999998
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00286 - 6.16    8 image ( name vdr12.jpg alphaname vdr12a.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 76.56, "duration": 0.439999999999998
		,"layer": "00008", "image": "vdr12.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00287 - 6.6    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 77, "duration": 0.879999999999995
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00288 - 0.44    8 image ( name vdr13.jpg alphaname vdr13a.jpg position 500 200 ) 
	this.loader.addAnimation([{
		 "start": 77.88, "duration": 0.879999999999995
		,"layer": "00008", "image": "vdr13.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00289 - 1.32    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 78.76, "duration": 0.88000000000001
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00290 - 2.20    8 image ( name vdr14.jpg alphaname vdr14a.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 79.64, "duration": 0.879999999999995
		,"layer": "00008", "image": "vdr14.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00291 - 3.08    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 80.52, "duration": 0.879999999999995
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00292 - 3.96    8 image ( name vdr15.jpg alphaname vdr15a.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 81.4, "duration": 0.88000000000001
		,"layer": "00008", "image": "vdr15.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00293 - 4.84    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 82.28, "duration": 0.439999999999998
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00294 - 5.28    8 image ( name vdr16.jpg alphaname vdr16a.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 82.72, "duration": 0.319999999999993
		,"layer": "00008", "image": "vdr16.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00295 - 5.6    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 83.04, "duration": 0.120000000000005
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00296 - 5.72    8 image ( name vdr16.jpg alphaname vdr16a.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 83.16, "duration": 0.219999999999999
		,"layer": "00008", "image": "vdr16.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00297 - 5.94    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 83.38, "duration": 0.219999999999999
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00298 - 6.16    8 image ( name vdr16.jpg alphaname vdr16a.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 83.6, "duration": 0.219999999999999
		,"layer": "00008", "image": "vdr16.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00299 - 6.38    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 83.82, "duration": 0.219999999999999
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00300 - 6.60    8 image ( name vdr16.jpg alphaname vdr16a.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 84.04, "duration": 0.219999999999999
		,"layer": "00008", "image": "vdr16.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00301 - 6.82    8 image ( name vdr.jpg alphaname vdra.jpg position 500 200 )
	this.loader.addAnimation([{
		 "start": 84.26, "duration": 0.220000000000013
		,"layer": "00008", "image": "vdr.png"
		,"position":[
			 {"x":500,"y":200}
		]
	}]);
	//00008/00302 - 0	8 scene ( name tvscene.3ds camera Camera01 fps 29 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 112.64, "duration": 28.16
		,"layer": "00008", "objectLighting": false, "object": "tvscene.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera01"
		,"fps": 29
	}]);
	//00008/00303 - 0	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 140.8, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00304 - 0.22	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 141.02, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00305 - 0.44	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 141.24, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00306 - 0.66	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 141.46, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00307 - 0.88	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 141.68, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00308 - 1.1	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 141.9, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00309 - 1.32	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 142.12, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00310 - 1.54	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 142.34, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00311 - 1.76	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 142.56, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00312 - 1.98	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 142.78, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00313 - 2.20	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 143, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00314 - 2.42	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 143.22, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00315 - 2.64	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 143.44, "duration": 0.220000000000027
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00316 - 2.86	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 143.66, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00317 - 3.08	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 143.88, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00318 - 3.30	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 144.1, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00319 - 3.52	8 image ( name fact40.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 144.32, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact40.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00320 - 3.74	8 image ( name fact41.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 144.54, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact41.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00321 - 3.96	8 image ( name fact42.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 144.76, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact42.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00322 - 4.18	8 image ( name fact43.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 144.98, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact43.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00323 - 4.4	8 image ( name fact44.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 145.2, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact44.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00324 - 4.62	8 image ( name fact45.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 145.42, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact45.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00325 - 4.84	8 image ( name fact46.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 145.64, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact46.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00326 - 5.06	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 145.86, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00327 - 5.28	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 146.08, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00328 - 5.5	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 146.3, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00329 - 5.72	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 146.52, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00330 - 5.94	8 image ( name fact29.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 146.74, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact29.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00331 - 6.16	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 146.96, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00332 - 6.38	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 147.18, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00333 - 6.6	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 147.4, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00334 - 6.82	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 147.62, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00335 - 0	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 147.84, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00336 - 0.22	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 148.06, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00337 - 0.44	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 148.28, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00338 - 0.66	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 148.5, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00339 - 0.88	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 148.72, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00340 - 1.1	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 148.94, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00341 - 1.32	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 149.16, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00342 - 1.54	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 149.38, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00343 - 1.76	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 149.6, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00344 - 1.98	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 149.82, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00345 - 2.20	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 150.04, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00346 - 2.42	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 150.26, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00347 - 2.64	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 150.48, "duration": 0.220000000000027
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00348 - 2.86	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 150.7, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00349 - 3.08	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 150.92, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00350 - 3.30	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 151.14, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00351 - 3.52	8 image ( name fact40.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 151.36, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact40.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00352 - 3.74	8 image ( name fact41.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 151.58, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact41.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00353 - 3.96	8 image ( name fact42.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 151.8, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact42.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00354 - 4.18	8 image ( name fact43.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 152.02, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact43.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00355 - 4.4	8 image ( name fact44.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 152.24, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact44.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00356 - 4.62	8 image ( name fact45.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 152.46, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact45.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00357 - 4.84	8 image ( name fact46.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 152.68, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact46.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00358 - 5.06	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 152.9, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00359 - 5.28	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 153.12, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00360 - 5.5	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 153.34, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00361 - 5.72	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 153.56, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00362 - 5.94	8 image ( name fact29.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 153.78, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact29.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00363 - 6.16	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 154, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00364 - 6.38	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 154.22, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00365 - 6.6	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 154.44, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00366 - 6.82	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 154.66, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00367 - 0	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 154.88, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00368 - 0.22	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 155.1, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00369 - 0.44	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 155.32, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00370 - 0.66	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 155.54, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00371 - 0.88	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 155.76, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00372 - 1.1	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 155.98, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00373 - 1.32	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 156.2, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00374 - 1.54	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 156.42, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00375 - 1.76	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 156.64, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00376 - 1.98	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 156.86, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00377 - 2.20	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 157.08, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00378 - 2.42	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 157.3, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00379 - 2.64	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 157.52, "duration": 0.220000000000027
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00380 - 2.86	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 157.74, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00381 - 3.08	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 157.96, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00382 - 3.30	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 158.18, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00383 - 3.52	8 image ( name fact40.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 158.4, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact40.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00384 - 3.74	8 image ( name fact41.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 158.62, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact41.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00385 - 3.96	8 image ( name fact42.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 158.84, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact42.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00386 - 4.18	8 image ( name fact43.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 159.06, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact43.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00387 - 4.4	8 image ( name fact44.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 159.28, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact44.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00388 - 4.62	8 image ( name fact45.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 159.5, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact45.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00389 - 4.84	8 image ( name fact46.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 159.72, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact46.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00390 - 5.06	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 159.94, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00391 - 5.28	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 160.16, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00392 - 5.5	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 160.38, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00393 - 5.72	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 160.6, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00394 - 5.94	8 image ( name fact29.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 160.82, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact29.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00395 - 6.16	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 161.04, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00396 - 6.38	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 161.26, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00397 - 6.6	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 161.48, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00398 - 6.82	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 161.7, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00399 - 0	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 161.92, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00400 - 0.22	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 162.14, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00401 - 0.44	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 162.36, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00402 - 0.66	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 162.58, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00403 - 0.88	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 162.8, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00404 - 1.1	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 163.02, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00405 - 1.32	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 163.24, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00406 - 1.54	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 163.46, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00407 - 1.76	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 163.68, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00408 - 1.98	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 163.9, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00409 - 2.20	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 164.12, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00410 - 2.42	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 164.34, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00411 - 2.64	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 164.56, "duration": 0.220000000000027
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00412 - 2.86	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 164.78, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00413 - 3.08	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 165, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00414 - 3.30	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 165.22, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00415 - 3.52	8 image ( name fact40.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 165.44, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact40.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00416 - 3.74	8 image ( name fact41.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 165.66, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact41.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00417 - 3.96	8 image ( name fact42.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 165.88, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact42.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00418 - 4.18	8 image ( name fact43.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 166.1, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact43.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00419 - 4.4	8 image ( name fact44.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 166.32, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact44.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00420 - 4.62	8 image ( name fact45.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 166.54, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact45.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00421 - 4.84	8 image ( name fact46.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 166.76, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact46.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00422 - 5.06	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 166.98, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00423 - 5.28	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 167.2, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00424 - 5.5	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 167.42, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00425 - 5.72	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 167.64, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00426 - 5.94	8 image ( name fact29.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 167.86, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact29.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00427 - 6.16	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 168.08, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00428 - 6.38	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 168.3, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00429 - 6.6	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 168.52, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00430 - 6.82	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 168.74, "duration": 0.220000000000027
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00431 - 0	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 168.96, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00432 - 0.22	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 169.18, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00433 - 0.44	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 169.4, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00434 - 0.66	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 169.62, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00435 - 0.88	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 169.84, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00436 - 1.1	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 170.06, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00437 - 1.32	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 170.28, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00438 - 1.54	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 170.5, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00439 - 1.76	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 170.72, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00440 - 1.98	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 170.94, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00441 - 2.20	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 171.16, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00442 - 2.42	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 171.38, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00443 - 2.64	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 171.6, "duration": 0.220000000000027
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00444 - 2.86	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 171.82, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00445 - 3.08	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 172.04, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00446 - 3.30	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 172.26, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00447 - 3.52	8 image ( name fact40.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 172.48, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact40.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00448 - 3.74	8 image ( name fact41.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 172.7, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact41.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00449 - 3.96	8 image ( name fact42.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 172.92, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact42.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00450 - 4.18	8 image ( name fact43.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 173.14, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact43.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00451 - 4.4	8 image ( name fact44.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 173.36, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact44.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00452 - 4.62	8 image ( name fact45.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 173.58, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact45.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00453 - 4.84	8 image ( name fact46.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 173.8, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact46.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00454 - 5.06	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 174.02, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00455 - 5.28	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 174.24, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00456 - 5.5	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 174.46, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00457 - 5.72	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 174.68, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00458 - 5.94	8 image ( name fact29.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 174.9, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact29.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00459 - 6.16	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 175.12, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00460 - 6.38	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 175.34, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00461 - 6.6	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 175.56, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00462 - 6.82	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 175.78, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00463 - 0	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 176, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00464 - 0.22	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 176.22, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00465 - 0.44	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 176.44, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00466 - 0.66	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 176.66, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00467 - 0.88	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 176.88, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00468 - 1.1	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 177.1, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00469 - 1.32	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 177.32, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00470 - 1.54	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 177.54, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00471 - 1.76	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 177.76, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00472 - 1.98	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 177.98, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00473 - 2.20	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 178.2, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00474 - 2.42	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 178.42, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00475 - 2.64	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 178.64, "duration": 0.220000000000027
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00476 - 2.86	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 178.86, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00477 - 3.08	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 179.08, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00478 - 3.30	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 179.3, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00479 - 3.52	8 image ( name fact40.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 179.52, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact40.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00480 - 3.74	8 image ( name fact41.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 179.74, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact41.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00481 - 3.96	8 image ( name fact42.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 179.96, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact42.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00482 - 4.18	8 image ( name fact43.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 180.18, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact43.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00483 - 4.4	8 image ( name fact44.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 180.4, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact44.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00484 - 4.62	8 image ( name fact45.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 180.62, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact45.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00485 - 4.84	8 image ( name fact46.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 180.84, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact46.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00486 - 5.06	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 181.06, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00487 - 5.28	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 181.28, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00488 - 5.5	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 181.5, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00489 - 5.72	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 181.72, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00490 - 5.94	8 image ( name fact29.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 181.94, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact29.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00491 - 6.16	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 182.16, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00492 - 6.38	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 182.38, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00493 - 6.6	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 182.6, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00494 - 6.82	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 182.82, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00495 - 0	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 183.04, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00496 - 0.22	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 183.26, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00497 - 0.44	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 183.48, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00498 - 0.66	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 183.7, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00499 - 0.88	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 183.92, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00500 - 1.1	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 184.14, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00501 - 1.32	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 184.36, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00502 - 1.54	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 184.58, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00503 - 1.76	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 184.8, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00504 - 1.98	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 185.02, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00505 - 2.20	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 185.24, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00506 - 2.42	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 185.46, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00507 - 2.64	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 185.68, "duration": 0.220000000000027
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00508 - 2.86	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 185.9, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00509 - 3.08	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 186.12, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00510 - 3.30	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 186.34, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00511 - 3.52	8 image ( name fact40.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 186.56, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact40.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00512 - 3.74	8 image ( name fact41.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 186.78, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact41.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00513 - 3.96	8 image ( name fact42.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 187, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact42.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00514 - 4.18	8 image ( name fact43.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 187.22, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact43.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00515 - 4.4	8 image ( name fact44.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 187.44, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact44.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00516 - 4.62	8 image ( name fact45.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 187.66, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact45.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00517 - 4.84	8 image ( name fact46.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 187.88, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact46.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00518 - 5.06	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 188.1, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00519 - 5.28	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 188.32, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00520 - 5.5	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 188.54, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00521 - 5.72	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 188.76, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00522 - 5.94	8 image ( name fact29.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 188.98, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact29.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00523 - 6.16	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 189.2, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00524 - 6.38	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 189.42, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00525 - 6.6	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 189.64, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00526 - 6.82	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 189.86, "duration": 0.220000000000027
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00527 - 0	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 190.08, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00528 - 0.22	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 190.3, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00529 - 0.44	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 190.52, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00530 - 0.66	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 190.74, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00531 - 0.88	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 190.96, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00532 - 1.1	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 191.18, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00533 - 1.32	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 191.4, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00534 - 1.54	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 191.62, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00535 - 1.76	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 191.84, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00536 - 1.98	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 192.06, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00537 - 2.20	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 192.28, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00538 - 2.42	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 192.5, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00539 - 2.64	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 192.72, "duration": 0.220000000000027
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00540 - 2.86	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 192.94, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00541 - 3.08	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 193.16, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00542 - 3.30	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 193.38, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00543 - 3.52	8 image ( name fact40.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 193.6, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact40.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00544 - 3.74	8 image ( name fact41.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 193.82, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact41.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00545 - 3.96	8 image ( name fact42.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 194.04, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact42.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00546 - 4.18	8 image ( name fact43.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 194.26, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact43.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00547 - 4.4	8 image ( name fact44.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 194.48, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact44.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00548 - 4.62	8 image ( name fact45.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 194.7, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact45.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00549 - 4.84	8 image ( name fact46.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 194.92, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact46.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00550 - 5.06	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 195.14, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00551 - 5.28	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 195.36, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00552 - 5.5	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 195.58, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00553 - 5.72	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 195.8, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00554 - 5.94	8 image ( name fact29.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 196.02, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact29.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00555 - 6.16	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 196.24, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00556 - 6.38	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 196.46, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00557 - 6.6	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 196.68, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00558 - 6.82	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 196.9, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00559 - 0	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 197.12, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00560 - 0.22	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 197.34, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00561 - 0.44	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 197.56, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00562 - 0.66	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 197.78, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00563 - 0.88	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 198, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00564 - 1.1	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 198.22, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00565 - 1.32	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 198.44, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00566 - 1.54	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 198.66, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00567 - 1.76	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 198.88, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00568 - 1.98	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 199.1, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00569 - 2.20	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 199.32, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00570 - 2.42	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 199.54, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00571 - 2.64	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 199.76, "duration": 0.220000000000027
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00572 - 2.86	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 199.98, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00573 - 3.08	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 200.2, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00574 - 3.30	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 200.42, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00575 - 3.52	8 image ( name fact40.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 200.64, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact40.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00576 - 3.74	8 image ( name fact41.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 200.86, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact41.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00577 - 3.96	8 image ( name fact42.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 201.08, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact42.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00578 - 4.18	8 image ( name fact43.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 201.3, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact43.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00579 - 4.4	8 image ( name fact44.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 201.52, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact44.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00580 - 4.62	8 image ( name fact45.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 201.74, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact45.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00581 - 4.84	8 image ( name fact46.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 201.96, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact46.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00582 - 5.06	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 202.18, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00583 - 5.28	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 202.4, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00584 - 5.5	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 202.62, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00585 - 5.72	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 202.84, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00586 - 5.94	8 image ( name fact29.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 203.06, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact29.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00587 - 6.16	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 203.28, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00588 - 6.38	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 203.5, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00589 - 6.6	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 203.72, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00590 - 6.82	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 203.94, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00591 - 0	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 204.16, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00592 - 0.22	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 204.38, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00593 - 0.44	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 204.6, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00594 - 0.66	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 204.82, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00595 - 0.88	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 205.04, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00596 - 1.1	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 205.26, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00597 - 1.32	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 205.48, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00598 - 1.54	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 205.7, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00599 - 1.76	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 205.92, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00600 - 1.98	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 206.14, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00601 - 2.20	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 206.36, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00602 - 2.42	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 206.58, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00603 - 2.64	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 206.8, "duration": 0.220000000000027
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00604 - 2.86	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 207.02, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00605 - 3.08	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 207.24, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00606 - 3.30	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 207.46, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00607 - 3.52	8 image ( name fact40.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 207.68, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact40.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00608 - 3.74	8 image ( name fact41.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 207.9, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact41.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00609 - 3.96	8 image ( name fact42.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 208.12, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact42.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00610 - 4.18	8 image ( name fact43.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 208.34, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact43.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00611 - 4.4	8 image ( name fact44.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 208.56, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact44.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00612 - 4.62	8 image ( name fact45.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 208.78, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact45.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00613 - 4.84	8 image ( name fact46.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 209, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact46.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00614 - 5.06	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 209.22, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00615 - 5.28	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 209.44, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00616 - 5.5	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 209.66, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00617 - 5.72	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 209.88, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00618 - 5.94	8 image ( name fact29.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 210.1, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact29.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00619 - 6.16	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 210.32, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00620 - 6.38	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 210.54, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00621 - 6.6	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 210.76, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00622 - 6.82	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 210.98, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00623 - 0	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 211.2, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00624 - 0.22	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 211.42, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00625 - 0.44	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 211.64, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00626 - 0.66	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 211.86, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00627 - 0.88	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 212.08, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00628 - 1.1	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 212.3, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00629 - 1.32	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 212.52, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00630 - 1.54	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 212.74, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00631 - 1.76	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 212.96, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00632 - 1.98	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 213.18, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00633 - 2.20	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 213.4, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00634 - 2.42	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 213.62, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00635 - 2.64	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 213.84, "duration": 0.220000000000027
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00636 - 2.86	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 214.06, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00637 - 3.08	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 214.28, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00638 - 3.30	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 214.5, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00639 - 3.52	8 image ( name fact40.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 214.72, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact40.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00640 - 3.74	8 image ( name fact41.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 214.94, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact41.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00641 - 3.96	8 image ( name fact42.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 215.16, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact42.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00642 - 4.18	8 image ( name fact43.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 215.38, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact43.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00643 - 4.4	8 image ( name fact44.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 215.6, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact44.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00644 - 4.62	8 image ( name fact45.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 215.82, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact45.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00645 - 4.84	8 image ( name fact46.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 216.04, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact46.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00646 - 5.06	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 216.26, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00647 - 5.28	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 216.48, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00648 - 5.5	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 216.7, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00649 - 5.72	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 216.92, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00650 - 5.94	8 image ( name fact29.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 217.14, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact29.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00651 - 6.16	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 217.36, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00652 - 6.38	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 217.58, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00653 - 6.6	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 217.8, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00654 - 6.82	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 218.02, "duration": 0.220000000000027
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00655 - 0	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 218.24, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00656 - 0.22	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 218.46, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00657 - 0.44	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 218.68, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00658 - 0.66	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 218.9, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00659 - 0.88	8 image ( name fact01.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 219.12, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact01.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00660 - 1.1	8 image ( name fact02.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 219.34, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact02.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00661 - 1.32	8 image ( name fact03.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 219.56, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact03.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00662 - 1.54	8 image ( name fact04.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 219.78, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact04.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00663 - 1.76	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 220, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00664 - 1.98	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 220.22, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00665 - 2.20	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 220.44, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00666 - 2.42	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 220.66, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00667 - 2.64	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 220.88, "duration": 0.220000000000027
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00668 - 2.86	8 image ( name fact37.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 221.1, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact37.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00669 - 3.08	8 image ( name fact36.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 221.32, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact36.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00670 - 3.30	8 image ( name fact35.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 221.54, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact35.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00671 - 3.52	8 image ( name fact40.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 221.76, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact40.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00672 - 3.74	8 image ( name fact41.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 221.98, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact41.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00673 - 3.96	8 image ( name fact42.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 222.2, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact42.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00674 - 4.18	8 image ( name fact43.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 222.42, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact43.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00675 - 4.4	8 image ( name fact44.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 222.64, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact44.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00676 - 4.62	8 image ( name fact45.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 222.86, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact45.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00677 - 4.84	8 image ( name fact46.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 223.08, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact46.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00678 - 5.06	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 223.3, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00679 - 5.28	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 223.52, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00680 - 5.5	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 223.74, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00681 - 5.72	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 223.96, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00682 - 5.94	8 image ( name fact29.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 224.18, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact29.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00683 - 6.16	8 image ( name fact25.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 224.4, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact25.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00684 - 6.38	8 image ( name fact26.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 224.62, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact26.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00685 - 6.6	8 image ( name fact27.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 224.84, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact27.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00008/00686 - 6.82	8 image ( name fact28.jpg scale 200 200 add )
	this.loader.addAnimation([{
		 "start": 225.06, "duration": 0.219999999999999
		,"layer": "00008", "image": "fact28.png"
		,"additive": true
		,"scale":[
			 {"x":2,"y":2}
		]
	}]);
	//00009/00001 - 0.44    9 image ( name greet1.jpg alphaname greet1.jpg position 200 325 scale 175 175 ) 
	this.loader.addAnimation([{
		 "start": 56.76, "duration": 0.880000000000003
		,"layer": "00009", "image": "greet1.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00002 - 2.2    9 image ( name greet2.jpg alphaname greet2.jpg position 200 325 scale 175 175 )
	this.loader.addAnimation([{
		 "start": 58.52, "duration": 0.879999999999995
		,"layer": "00009", "image": "greet2.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00003 - 3.96    9 image ( name greet3.jpg alphaname greet3.jpg position 200 325 scale 175 175 )
	this.loader.addAnimation([{
		 "start": 60.28, "duration": 0.879999999999995
		,"layer": "00009", "image": "greet3.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00004 - 5.28    9 image ( name greet4.jpg alphaname greet4.jpg position 200 325 scale 175 175 )
	this.loader.addAnimation([{
		 "start": 61.6, "duration": 0.439999999999998
		,"layer": "00009", "image": "greet4.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00005 - 6.16    9 image ( name greet4.jpg alphaname greet4.jpg position 200 325 scale 175 175 )
	this.loader.addAnimation([{
		 "start": 62.48, "duration": 0.439999999999998
		,"layer": "00009", "image": "greet4.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00006 - 0.44    9 image ( name greet5.jpg alphaname greet5.jpg position 200 325 scale 175 175 ) 
	this.loader.addAnimation([{
		 "start": 63.8, "duration": 0.879999999999995
		,"layer": "00009", "image": "greet5.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00007 - 2.2    9 image ( name greet6.jpg alphaname greet6.jpg position 200 325 scale 175 175 )
	this.loader.addAnimation([{
		 "start": 65.56, "duration": 0.879999999999995
		,"layer": "00009", "image": "greet6.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00008 - 3.96    9 image ( name greet7.jpg alphaname greet7.jpg position 200 325 scale 175 175 )
	this.loader.addAnimation([{
		 "start": 67.32, "duration": 0.88000000000001
		,"layer": "00009", "image": "greet7.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00009 - 5.28    9 image ( name greet8.jpg alphaname greet8.jpg position 200 325 scale 175 175 )
	this.loader.addAnimation([{
		 "start": 68.64, "duration": 0.439999999999998
		,"layer": "00009", "image": "greet8.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00010 - 6.16    9 image ( name greet8.jpg alphaname greet8.jpg position 200 325 scale 175 175 )
	this.loader.addAnimation([{
		 "start": 69.52, "duration": 0.439999999999998
		,"layer": "00009", "image": "greet8.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00011 - 0.44    9 image ( name greet9.jpg alphaname greet9.jpg position 200 325 scale 175 175 ) 
	this.loader.addAnimation([{
		 "start": 70.84, "duration": 0.879999999999995
		,"layer": "00009", "image": "greet9.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00012 - 2.2    9 image ( name greeta.jpg alphaname greeta.jpg position 200 325 scale 175 175 )
	this.loader.addAnimation([{
		 "start": 72.6, "duration": 0.879999999999995
		,"layer": "00009", "image": "greeta.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00013 - 3.96    9 image ( name greetb.jpg alphaname greetb.jpg position 200 325 scale 175 175 )
	this.loader.addAnimation([{
		 "start": 74.36, "duration": 0.88000000000001
		,"layer": "00009", "image": "greetb.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00014 - 5.28    9 image ( name greetc.jpg alphaname greetc.jpg position 200 325 scale 175 175 )
	this.loader.addAnimation([{
		 "start": 75.68, "duration": 0.439999999999998
		,"layer": "00009", "image": "greetc.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00015 - 6.16    9 image ( name greetc.jpg alphaname greetc.jpg position 200 325 scale 175 175 )
	this.loader.addAnimation([{
		 "start": 76.56, "duration": 0.439999999999998
		,"layer": "00009", "image": "greetc.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00016 - 0.44    9 image ( name greetd.jpg alphaname greetd.jpg position 200 325 scale 175 175 ) 
	this.loader.addAnimation([{
		 "start": 77.88, "duration": 0.879999999999995
		,"layer": "00009", "image": "greetd.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00017 - 2.2    9 image ( name greete.jpg alphaname greete.jpg position 200 325 scale 175 175 )
	this.loader.addAnimation([{
		 "start": 79.64, "duration": 0.879999999999995
		,"layer": "00009", "image": "greete.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00018 - 3.96    9 image ( name greetf.jpg alphaname greetf.jpg position 200 325 scale 175 175 )
	this.loader.addAnimation([{
		 "start": 81.4, "duration": 0.88000000000001
		,"layer": "00009", "image": "greetf.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00019 - 5.28    9 image ( name greetg.jpg alphaname greetg.jpg position 200 325 scale 175 175 )
	this.loader.addAnimation([{
		 "start": 82.72, "duration": 0.319999999999993
		,"layer": "00009", "image": "greetg.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00020 - 5.72    9 image ( name greetg.jpg alphaname greetg.jpg position 200 325 scale 175 175 )
	this.loader.addAnimation([{
		 "start": 83.16, "duration": 0.219999999999999
		,"layer": "00009", "image": "greetg.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00021 - 6.16    9 image ( name greetg.jpg alphaname greetg.jpg position 200 325 scale 175 175 )
	this.loader.addAnimation([{
		 "start": 83.6, "duration": 0.219999999999999
		,"layer": "00009", "image": "greetg.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00022 - 6.6    9 image ( name greetg.jpg alphaname greetg.jpg position 200 325 scale 175 175 )
	this.loader.addAnimation([{
		 "start": 84.04, "duration": 0.219999999999999
		,"layer": "00009", "image": "greetg.png"
		,"scale":[
			 {"x":1.75,"y":1.75}
		]
		,"position":[
			 {"x":200,"y":325}
		]
	}]);
	//00009/00023 - 0	9 image ( name textfa.jpg alphaname textf.jpg )
	this.loader.addAnimation([{
		 "start": 84.48, "duration": 28.16
		,"layer": "00009", "image": "textfa.png"
	}]);
	//00009/00024 - 0	9 image ( name fact13.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 154.88, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact13.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00025 - 0.22	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 155.1, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00026 - 0.44	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 155.32, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00027 - 0.66	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 155.54, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00028 - 0.88	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 155.76, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00029 - 1.1	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 155.98, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00030 - 1.32	9 image ( name fact19.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 156.2, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact19.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00031 - 1.54	9 image ( name fact20.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 156.42, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact20.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00032 - 1.76	9 image ( name fact21.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 156.64, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact21.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00033 - 1.98	9 image ( name fact22.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 156.86, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact22.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00034 - 2.20	9 image ( name fact23.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 157.08, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact23.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00035 - 2.42	9 image ( name fact24.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 157.3, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact24.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00036 - 2.64	9 image ( name fact23.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 157.52, "duration": 0.220000000000027
		,"layer": "00009", "image": "fact23.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00037 - 2.86	9 image ( name fact22.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 157.74, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact22.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00038 - 3.08	9 image ( name fact21.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 157.96, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact21.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00039 - 3.30	9 image ( name fact20.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 158.18, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact20.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00040 - 3.52	9 image ( name fact19.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 158.4, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact19.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00041 - 3.74	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 158.62, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00042 - 3.96	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 158.84, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00043 - 4.18	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 159.06, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00044 - 4.4	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 159.28, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00045 - 4.62	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 159.5, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00046 - 4.84	9 image ( name fact13.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 159.72, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact13.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00047 - 5.06	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 159.94, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00048 - 5.28	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 160.16, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00049 - 5.5	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 160.38, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00050 - 5.72	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 160.6, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00051 - 5.94	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 160.82, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00052 - 6.16	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 161.04, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00053 - 6.38	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 161.26, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00054 - 6.6	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 161.48, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00055 - 6.82	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 161.7, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00056 - 0	9 image ( name fact13.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 161.92, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact13.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00057 - 0.22	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 162.14, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00058 - 0.44	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 162.36, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00059 - 0.66	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 162.58, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00060 - 0.88	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 162.8, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00061 - 1.1	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 163.02, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00062 - 1.32	9 image ( name fact19.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 163.24, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact19.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00063 - 1.54	9 image ( name fact20.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 163.46, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact20.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00064 - 1.76	9 image ( name fact21.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 163.68, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact21.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00065 - 1.98	9 image ( name fact22.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 163.9, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact22.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00066 - 2.20	9 image ( name fact23.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 164.12, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact23.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00067 - 2.42	9 image ( name fact24.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 164.34, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact24.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00068 - 2.64	9 image ( name fact23.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 164.56, "duration": 0.220000000000027
		,"layer": "00009", "image": "fact23.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00069 - 2.86	9 image ( name fact22.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 164.78, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact22.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00070 - 3.08	9 image ( name fact21.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 165, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact21.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00071 - 3.30	9 image ( name fact20.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 165.22, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact20.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00072 - 3.52	9 image ( name fact19.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 165.44, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact19.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00073 - 3.74	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 165.66, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00074 - 3.96	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 165.88, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00075 - 4.18	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 166.1, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00076 - 4.4	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 166.32, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00077 - 4.62	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 166.54, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00078 - 4.84	9 image ( name fact13.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 166.76, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact13.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00079 - 5.06	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 166.98, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00080 - 5.28	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 167.2, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00081 - 5.5	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 167.42, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00082 - 5.72	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 167.64, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00083 - 5.94	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 167.86, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00084 - 6.16	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 168.08, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00085 - 6.38	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 168.3, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00086 - 6.6	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 168.52, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00087 - 6.82	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 168.74, "duration": 0.220000000000027
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00088 - 0	9 image ( name fact13.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 168.96, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact13.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00089 - 0.22	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 169.18, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00090 - 0.44	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 169.4, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00091 - 0.66	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 169.62, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00092 - 0.88	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 169.84, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00093 - 1.1	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 170.06, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00094 - 1.32	9 image ( name fact19.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 170.28, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact19.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00095 - 1.54	9 image ( name fact20.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 170.5, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact20.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00096 - 1.76	9 image ( name fact21.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 170.72, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact21.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00097 - 1.98	9 image ( name fact22.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 170.94, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact22.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00098 - 2.20	9 image ( name fact23.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 171.16, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact23.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00099 - 2.42	9 image ( name fact24.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 171.38, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact24.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00100 - 2.64	9 image ( name fact23.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 171.6, "duration": 0.220000000000027
		,"layer": "00009", "image": "fact23.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00101 - 2.86	9 image ( name fact22.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 171.82, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact22.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00102 - 3.08	9 image ( name fact21.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 172.04, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact21.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00103 - 3.30	9 image ( name fact20.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 172.26, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact20.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00104 - 3.52	9 image ( name fact19.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 172.48, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact19.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00105 - 3.74	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 172.7, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00106 - 3.96	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 172.92, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00107 - 4.18	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 173.14, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00108 - 4.4	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 173.36, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00109 - 4.62	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 173.58, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00110 - 4.84	9 image ( name fact13.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 173.8, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact13.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00111 - 5.06	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 174.02, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00112 - 5.28	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 174.24, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00113 - 5.5	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 174.46, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00114 - 5.72	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 174.68, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00115 - 5.94	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 174.9, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00116 - 6.16	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 175.12, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00117 - 6.38	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 175.34, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00118 - 6.6	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 175.56, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00119 - 6.82	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 175.78, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00120 - 0	9 image ( name fact13.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 176, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact13.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00121 - 0.22	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 176.22, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00122 - 0.44	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 176.44, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00123 - 0.66	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 176.66, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00124 - 0.88	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 176.88, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00125 - 1.1	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 177.1, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00126 - 1.32	9 image ( name fact19.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 177.32, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact19.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00127 - 1.54	9 image ( name fact20.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 177.54, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact20.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00128 - 1.76	9 image ( name fact21.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 177.76, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact21.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00129 - 1.98	9 image ( name fact22.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 177.98, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact22.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00130 - 2.20	9 image ( name fact23.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 178.2, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact23.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00131 - 2.42	9 image ( name fact24.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 178.42, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact24.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00132 - 2.64	9 image ( name fact23.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 178.64, "duration": 0.220000000000027
		,"layer": "00009", "image": "fact23.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00133 - 2.86	9 image ( name fact22.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 178.86, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact22.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00134 - 3.08	9 image ( name fact21.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 179.08, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact21.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00135 - 3.30	9 image ( name fact20.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 179.3, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact20.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00136 - 3.52	9 image ( name fact19.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 179.52, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact19.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00137 - 3.74	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 179.74, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00138 - 3.96	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 179.96, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00139 - 4.18	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 180.18, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00140 - 4.4	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 180.4, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00141 - 4.62	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 180.62, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00142 - 4.84	9 image ( name fact13.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 180.84, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact13.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00143 - 5.06	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 181.06, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00144 - 5.28	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 181.28, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00145 - 5.5	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 181.5, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00146 - 5.72	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 181.72, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00147 - 5.94	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 181.94, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00148 - 6.16	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 182.16, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00149 - 6.38	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 182.38, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00150 - 6.6	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 182.6, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00151 - 6.82	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 182.82, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00152 - 0	9 image ( name fact13.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 183.04, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact13.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00153 - 0.22	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 183.26, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00154 - 0.44	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 183.48, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00155 - 0.66	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 183.7, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00156 - 0.88	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 183.92, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00157 - 1.1	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 184.14, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00158 - 1.32	9 image ( name fact19.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 184.36, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact19.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00159 - 1.54	9 image ( name fact20.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 184.58, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact20.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00160 - 1.76	9 image ( name fact21.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 184.8, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact21.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00161 - 1.98	9 image ( name fact22.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 185.02, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact22.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00162 - 2.20	9 image ( name fact23.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 185.24, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact23.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00163 - 2.42	9 image ( name fact24.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 185.46, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact24.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00164 - 2.64	9 image ( name fact23.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 185.68, "duration": 0.220000000000027
		,"layer": "00009", "image": "fact23.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00165 - 2.86	9 image ( name fact22.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 185.9, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact22.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00166 - 3.08	9 image ( name fact21.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 186.12, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact21.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00167 - 3.30	9 image ( name fact20.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 186.34, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact20.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00168 - 3.52	9 image ( name fact19.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 186.56, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact19.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00169 - 3.74	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 186.78, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00170 - 3.96	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 187, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00171 - 4.18	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 187.22, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00172 - 4.4	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 187.44, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00173 - 4.62	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 187.66, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00174 - 4.84	9 image ( name fact13.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 187.88, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact13.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00175 - 5.06	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 188.1, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00176 - 5.28	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 188.32, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00177 - 5.5	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 188.54, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00178 - 5.72	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 188.76, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00179 - 5.94	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 188.98, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00180 - 6.16	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 189.2, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00181 - 6.38	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 189.42, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00182 - 6.6	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 189.64, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00183 - 6.82	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 189.86, "duration": 0.220000000000027
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00184 - 0	9 image ( name fact13.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 190.08, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact13.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00185 - 0.22	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 190.3, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00186 - 0.44	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 190.52, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00187 - 0.66	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 190.74, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00188 - 0.88	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 190.96, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00189 - 1.1	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 191.18, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00190 - 1.32	9 image ( name fact19.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 191.4, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact19.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00191 - 1.54	9 image ( name fact20.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 191.62, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact20.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00192 - 1.76	9 image ( name fact21.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 191.84, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact21.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00193 - 1.98	9 image ( name fact22.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 192.06, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact22.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00194 - 2.20	9 image ( name fact23.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 192.28, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact23.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00195 - 2.42	9 image ( name fact24.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 192.5, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact24.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00196 - 2.64	9 image ( name fact23.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 192.72, "duration": 0.220000000000027
		,"layer": "00009", "image": "fact23.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00197 - 2.86	9 image ( name fact22.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 192.94, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact22.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00198 - 3.08	9 image ( name fact21.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 193.16, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact21.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00199 - 3.30	9 image ( name fact20.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 193.38, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact20.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00200 - 3.52	9 image ( name fact19.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 193.6, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact19.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00201 - 3.74	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 193.82, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00202 - 3.96	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 194.04, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00203 - 4.18	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 194.26, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00204 - 4.4	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 194.48, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00205 - 4.62	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 194.7, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00206 - 4.84	9 image ( name fact13.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 194.92, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact13.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00207 - 5.06	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 195.14, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00208 - 5.28	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 195.36, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00209 - 5.5	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 195.58, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00210 - 5.72	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 195.8, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00211 - 5.94	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 196.02, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00212 - 6.16	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 196.24, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00213 - 6.38	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 196.46, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00214 - 6.6	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 196.68, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00215 - 6.82	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 196.9, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00216 - 0	9 image ( name fact13.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 197.12, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact13.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00217 - 0.22	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 197.34, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00218 - 0.44	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 197.56, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00219 - 0.66	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 197.78, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00220 - 0.88	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 198, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00221 - 1.1	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 198.22, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00222 - 1.32	9 image ( name fact19.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 198.44, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact19.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00223 - 1.54	9 image ( name fact20.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 198.66, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact20.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00224 - 1.76	9 image ( name fact21.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 198.88, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact21.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00225 - 1.98	9 image ( name fact22.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 199.1, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact22.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00226 - 2.20	9 image ( name fact23.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 199.32, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact23.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00227 - 2.42	9 image ( name fact24.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 199.54, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact24.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00228 - 2.64	9 image ( name fact23.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 199.76, "duration": 0.220000000000027
		,"layer": "00009", "image": "fact23.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00229 - 2.86	9 image ( name fact22.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 199.98, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact22.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00230 - 3.08	9 image ( name fact21.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 200.2, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact21.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00231 - 3.30	9 image ( name fact20.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 200.42, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact20.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00232 - 3.52	9 image ( name fact19.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 200.64, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact19.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00233 - 3.74	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 200.86, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00234 - 3.96	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 201.08, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00235 - 4.18	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 201.3, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00236 - 4.4	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 201.52, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00237 - 4.62	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 201.74, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00238 - 4.84	9 image ( name fact13.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 201.96, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact13.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00239 - 5.06	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 202.18, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00240 - 5.28	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 202.4, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00241 - 5.5	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 202.62, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00242 - 5.72	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 202.84, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00243 - 5.94	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 203.06, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00244 - 6.16	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 203.28, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00245 - 6.38	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 203.5, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00246 - 6.6	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 203.72, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00247 - 6.82	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 203.94, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00248 - 0	9 image ( name fact13.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 204.16, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact13.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00249 - 0.22	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 204.38, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00250 - 0.44	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 204.6, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00251 - 0.66	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 204.82, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00252 - 0.88	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 205.04, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00253 - 1.1	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 205.26, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00254 - 1.32	9 image ( name fact19.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 205.48, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact19.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00255 - 1.54	9 image ( name fact20.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 205.7, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact20.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00256 - 1.76	9 image ( name fact21.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 205.92, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact21.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00257 - 1.98	9 image ( name fact22.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 206.14, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact22.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00258 - 2.20	9 image ( name fact23.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 206.36, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact23.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00259 - 2.42	9 image ( name fact24.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 206.58, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact24.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00260 - 2.64	9 image ( name fact23.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 206.8, "duration": 0.220000000000027
		,"layer": "00009", "image": "fact23.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00261 - 2.86	9 image ( name fact22.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 207.02, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact22.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00262 - 3.08	9 image ( name fact21.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 207.24, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact21.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00263 - 3.30	9 image ( name fact20.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 207.46, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact20.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00264 - 3.52	9 image ( name fact19.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 207.68, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact19.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00265 - 3.74	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 207.9, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00266 - 3.96	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 208.12, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00267 - 4.18	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 208.34, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00268 - 4.4	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 208.56, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00269 - 4.62	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 208.78, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00270 - 4.84	9 image ( name fact13.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 209, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact13.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00271 - 5.06	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 209.22, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00272 - 5.28	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 209.44, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00273 - 5.5	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 209.66, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00274 - 5.72	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 209.88, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00275 - 5.94	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 210.1, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00276 - 6.16	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 210.32, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00277 - 6.38	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 210.54, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00278 - 6.6	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 210.76, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00279 - 6.82	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 210.98, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00280 - 0	9 image ( name fact13.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 211.2, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact13.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00281 - 0.22	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 211.42, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00282 - 0.44	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 211.64, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00283 - 0.66	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 211.86, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00284 - 0.88	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 212.08, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00285 - 1.1	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 212.3, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00286 - 1.32	9 image ( name fact19.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 212.52, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact19.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00287 - 1.54	9 image ( name fact20.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 212.74, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact20.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00288 - 1.76	9 image ( name fact21.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 212.96, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact21.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00289 - 1.98	9 image ( name fact22.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 213.18, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact22.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00290 - 2.20	9 image ( name fact23.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 213.4, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact23.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00291 - 2.42	9 image ( name fact24.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 213.62, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact24.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00292 - 2.64	9 image ( name fact23.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 213.84, "duration": 0.220000000000027
		,"layer": "00009", "image": "fact23.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00293 - 2.86	9 image ( name fact22.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 214.06, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact22.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00294 - 3.08	9 image ( name fact21.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 214.28, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact21.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00295 - 3.30	9 image ( name fact20.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 214.5, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact20.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00296 - 3.52	9 image ( name fact19.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 214.72, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact19.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00297 - 3.74	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 214.94, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00298 - 3.96	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 215.16, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00299 - 4.18	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 215.38, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00300 - 4.4	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 215.6, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00301 - 4.62	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 215.82, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00302 - 4.84	9 image ( name fact13.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 216.04, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact13.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00303 - 5.06	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 216.26, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00304 - 5.28	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 216.48, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00305 - 5.5	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 216.7, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00306 - 5.72	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 216.92, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00307 - 5.94	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 217.14, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00308 - 6.16	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 217.36, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00309 - 6.38	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 217.58, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00310 - 6.6	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 217.8, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00311 - 6.82	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 218.02, "duration": 0.220000000000027
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00312 - 0	9 image ( name fact13.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 218.24, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact13.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00313 - 0.22	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 218.46, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00314 - 0.44	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 218.68, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00315 - 0.66	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 218.9, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00316 - 0.88	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 219.12, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00317 - 1.1	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 219.34, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00318 - 1.32	9 image ( name fact19.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 219.56, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact19.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00319 - 1.54	9 image ( name fact20.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 219.78, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact20.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00320 - 1.76	9 image ( name fact21.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 220, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact21.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00321 - 1.98	9 image ( name fact22.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 220.22, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact22.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00322 - 2.20	9 image ( name fact23.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 220.44, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact23.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00323 - 2.42	9 image ( name fact24.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 220.66, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact24.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00324 - 2.64	9 image ( name fact23.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 220.88, "duration": 0.220000000000027
		,"layer": "00009", "image": "fact23.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00325 - 2.86	9 image ( name fact22.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 221.1, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact22.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00326 - 3.08	9 image ( name fact21.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 221.32, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact21.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00327 - 3.30	9 image ( name fact20.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 221.54, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact20.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00328 - 3.52	9 image ( name fact19.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 221.76, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact19.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00329 - 3.74	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 221.98, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00330 - 3.96	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 222.2, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00331 - 4.18	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 222.42, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00332 - 4.4	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 222.64, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00333 - 4.62	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 222.86, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00334 - 4.84	9 image ( name fact13.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 223.08, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact13.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00335 - 5.06	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 223.3, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00336 - 5.28	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 223.52, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00337 - 5.5	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 223.74, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00338 - 5.72	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 223.96, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00339 - 5.94	9 image ( name fact18.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 224.18, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact18.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00340 - 6.16	9 image ( name fact17.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 224.4, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact17.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00341 - 6.38	9 image ( name fact16.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 224.62, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact16.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00342 - 6.6	9 image ( name fact15.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 224.84, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact15.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00009/00343 - 6.82	9 image ( name fact14.jpg position 480 240 )
	this.loader.addAnimation([{
		 "start": 225.06, "duration": 0.219999999999999
		,"layer": "00009", "image": "fact14.png"
		,"position":[
			 {"x":480,"y":240}
		]
	}]);
	//00010/00001 - 0	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 168.96, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00002 - 0.22	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 169.18, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00003 - 0.44	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 169.4, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00004 - 0.66	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 169.62, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00005 - 0.88	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 169.84, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00006 - 1.1	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 170.06, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00007 - 1.32	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 170.28, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00008 - 1.54	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 170.5, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00009 - 1.76	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 170.72, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00010 - 1.98	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 170.94, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00011 - 2.20	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 171.16, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00012 - 2.42	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 171.38, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00013 - 2.64	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 171.6, "duration": 0.220000000000027
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00014 - 2.86	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 171.82, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00015 - 3.08	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 172.04, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00016 - 3.30	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 172.26, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00017 - 3.52	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 172.48, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00018 - 3.74	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 172.7, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00019 - 3.96	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 172.92, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00020 - 4.18	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 173.14, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00021 - 4.4	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 173.36, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00022 - 4.62	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 173.58, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00023 - 4.84	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 173.8, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00024 - 5.06	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 174.02, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00025 - 5.28	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 174.24, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00026 - 5.5	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 174.46, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00027 - 5.72	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 174.68, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00028 - 5.94	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 174.9, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00029 - 6.16	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 175.12, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00030 - 6.38	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 175.34, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00031 - 6.6	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 175.56, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00032 - 6.82	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 175.78, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00033 - 0	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 176, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00034 - 0.22	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 176.22, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00035 - 0.44	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 176.44, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00036 - 0.66	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 176.66, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00037 - 0.88	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 176.88, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00038 - 1.1	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 177.1, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00039 - 1.32	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 177.32, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00040 - 1.54	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 177.54, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00041 - 1.76	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 177.76, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00042 - 1.98	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 177.98, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00043 - 2.20	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 178.2, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00044 - 2.42	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 178.42, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00045 - 2.64	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 178.64, "duration": 0.220000000000027
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00046 - 2.86	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 178.86, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00047 - 3.08	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 179.08, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00048 - 3.30	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 179.3, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00049 - 3.52	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 179.52, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00050 - 3.74	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 179.74, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00051 - 3.96	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 179.96, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00052 - 4.18	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 180.18, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00053 - 4.4	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 180.4, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00054 - 4.62	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 180.62, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00055 - 4.84	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 180.84, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00056 - 5.06	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 181.06, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00057 - 5.28	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 181.28, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00058 - 5.5	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 181.5, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00059 - 5.72	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 181.72, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00060 - 5.94	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 181.94, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00061 - 6.16	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 182.16, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00062 - 6.38	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 182.38, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00063 - 6.6	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 182.6, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00064 - 6.82	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 182.82, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00065 - 0	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 183.04, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00066 - 0.22	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 183.26, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00067 - 0.44	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 183.48, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00068 - 0.66	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 183.7, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00069 - 0.88	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 183.92, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00070 - 1.1	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 184.14, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00071 - 1.32	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 184.36, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00072 - 1.54	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 184.58, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00073 - 1.76	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 184.8, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00074 - 1.98	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 185.02, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00075 - 2.20	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 185.24, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00076 - 2.42	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 185.46, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00077 - 2.64	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 185.68, "duration": 0.220000000000027
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00078 - 2.86	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 185.9, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00079 - 3.08	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 186.12, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00080 - 3.30	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 186.34, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00081 - 3.52	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 186.56, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00082 - 3.74	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 186.78, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00083 - 3.96	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 187, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00084 - 4.18	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 187.22, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00085 - 4.4	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 187.44, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00086 - 4.62	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 187.66, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00087 - 4.84	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 187.88, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00088 - 5.06	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 188.1, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00089 - 5.28	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 188.32, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00090 - 5.5	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 188.54, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00091 - 5.72	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 188.76, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00092 - 5.94	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 188.98, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00093 - 6.16	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 189.2, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00094 - 6.38	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 189.42, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00095 - 6.6	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 189.64, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00096 - 6.82	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 189.86, "duration": 0.220000000000027
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00097 - 0	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 190.08, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00098 - 0.22	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 190.3, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00099 - 0.44	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 190.52, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00100 - 0.66	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 190.74, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00101 - 0.88	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 190.96, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00102 - 1.1	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 191.18, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00103 - 1.32	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 191.4, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00104 - 1.54	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 191.62, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00105 - 1.76	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 191.84, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00106 - 1.98	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 192.06, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00107 - 2.20	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 192.28, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00108 - 2.42	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 192.5, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00109 - 2.64	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 192.72, "duration": 0.220000000000027
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00110 - 2.86	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 192.94, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00111 - 3.08	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 193.16, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00112 - 3.30	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 193.38, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00113 - 3.52	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 193.6, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00114 - 3.74	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 193.82, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00115 - 3.96	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 194.04, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00116 - 4.18	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 194.26, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00117 - 4.4	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 194.48, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00118 - 4.62	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 194.7, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00119 - 4.84	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 194.92, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00120 - 5.06	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 195.14, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00121 - 5.28	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 195.36, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00122 - 5.5	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 195.58, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00123 - 5.72	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 195.8, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00124 - 5.94	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 196.02, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00125 - 6.16	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 196.24, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00126 - 6.38	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 196.46, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00127 - 6.6	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 196.68, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00128 - 6.82	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 196.9, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00129 - 0	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 197.12, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00130 - 0.22	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 197.34, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00131 - 0.44	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 197.56, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00132 - 0.66	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 197.78, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00133 - 0.88	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 198, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00134 - 1.1	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 198.22, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00135 - 1.32	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 198.44, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00136 - 1.54	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 198.66, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00137 - 1.76	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 198.88, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00138 - 1.98	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 199.1, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00139 - 2.20	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 199.32, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00140 - 2.42	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 199.54, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00141 - 2.64	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 199.76, "duration": 0.220000000000027
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00142 - 2.86	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 199.98, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00143 - 3.08	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 200.2, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00144 - 3.30	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 200.42, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00145 - 3.52	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 200.64, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00146 - 3.74	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 200.86, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00147 - 3.96	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 201.08, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00148 - 4.18	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 201.3, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00149 - 4.4	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 201.52, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00150 - 4.62	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 201.74, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00151 - 4.84	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 201.96, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00152 - 5.06	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 202.18, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00153 - 5.28	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 202.4, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00154 - 5.5	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 202.62, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00155 - 5.72	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 202.84, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00156 - 5.94	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 203.06, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00157 - 6.16	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 203.28, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00158 - 6.38	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 203.5, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00159 - 6.6	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 203.72, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00160 - 6.82	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 203.94, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00161 - 0	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 204.16, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00162 - 0.22	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 204.38, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00163 - 0.44	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 204.6, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00164 - 0.66	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 204.82, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00165 - 0.88	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 205.04, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00166 - 1.1	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 205.26, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00167 - 1.32	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 205.48, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00168 - 1.54	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 205.7, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00169 - 1.76	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 205.92, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00170 - 1.98	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 206.14, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00171 - 2.20	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 206.36, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00172 - 2.42	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 206.58, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00173 - 2.64	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 206.8, "duration": 0.220000000000027
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00174 - 2.86	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 207.02, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00175 - 3.08	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 207.24, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00176 - 3.30	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 207.46, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00177 - 3.52	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 207.68, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00178 - 3.74	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 207.9, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00179 - 3.96	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 208.12, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00180 - 4.18	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 208.34, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00181 - 4.4	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 208.56, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00182 - 4.62	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 208.78, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00183 - 4.84	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 209, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00184 - 5.06	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 209.22, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00185 - 5.28	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 209.44, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00186 - 5.5	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 209.66, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00187 - 5.72	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 209.88, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00188 - 5.94	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 210.1, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00189 - 6.16	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 210.32, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00190 - 6.38	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 210.54, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00191 - 6.6	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 210.76, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00192 - 6.82	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 210.98, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00193 - 0	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 211.2, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00194 - 0.22	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 211.42, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00195 - 0.44	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 211.64, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00196 - 0.66	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 211.86, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00197 - 0.88	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 212.08, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00198 - 1.1	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 212.3, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00199 - 1.32	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 212.52, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00200 - 1.54	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 212.74, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00201 - 1.76	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 212.96, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00202 - 1.98	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 213.18, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00203 - 2.20	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 213.4, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00204 - 2.42	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 213.62, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00205 - 2.64	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 213.84, "duration": 0.220000000000027
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00206 - 2.86	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 214.06, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00207 - 3.08	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 214.28, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00208 - 3.30	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 214.5, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00209 - 3.52	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 214.72, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00210 - 3.74	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 214.94, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00211 - 3.96	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 215.16, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00212 - 4.18	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 215.38, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00213 - 4.4	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 215.6, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00214 - 4.62	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 215.82, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00215 - 4.84	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 216.04, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00216 - 5.06	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 216.26, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00217 - 5.28	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 216.48, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00218 - 5.5	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 216.7, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00219 - 5.72	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 216.92, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00220 - 5.94	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 217.14, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00221 - 6.16	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 217.36, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00222 - 6.38	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 217.58, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00223 - 6.6	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 217.8, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00224 - 6.82	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 218.02, "duration": 0.220000000000027
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00225 - 0	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 218.24, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00226 - 0.22	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 218.46, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00227 - 0.44	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 218.68, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00228 - 0.66	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 218.9, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00229 - 0.88	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 219.12, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00230 - 1.1	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 219.34, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00231 - 1.32	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 219.56, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00232 - 1.54	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 219.78, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00233 - 1.76	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 220, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00234 - 1.98	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 220.22, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00235 - 2.20	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 220.44, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00236 - 2.42	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 220.66, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00237 - 2.64	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 220.88, "duration": 0.220000000000027
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00238 - 2.86	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 221.1, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00239 - 3.08	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 221.32, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00240 - 3.30	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 221.54, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00241 - 3.52	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 221.76, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00242 - 3.74	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 221.98, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00243 - 3.96	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 222.2, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00244 - 4.18	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 222.42, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00245 - 4.4	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 222.64, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00246 - 4.62	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 222.86, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00247 - 4.84	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 223.08, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00248 - 5.06	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 223.3, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00249 - 5.28	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 223.52, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00250 - 5.5	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 223.74, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00251 - 5.72	10 image ( name futur01.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 223.96, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur01.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00252 - 5.94	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 224.18, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00253 - 6.16	10 image ( name futur03.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 224.4, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur03.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00254 - 6.38	10 image ( name futur04.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 224.62, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur04.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00255 - 6.6	10 image ( name futur00.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 224.84, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur00.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00010/00256 - 6.82	10 image ( name futur02.jpg position 160 240 )
	this.loader.addAnimation([{
		 "start": 225.06, "duration": 0.219999999999999
		,"layer": "00010", "image": "futur02.png"
		,"position":[
			 {"x":160,"y":240}
		]
	}]);
	//00015/00001 - 0	15 image ( name tex01.jpg alphaname tex01.jpg add )
	this.loader.addAnimation([{
		 "start": 0, "duration": 0.44
		,"layer": "00015", "image": "tex01.png"
		,"additive": true
	}]);
	//00015/00002 - 0.44	15 image ( name tex02.jpg alphaname tex02.jpg add )
	this.loader.addAnimation([{
		 "start": 0.44, "duration": 0.44
		,"layer": "00015", "image": "tex02.png"
		,"additive": true
	}]);
	//00015/00003 - 0.88	15 image ( name tex03.jpg alphaname tex03.jpg add )
	this.loader.addAnimation([{
		 "start": 0.88, "duration": 0.44
		,"layer": "00015", "image": "tex03.png"
		,"additive": true
	}]);
	//00015/00004 - 1.32	15 image ( name tex04.jpg alphaname tex04.jpg add )
	this.loader.addAnimation([{
		 "start": 1.32, "duration": 0.44
		,"layer": "00015", "image": "tex04.png"
		,"additive": true
	}]);
	//00015/00005 - 1.76	15 image ( name tex05.jpg alphaname tex05.jpg add )
	this.loader.addAnimation([{
		 "start": 1.76, "duration": 0.44
		,"layer": "00015", "image": "tex05.png"
		,"additive": true
	}]);
	//00015/00006 - 2.2	15 image ( name tex06.jpg alphaname tex06.jpg add )
	this.loader.addAnimation([{
		 "start": 2.2, "duration": 0.44
		,"layer": "00015", "image": "tex06.png"
		,"additive": true
	}]);
	//00015/00007 - 2.64	15 image ( name tex07.jpg alphaname tex07.jpg add )
	this.loader.addAnimation([{
		 "start": 2.64, "duration": 0.44
		,"layer": "00015", "image": "tex07.png"
		,"additive": true
	}]);
	//00015/00008 - 3.08	15 image ( name tex08.jpg alphaname tex08.jpg add )
	this.loader.addAnimation([{
		 "start": 3.08, "duration": 0.44
		,"layer": "00015", "image": "tex08.png"
		,"additive": true
	}]);
	//00015/00009 - 3.52	15 image ( name tex09.jpg alphaname tex09.jpg add )
	this.loader.addAnimation([{
		 "start": 3.52, "duration": 0.44
		,"layer": "00015", "image": "tex09.png"
		,"additive": true
	}]);
	//00015/00010 - 3.96	15 image ( name tex0a.jpg alphaname tex0a.jpg add )
	this.loader.addAnimation([{
		 "start": 3.96, "duration": 0.44
		,"layer": "00015", "image": "tex0a.png"
		,"additive": true
	}]);
	//00015/00011 - 4.4	15 image ( name tex0b.jpg alphaname tex0b.jpg add )
	this.loader.addAnimation([{
		 "start": 4.4, "duration": 0.44
		,"layer": "00015", "image": "tex0b.png"
		,"additive": true
	}]);
	//00015/00012 - 4.84	15 image ( name tex0c.jpg alphaname tex0c.jpg add )
	this.loader.addAnimation([{
		 "start": 4.84, "duration": 0.44
		,"layer": "00015", "image": "tex0c.png"
		,"additive": true
	}]);
	//00015/00013 - 5.28	15 image ( name tex0d.jpg alphaname tex0d.jpg add )
	this.loader.addAnimation([{
		 "start": 5.28, "duration": 0.44
		,"layer": "00015", "image": "tex0d.png"
		,"additive": true
	}]);
	//00015/00014 - 5.72	15 image ( name tex0e.jpg alphaname tex0e.jpg add )
	this.loader.addAnimation([{
		 "start": 5.72, "duration": 0.44
		,"layer": "00015", "image": "tex0e.png"
		,"additive": true
	}]);
	//00015/00015 - 6.16	15 image ( name tex0f.jpg alphaname tex0f.jpg add )
	this.loader.addAnimation([{
		 "start": 6.16, "duration": 0.44
		,"layer": "00015", "image": "tex0f.png"
		,"additive": true
	}]);
	//00015/00016 - 6.6	15 image ( name tex0g.jpg alphaname tex0g.jpg add )
	this.loader.addAnimation([{
		 "start": 6.6, "duration": 0.44
		,"layer": "00015", "image": "tex0g.png"
		,"additive": true
	}]);
	//00015/00017 - 0	15 image ( name text11.jpg alphaname text11.jpg add )
	this.loader.addAnimation([{
		 "start": 7.04, "duration": 0.44
		,"layer": "00015", "image": "text11.png"
		,"additive": true
	}]);
	//00015/00018 - 0.44	15 image ( name text12.jpg alphaname text12.jpg add )
	this.loader.addAnimation([{
		 "start": 7.48, "duration": 0.44
		,"layer": "00015", "image": "text12.png"
		,"additive": true
	}]);
	//00015/00019 - 0.88	15 image ( name text13.jpg alphaname text13.jpg add )
	this.loader.addAnimation([{
		 "start": 7.92, "duration": 0.44
		,"layer": "00015", "image": "text13.png"
		,"additive": true
	}]);
	//00015/00020 - 1.32	15 image ( name text14.jpg alphaname text14.jpg add )
	this.loader.addAnimation([{
		 "start": 8.36, "duration": 0.440000000000001
		,"layer": "00015", "image": "text14.png"
		,"additive": true
	}]);
	//00015/00021 - 1.76	15 image ( name text15.jpg alphaname text15.jpg add )
	this.loader.addAnimation([{
		 "start": 8.8, "duration": 0.44
		,"layer": "00015", "image": "text15.png"
		,"additive": true
	}]);
	//00015/00022 - 2.2	15 image ( name text16.jpg alphaname text16.jpg add )
	this.loader.addAnimation([{
		 "start": 9.24, "duration": 0.44
		,"layer": "00015", "image": "text16.png"
		,"additive": true
	}]);
	//00015/00023 - 2.64	15 image ( name text17.jpg alphaname text17.jpg add )
	this.loader.addAnimation([{
		 "start": 9.68, "duration": 0.440000000000001
		,"layer": "00015", "image": "text17.png"
		,"additive": true
	}]);
	//00015/00024 - 3.08	15 image ( name text18.jpg alphaname text18.jpg add )
	this.loader.addAnimation([{
		 "start": 10.12, "duration": 0.44
		,"layer": "00015", "image": "text18.png"
		,"additive": true
	}]);
	//00015/00025 - 3.52	15 image ( name text19.jpg alphaname text19.jpg add )
	this.loader.addAnimation([{
		 "start": 10.56, "duration": 0.44
		,"layer": "00015", "image": "text19.png"
		,"additive": true
	}]);
	//00015/00026 - 3.96	15 image ( name text1a.jpg alphaname text1a.jpg add )
	this.loader.addAnimation([{
		 "start": 11, "duration": 0.440000000000001
		,"layer": "00015", "image": "text1a.png"
		,"additive": true
	}]);
	//00015/00027 - 4.4	15 image ( name text1b.jpg alphaname text1b.jpg add )
	this.loader.addAnimation([{
		 "start": 11.44, "duration": 0.439999999999998
		,"layer": "00015", "image": "text1b.png"
		,"additive": true
	}]);
	//00015/00028 - 4.84	15 image ( name text1c.jpg alphaname text1c.jpg add )
	this.loader.addAnimation([{
		 "start": 11.88, "duration": 0.440000000000001
		,"layer": "00015", "image": "text1c.png"
		,"additive": true
	}]);
	//00015/00029 - 5.28	15 image ( name text1d.jpg alphaname text1d.jpg add )
	this.loader.addAnimation([{
		 "start": 12.32, "duration": 0.44
		,"layer": "00015", "image": "text1d.png"
		,"additive": true
	}]);
	//00015/00030 - 5.72	15 image ( name text1e.jpg alphaname text1e.jpg add )
	this.loader.addAnimation([{
		 "start": 12.76, "duration": 0.44
		,"layer": "00015", "image": "text1e.png"
		,"additive": true
	}]);
	//00015/00031 - 6.16	15 image ( name text1f.jpg alphaname text1f.jpg add )
	this.loader.addAnimation([{
		 "start": 13.2, "duration": 0.440000000000001
		,"layer": "00015", "image": "text1f.png"
		,"additive": true
	}]);
	//00015/00032 - 6.6	15 image ( name text1.jpg alphaname text1.jpg add )
	this.loader.addAnimation([{
		 "start": 13.64, "duration": 0.44
		,"layer": "00015", "image": "text1.png"
		,"additive": true
	}]);
	//00015/00033 - 0	15 image ( name tcode0.jpg add color 200 255 255 255 )
	this.loader.addAnimation([{
		 "start": 14.08, "duration": 7.04
		,"layer": "00015", "image": "tcode0.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":200}
			,{"start":14.08, "duration":5.28, "r":255, "g":255, "b":255, "a":255}
			,{"start":19.36, "duration":1.76, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00015/00034 - 0	15 image ( name buick.jpg add color 200 255 255 255 )
	this.loader.addAnimation([{
		 "start": 21.12, "duration": 7.04
		,"layer": "00015", "image": "buick.png"
		,"additive": true
		,"color":[
			 {"r":255, "g":255, "b":255, "a":200}
			,{"start":21.12, "duration":5.28, "r":255, "g":255, "b":255, "a":255}
			,{"start":26.4, "duration":1.76, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00015/00035 - 0	15 image ( name text21.jpg alphaname text21.jpg )
	this.loader.addAnimation([{
		 "start": 28.16, "duration": 7.04
		,"layer": "00015", "image": "text21.png"
	}]);
	//00015/00036 - 0	15 image ( name text22.jpg alphaname text22.jpg )
	this.loader.addAnimation([{
		 "start": 35.2, "duration": 7.04
		,"layer": "00015", "image": "text22.png"
	}]);
	//00015/00037 - 0	15 image ( name text23.jpg alphaname text23.jpg )
	this.loader.addAnimation([{
		 "start": 42.24, "duration": 7.04
		,"layer": "00015", "image": "text23.png"
	}]);
	//00015/00038 - 0	15 image ( name text24.jpg alphaname text24.jpg )
	this.loader.addAnimation([{
		 "start": 49.28, "duration": 7.04
		,"layer": "00015", "image": "text24.png"
	}]);
	//00015/00039 - 0	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 100 115 )
	this.loader.addAnimation([{
		 "start": 112.64, "duration": 0.439999999999998
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1,"y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00040 - 0.44	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 115 115 )
	this.loader.addAnimation([{
		 "start": 113.08, "duration": 0.879999999999995
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1.15,"y":1.15}
			,{"start":113.08, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00041 - 1.32	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 100 125 )
	this.loader.addAnimation([{
		 "start": 113.96, "duration": 0.88000000000001
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1,"y":1.25}
			,{"start":113.96, "duration":0.440000000000012, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00042 - 2.2	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 115 115 )
	this.loader.addAnimation([{
		 "start": 114.84, "duration": 0.879999999999995
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1.15,"y":1.15}
			,{"start":114.84, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00043 - 3.08	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 100 125 )
	this.loader.addAnimation([{
		 "start": 115.72, "duration": 0.879999999999995
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1,"y":1.25}
			,{"start":115.72, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00044 - 3.96	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 115 115 )
	this.loader.addAnimation([{
		 "start": 116.6, "duration": 0.88000000000001
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1.15,"y":1.15}
			,{"start":116.6, "duration":0.440000000000012, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00045 - 4.84	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 100 125 )
	this.loader.addAnimation([{
		 "start": 117.48, "duration": 0.439999999999998
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1,"y":1.25}
			,{"start":117.48, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00046 - 5.28	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 115 115 )
	this.loader.addAnimation([{
		 "start": 117.92, "duration": 0.439999999999998
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1.15,"y":1.15}
			,{"start":117.92, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00047 - 5.72	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 100 125 )
	this.loader.addAnimation([{
		 "start": 118.36, "duration": 0.439999999999998
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1,"y":1.25}
			,{"start":118.36, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00048 - 6.16	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 115 115 )
	this.loader.addAnimation([{
		 "start": 118.8, "duration": 0.439999999999998
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1.15,"y":1.15}
			,{"start":118.8, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00049 - 6.6	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 100 125 )
	this.loader.addAnimation([{
		 "start": 119.24, "duration": 0.88000000000001
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1,"y":1.25}
			,{"start":119.24, "duration":0.440000000000012, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00050 - 0.44	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 115 115 )
	this.loader.addAnimation([{
		 "start": 120.12, "duration": 0.879999999999995
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1.15,"y":1.15}
			,{"start":120.12, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00051 - 1.32	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 100 125 )
	this.loader.addAnimation([{
		 "start": 121, "duration": 0.88000000000001
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1,"y":1.25}
			,{"start":121, "duration":0.440000000000012, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00052 - 2.2	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 115 115 )
	this.loader.addAnimation([{
		 "start": 121.88, "duration": 0.879999999999995
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1.15,"y":1.15}
			,{"start":121.88, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00053 - 3.08	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 100 125 )
	this.loader.addAnimation([{
		 "start": 122.76, "duration": 0.879999999999995
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1,"y":1.25}
			,{"start":122.76, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00054 - 3.96	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 115 115 )
	this.loader.addAnimation([{
		 "start": 123.64, "duration": 0.88000000000001
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1.15,"y":1.15}
			,{"start":123.64, "duration":0.440000000000012, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00055 - 4.84	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 100 125 )
	this.loader.addAnimation([{
		 "start": 124.52, "duration": 0.439999999999998
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1,"y":1.25}
			,{"start":124.52, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00056 - 5.28	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 115 115 )
	this.loader.addAnimation([{
		 "start": 124.96, "duration": 0.439999999999998
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1.15,"y":1.15}
			,{"start":124.96, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00057 - 5.72	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 100 125 )
	this.loader.addAnimation([{
		 "start": 125.4, "duration": 0.439999999999998
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1,"y":1.25}
			,{"start":125.4, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00058 - 6.16	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 115 115 )
	this.loader.addAnimation([{
		 "start": 125.84, "duration": 0.439999999999998
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1.15,"y":1.15}
			,{"start":125.84, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00059 - 6.6	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 100 125 )
	this.loader.addAnimation([{
		 "start": 126.28, "duration": 0.879999999999995
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1,"y":1.25}
			,{"start":126.28, "duration":0.440000000000012, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00060 - 0.44	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 115 115 )
	this.loader.addAnimation([{
		 "start": 127.16, "duration": 0.879999999999995
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1.15,"y":1.15}
			,{"start":127.16, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00061 - 1.32	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 100 125 )
	this.loader.addAnimation([{
		 "start": 128.04, "duration": 0.879999999999995
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1,"y":1.25}
			,{"start":128.04, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00062 - 2.2	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 115 115 )
	this.loader.addAnimation([{
		 "start": 128.92, "duration": 0.880000000000024
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1.15,"y":1.15}
			,{"start":128.92, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00063 - 3.08	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 100 125 )
	this.loader.addAnimation([{
		 "start": 129.8, "duration": 0.879999999999995
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1,"y":1.25}
			,{"start":129.8, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00064 - 3.96	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 115 115 )
	this.loader.addAnimation([{
		 "start": 130.68, "duration": 0.879999999999995
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1.15,"y":1.15}
			,{"start":130.68, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00065 - 4.84	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 100 125 )
	this.loader.addAnimation([{
		 "start": 131.56, "duration": 0.439999999999998
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1,"y":1.25}
			,{"start":131.56, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00066 - 5.28	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 115 115 )
	this.loader.addAnimation([{
		 "start": 132, "duration": 0.439999999999998
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1.15,"y":1.15}
			,{"start":132, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00067 - 5.72	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 100 125 )
	this.loader.addAnimation([{
		 "start": 132.44, "duration": 0.439999999999998
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1,"y":1.25}
			,{"start":132.44, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00068 - 6.16	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 115 115 )
	this.loader.addAnimation([{
		 "start": 132.88, "duration": 0.439999999999998
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1.15,"y":1.15}
			,{"start":132.88, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00069 - 6.6	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 100 125 )
	this.loader.addAnimation([{
		 "start": 133.32, "duration": 0.879999999999995
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1,"y":1.25}
			,{"start":133.32, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00070 - 0.44	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 115 115 )
	this.loader.addAnimation([{
		 "start": 134.2, "duration": 0.879999999999995
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1.15,"y":1.15}
			,{"start":134.2, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00071 - 1.32	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 100 125 )
	this.loader.addAnimation([{
		 "start": 135.08, "duration": 0.879999999999995
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1,"y":1.25}
			,{"start":135.08, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00072 - 2.2	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 115 115 )
	this.loader.addAnimation([{
		 "start": 135.96, "duration": 0.880000000000024
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1.15,"y":1.15}
			,{"start":135.96, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00073 - 3.08	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 100 125 )
	this.loader.addAnimation([{
		 "start": 136.84, "duration": 0.879999999999995
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1,"y":1.25}
			,{"start":136.84, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00074 - 3.96	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 115 115 )
	this.loader.addAnimation([{
		 "start": 137.72, "duration": 0.879999999999995
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1.15,"y":1.15}
			,{"start":137.72, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00075 - 4.84	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 100 125 )
	this.loader.addAnimation([{
		 "start": 138.6, "duration": 0.439999999999998
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1,"y":1.25}
			,{"start":138.6, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00076 - 5.28	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 115 115 )
	this.loader.addAnimation([{
		 "start": 139.04, "duration": 0.439999999999998
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1.15,"y":1.15}
			,{"start":139.04, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00077 - 5.72	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 100 125 )
	this.loader.addAnimation([{
		 "start": 139.48, "duration": 0.439999999999998
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1,"y":1.25}
			,{"start":139.48, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00078 - 6.16	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 115 115 )
	this.loader.addAnimation([{
		 "start": 139.92, "duration": 0.439999999999998
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1.15,"y":1.15}
			,{"start":139.92, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00079 - 6.6	15 image ( name freddie.jpg alphaname freddiea.jpg position 550 550 scale 100 125 )
	this.loader.addAnimation([{
		 "start": 140.36, "duration": 0.440000000000026
		,"layer": "00015", "image": "freddie.png"
		,"scale":[
			 {"x":1,"y":1.25}
			,{"start":140.36, "duration":0.439999999999998, "x":1, "y":1.15}
		]
		,"position":[
			 {"x":550,"y":550}
		]
	}]);
	//00015/00080 - 0	15 image ( name credz.jpg alphaname credza.jpg scale 50 50 )
	this.loader.addAnimation([{
		 "start": 140.8, "duration": 14.08
		,"layer": "00015", "image": "credz.png"
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":140.8, "duration":14.08, "x":1.5, "y":1.5}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":140.8, "duration":14.08, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00015/00081 - 0	15 image ( name jack.jpg alphaname jacka.jpg )
	this.loader.addAnimation([{
		 "start": 154.88, "duration": 14.08
		,"layer": "00015", "image": "jack.png"
	}]);
	//00015/00082 - 0	15 image ( name haijer.jpg alphaname haijera.jpg )
	this.loader.addAnimation([{
		 "start": 168.96, "duration": 56.32
		,"layer": "00015", "image": "haijer.png"
	}]);
	//00016/00001 - 0	16 image ( name scream.jpg alphaname screama.jpg scale 150 150 )
	this.loader.addAnimation([{
		 "start": 112.64, "duration": 7.04000000000001
		,"layer": "00016", "image": "scream.png"
		,"scale":[
			 {"x":1.5,"y":1.5}
			,{"start":112.64, "duration":7.04000000000001, "x":3, "y":3}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":112.64, "duration":7.04000000000001, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00016/00002 - 0	16 image ( name esso12a.jpg alphaname esso12a.jpg scale 50 50 )
	this.loader.addAnimation([{
		 "start": 119.68, "duration": 0.879999999999995
		,"layer": "00016", "image": "esso12a.png"
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":119.68, "duration":0.879999999999995, "x":1, "y":1}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":119.68, "duration":0.879999999999995, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00016/00003 - 0.88	16 image ( name lang.jpg alphaname lang.jpg scale 75 75 )
	this.loader.addAnimation([{
		 "start": 120.56, "duration": 0.88000000000001
		,"layer": "00016", "image": "lang.png"
		,"scale":[
			 {"x":0.75,"y":0.75}
			,{"start":120.56, "duration":0.88000000000001, "x":1.5, "y":1.5}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":120.56, "duration":0.88000000000001, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00016/00004 - 1.76	16 image ( name racism.jpg alphaname racisma.jpg scale 150 150 )
	this.loader.addAnimation([{
		 "start": 121.44, "duration": 0.879999999999995
		,"layer": "00016", "image": "racism.png"
		,"scale":[
			 {"x":1.5,"y":1.5}
			,{"start":121.44, "duration":0.879999999999995, "x":3, "y":3}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":121.44, "duration":0.879999999999995, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00016/00005 - 2.64	16 image ( name mari.jpg alphaname maria.jpg scale 100 100 )
	this.loader.addAnimation([{
		 "start": 122.32, "duration": 0.879999999999995
		,"layer": "00016", "image": "mari.png"
		,"scale":[
			 {"x":1,"y":1}
			,{"start":122.32, "duration":0.879999999999995, "x":2, "y":2}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":122.32, "duration":0.879999999999995, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00016/00006 - 3.52	16 image ( name crack.jpg alphaname cracka.jpg scale 100 100 )
	this.loader.addAnimation([{
		 "start": 123.2, "duration": 0.88000000000001
		,"layer": "00016", "image": "crack.png"
		,"scale":[
			 {"x":1,"y":1}
			,{"start":123.2, "duration":0.88000000000001, "x":2, "y":2}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":123.2, "duration":0.88000000000001, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00016/00007 - 4.4	16 image ( name drugs.jpg alphaname drugsa.jpg scale 150 150 )
	this.loader.addAnimation([{
		 "start": 124.08, "duration": 0.439999999999998
		,"layer": "00016", "image": "drugs.png"
		,"scale":[
			 {"x":1.5,"y":1.5}
			,{"start":124.08, "duration":0.439999999999998, "x":3, "y":3}
		]
	}]);
	//00016/00008 - 4.84	16 image ( name esso12a.jpg alphaname esso12a.jpg scale 50 50 )
	this.loader.addAnimation([{
		 "start": 124.52, "duration": 1.75999999999999
		,"layer": "00016", "image": "esso12a.png"
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":124.52, "duration":1.75999999999999, "x":1, "y":1}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":124.52, "duration":1.75999999999999, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00016/00009 - 0	16 image ( name esso12a.jpg alphaname esso12a.jpg scale 50 50 )
	this.loader.addAnimation([{
		 "start": 126.72, "duration": 0.879999999999995
		,"layer": "00016", "image": "esso12a.png"
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":126.72, "duration":0.879999999999995, "x":1, "y":1}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":126.72, "duration":0.879999999999995, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00016/00010 - 0.88	16 image ( name lang.jpg alphaname lang.jpg scale 75 75 )
	this.loader.addAnimation([{
		 "start": 127.6, "duration": 0.879999999999995
		,"layer": "00016", "image": "lang.png"
		,"scale":[
			 {"x":0.75,"y":0.75}
			,{"start":127.6, "duration":0.879999999999995, "x":1.5, "y":1.5}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":127.6, "duration":0.879999999999995, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00016/00011 - 1.76	16 image ( name racism.jpg alphaname racisma.jpg scale 150 150 )
	this.loader.addAnimation([{
		 "start": 128.48, "duration": 0.879999999999995
		,"layer": "00016", "image": "racism.png"
		,"scale":[
			 {"x":1.5,"y":1.5}
			,{"start":128.48, "duration":0.879999999999995, "x":3, "y":3}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":128.48, "duration":0.879999999999995, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00016/00012 - 2.64	16 image ( name mari.jpg alphaname maria.jpg scale 100 100 )
	this.loader.addAnimation([{
		 "start": 129.36, "duration": 0.880000000000024
		,"layer": "00016", "image": "mari.png"
		,"scale":[
			 {"x":1,"y":1}
			,{"start":129.36, "duration":0.880000000000024, "x":2, "y":2}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":129.36, "duration":0.880000000000024, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00016/00013 - 3.52	16 image ( name crack.jpg alphaname cracka.jpg scale 100 100 )
	this.loader.addAnimation([{
		 "start": 130.24, "duration": 0.879999999999995
		,"layer": "00016", "image": "crack.png"
		,"scale":[
			 {"x":1,"y":1}
			,{"start":130.24, "duration":0.879999999999995, "x":2, "y":2}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":130.24, "duration":0.879999999999995, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00016/00014 - 4.4	16 image ( name drugs.jpg alphaname drugsa.jpg scale 150 150 )
	this.loader.addAnimation([{
		 "start": 131.12, "duration": 0.439999999999998
		,"layer": "00016", "image": "drugs.png"
		,"scale":[
			 {"x":1.5,"y":1.5}
			,{"start":131.12, "duration":0.439999999999998, "x":3, "y":3}
		]
	}]);
	//00016/00015 - 4.84	16 image ( name esso12a.jpg alphaname esso12a.jpg scale 25 25 )
	this.loader.addAnimation([{
		 "start": 131.56, "duration": 1.75999999999999
		,"layer": "00016", "image": "esso12a.png"
		,"scale":[
			 {"x":0.25,"y":0.25}
			,{"start":131.56, "duration":1.75999999999999, "x":0.5, "y":0.5}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":131.56, "duration":1.75999999999999, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00016/00016 - 0	16 image ( name esso12a.jpg alphaname esso12a.jpg scale 50 50 )
	this.loader.addAnimation([{
		 "start": 133.76, "duration": 0.879999999999995
		,"layer": "00016", "image": "esso12a.png"
		,"scale":[
			 {"x":0.5,"y":0.5}
			,{"start":133.76, "duration":0.879999999999995, "x":1, "y":1}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":133.76, "duration":0.879999999999995, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00016/00017 - 0.88	16 image ( name lang.jpg alphaname lang.jpg scale 75 75 )
	this.loader.addAnimation([{
		 "start": 134.64, "duration": 0.879999999999995
		,"layer": "00016", "image": "lang.png"
		,"scale":[
			 {"x":0.75,"y":0.75}
			,{"start":134.64, "duration":0.879999999999995, "x":1.5, "y":1.5}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":134.64, "duration":0.879999999999995, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00016/00018 - 1.76	16 image ( name racism.jpg alphaname racisma.jpg scale 150 150 )
	this.loader.addAnimation([{
		 "start": 135.52, "duration": 0.879999999999995
		,"layer": "00016", "image": "racism.png"
		,"scale":[
			 {"x":1.5,"y":1.5}
			,{"start":135.52, "duration":0.879999999999995, "x":3, "y":3}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":135.52, "duration":0.879999999999995, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00016/00019 - 2.64	16 image ( name mari.jpg alphaname maria.jpg scale 100 100 )
	this.loader.addAnimation([{
		 "start": 136.4, "duration": 0.880000000000024
		,"layer": "00016", "image": "mari.png"
		,"scale":[
			 {"x":1,"y":1}
			,{"start":136.4, "duration":0.880000000000024, "x":2, "y":2}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":136.4, "duration":0.880000000000024, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00016/00020 - 3.52	16 image ( name crack.jpg alphaname cracka.jpg scale 100 100 )
	this.loader.addAnimation([{
		 "start": 137.28, "duration": 0.879999999999995
		,"layer": "00016", "image": "crack.png"
		,"scale":[
			 {"x":1,"y":1}
			,{"start":137.28, "duration":0.879999999999995, "x":2, "y":2}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":137.28, "duration":0.879999999999995, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00016/00021 - 4.4	16 image ( name drugs.jpg alphaname drugsa.jpg scale 150 150 )
	this.loader.addAnimation([{
		 "start": 138.16, "duration": 0.439999999999998
		,"layer": "00016", "image": "drugs.png"
		,"scale":[
			 {"x":1.5,"y":1.5}
			,{"start":138.16, "duration":0.439999999999998, "x":3, "y":3}
		]
	}]);
	//00016/00022 - 4.84	16 image ( name esso12a.jpg alphaname esso12a.jpg scale 25 25 )
	this.loader.addAnimation([{
		 "start": 138.6, "duration": 1.75999999999999
		,"layer": "00016", "image": "esso12a.png"
		,"scale":[
			 {"x":0.25,"y":0.25}
			,{"start":138.6, "duration":1.75999999999999, "x":0.5, "y":0.5}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":138.6, "duration":1.75999999999999, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00017/00001 - 0	17 image ( name pyor.jpg scale 150 150 color 25 255 255 255 add )
	this.loader.addAnimation([{
		 "start": 84.48, "duration": 28.16
		,"layer": "00017", "image": "pyor.png"
		,"additive": true
		,"angle":[
			 {"degreesZ":0}
			,{"start":84.48, "duration":28.16, "degreesZ":-3600}
		]
		,"scale":[
			 {"x":1.5,"y":1.5}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":25}
		]
	}]);
	//00018/00001 - 56.32	18 image ( name textdar2.jpg alphaname textdar.jpg color 250 255 255 255 )
	this.loader.addAnimation([{
		 "start": 56.32, "duration": 28.16
		,"layer": "00018", "image": "textdar2.png"
		,"color":[
			 {"r":255, "g":255, "b":255, "a":250}
		]
	}]);
	//00018/00002 - 0	18 image ( name ending.jpg color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 225.28, "duration": 21.12
		,"layer": "00018", "image": "ending.png"
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":225.28, "duration":0.439999999999998, "r":255, "g":255, "b":255, "a":255}
			,{"start":225.72, "duration":6.59999999999999, "r":255, "g":255, "b":255, "a":255}
			,{"start":232.32, "duration":7.04000000000002, "r":0, "g":0, "b":0, "a":0}
		]
	}]);
	//00019/00001 - 0	19 image ( name flas.jpg color 255 255 255 255 )
	this.loader.addAnimation([{
		 "start": 28.16, "duration": 1.1
		,"layer": "00019", "image": "flas.png"
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":28.16, "duration":1.1, "r":0, "g":0, "b":0, "a":0}
		]
	}]);
	//00019/00002 - 0	19 image ( name flas.jpg color 255 255 255 255 )
	this.loader.addAnimation([{
		 "start": 56.32, "duration": 0.880000000000003
		,"layer": "00019", "image": "flas.png"
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":56.32, "duration":0.880000000000003, "r":0, "g":0, "b":0, "a":0}
		]
	}]);
	//00019/00003 - 0	19 image ( name flas.jpg color 255 255 255 255 )
	this.loader.addAnimation([{
		 "start": 63.36, "duration": 0.879999999999995
		,"layer": "00019", "image": "flas.png"
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":63.36, "duration":0.879999999999995, "r":0, "g":0, "b":0, "a":0}
		]
	}]);
	//00019/00004 - 0	19 image ( name flas.jpg color 255 255 255 255 )
	this.loader.addAnimation([{
		 "start": 70.4, "duration": 0.879999999999995
		,"layer": "00019", "image": "flas.png"
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":70.4, "duration":0.879999999999995, "r":0, "g":0, "b":0, "a":0}
		]
	}]);
	//00019/00005 - 0	19 image ( name flas.jpg color 255 255 255 255 )
	this.loader.addAnimation([{
		 "start": 77.44, "duration": 0.879999999999995
		,"layer": "00019", "image": "flas.png"
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":77.44, "duration":0.879999999999995, "r":0, "g":0, "b":0, "a":0}
		]
	}]);
	//00019/00006 - 0	19 image ( name flas.jpg color 255 255 255 255 )
	this.loader.addAnimation([{
		 "start": 84.48, "duration": 1.09999999999999
		,"layer": "00019", "image": "flas.png"
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":84.48, "duration":1.09999999999999, "r":0, "g":0, "b":0, "a":0}
		]
	}]);
	//00019/00007 - 0	19 image ( name flas.jpg color 255 255 255 255 )
	this.loader.addAnimation([{
		 "start": 112.64, "duration": 1.09999999999999
		,"layer": "00019", "image": "flas.png"
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":112.64, "duration":1.09999999999999, "r":0, "g":0, "b":0, "a":0}
		]
	}]);
	//00019/00008 - 0	19 image ( name flas.jpg color 255 255 255 255 )
	this.loader.addAnimation([{
		 "start": 140.8, "duration": 1.09999999999999
		,"layer": "00019", "image": "flas.png"
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":140.8, "duration":1.09999999999999, "r":0, "g":0, "b":0, "a":0}
		]
	}]);
	//00019/00009 - 0	19 image ( name flas.jpg color 255 255 255 255 )
	this.loader.addAnimation([{
		 "start": 154.88, "duration": 1.09999999999999
		,"layer": "00019", "image": "flas.png"
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":154.88, "duration":1.09999999999999, "r":0, "g":0, "b":0, "a":0}
		]
	}]);
	//00019/00010 - 0	19 image ( name flas.jpg color 255 255 255 255 )
	this.loader.addAnimation([{
		 "start": 168.96, "duration": 1.09999999999999
		,"layer": "00019", "image": "flas.png"
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":168.96, "duration":1.09999999999999, "r":0, "g":0, "b":0, "a":0}
		]
	}]);
	//00019/00011 - 0	19 image ( name flas.jpg color 255 255 255 255 )
	this.loader.addAnimation([{
		 "start": 183.04, "duration": 1.09999999999999
		,"layer": "00019", "image": "flas.png"
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":183.04, "duration":1.09999999999999, "r":0, "g":0, "b":0, "a":0}
		]
	}]);
	//00019/00012 - 0	19 image ( name flas.jpg color 255 255 255 255 )
	this.loader.addAnimation([{
		 "start": 197.12, "duration": 1.09999999999999
		,"layer": "00019", "image": "flas.png"
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":197.12, "duration":1.09999999999999, "r":0, "g":0, "b":0, "a":0}
		]
	}]);
	//00019/00013 - 0	19 image ( name flas.jpg color 255 255 255 255 )
	this.loader.addAnimation([{
		 "start": 211.2, "duration": 1.09999999999999
		,"layer": "00019", "image": "flas.png"
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":211.2, "duration":1.09999999999999, "r":0, "g":0, "b":0, "a":0}
		]
	}]);
	//00019/00014 - 0	19 image ( name flas.jpg color 255 255 255 255 )
	this.loader.addAnimation([{
		 "start": 225.28, "duration": 1.09999999999999
		,"layer": "00019", "image": "flas.png"
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":225.28, "duration":1.09999999999999, "r":0, "g":0, "b":0, "a":0}
		]
	}]);
	//00020/00001 - 0	20 image ( name scan.jpg alphaname scana.jpg color 200 255 255 255 )
	this.loader.addAnimation([{
		 "start": 0, "duration": 246.4
		,"layer": "00020", "image": "scan.png"
		,"color":[
			 {"r":255, "g":255, "b":255, "a":200}
		]
	}]);
}
