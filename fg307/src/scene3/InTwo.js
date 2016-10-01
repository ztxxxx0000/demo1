var scene3=scene3||{};
scene3.InTwo=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	var totalcount=7;
	var count=0;
	for(var i=0;i<totalcount;i++){
		s.btns_mc["r"+i].mouseChildren=false;
	}
	//冒泡
	s.addEventListener(annie.MouseEvent.CLICK,function (e) {
		if(e.target.name.indexOf("r"==0)&&e.target.currentFrame==1){
			e.target.nextFrame();
			e.target.mouseEnable=false;
			count++;
			if(count==totalcount){
				//都点完了，然后跳出弹框
				s.parent.showAlert();
			}
		}
	});
	s.addEventListener(annie.Event.REMOVE_TO_STAGE, function (e) {
		//从舞台上移除后，如果确定不再需要事件，全部移除，方便垃圾回收
		s.removeAllEventListener();
	})
};
F2xExtend(scene3.InTwo,F2xContainer);
scene3.InTwo.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new scene3.F2xAuto_87();
	_d0.name="btns_mc";
	s.btns_mc=_d0;
	Flash2x.d(_d0,{x:316,y:217.5});
	var _d1=Flash2x.b("scene3","F2xAuto_88");
	Flash2x.d(_d1,{x:-20});
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
