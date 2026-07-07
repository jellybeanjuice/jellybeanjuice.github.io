gdjs.DrivingCode = {};
gdjs.DrivingCode.localVariables = [];
gdjs.DrivingCode.idToCallbackMap = new Map();
gdjs.DrivingCode.GDCarObjects1= [];
gdjs.DrivingCode.GDCarObjects2= [];
gdjs.DrivingCode.GDNormWallObjects1= [];
gdjs.DrivingCode.GDNormWallObjects2= [];
gdjs.DrivingCode.GDFinishObjects1= [];
gdjs.DrivingCode.GDFinishObjects2= [];


gdjs.DrivingCode.mapOfGDgdjs_9546DrivingCode_9546GDFinishObjects1Objects = Hashtable.newFrom({"Finish": gdjs.DrivingCode.GDFinishObjects1});
gdjs.DrivingCode.mapOfGDgdjs_9546DrivingCode_9546GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs.DrivingCode.GDCarObjects1});
gdjs.DrivingCode.asyncCallback27336148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DrivingCode.localVariables);
gdjs.DrivingCode.localVariables.length = 0;
}
gdjs.DrivingCode.idToCallbackMap.set(27336148, gdjs.DrivingCode.asyncCallback27336148);
gdjs.DrivingCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.DrivingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.saveState.createGameSaveStateInStorage(runtimeScene, "Save01", ""), (runtimeScene) => (gdjs.DrivingCode.asyncCallback27336148(runtimeScene, asyncObjectsList)), 27336148, asyncObjectsList);
}
}

}


};gdjs.DrivingCode.asyncCallback27337108 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DrivingCode.localVariables);
gdjs.DrivingCode.localVariables.length = 0;
}
gdjs.DrivingCode.idToCallbackMap.set(27337108, gdjs.DrivingCode.asyncCallback27337108);
gdjs.DrivingCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.DrivingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.saveState.createGameSaveStateInStorage(runtimeScene, "Save01", ""), (runtimeScene) => (gdjs.DrivingCode.asyncCallback27337108(runtimeScene, asyncObjectsList)), 27337108, asyncObjectsList);
}
}

}


};gdjs.DrivingCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.DrivingCode.GDCarObjects1);
{for(var i = 0, len = gdjs.DrivingCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.DrivingCode.GDCarObjects1[i].getBehavior("PhysicsCar").SimulateUpKey(null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.DrivingCode.GDCarObjects1);
{for(var i = 0, len = gdjs.DrivingCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.DrivingCode.GDCarObjects1[i].getBehavior("PhysicsCar").SimulateDownKey(null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.DrivingCode.GDCarObjects1);
{for(var i = 0, len = gdjs.DrivingCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.DrivingCode.GDCarObjects1[i].getBehavior("PhysicsCar").SimulateLeftKey(null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.DrivingCode.GDCarObjects1);
{for(var i = 0, len = gdjs.DrivingCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.DrivingCode.GDCarObjects1[i].getBehavior("PhysicsCar").SimulateRightKey(null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.DrivingCode.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Finish"), gdjs.DrivingCode.GDFinishObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.DrivingCode.mapOfGDgdjs_9546DrivingCode_9546GDFinishObjects1Objects, gdjs.DrivingCode.mapOfGDgdjs_9546DrivingCode_9546GDCarObjects1Objects, false, runtimeScene, false);
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
gdjs.DrivingCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Middle");
if (isConditionTrue_0) {

{ //Subevents
gdjs.DrivingCode.eventsList1(runtimeScene);} //End of subevents
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
{gdjs.evtTools.sound.playMusic(runtimeScene, "Juhani Junkala [Chiptune Adventures] 1. Stage 1.ogg", true, 100, 1);
}
}

}


};

gdjs.DrivingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DrivingCode.GDCarObjects1.length = 0;
gdjs.DrivingCode.GDCarObjects2.length = 0;
gdjs.DrivingCode.GDNormWallObjects1.length = 0;
gdjs.DrivingCode.GDNormWallObjects2.length = 0;
gdjs.DrivingCode.GDFinishObjects1.length = 0;
gdjs.DrivingCode.GDFinishObjects2.length = 0;

gdjs.DrivingCode.eventsList2(runtimeScene);
gdjs.DrivingCode.GDCarObjects1.length = 0;
gdjs.DrivingCode.GDCarObjects2.length = 0;
gdjs.DrivingCode.GDNormWallObjects1.length = 0;
gdjs.DrivingCode.GDNormWallObjects2.length = 0;
gdjs.DrivingCode.GDFinishObjects1.length = 0;
gdjs.DrivingCode.GDFinishObjects2.length = 0;


return;

}

gdjs['DrivingCode'] = gdjs.DrivingCode;
