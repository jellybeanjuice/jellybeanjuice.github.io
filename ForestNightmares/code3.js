gdjs.PauseCode = {};
gdjs.PauseCode.localVariables = [];
gdjs.PauseCode.idToCallbackMap = new Map();
gdjs.PauseCode.GDNewTextObjects1= [];
gdjs.PauseCode.GDNewTextObjects2= [];
gdjs.PauseCode.GDResumeObjects1= [];
gdjs.PauseCode.GDResumeObjects2= [];
gdjs.PauseCode.GDMenuObjects1= [];
gdjs.PauseCode.GDMenuObjects2= [];
gdjs.PauseCode.GDRestartObjects1= [];
gdjs.PauseCode.GDRestartObjects2= [];


gdjs.PauseCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Resume"), gdjs.PauseCode.GDResumeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PauseCode.GDResumeObjects1.length;i<l;++i) {
    if ( gdjs.PauseCode.GDResumeObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.PauseCode.GDResumeObjects1[k] = gdjs.PauseCode.GDResumeObjects1[i];
        ++k;
    }
}
gdjs.PauseCode.GDResumeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.PauseCode.GDRestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PauseCode.GDRestartObjects1.length;i<l;++i) {
    if ( gdjs.PauseCode.GDRestartObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.PauseCode.GDRestartObjects1[k] = gdjs.PauseCode.GDRestartObjects1[i];
        ++k;
    }
}
gdjs.PauseCode.GDRestartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.PauseCode.GDMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PauseCode.GDMenuObjects1.length;i<l;++i) {
    if ( gdjs.PauseCode.GDMenuObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.PauseCode.GDMenuObjects1[k] = gdjs.PauseCode.GDMenuObjects1[i];
        ++k;
    }
}
gdjs.PauseCode.GDMenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__ExitPointerLock.func(runtimeScene, null);
}
}

}


};

gdjs.PauseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PauseCode.GDNewTextObjects1.length = 0;
gdjs.PauseCode.GDNewTextObjects2.length = 0;
gdjs.PauseCode.GDResumeObjects1.length = 0;
gdjs.PauseCode.GDResumeObjects2.length = 0;
gdjs.PauseCode.GDMenuObjects1.length = 0;
gdjs.PauseCode.GDMenuObjects2.length = 0;
gdjs.PauseCode.GDRestartObjects1.length = 0;
gdjs.PauseCode.GDRestartObjects2.length = 0;

gdjs.PauseCode.eventsList0(runtimeScene);
gdjs.PauseCode.GDNewTextObjects1.length = 0;
gdjs.PauseCode.GDNewTextObjects2.length = 0;
gdjs.PauseCode.GDResumeObjects1.length = 0;
gdjs.PauseCode.GDResumeObjects2.length = 0;
gdjs.PauseCode.GDMenuObjects1.length = 0;
gdjs.PauseCode.GDMenuObjects2.length = 0;
gdjs.PauseCode.GDRestartObjects1.length = 0;
gdjs.PauseCode.GDRestartObjects2.length = 0;


return;

}

gdjs['PauseCode'] = gdjs.PauseCode;
