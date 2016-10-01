var scene1=scene1||{};
scene1.Scene1=function(){
	var s = this;
	F2xContainer.call(s);
	s.videoPlayer=new annie.VideoPlayer("resource/openVideo",1);
	s.videoPlayer.video.autoplay=true;
	s.videoPlayer.scaleX=1.775;
	s.videoPlayer.scaleY=1.775;
	s.addChild(s.videoPlayer);
	s.videoPlayer.video.addEventListener("onPlayEnd",function (e) {
		s.alert_mc.play();
	});
	s.initUI();
};
F2xExtend(scene1.Scene1,F2xContainer);
scene1.Scene1.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new scene1.AlertMC();
	_d0.name="alert_mc";
	s.alert_mc=_d0;
	Flash2x.d(_d0,{x:288.5,y:99});
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
