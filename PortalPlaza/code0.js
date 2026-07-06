gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDRedButtonWithGoldFrameObjects1= [];
gdjs.MenuCode.GDRedButtonWithGoldFrameObjects2= [];
gdjs.MenuCode.GDLogoObjects1= [];
gdjs.MenuCode.GDLogoObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithGoldFrame"), gdjs.MenuCode.GDRedButtonWithGoldFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDRedButtonWithGoldFrameObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDRedButtonWithGoldFrameObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDRedButtonWithGoldFrameObjects1[k] = gdjs.MenuCode.GDRedButtonWithGoldFrameObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDRedButtonWithGoldFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "The Lobby", false);
}
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.MenuCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.MenuCode.GDLogoObjects1.length = 0;
gdjs.MenuCode.GDLogoObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.MenuCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.MenuCode.GDLogoObjects1.length = 0;
gdjs.MenuCode.GDLogoObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
