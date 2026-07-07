gdjs.PlatformingCode = {};
gdjs.PlatformingCode.localVariables = [];
gdjs.PlatformingCode.idToCallbackMap = new Map();
gdjs.PlatformingCode.GDBlockObjects1= [];
gdjs.PlatformingCode.GDBlockObjects2= [];
gdjs.PlatformingCode.GDGuyObjects1= [];
gdjs.PlatformingCode.GDGuyObjects2= [];
gdjs.PlatformingCode.GDFinishObjects1= [];
gdjs.PlatformingCode.GDFinishObjects2= [];


gdjs.PlatformingCode.mapOfGDgdjs_9546PlatformingCode_9546GDGuyObjects1Objects = Hashtable.newFrom({"Guy": gdjs.PlatformingCode.GDGuyObjects1});
gdjs.PlatformingCode.mapOfGDgdjs_9546PlatformingCode_9546GDFinishObjects1Objects = Hashtable.newFrom({"Finish": gdjs.PlatformingCode.GDFinishObjects1});
gdjs.PlatformingCode.asyncCallback31204108 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.PlatformingCode.localVariables);
gdjs.PlatformingCode.localVariables.length = 0;
}
gdjs.PlatformingCode.idToCallbackMap.set(31204108, gdjs.PlatformingCode.asyncCallback31204108);
gdjs.PlatformingCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.PlatformingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.saveState.createGameSaveStateInStorage(runtimeScene, "Save01", ""), (runtimeScene) => (gdjs.PlatformingCode.asyncCallback31204108(runtimeScene, asyncObjectsList)), 31204108, asyncObjectsList);
}
}

}


};gdjs.PlatformingCode.asyncCallback31205124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.PlatformingCode.localVariables);
gdjs.PlatformingCode.localVariables.length = 0;
}
gdjs.PlatformingCode.idToCallbackMap.set(31205124, gdjs.PlatformingCode.asyncCallback31205124);
gdjs.PlatformingCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.PlatformingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.saveState.createGameSaveStateInStorage(runtimeScene, "Save01", ""), (runtimeScene) => (gdjs.PlatformingCode.asyncCallback31205124(runtimeScene, asyncObjectsList)), 31205124, asyncObjectsList);
}
}

}


};gdjs.PlatformingCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Guy"), gdjs.PlatformingCode.GDGuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlatformingCode.GDGuyObjects1.length;i<l;++i) {
    if ( !(gdjs.PlatformingCode.GDGuyObjects1[i].getBehavior("InOnScreen").IsOnScreen(0, null)) ) {
        isConditionTrue_0 = true;
        gdjs.PlatformingCode.GDGuyObjects1[k] = gdjs.PlatformingCode.GDGuyObjects1[i];
        ++k;
    }
}
gdjs.PlatformingCode.GDGuyObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Finish"), gdjs.PlatformingCode.GDFinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("Guy"), gdjs.PlatformingCode.GDGuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlatformingCode.mapOfGDgdjs_9546PlatformingCode_9546GDGuyObjects1Objects, gdjs.PlatformingCode.mapOfGDgdjs_9546PlatformingCode_9546GDFinishObjects1Objects, false, runtimeScene, false);
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
gdjs.PlatformingCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Middle");
if (isConditionTrue_0) {

{ //Subevents
gdjs.PlatformingCode.eventsList1(runtimeScene);} //End of subevents
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
{gdjs.evtTools.sound.playMusic(runtimeScene, "Buy Something!.mp3", false, 100, 1);
}
}

}


};

gdjs.PlatformingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PlatformingCode.GDBlockObjects1.length = 0;
gdjs.PlatformingCode.GDBlockObjects2.length = 0;
gdjs.PlatformingCode.GDGuyObjects1.length = 0;
gdjs.PlatformingCode.GDGuyObjects2.length = 0;
gdjs.PlatformingCode.GDFinishObjects1.length = 0;
gdjs.PlatformingCode.GDFinishObjects2.length = 0;

gdjs.PlatformingCode.eventsList2(runtimeScene);
gdjs.PlatformingCode.GDBlockObjects1.length = 0;
gdjs.PlatformingCode.GDBlockObjects2.length = 0;
gdjs.PlatformingCode.GDGuyObjects1.length = 0;
gdjs.PlatformingCode.GDGuyObjects2.length = 0;
gdjs.PlatformingCode.GDFinishObjects1.length = 0;
gdjs.PlatformingCode.GDFinishObjects2.length = 0;


return;

}

gdjs['PlatformingCode'] = gdjs.PlatformingCode;
