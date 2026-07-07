gdjs.LobbyCode = {};
gdjs.LobbyCode.localVariables = [];
gdjs.LobbyCode.idToCallbackMap = new Map();
gdjs.LobbyCode.GDGroundObjects1= [];
gdjs.LobbyCode.GDGroundObjects2= [];
gdjs.LobbyCode.GDObstacleObjects1= [];
gdjs.LobbyCode.GDObstacleObjects2= [];
gdjs.LobbyCode.GDPushableBoxObjects1= [];
gdjs.LobbyCode.GDPushableBoxObjects2= [];
gdjs.LobbyCode.GDMovementJoystickObjects1= [];
gdjs.LobbyCode.GDMovementJoystickObjects2= [];
gdjs.LobbyCode.GDJumpButtonObjects1= [];
gdjs.LobbyCode.GDJumpButtonObjects2= [];
gdjs.LobbyCode.GDPlayerObjects1= [];
gdjs.LobbyCode.GDPlayerObjects2= [];
gdjs.LobbyCode.GDTestObjects1= [];
gdjs.LobbyCode.GDTestObjects2= [];
gdjs.LobbyCode.GDNew3DBoxObjects1= [];
gdjs.LobbyCode.GDNew3DBoxObjects2= [];
gdjs.LobbyCode.GDDrivingPortalObjects1= [];
gdjs.LobbyCode.GDDrivingPortalObjects2= [];
gdjs.LobbyCode.GDPlatPortalObjects1= [];
gdjs.LobbyCode.GDPlatPortalObjects2= [];
gdjs.LobbyCode.GDSandboxPortalObjects1= [];
gdjs.LobbyCode.GDSandboxPortalObjects2= [];


gdjs.LobbyCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.LobbyCode.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.LobbyCode.GDMovementJoystickObjects1);
{for(var i = 0, len = gdjs.LobbyCode.GDMovementJoystickObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDMovementJoystickObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LobbyCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDJumpButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LobbyCode.GDMovementJoystickObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDMovementJoystickObjects1[i].ActivateControl(false, null);
}
}
}

}


};gdjs.LobbyCode.eventsList1 = function(runtimeScene) {

};gdjs.LobbyCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Keyboard");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, null));
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, null);
}
}

}


};gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDDrivingPortalObjects1Objects = Hashtable.newFrom({"DrivingPortal": gdjs.LobbyCode.GDDrivingPortalObjects1});
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LobbyCode.GDPlayerObjects1});
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDPlatPortalObjects1Objects = Hashtable.newFrom({"PlatPortal": gdjs.LobbyCode.GDPlatPortalObjects1});
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LobbyCode.GDPlayerObjects1});
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDSandboxPortalObjects1Objects = Hashtable.newFrom({"SandboxPortal": gdjs.LobbyCode.GDSandboxPortalObjects1});
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LobbyCode.GDPlayerObjects1});
gdjs.LobbyCode.asyncCallback30454996 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LobbyCode.localVariables);
gdjs.LobbyCode.localVariables.length = 0;
}
gdjs.LobbyCode.idToCallbackMap.set(30454996, gdjs.LobbyCode.asyncCallback30454996);
gdjs.LobbyCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LobbyCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.saveState.createGameSaveStateInStorage(runtimeScene, "Save01", ""), (runtimeScene) => (gdjs.LobbyCode.asyncCallback30454996(runtimeScene, asyncObjectsList)), 30454996, asyncObjectsList);
}
}

}


};gdjs.LobbyCode.asyncCallback30456068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LobbyCode.localVariables);
gdjs.LobbyCode.localVariables.length = 0;
}
gdjs.LobbyCode.idToCallbackMap.set(30456068, gdjs.LobbyCode.asyncCallback30456068);
gdjs.LobbyCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LobbyCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.saveState.createGameSaveStateInStorage(runtimeScene, "Save01", ""), (runtimeScene) => (gdjs.LobbyCode.asyncCallback30456068(runtimeScene, asyncObjectsList)), 30456068, asyncObjectsList);
}
}

}


};gdjs.LobbyCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LobbyCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LobbyCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDPlayerObjects1[i].hide();
}
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "TownTheme.mp3", true, 100, 1);
}

{ //Subevents
gdjs.LobbyCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.LobbyCode.eventsList1(runtimeScene);
}


