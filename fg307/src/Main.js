/**
 * @author anlun214 QQ:58529016
 */
var F2xExtend = __extends;
window.addEventListener("load", function () {
    annie.debug = true;
    /**
     * 最上层div的id,可以在一个页面同时放多个stage.
     * 设计尺寸的宽
     * 设计尺寸的高
     * FPS刷新率
     * 缩放模式
     * 渲染模式
     */
    var loadObj = null;
    var stage = new annie.Stage("annieEngine", 1136, 640, 30, annie.StageScaleMode.FIXED_HEIGHT, 0);
    stage.addEventListener(annie.Event.INIT_TO_STAGE, function (e) {
        Flash2x.loadScene("loading", function (per) {
            //加载进度
            console.log("加载进度:" + per + "%");
        }, function () {
            //加载完成
            loadObj = new loading.Loading();
            globalDispatcher.dispatchEvent("onChangeScene", {scene: "scene1"});
        });
    });
    globalDispatcher.addEventListener("onChangeScene", function (e) {
        stage.removeAllChildren();
        stage.addChild(loadObj);
        loadObj.per_txt.text = "loading...";
        Flash2x.loadScene(e.data.scene, function (per) {
            loadObj.per_txt.text = "loading..." + per + "%";
        }, function (evt) {
            switch (e.data.scene) {
                case "scene1":
                    stage.addChild(new scene1.Scene1());
                    break;
                case "scene2":
                    stage.addChild(new scene2.Scene2());
                    break;
                case "scene3":
                    stage.addChild(new scene3.Scene3());
                    break;
            }
        })
    })
});