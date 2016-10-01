var loading=loading||{};
loading.Music=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(loading.Music,F2xMovieClip);
loading.Music.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.b("loading","stopMusic");
	var _d1=Flash2x.b("loading","F2xAuto_6");
	s.a().b(1).b(1).c(_d0,{x:-1,y:-1.4});
	s.a().b(1).c(_d1).b(1).c(_d1);
	s.as(function(){this.stop();}.bind(this),0);
	//f2x_auto_created_init_end
	
};
