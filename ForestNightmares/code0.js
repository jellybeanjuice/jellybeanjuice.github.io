gdjs.StartScreenCode = {};
gdjs.StartScreenCode.localVariables = [];
gdjs.StartScreenCode.idToCallbackMap = new Map();
gdjs.StartScreenCode.GDNewSpriteObjects1= [];
gdjs.StartScreenCode.GDNewSpriteObjects2= [];


gdjs.StartScreenCode.asyncCallback24984116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.StartScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}
gdjs.StartScreenCode.localVariables.length = 0;
}
gdjs.StartScreenCode.idToCallbackMap.set(24984116, gdjs.StartScreenCode.asyncCallback24984116);
gdjs.StartScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.StartScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StartScreenCode.asyncCallback24984116(runtimeScene, asyncObjectsList)), 24984116, asyncObjectsList);
}
}

}


};gdjs.StartScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "982e7b54cdd141371ad82b0ab7ce659f5b4b7ca6eb1f87c895d4da99d3f98ce2_Coins 6.aac", false, 100, 1);
}

{ //Subevents
gdjs.StartScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.StartScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.StartScreenCode.GDNewSpriteObjects2.length = 0;

gdjs.StartScreenCode.eventsList1(runtimeScene);
gdjs.StartScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.StartScreenCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['StartScreenCode'] = gdjs.StartScreenCode;
