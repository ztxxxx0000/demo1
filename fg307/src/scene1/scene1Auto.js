var scene1=scene1||{};
scene1.F2xAuto_1=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(scene1.F2xAuto_1,F2xContainer);
scene1.F2xAuto_1.prototype.initUI=function(){
	var s = this;
	var _d0=new scene1.F2xAuto_3();
	_d0.mouseChildren=false;
	_d0.name="in_btn";
	s.in_btn=_d0;
	Flash2x.d(_d0,{x:275.6,y:266.6});
	var _d1=new scene1.F2xAuto_4();
	_d1.mouseChildren=false;
	_d1.name="out_btn";
	s.out_btn=_d1;
	Flash2x.d(_d1,{x:42.55,y:266.6});
	var _d2=Flash2x.b("scene1","F2xAuto_9");
	Flash2x.d(_d2,{x:55.55,y:106.6});
	var _d3=Flash2x.b("scene1","panel");
	s.addChild(_d3);
	s.addChild(_d2);
	s.addChild(_d1);
	s.addChild(_d0);
};
scene1.F2xAuto_4=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(scene1.F2xAuto_4,F2xContainer);
scene1.F2xAuto_4.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("scene1","F2xAuto_7");
	s.addChild(_d0);
};
scene1.F2xAuto_3=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(scene1.F2xAuto_3,F2xContainer);
scene1.F2xAuto_3.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("scene1","F2xAuto_8");
	s.addChild(_d0);
};
