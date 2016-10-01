var loading=loading||{};
loading.Loading=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(loading.Loading,F2xContainer);
loading.Loading.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.t(0,"Loading...100%",18,"#B50200","Arial",2,2,127.1,20.1,20,"left",false,false,"multiline no wrap");
	_d0.name="per_txt";
	s.per_txt=_d0;
	Flash2x.d(_d0,{x:502.5,y:307.9});
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
