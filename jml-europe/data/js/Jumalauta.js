Jumalauta.prototype.init = function()
{
	//00001/00001 - 0		1 scene ( name bgfx_1.3ds camera Camera01 fps 2 )
	this.loader.addAnimation([{
		 "start": 0, "duration": 300
		,"layer": "00001", "object": "bgfx_1.3ds"
		,"camera": "Camera01"
		,"fps": 2
	}]);
	//00002/00001 - 0		2 image ( name zeus_bg.jpg color 100 255 255 255 scale 50 67 )
	this.loader.addAnimation([{
		 "start": 126.5454545, "duration": 34.909090955
		,"layer": "00002", "image": "zeus_bg.png"
		,"scale":[
			 {"x":0.5,"y":0.67}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":100}
		]
	}]);
	//00003/00001 - 2.182	3 image ( name nuke1.jpg alphaname nuke1_alpha.jpg scale 40 53 position 500 240 )
	this.loader.addAnimation([{
		 "start": 56.7274545455, "duration": 6.5452727345
		,"layer": "00003", "image": "nuke1.png"
		,"scale":[
			 {"x":0.4,"y":0.53}
			,{"start":56.7274545455, "duration":6.5452727345, "x":0.5, "y":0.67}
		]
		,"position":[
			 {"x":500,"y":240}
			,{"start":56.7274545455, "duration":6.5452727345, "x":500, "y":220}
		]
	}]);
	//00003/00002 - 0		3 image ( name kremlin.jpg scale 60 80 )
	this.loader.addAnimation([{
		 "start": 63.27272728, "duration": 17.4545454545
		,"layer": "00003", "image": "kremlin.png"
		,"scale":[
			 {"x":0.6,"y":0.8}
			,{"start":63.27272728, "duration":17.4545454545, "x":0.5, "y":0.67}
		]
	}]);
	//00003/00003 - 0		3 image ( name zeus_bg.jpg scale 50 67 )
	this.loader.addAnimation([{
		 "start": 89.45454545, "duration": 8.72727273
		,"layer": "00003", "image": "zeus_bg.png"
		,"scale":[
			 {"x":0.5,"y":0.67}
		]
	}]);
	//00003/00004 - 0		3 image ( name zeus_bg.jpg add scale 50 67 )
	this.loader.addAnimation([{
		 "start": 126.5454545, "duration": 34.909090955
		,"layer": "00003", "image": "zeus_bg.png"
		,"additive": true
		,"scale":[
			 {"x":0.5,"y":0.67}
		]
	}]);
	//00004/00001 - 2.591	4 image ( name nuke1.jpg alphaname nuke1_alpha.jpg scale 40 53 position 100 240 )
	this.loader.addAnimation([{
		 "start": 57.1364545455, "duration": 6.1362727345
		,"layer": "00004", "image": "nuke1.png"
		,"scale":[
			 {"x":0.4,"y":0.53}
			,{"start":57.1364545455, "duration":6.1362727345, "x":0.5, "y":0.67}
		]
		,"position":[
			 {"x":100,"y":240}
			,{"start":57.1364545455, "duration":6.1362727345, "x":100, "y":220}
		]
	}]);
	//00004/00002 - 0		4 image ( name dove_bg.jpg alphaname dove_bg_alpha.jpg scale 50 67 )
	this.loader.addAnimation([{
		 "start": 89.45454545, "duration": 8.72727273
		,"layer": "00004", "image": "dove_bg.png"
		,"scale":[
			 {"x":0.5,"y":0.67}
			,{"start":89.45454545, "duration":8.72727273, "x":0.55, "y":0.73}
		]
	}]);
	//00004/00003 - 0		4 image ( name scrolling_layer_2.jpg alphaname scrolling_layer_2_alpha.jpg scale 50 67 position 320 230 color 255 200 200 200  )
	this.loader.addAnimation([{
		 "start": 126.5454545, "duration": 34.909090955
		,"layer": "00004", "image": "scrolling_layer_2.png"
		,"scale":[
			 {"x":0.5,"y":0.67}
		]
		,"position":[
			 {"x":320,"y":230}
			,{"start":126.5454545, "duration":34.909090955, "x":0, "y":230}
		]
		,"color":[
			 {"r":200, "g":200, "b":200, "a":255}
		]
	}]);
	//00005/00001 - 0		5 image ( name eu_central_bank.jpg alphaname eu_central_bank_alpha.jpg scale 50 67 position 320 1000 )
	this.loader.addAnimation([{
		 "start": 0, "duration": 34.9090909091
		,"layer": "00005", "image": "eu_central_bank.png"
		,"scale":[
			 {"x":0.5,"y":0.67}
		]
		,"position":[
			 {"x":320,"y":1000}
			,{"start":0, "duration":26.1818181818, "x":320, "y":-0}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":0, "duration":26.1818181818, "r":255, "g":255, "b":255, "a":255}
		]
	}]);
	//00005/00002 - 0		5 image ( name riot_bg_1.jpg scale 50 67 color 255 255 255 255 )
	this.loader.addAnimation([{
		 "start": 34.9090909091, "duration": 6.54
		,"layer": "00005", "image": "riot_bg_1.png"
		,"scale":[
			 {"x":0.5,"y":0.67}
			,{"start":34.9090909091, "duration":6.54, "x":0.55, "y":0.74}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
		]
	}]);
	//00005/00003 - 0		5 image ( name safety.jpg alphaname safety_alpha.jpg scale 75 100 position 400 240 )
	this.loader.addAnimation([{
		 "start": 48, "duration": 6.5454545455
		,"layer": "00005", "image": "safety.png"
		,"scale":[
			 {"x":0.75,"y":1}
		]
		,"position":[
			 {"x":400,"y":240}
			,{"start":48, "duration":6.5454545455, "x":320, "y":240}
		]
	}]);
	//00005/00004 - 3		5 image ( name nuke1.jpg alphaname nuke1_alpha.jpg scale 40 53 position 400 240 )
	this.loader.addAnimation([{
		 "start": 57.5454545455, "duration": 5.7272727345
		,"layer": "00005", "image": "nuke1.png"
		,"scale":[
			 {"x":0.4,"y":0.53}
			,{"start":57.5454545455, "duration":5.7272727345, "x":0.5, "y":0.67}
		]
		,"position":[
			 {"x":400,"y":240}
			,{"start":57.5454545455, "duration":5.7272727345, "x":400, "y":220}
		]
	}]);
	//00005/00005 - 0		5 image ( name ak47.jpg alphaname ak47_alpha.jpg scale 60 40 position 335 300 angle -50 )
	this.loader.addAnimation([{
		 "start": 63.27272728, "duration": 17.4545454545
		,"layer": "00005", "image": "ak47.png"
		,"angle":[
			 {"degreesZ":-50}			,{"start":63.27272728, "duration":17.4545454545, "degreesZ":-20}
		]
		,"scale":[
			 {"x":0.6,"y":0.4}
		]
		,"position":[
			 {"x":335,"y":300}
		]
	}]);
	//00005/00006 - 0		5 image ( name dove.jpg alphaname dove_alpha.jpg scale 42 56 )
	this.loader.addAnimation([{
		 "start": 89.45454545, "duration": 8.72727273
		,"layer": "00005", "image": "dove.png"
		,"scale":[
			 {"x":0.42,"y":0.56}
			,{"start":89.45454545, "duration":8.72727273, "x":0.32, "y":0.43}
		]
	}]);
	//00005/00007 - 0		5 image ( name fullscreen_riot_3.jpg scale 60 80 )
	this.loader.addAnimation([{
		 "start": 98.18181818, "duration": 6.54545452000001
		,"layer": "00005", "image": "fullscreen_riot_3.png"
		,"scale":[
			 {"x":0.6,"y":0.8}
			,{"start":98.18181818, "duration":6.54545452000001, "x":0.5, "y":0.67}
		]
	}]);
	//00005/00008 - 0		5 image ( name beggar.jpg scale 60 80 )
	this.loader.addAnimation([{
		 "start": 104.7272727, "duration": 6.54545457
		,"layer": "00005", "image": "beggar.png"
		,"scale":[
			 {"x":0.6,"y":0.8}
			,{"start":104.7272727, "duration":6.54545457, "x":0.5, "y":0.67}
		]
	}]);
	//00005/00009 - 0		5 image ( name isis_1.jpg alphaname isis_1_alpha.jpg scale 60 80 )
	this.loader.addAnimation([{
		 "start": 111.27272727, "duration": 6.54545453
		,"layer": "00005", "image": "isis_1.png"
		,"scale":[
			 {"x":0.6,"y":0.8}
			,{"start":111.27272727, "duration":6.54545453, "x":0.5, "y":0.67}
		]
	}]);
	//00005/00010 - 0		5 image ( name mersu_palaa.jpg scale 50 67 )
	this.loader.addAnimation([{
		 "start": 117.8181818, "duration": 8.7272727
		,"layer": "00005", "image": "mersu_palaa.png"
		,"scale":[
			 {"x":0.5,"y":0.67}
			,{"start":117.8181818, "duration":8.7272727, "x":0.6, "y":0.8}
		]
	}]);
	//00005/00011 - 0		5 image ( name scrolling_layer_middle.jpg alphaname scrolling_layer_middle_alpha.jpg scale 50 67 position 370 240 )
	this.loader.addAnimation([{
		 "start": 126.5454545, "duration": 34.909090955
		,"layer": "00005", "image": "scrolling_layer_middle.png"
		,"scale":[
			 {"x":0.5,"y":0.67}
		]
		,"position":[
			 {"x":370,"y":240}
			,{"start":126.5454545, "duration":34.909090955, "x":-100, "y":240}
		]
	}]);
	//00006/00001 - 0		6 image ( name fullscreen_riot_4.jpg scale 50 67 )
	this.loader.addAnimation([{
		 "start": 41.4545454545, "duration": 6.5454545455
		,"layer": "00006", "image": "fullscreen_riot_4.png"
		,"scale":[
			 {"x":0.5,"y":0.67}
			,{"start":41.4545454545, "duration":6.54, "x":0.55, "y":0.74}
		]
	}]);
	//00006/00002 - 3.273	6 image ( name nuke1.jpg alphaname nuke1_alpha.jpg scale 40 53 position 200 240 )
	this.loader.addAnimation([{
		 "start": 57.8184545455, "duration": 5.45427273449999
		,"layer": "00006", "image": "nuke1.png"
		,"scale":[
			 {"x":0.4,"y":0.53}
			,{"start":57.8184545455, "duration":5.45427273449999, "x":0.5, "y":0.67}
		]
		,"position":[
			 {"x":200,"y":240}
			,{"start":57.8184545455, "duration":5.45427273449999, "x":200, "y":220}
		]
	}]);
	//00006/00003 - 0		6 image ( name ak47.jpg alphaname ak47_alpha.jpg scale 60 40 position 335 300 angle -50 )
	this.loader.addAnimation([{
		 "start": 63.27272728, "duration": 17.4545454545
		,"layer": "00006", "image": "ak47.png"
		,"angle":[
			 {"degreesZ":-50}			,{"start":63.27272728, "duration":17.4545454545, "degreesZ":10}
		]
		,"scale":[
			 {"x":0.6,"y":0.4}
		]
		,"position":[
			 {"x":335,"y":300}
		]
	}]);
	//00006/00004 - 0		6 image ( name scrolling_layer_1.jpg alphaname scrolling_layer_1_alpha.jpg scale 50 67 position 640 240 )
	this.loader.addAnimation([{
		 "start": 126.5454545, "duration": 34.909090955
		,"layer": "00006", "image": "scrolling_layer_1.png"
		,"scale":[
			 {"x":0.5,"y":0.67}
		]
		,"position":[
			 {"x":640,"y":240}
			,{"start":126.5454545, "duration":34.909090955, "x":0, "y":240}
		]
	}]);
	//00007/00001 - 0		7 image ( name ak47.jpg alphaname ak47_alpha.jpg scale 60 40 position 335 300 angle -50 )
	this.loader.addAnimation([{
		 "start": 63.27272728, "duration": 17.4545454545
		,"layer": "00007", "image": "ak47.png"
		,"angle":[
			 {"degreesZ":-50}			,{"start":63.27272728, "duration":17.4545454545, "degreesZ":40}
		]
		,"scale":[
			 {"x":0.6,"y":0.4}
		]
		,"position":[
			 {"x":335,"y":300}
		]
	}]);
	//00008/00001 - 0		8 image ( name berlin_front.jpg alphaname berlin_front_alpha.jpg scale 60 80 position 320 300 )
	this.loader.addAnimation([{
		 "start": 54.5454545455, "duration": 8.7272727345
		,"layer": "00008", "image": "berlin_front.png"
		,"scale":[
			 {"x":0.6,"y":0.8}
			,{"start":54.5454545455, "duration":2, "x":0.5, "y":0.67}
		]
		,"position":[
			 {"x":320,"y":300}
		]
	}]);
	//00008/00002 - 0		8 image ( name ak47.jpg alphaname ak47_alpha.jpg scale 60 40 position 335 300 angle -50 )
	this.loader.addAnimation([{
		 "start": 63.27272728, "duration": 17.4545454545
		,"layer": "00008", "image": "ak47.png"
		,"angle":[
			 {"degreesZ":-50}			,{"start":63.27272728, "duration":17.4545454545, "degreesZ":70}
		]
		,"scale":[
			 {"x":0.6,"y":0.4}
		]
		,"position":[
			 {"x":335,"y":300}
		]
	}]);
	//00009/00001 - 3.818	9 image ( name nuke1.jpg alphaname nuke1_alpha.jpg scale 100 133 position 320 200 )
	this.loader.addAnimation([{
		 "start": 58.3634545455, "duration": 4.9092727345
		,"layer": "00009", "image": "nuke1.png"
		,"scale":[
			 {"x":1,"y":1.33}
			,{"start":58.3634545455, "duration":4.9092727345, "x":3, "y":4}
		]
		,"position":[
			 {"x":320,"y":200}
			,{"start":58.3634545455, "duration":4.9092727345, "x":320, "y":-100}
		]
	}]);
	//00009/00002 - 0		9 image ( name ak47.jpg alphaname ak47_alpha.jpg scale 60 40 position 335 300 angle -50 )
	this.loader.addAnimation([{
		 "start": 63.27272728, "duration": 17.4545454545
		,"layer": "00009", "image": "ak47.png"
		,"angle":[
			 {"degreesZ":-50}			,{"start":63.27272728, "duration":17.4545454545, "degreesZ":100}
		]
		,"scale":[
			 {"x":0.6,"y":0.4}
		]
		,"position":[
			 {"x":335,"y":300}
		]
	}]);
	//00009/00003 - 0		9 image ( name leaders.jpg alphaname leaders_alpha.jpg scale 60 80 position 320 240 color 255 0 0 0 )
	this.loader.addAnimation([{
		 "start": 161.454545455, "duration": 26.181818181
		,"layer": "00009", "image": "leaders.png"
		,"scale":[
			 {"x":0.6,"y":0.8}
			,{"start":161.454545455, "duration":17.454545454, "x":0.5, "y":0.67}
		]
		,"position":[
			 {"x":320,"y":240}
			,{"start":161.454545455, "duration":17.454545454, "x":320, "y":290}
		]
		,"color":[
			 {"r":0, "g":0, "b":0, "a":255}
			,{"start":161.454545455, "duration":8.72727272500001, "r":255, "g":255, "b":255, "a":255}
		]
	}]);
	//00010/00001 - 0		10 image ( name ak47.jpg alphaname ak47_alpha.jpg scale 60 40 position 335 300 angle -50 )
	this.loader.addAnimation([{
		 "start": 63.27272728, "duration": 17.4545454545
		,"layer": "00010", "image": "ak47.png"
		,"angle":[
			 {"degreesZ":-50}			,{"start":63.27272728, "duration":17.4545454545, "degreesZ":130}
		]
		,"scale":[
			 {"x":0.6,"y":0.4}
		]
		,"position":[
			 {"x":335,"y":300}
		]
	}]);
	//00010/00002 - 0		10 image ( name arbeit.jpg scale 55 75 )
	this.loader.addAnimation([{
		 "start": 80.7272727345, "duration": 8.72727271549999
		,"layer": "00010", "image": "arbeit.png"
		,"scale":[
			 {"x":0.55,"y":0.75}
			,{"start":80.7272727345, "duration":8.72727271549999, "x":0.5, "y":0.67}
		]
	}]);
	//00010/00003 - 0.0		10 image ( name t_europe.jpg alphaname t_europe.jpg color 255 0 0 0 scale 50 67 )
	this.loader.addAnimation([{
		 "start": 152.727272727, "duration": 2.18199999999999
		,"layer": "00010", "image": "t_europe.png"
		,"scale":[
			 {"x":0.5,"y":0.67}
			,{"start":152.727272727, "duration":2.18199999999999, "x":1, "y":1.33}
		]
		,"color":[
			 {"r":0, "g":0, "b":0, "a":255}
		]
	}]);
	//00010/00004 - 2.182	10 image ( name t_wake.jpg alphaname t_wake.jpg color 255 0 0 0 scale 50 67 )
	this.loader.addAnimation([{
		 "start": 154.909272727, "duration": 0.40900000000002
		,"layer": "00010", "image": "t_wake.png"
		,"scale":[
			 {"x":0.5,"y":0.67}
			,{"start":154.909272727, "duration":0.40900000000002, "x":1, "y":1.33}
		]
		,"color":[
			 {"r":0, "g":0, "b":0, "a":255}
		]
	}]);
	//00010/00005 - 2.591	10 image ( name t_up.jpg alphaname t_up.jpg color 255 0 0 0 scale 50 67 )
	this.loader.addAnimation([{
		 "start": 155.318272727, "duration": 0.408999999999992
		,"layer": "00010", "image": "t_up.png"
		,"scale":[
			 {"x":0.5,"y":0.67}
			,{"start":155.318272727, "duration":0.408999999999992, "x":1, "y":1.33}
		]
		,"color":[
			 {"r":0, "g":0, "b":0, "a":255}
		]
	}]);
	//00010/00006 - 3		10 image ( name t_from.jpg alphaname t_from.jpg color 255 0 0 0 scale 50 67 )
	this.loader.addAnimation([{
		 "start": 155.727272727, "duration": 0.272999999999996
		,"layer": "00010", "image": "t_from.png"
		,"scale":[
			 {"x":0.5,"y":0.67}
			,{"start":155.727272727, "duration":0.272999999999996, "x":1, "y":1.33}
		]
		,"color":[
			 {"r":0, "g":0, "b":0, "a":255}
		]
	}]);
	//00010/00007 - 0		10 image ( name handofgod.jpg alphaname handofgod_alpha.jpg scale 100 133 position 400 -300 )
	this.loader.addAnimation([{
		 "start": 170.18181818, "duration": 17.454545456
		,"layer": "00010", "image": "handofgod.png"
		,"scale":[
			 {"x":1,"y":1.33}
			,{"start":170.18181818, "duration":8.72727272900002, "x":0.8, "y":1.06}
		]
		,"position":[
			 {"x":400,"y":-300}
			,{"start":170.18181818, "duration":8.72727272900002, "x":400, "y":-38}
		]
	}]);
	//00011/00001 - 0		11 image ( name ak47.jpg alphaname ak47_alpha.jpg scale 60 40 position 335 300 angle -50 )
	this.loader.addAnimation([{
		 "start": 63.27272728, "duration": 17.4545454545
		,"layer": "00011", "image": "ak47.png"
		,"angle":[
			 {"degreesZ":-50}			,{"start":63.27272728, "duration":17.4545454545, "degreesZ":160}
		]
		,"scale":[
			 {"x":0.6,"y":0.4}
		]
		,"position":[
			 {"x":335,"y":300}
		]
	}]);
	//00011/00002 - 3.273	11 image ( name t_your.jpg alphaname t_your.jpg color 255 0 0 0 scale 50 67 )
	this.loader.addAnimation([{
		 "start": 156.000272727, "duration": 0.545000000000016
		,"layer": "00011", "image": "t_your.png"
		,"scale":[
			 {"x":0.5,"y":0.67}
			,{"start":156.000272727, "duration":0.545000000000016, "x":1, "y":1.33}
		]
		,"color":[
			 {"r":0, "g":0, "b":0, "a":255}
		]
	}]);
	//00011/00003 - 3.818	11 image ( name t_sleep.jpg alphaname t_sleep.jpg color 255 0 0 0 scale 50 67 )
	this.loader.addAnimation([{
		 "start": 156.545272727, "duration": 4.90927272799996
		,"layer": "00011", "image": "t_sleep.png"
		,"scale":[
			 {"x":0.5,"y":0.67}
			,{"start":156.545272727, "duration":4.90927272799996, "x":1, "y":1.33}
		]
		,"color":[
			 {"r":0, "g":0, "b":0, "a":255}
			,{"start":156.545272727, "duration":4.90927272799996, "r":0, "g":0, "b":0, "a":0}
		]
	}]);
	//00012/00001 - 0		12 image ( name ak47.jpg alphaname ak47_alpha.jpg scale 60 40 position 335 300 angle -50 )
	this.loader.addAnimation([{
		 "start": 63.27272728, "duration": 17.4545454545
		,"layer": "00012", "image": "ak47.png"
		,"angle":[
			 {"degreesZ":-50}			,{"start":63.27272728, "duration":17.4545454545, "degreesZ":190}
		]
		,"scale":[
			 {"x":0.6,"y":0.4}
		]
		,"position":[
			 {"x":335,"y":300}
		]
	}]);
	//00015/00001 - 0		15 image ( name putin_skull.jpg alphaname putin_skull_alpha.jpg scale 40 53  position 320 200 color 255 255 255 255 )
	this.loader.addAnimation([{
		 "start": 63.27272728, "duration": 17.4545454545
		,"layer": "00015", "image": "putin_skull.png"
		,"scale":[
			 {"x":0.4,"y":0.53}
		]
		,"position":[
			 {"x":320,"y":200}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
			,{"start":63.27272728, "duration":12.22727272, "r":255, "g":255, "b":255, "a":255}
			,{"start":75.5, "duration":0.5, "r":255, "g":255, "b":255, "a":0}
		]
	}]);
	//00015/00002 - 0		15 image ( name merkel.jpg alphaname merkel_alpha.jpg scale 55 74  position 440 260 color 255 255 255 255 )
	this.loader.addAnimation([{
		 "start": 80.7272727345, "duration": 8.72727271549999
		,"layer": "00015", "image": "merkel.png"
		,"scale":[
			 {"x":0.55,"y":0.74}
			,{"start":80.7272727345, "duration":8.72727271549999, "x":0.55, "y":0.75}
		]
		,"position":[
			 {"x":440,"y":260}
			,{"start":80.7272727345, "duration":8.72727271549999, "x":420, "y":260}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":255}
		]
	}]);
	//00016/00001 - 0		16 image ( name putin.jpg alphaname putin_alpha.jpg scale 40 53 position 320 200 color 0 255 255 255 )
	this.loader.addAnimation([{
		 "start": 63.27272728, "duration": 17.4545454545
		,"layer": "00016", "image": "putin.png"
		,"scale":[
			 {"x":0.4,"y":0.53}
		]
		,"position":[
			 {"x":320,"y":200}
		]
		,"color":[
			 {"r":255, "g":255, "b":255, "a":0}
			,{"start":63.27272728, "duration":8.72727272, "r":255, "g":255, "b":255, "a":0}
			,{"start":72, "duration":4, "r":255, "g":255, "b":255, "a":255}
		]
	}]);
	//00017/00001 - 0		17 image ( name tankki.jpg alphaname tankki_alpha.jpg scale 35 47 position 9 430 )
	this.loader.addAnimation([{
		 "start": 63.27272728, "duration": 17.4545454545
		,"layer": "00017", "image": "tankki.png"
		,"scale":[
			 {"x":0.35,"y":0.47}
			,{"start":63.27272728, "duration":17.4545454545, "x":0.33, "y":0.44}
		]
		,"position":[
			 {"x":9,"y":430}
			,{"start":63.27272728, "duration":17.4545454545, "x":-128, "y":430}
		]
	}]);
	//00018/00001 - 0		18 image ( name tankki.jpg alphaname tankki_alpha.jpg scale 37 49 position 126 430 )
	this.loader.addAnimation([{
		 "start": 63.27272728, "duration": 17.4545454545
		,"layer": "00018", "image": "tankki.png"
		,"scale":[
			 {"x":0.37,"y":0.49}
			,{"start":63.27272728, "duration":17.4545454545, "x":0.35, "y":0.47}
		]
		,"position":[
			 {"x":126,"y":430}
			,{"start":63.27272728, "duration":17.4545454545, "x":0, "y":430}
		]
	}]);
	//00019/00001 - 0		19 image ( name tankki.jpg alphaname tankki_alpha.jpg scale 39 52 position 264 430 )
	this.loader.addAnimation([{
		 "start": 63.27272728, "duration": 17.4545454545
		,"layer": "00019", "image": "tankki.png"
		,"scale":[
			 {"x":0.39,"y":0.52}
			,{"start":63.27272728, "duration":17.4545454545, "x":0.37, "y":0.49}
		]
		,"position":[
			 {"x":264,"y":430}
			,{"start":63.27272728, "duration":17.4545454545, "x":128, "y":430}
		]
	}]);
	//00020/00001 - 0		20 image ( name tankki.jpg alphaname tankki_alpha.jpg scale 41 55 position 389 430 )
	this.loader.addAnimation([{
		 "start": 63.27272728, "duration": 17.4545454545
		,"layer": "00020", "image": "tankki.png"
		,"scale":[
			 {"x":0.41,"y":0.55}
			,{"start":63.27272728, "duration":17.4545454545, "x":0.39, "y":0.52}
		]
		,"position":[
			 {"x":389,"y":430}
			,{"start":63.27272728, "duration":17.4545454545, "x":256, "y":430}
		]
	}]);
	//00021/00001 - 0		21 image ( name tankki.jpg alphaname tankki_alpha.jpg scale 43 57 position 514 430 )
	this.loader.addAnimation([{
		 "start": 63.27272728, "duration": 17.4545454545
		,"layer": "00021", "image": "tankki.png"
		,"scale":[
			 {"x":0.43,"y":0.57}
			,{"start":63.27272728, "duration":17.4545454545, "x":0.41, "y":0.55}
		]
		,"position":[
			 {"x":514,"y":430}
			,{"start":63.27272728, "duration":17.4545454545, "x":384, "y":430}
		]
	}]);
	//00022/00001 - 0		22 image ( name tankki.jpg alphaname tankki_alpha.jpg scale 45 60 position 650 430 )
	this.loader.addAnimation([{
		 "start": 63.27272728, "duration": 17.4545454545
		,"layer": "00022", "image": "tankki.png"
		,"scale":[
			 {"x":0.45,"y":0.6}
			,{"start":63.27272728, "duration":17.4545454545, "x":0.43, "y":0.57}
		]
		,"position":[
			 {"x":650,"y":430}
			,{"start":63.27272728, "duration":17.4545454545, "x":512, "y":430}
		]
	}]);
	//00023/00001 - 0		23 image ( name tankki.jpg alphaname tankki_alpha.jpg scale 47 63 position 762 430 )
	this.loader.addAnimation([{
		 "start": 63.27272728, "duration": 17.4545454545
		,"layer": "00023", "image": "tankki.png"
		,"scale":[
			 {"x":0.47,"y":0.63}
			,{"start":63.27272728, "duration":17.4545454545, "x":0.47, "y":0.63}
		]
		,"position":[
			 {"x":762,"y":430}
			,{"start":63.27272728, "duration":17.4545454545, "x":640, "y":430}
		]
	}]);
	//00041/00001 - 0		41 image ( name riotpolice.jpg alphaname riotpolice_alpha.jpg position 140 350 scale 50 67 )
	this.loader.addAnimation([{
		 "start": 34.9090909091, "duration": 6.54
		,"layer": "00041", "image": "riotpolice.png"
		,"scale":[
			 {"x":0.5,"y":0.67}
			,{"start":34.9090909091, "duration":6.54, "x":0.45, "y":0.61}
		]
		,"position":[
			 {"x":140,"y":350}
			,{"start":34.9090909091, "duration":6.54, "x":190, "y":350}
		]
	}]);
	//00042/00001 - 0		42 image ( name protest.jpg alphaname protest_alpha.jpg position 500 350 scale 100 133 )
	this.loader.addAnimation([{
		 "start": 41.4545454545, "duration": 6.5454545455
		,"layer": "00042", "image": "protest.png"
		,"scale":[
			 {"x":1,"y":1.33}
		]
		,"position":[
			 {"x":500,"y":350}
			,{"start":41.4545454545, "duration":6.5454545455, "x":450, "y":350}
		]
	}]);
	//00042/00002 - 0		42 image ( name soldier_aiming.jpg alphaname soldier_aiming_alpha.jpg position 500 350 scale 40 53 )
	this.loader.addAnimation([{
		 "start": 104.7272727, "duration": 6.54545457
		,"layer": "00042", "image": "soldier_aiming.png"
		,"scale":[
			 {"x":0.4,"y":0.53}
		]
		,"position":[
			 {"x":500,"y":350}
			,{"start":104.7272727, "duration":6.54545457, "x":540, "y":350}
		]
	}]);
	//00042/00003 - 0		42 image ( name isil_fighter.jpg alphaname isil_fighter_alpha.jpg position 470 315 scale 45 60 )
	this.loader.addAnimation([{
		 "start": 117.8181818, "duration": 8.7272727
		,"layer": "00042", "image": "isil_fighter.png"
		,"scale":[
			 {"x":0.45,"y":0.6}
			,{"start":117.8181818, "duration":8.7272727, "x":0.35, "y":0.47}
		]
		,"position":[
			 {"x":470,"y":315}
			,{"start":117.8181818, "duration":8.7272727, "x":480, "y":290}
		]
	}]);
	//00099/00001 - 0		99 image ( name white.jpg scale 1000 1000 color 255 0 0 0 )
	this.loader.addAnimation([{
		 "start": 0, "duration": 3
		,"layer": "00099", "image": "white.png"
		,"scale":[
			 {"x":10,"y":10}
		]
		,"color":[
			 {"r":0, "g":0, "b":0, "a":255}
			,{"start":0, "duration":3, "r":0, "g":0, "b":0, "a":0}
		]
	}]);
	//00099/00002 - 0		99 image ( name white.jpg scale 1000 1000 color 0 0 0 0 )
	this.loader.addAnimation([{
		 "start": 26.1818181818, "duration": 178.8181818182
		,"layer": "00099", "image": "white.png"
		,"scale":[
			 {"x":10,"y":10}
		]
		,"color":[
			 {"r":0, "g":0, "b":0, "a":0}
			,{"start":26.1818181818, "duration":8.7272727273, "r":0, "g":0, "b":0, "a":255}
			,{"start":34.9090909091, "duration":1, "r":0, "g":0, "b":0, "a":0}
			,{"start":35.9090909091, "duration":4.54545454545, "r":0, "g":0, "b":0, "a":0}
			,{"start":40.45454545455, "duration":0.999999999949999, "r":0, "g":0, "b":0, "a":255}
			,{"start":41.4545454545, "duration":1, "r":0, "g":0, "b":0, "a":0}
			,{"start":42.4545454545, "duration":4.54545454545, "r":0, "g":0, "b":0, "a":0}
			,{"start":46.99999999995, "duration":1.00000000005, "r":0, "g":0, "b":0, "a":255}
			,{"start":48, "duration":1, "r":0, "g":0, "b":0, "a":0}
			,{"start":49, "duration":4.54545454545, "r":0, "g":0, "b":0, "a":0}
			,{"start":53.54545454545, "duration":1.00000000005, "r":0, "g":0, "b":0, "a":255}
			,{"start":54.5454545455, "duration":1, "r":0, "g":0, "b":0, "a":0}
			,{"start":55.5454545455, "duration":2.818, "r":0, "g":0, "b":0, "a":0}
			,{"start":58.3634545455, "duration":0, "r":255, "g":255, "b":255, "a":255}
			,{"start":58.3634545455, "duration":0.682000000000002, "r":0, "g":0, "b":0, "a":0}
			,{"start":59.0454545455, "duration":1.04545454545, "r":0, "g":0, "b":0, "a":0}
			,{"start":60.09090909095, "duration":3.18181818905, "r":255, "g":255, "b":255, "a":255}
			,{"start":63.27272728, "duration":6, "r":0, "g":0, "b":0, "a":0}
			,{"start":69.27272728, "duration":8.72727272, "r":0, "g":0, "b":0, "a":0}
			,{"start":78, "duration":2.72727273450001, "r":0, "g":0, "b":0, "a":255}
			,{"start":80.7272727345, "duration":2, "r":0, "g":0, "b":0, "a":0}
			,{"start":82.7272727345, "duration":4, "r":0, "g":0, "b":0, "a":0}
			,{"start":86.7272727345, "duration":2.72727271549999, "r":0, "g":0, "b":0, "a":255}
			,{"start":89.45454545, "duration":2, "r":0, "g":0, "b":0, "a":0}
			,{"start":91.45454545, "duration":4, "r":0, "g":0, "b":0, "a":0}
			,{"start":95.45454545, "duration":2.72727273, "r":0, "g":0, "b":0, "a":255}
			,{"start":98.18181818, "duration":0.5, "r":0, "g":0, "b":0, "a":0}
			,{"start":98.68181818, "duration":5.04545454545, "r":0, "g":0, "b":0, "a":0}
			,{"start":103.72727272545, "duration":0.999999974550008, "r":0, "g":0, "b":0, "a":255}
			,{"start":104.7272727, "duration":0.5, "r":0, "g":0, "b":0, "a":0}
			,{"start":105.2272727, "duration":5.04545454545, "r":0, "g":0, "b":0, "a":0}
			,{"start":110.27272724545, "duration":1.00000002455, "r":0, "g":0, "b":0, "a":255}
			,{"start":111.27272727, "duration":0.5, "r":0, "g":0, "b":0, "a":0}
			,{"start":111.77272727, "duration":5.04545454545, "r":0, "g":0, "b":0, "a":0}
			,{"start":116.81818181545, "duration":0.999999984550001, "r":0, "g":0, "b":0, "a":255}
			,{"start":117.8181818, "duration":0.5, "r":0, "g":0, "b":0, "a":0}
			,{"start":118.3181818, "duration":6.5, "r":0, "g":0, "b":0, "a":0}
			,{"start":124.8181818, "duration":1.7272727, "r":0, "g":0, "b":0, "a":255}
			,{"start":126.5454545, "duration":2, "r":0, "g":0, "b":0, "a":0}
			,{"start":128.5454545, "duration":31.181818227, "r":0, "g":0, "b":0, "a":0}
			,{"start":159.727272727, "duration":1.72727272799997, "r":0, "g":0, "b":0, "a":255}
			,{"start":161.454545455, "duration":2, "r":0, "g":0, "b":0, "a":0}
			,{"start":163.454545455, "duration":14.227272725, "r":255, "g":255, "b":255, "a":0}
			,{"start":177.68181818, "duration":1.22727272900002, "r":0, "g":0, "b":0, "a":255}
			,{"start":178.909090909, "duration":2, "r":255, "g":255, "b":255, "a":255}
		]
	}]);
	//00100/00001 - 2		100 image ( name end.jpg alphaname end.jpg scale 50 67 color 255 0 0 0 )
	this.loader.addAnimation([{
		 "start": 180.909090909, "duration": 6
		,"layer": "00100", "image": "end.png"
		,"scale":[
			 {"x":0.5,"y":0.67}
		]
		,"color":[
			 {"r":0, "g":0, "b":0, "a":255}
		]
	}]);
	//00100/00002 - 0		100 image ( name epilogue.jpg alphaname epilogue.jpg scale 50 67 color 255 0 0 0 )
	this.loader.addAnimation([{
		 "start": 187.636363636, "duration": 4
		,"layer": "00100", "image": "epilogue.png"
		,"scale":[
			 {"x":0.5,"y":0.67}
		]
		,"color":[
			 {"r":0, "g":0, "b":0, "a":255}
		]
	}]);
	//00100/00003 - 4		100 image ( name 2015eurovision.jpg alphaname 2015eurovision.jpg scale 45 60 color 255 0 0 0 )
	this.loader.addAnimation([{
		 "start": 191.636363636, "duration": 6
		,"layer": "00100", "image": "2015eurovision.png"
		,"scale":[
			 {"x":0.45,"y":0.6}
		]
		,"color":[
			 {"r":0, "g":0, "b":0, "a":255}
		]
	}]);
	//00100/00004 - 10		100 image ( name hisvision.jpg alphaname hisvision.jpg scale 50 67 color 255 0 0 0 )
	this.loader.addAnimation([{
		 "start": 197.636363636, "duration": 7.363636364
		,"layer": "00100", "image": "hisvision.png"
		,"scale":[
			 {"x":0.5,"y":0.67}
		]
		,"color":[
			 {"r":0, "g":0, "b":0, "a":255}
		]
	}]);
	//00101/00001 - 0		101 image ( name vinjet.jpg alphaname vinjet_alpha.jpg )
	this.loader.addAnimation([{
		 "start": 0, "duration": 205
		,"layer": "00101", "image": "vinjet.png"
	}]);
	//00102/00001 - 0		102 scene ( name noise.3ds camera Camera01 fps 100 clearzbuffer )
	this.loader.addAnimation([{
		 "start": 0, "duration": 300
		,"layer": "00102", "object": "noise.3ds"
		,"clearDepthBuffer": true
		,"camera": "Camera01"
		,"fps": 100
	}]);
}
