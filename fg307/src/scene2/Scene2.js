var scene2=scene2||{};
scene2.Scene2=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	//当前颜色
	s.currColor="red";
	s.currCar=s.rCar;
	//冒泡事件检测按钮名字法
	s.addEventListener(annie.MouseEvent.CLICK,function (e) {
		if(e.target.name=="rc_btn"){
			if(s.currColor!="red"){
				s.currColor="red";
				s.rCar.gotoAndStop(s.yCar.currentFrame);
				annie.Tween.to(s.rCar,0.4,{alpha:1,onComplete:function () {
					s.yCar.visible = false;
				}});
				s.currCar=s.rCar;
			}
		}else if(e.target.name=="yc_btn"){
			if(s.currColor!="yellow") {
				s.currColor="yellow";
				if (!s.yCar) {
					s.yCar = new scene2.YellowCar();
					s.addChildAt(s.yCar,0);
					Flash2x.d(s.yCar,{a:1.19,b:1.19});
				}
				annie.Tween.to(s.rCar,0.4,{alpha:0});
				s.yCar.visible = true;
				s.currCar = s.yCar;
			}
		}else if(e.target.name=="in_btn"){
			//执行scene2退出动画
			annie.Tween.to(s,0.4,{alpha:0,onComplete:function () {
				globalDispatcher.dispatchEvent("onChangeScene", {scene: "scene3"});
			}});
		}
	});
	s.lastX=0;
	s.mouseDown=false;
	s.addEventListener(annie.MouseEvent.MOUSE_DOWN,function (e) {
		s.mouseDown=true;
		s.lastX=e.localX;
	});
	s.addEventListener(annie.MouseEvent.MOUSE_UP,function (e) {
		s.mouseDown=false;
	});
	s.addEventListener(annie.MouseEvent.MOUSE_MOVE,function (e) {
		if(!s.mouseDown)return;
		var dis=s.lastX-e.localX;
		if(dis>10){
			if(s.currCar.currentFrame<s.currCar.totalFrames){
				s.currCar.nextFrame();
			}else{
				s.currCar.gotoAndStop(1);
			}
		}else if(dis<-10){
			if(s.currCar.currentFrame>1){
				s.currCar.prevFrame();
			}else{
				s.currCar.gotoAndStop(s.currCar.totalFrames);
			}
		}
		//更新上一点坐标值
		s.lastX=e.localX;
	});
	s.addEventListener(annie.Event.REMOVE_TO_STAGE,function (e) {
		//从舞台上移除后，如果确定不再需要事件，全部移除，方便垃圾回收
		s.removeAllEventListener();
	});
	//动画师很懒，没有做出场动画，我们帮他加一下
	s.alpha=0;
	annie.Tween.to(s,0.4,{alpha:1});
};
F2xExtend(scene2.Scene2,F2xContainer);
scene2.Scene2.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d1=new scene2.F2xAuto_5();
	Flash2x.d(_d1,{x:123,y:412.05,r:180});
	var _d0=new scene2.F2xAuto_4();
	Flash2x.d(_d0,{x:983.8,y:341.1});
	var _d4=new scene2.F2xAuto_3();
	_d4.mouseChildren=false;
	_d4.name="rc_btn";
	s.rc_btn=_d4;
	Flash2x.d(_d4,{x:288.45,y:91});
	var _d3=new scene2.F2xAuto_1();
	_d3.mouseChildren=false;
	_d3.name="yc_btn";
	s.yc_btn=_d3;
	Flash2x.d(_d3,{x:624.55,y:91});
	var _d2=new scene2.F2xAuto_2();
	_d2.mouseChildren=false;
	_d2.name="in_btn";
	s.in_btn=_d2;
	Flash2x.d(_d2,{x:443.5,y:547.15});
	var _d5=new scene2.RedCar();
	_d5.name="rCar";
	s.rCar=_d5;
	Flash2x.d(_d5,{a:1.19,b:1.19});
	s.addChild(_d5);
	s.addChild(_d2);
	s.addChild(_d3);
	s.addChild(_d4);
	s.addChild(_d0);
	s.addChild(_d1);
	//f2x_auto_created_init_end
	
};
