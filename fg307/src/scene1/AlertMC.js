var scene1=scene1||{};
scene1.AlertMC=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
	s.skipScene="";
	//监听倒播到第一帧时的事件
	s.addEventListener(annie.Event.END_FRAME,function (e) {
		if(s.currentFrame==1){
			//抛出全局跳场景的自定义事件
			globalDispatcher.dispatchEvent("onChangeScene",{scene:s.skipScene});
		}
	});
	// 冒泡获取鼠标点到子级的哪个按钮了
	s.addEventListener(annie.MouseEvent.CLICK,function (e) {
		if(e.target.name=="in_btn"){
			s.skipScene="scene3";
			//倒着放
			s.play(false);
		}else if(e.target.name=="out_btn"){
			s.skipScene="scene2";
			//倒着放
			s.play(false);
		}
	})
};
F2xExtend(scene1.AlertMC,F2xMovieClip);
scene1.AlertMC.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new scene1.F2xAuto_1();
	s.a().b(1).b(1).c(_d0,{x:232.8,y:184.1,a:0.1672,b:0.1672,o:0}).b(1).c(_d0,{x:183.85,y:145.4,a:0.342,b:0.342,o:0.2109}).b(1).c(_d0,{x:140.75,y:111.35,a:0.4962,b:0.4962,o:0.3945}).b(1).c(_d0,{x:103.4,y:81.8,a:0.6298,b:0.6298,o:0.5547}).b(1).c(_d0,{x:71.7,y:56.8,a:0.743,b:0.743,o:0.6914}).b(1).c(_d0,{x:45.85,y:36.35,a:0.8355,b:0.8355,o:0.8008}).b(1).c(_d0,{x:25.75,y:20.45,a:0.9075,b:0.9075,o:0.8906}).b(1).c(_d0,{x:11.4,y:9.1,a:0.9589,b:0.9589,o:0.9492}).b(1).c(_d0,{x:2.75,y:2.25,a:0.9897,b:0.9897,o:0.9883}).b(1).c(_d0);
	s.as(function(){this.stop();}.bind(this),10);
	s.as(function(){this.stop();}.bind(this),0);
	//f2x_auto_created_init_end
	
};
