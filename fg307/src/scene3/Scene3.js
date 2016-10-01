var scene3 = scene3 || {};
scene3.Scene3 = function () {
    var s = this;
    F2xContainer.call(s);
    s.initUI();
    s.skipId = 0;
    //记录当前是哪个小场景
    s.currContent = null;
    //帧听播放到最后一帧事件
    s.con1_mc.addEventListener(annie.Event.END_FRAME, function (e) {
        if (s.con1_mc.currentFrame == s.con1_mc.totalFrames) {
            //这里这么做是为了不让鼠标往下冒泡，这样得到的e.target你就知道是哪一个了
            s.con1_mc.one_btn.mouseChildren = s.con1_mc.two_btn.mouseChildren = s.con1_mc.three_btn.mouseChildren = s.con1_mc.out_btn.mouseChildren = false;
        } else {
            //退到第一帧了，就知道是退场，看看是去哪个场景
            s.con1_mc.stop();
            switch (s.skipId) {
                case 1:
                    if (!s.inTwo) {
                        s.inTwo = new scene3.InTwo();
                        s.addChild(s.inTwo);
                    }
                    s.inTwo.visible = true;
                    s.con1_mc.visible = false;
                    s.currContent = s.inTwo;
                    break;
                case 2:
                    if (!s.inThree) {
                        s.inThree = new scene3.InThree();
                        s.addChild(s.inThree);
                    }
                    s.inThree.visible = true;
                    s.con1_mc.visible = false;
                    s.currContent = s.inThree;
                    break;
                case 3:
                    if (!s.infour) {
                        s.infour = new scene3.InFour();
                        s.addChild(s.infour);
                    }
                    s.infour.visible = true;
                    s.con1_mc.visible = false;
                    s.currContent = s.infour;
                    break;
                case 4:
                    globalDispatcher.dispatchEvent("onChangeScene", {scene: "scene2"});
                    break;
            }
            if(s.skipId<4){
                //动画师很懒，没有做出场动画，我们帮他加一下
                s.currContent.alpha=0;
                annie.Tween.to(s.currContent,0.4,{alpha:1});
            }
        }
    });
    s.addEventListener(annie.MouseEvent.CLICK, function (e) {
        s.skipId = 0;
        switch (e.target.name) {
            case "one_btn":
                s.skipId = 1;
                break;
            case "two_btn":
                s.skipId = 2;
                break;
            case "three_btn":
                s.skipId = 3;
                break;
            case "out_btn":
                //因为有两个叫做out_btn的按钮，一个在inMain里，一个在AlertMc.alertCon_mc里。所以这里要区别一下，不同的按钮执行不同的动画
                if (s.alert && s.alert.currentFrame > 1) {
                    //自己写退场动画,因主场景现在这个状态是看不到的
                    s.skipId = 0;
                    annie.Tween.to(s, 0.4, {
                        alpha: 0, onComplete: function () {
                            globalDispatcher.dispatchEvent("onChangeScene", {scene: "scene2"});
                        }
                    })
                } else {
                    s.skipId = 4;
                }
                //执行退场，并跳场景
                break;
            case "in_btn":
                s.skipId = 0;
                //这个按钮在AlertMc.alertCon_mc里，所以这个事件触发的话，弹出框一定存在，这个时候只需要跳到scene3的主画面
                s.alert.play(false);
                annie.Tween.to(s.currContent, 0.4, {
                    alpha: 0, onComplete: function () {
                        s.currContent.visible=false;
                        s.con1_mc.play();
                        s.con1_mc.visible=true;
                    }
                });
                break;
        }
        if (s.skipId > 0) {
            s.con1_mc.play(false);
        }
    });
    s.addEventListener(annie.Event.REMOVE_TO_STAGE, function (e) {
        //从舞台上移除后，如果确定不再需要事件，全部移除，方便垃圾回收
        s.removeAllEventListener();
    })
};
F2xExtend(scene3.Scene3, F2xContainer);
scene3.Scene3.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
	var _d0=new scene3.InMain();
	_d0.name="con1_mc";
	s.con1_mc=_d0;
	s.addChild(_d0);
	//f2x_auto_created_init_end

};
scene3.Scene3.prototype.showAlert = function () {
    var s = this;
    if (!s.alert) {
        s.alert = new scene3.AlertMc();
        s.alert.alertCon_mc.in_btn.mouseChildren = false;
        s.alert.alertCon_mc.out_btn.mouseChildren = false;
    }
    //每次通过再次addChild将s.alert移到最高层
    s.addChild(s.alert);
    s.alert.gotoAndPlay(2);
};
