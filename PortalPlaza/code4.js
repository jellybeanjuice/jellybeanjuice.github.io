gdjs.SandboxCode = {};
gdjs.SandboxCode.localVariables = [];
gdjs.SandboxCode.idToCallbackMap = new Map();
gdjs.SandboxCode.GDFlagObjects1= [];
gdjs.SandboxCode.GDFlagObjects2= [];


gdjs.SandboxCode.mapOfGDgdjs_9546SandboxCode_9546GDFlagObjects1Objects = Hashtable.newFrom({"Flag": gdjs.SandboxCode.GDFlagObjects1});
gdjs.SandboxCode.asyncCallback16469756 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SandboxCode.localVariables);
gdjs.SandboxCode.localVariables.length = 0;
}
gdjs.SandboxCode.idToCallbackMap.set(16469756, gdjs.SandboxCode.asyncCallback16469756);
gdjs.SandboxCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SandboxCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.saveState.createGameSaveStateInStorage(runtimeScene, "Save01", ""), (runtimeScene) => (gdjs.SandboxCode.asyncCallback16469756(runtimeScene, asyncObjectsList)), 16469756, asyncObjectsList);
}
}

}


};gdjs.SandboxCode.asyncCallback16470684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SandboxCode.localVariables);
gdjs.SandboxCode.localVariables.length = 0;
}
gdjs.SandboxCode.idToCallbackMap.set(16470684, gdjs.SandboxCode.asyncCallback16470684);
gdjs.SandboxCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SandboxCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.saveState.createGameSaveStateInStorage(runtimeScene, "Save01", ""), (runtimeScene) => (gdjs.SandboxCode.asyncCallback16470684(runtimeScene, asyncObjectsList)), 16470684, asyncObjectsList);
}
}

}


};gdjs.SandboxCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
if (isConditionTrue_0) {
gdjs.SandboxCode.GDFlagObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SandboxCode.mapOfGDgdjs_9546SandboxCode_9546GDFlagObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "l");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lobby", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.SandboxCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Middle");
if (isConditionTrue_0) {

{ //Subevents
gdjs.SandboxCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__MousePointerLock__ExitPointerLock.func(runtimeScene, null);
}
}

}


};

gdjs.SandboxCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SandboxCode.GDFlagObjects1.length = 0;
gdjs.SandboxCode.GDFlagObjects2.length = 0;

gdjs.SandboxCode.eventsList2(runtimeScene);
gdjs.SandboxCode.GDFlagObjects1.length = 0;
gdjs.SandboxCode.GDFlagObjects2.length = 0;


return;

}

gdjs['SandboxCode'] = gdjs.SandboxCode;