{


gdjs.LobbyCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("DrivingPortal"), gdjs.LobbyCode.GDDrivingPortalObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LobbyCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDDrivingPortalObjects1Objects, "Physics3D", gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDPlayerObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Driving", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlatPortal"), gdjs.LobbyCode.GDPlatPortalObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LobbyCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDPlatPortalObjects1Objects, "Physics3D", gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDPlayerObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Platforming", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LobbyCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SandboxPortal"), gdjs.LobbyCode.GDSandboxPortalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDSandboxPortalObjects1Objects, "Physics3D", gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDPlayerObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sandbox", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Middle");
if (isConditionTrue_0) {

{ //Subevents
gdjs.LobbyCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.LobbyCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.LobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LobbyCode.GDGroundObjects1.length = 0;
gdjs.LobbyCode.GDGroundObjects2.length = 0;
gdjs.LobbyCode.GDObstacleObjects1.length = 0;
gdjs.LobbyCode.GDObstacleObjects2.length = 0;
gdjs.LobbyCode.GDPushableBoxObjects1.length = 0;
gdjs.LobbyCode.GDPushableBoxObjects2.length = 0;
gdjs.LobbyCode.GDMovementJoystickObjects1.length = 0;
gdjs.LobbyCode.GDMovementJoystickObjects2.length = 0;
gdjs.LobbyCode.GDJumpButtonObjects1.length = 0;
gdjs.LobbyCode.GDJumpButtonObjects2.length = 0;
gdjs.LobbyCode.GDPlayerObjects1.length = 0;
gdjs.LobbyCode.GDPlayerObjects2.length = 0;
gdjs.LobbyCode.GDTestObjects1.length = 0;
gdjs.LobbyCode.GDTestObjects2.length = 0;
gdjs.LobbyCode.GDNew3DBoxObjects1.length = 0;
gdjs.LobbyCode.GDNew3DBoxObjects2.length = 0;
gdjs.LobbyCode.GDDrivingPortalObjects1.length = 0;
gdjs.LobbyCode.GDDrivingPortalObjects2.length = 0;
gdjs.LobbyCode.GDPlatPortalObjects1.length = 0;
gdjs.LobbyCode.GDPlatPortalObjects2.length = 0;
gdjs.LobbyCode.GDSandboxPortalObjects1.length = 0;
gdjs.LobbyCode.GDSandboxPortalObjects2.length = 0;

gdjs.LobbyCode.eventsList5(runtimeScene);
gdjs.LobbyCode.GDGroundObjects1.length = 0;
gdjs.LobbyCode.GDGroundObjects2.length = 0;
gdjs.LobbyCode.GDObstacleObjects1.length = 0;
gdjs.LobbyCode.GDObstacleObjects2.length = 0;
gdjs.LobbyCode.GDPushableBoxObjects1.length = 0;
gdjs.LobbyCode.GDPushableBoxObjects2.length = 0;
gdjs.LobbyCode.GDMovementJoystickObjects1.length = 0;
gdjs.LobbyCode.GDMovementJoystickObjects2.length = 0;
gdjs.LobbyCode.GDJumpButtonObjects1.length = 0;
gdjs.LobbyCode.GDJumpButtonObjects2.length = 0;
gdjs.LobbyCode.GDPlayerObjects1.length = 0;
gdjs.LobbyCode.GDPlayerObjects2.length = 0;
gdjs.LobbyCode.GDTestObjects1.length = 0;
gdjs.LobbyCode.GDTestObjects2.length = 0;
gdjs.LobbyCode.GDNew3DBoxObjects1.length = 0;
gdjs.LobbyCode.GDNew3DBoxObjects2.length = 0;
gdjs.LobbyCode.GDDrivingPortalObjects1.length = 0;
gdjs.LobbyCode.GDDrivingPortalObjects2.length = 0;
gdjs.LobbyCode.GDPlatPortalObjects1.length = 0;
gdjs.LobbyCode.GDPlatPortalObjects2.length = 0;
gdjs.LobbyCode.GDSandboxPortalObjects1.length = 0;
gdjs.LobbyCode.GDSandboxPortalObjects2.length = 0;


return;

}

gdjs['LobbyCode'] = gdjs.LobbyCode;
