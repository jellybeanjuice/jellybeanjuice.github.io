gdjs.LevelSelectCode = {};
gdjs.LevelSelectCode.localVariables = [];
gdjs.LevelSelectCode.idToCallbackMap = new Map();
gdjs.LevelSelectCode.GDForestBtnObjects1= [];
gdjs.LevelSelectCode.GDForestBtnObjects2= [];
gdjs.LevelSelectCode.GDJungleBtnObjects1= [];
gdjs.LevelSelectCode.GDJungleBtnObjects2= [];


gdjs.LevelSelectCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JungleBtn"), gdjs.LevelSelectCode.GDJungleBtnObjects1);
{for(var i = 0, len = gdjs.LevelSelectCode.GDJungleBtnObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDJungleBtnObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ForestBtn"), gdjs.LevelSelectCode.GDForestBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDForestBtnObjects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDForestBtnObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDForestBtnObjects1[k] = gdjs.LevelSelectCode.GDForestBtnObjects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDForestBtnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Forest", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("JungleBtn"), gdjs.LevelSelectCode.GDJungleBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDJungleBtnObjects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDJungleBtnObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDJungleBtnObjects1[k] = gdjs.LevelSelectCode.GDJungleBtnObjects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDJungleBtnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jungle", false);
}
}

}


};

gdjs.LevelSelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelSelectCode.GDForestBtnObjects1.length = 0;
gdjs.LevelSelectCode.GDForestBtnObjects2.length = 0;
gdjs.LevelSelectCode.GDJungleBtnObjects1.length = 0;
gdjs.LevelSelectCode.GDJungleBtnObjects2.length = 0;

gdjs.LevelSelectCode.eventsList0(runtimeScene);
gdjs.LevelSelectCode.GDForestBtnObjects1.length = 0;
gdjs.LevelSelectCode.GDForestBtnObjects2.length = 0;
gdjs.LevelSelectCode.GDJungleBtnObjects1.length = 0;
gdjs.LevelSelectCode.GDJungleBtnObjects2.length = 0;


return;

}

gdjs['LevelSelectCode'] = gdjs.LevelSelectCode;
