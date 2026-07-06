gdjs.The_32LobbyCode = {};
gdjs.The_32LobbyCode.localVariables = [];
gdjs.The_32LobbyCode.idToCallbackMap = new Map();
gdjs.The_32LobbyCode.GDGroundObjects1= [];
gdjs.The_32LobbyCode.GDGroundObjects2= [];
gdjs.The_32LobbyCode.GDObstacleObjects1= [];
gdjs.The_32LobbyCode.GDObstacleObjects2= [];
gdjs.The_32LobbyCode.GDPushableBoxObjects1= [];
gdjs.The_32LobbyCode.GDPushableBoxObjects2= [];
gdjs.The_32LobbyCode.GDMovementJoystickObjects1= [];
gdjs.The_32LobbyCode.GDMovementJoystickObjects2= [];
gdjs.The_32LobbyCode.GDJumpButtonObjects1= [];
gdjs.The_32LobbyCode.GDJumpButtonObjects2= [];
gdjs.The_32LobbyCode.GDPlayerObjects1= [];
gdjs.The_32LobbyCode.GDPlayerObjects2= [];
gdjs.The_32LobbyCode.GDTestObjects1= [];
gdjs.The_32LobbyCode.GDTestObjects2= [];
gdjs.The_32LobbyCode.GD_95951stPortalObjects1= [];
gdjs.The_32LobbyCode.GD_95951stPortalObjects2= [];
gdjs.The_32LobbyCode.GDNew3DBoxObjects1= [];
gdjs.The_32LobbyCode.GDNew3DBoxObjects2= [];


gdjs.The_32LobbyCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.The_32LobbyCode.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.The_32LobbyCode.GDMovementJoystickObjects1);
{for(var i = 0, len = gdjs.The_32LobbyCode.GDMovementJoystickObjects1.length ;i < len;++i) {
    gdjs.The_32LobbyCode.GDMovementJoystickObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.The_32LobbyCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.The_32LobbyCode.GDJumpButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.The_32LobbyCode.GDMovementJoystickObjects1.length ;i < len;++i) {
    gdjs.The_32LobbyCode.GDMovementJoystickObjects1[i].ActivateControl(false, null);
}
}
}

}


};gdjs.The_32LobbyCode.eventsList1 = function(runtimeScene) {

};gdjs.The_32LobbyCode.eventsList2 = function(runtimeScene) {

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


};gdjs.The_32LobbyCode.mapOfGDgdjs_9546The_959532LobbyCode_9546GD_959595951stPortalObjects1Objects = Hashtable.newFrom({"_1stPortal": gdjs.The_32LobbyCode.GD_95951stPortalObjects1});
gdjs.The_32LobbyCode.mapOfGDgdjs_9546The_959532LobbyCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.The_32LobbyCode.GDPlayerObjects1});
gdjs.The_32LobbyCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.The_32LobbyCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.The_32LobbyCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.The_32LobbyCode.GDPlayerObjects1[i].hide();
}
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "TownTheme.mp3", true, 100, 1);
}

{ //Subevents
gdjs.The_32LobbyCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.The_32LobbyCode.eventsList1(runtimeScene);
}


{


gdjs.The_32LobbyCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.The_32LobbyCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("_1stPortal"), gdjs.The_32LobbyCode.GD_95951stPortalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.The_32LobbyCode.mapOfGDgdjs_9546The_959532LobbyCode_9546GD_959595951stPortalObjects1Objects, "Physics3D", gdjs.The_32LobbyCode.mapOfGDgdjs_9546The_959532LobbyCode_9546GDPlayerObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Driving 2D", false);
}
}

}


};

gdjs.The_32LobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.The_32LobbyCode.GDGroundObjects1.length = 0;
gdjs.The_32LobbyCode.GDGroundObjects2.length = 0;
gdjs.The_32LobbyCode.GDObstacleObjects1.length = 0;
gdjs.The_32LobbyCode.GDObstacleObjects2.length = 0;
gdjs.The_32LobbyCode.GDPushableBoxObjects1.length = 0;
gdjs.The_32LobbyCode.GDPushableBoxObjects2.length = 0;
gdjs.The_32LobbyCode.GDMovementJoystickObjects1.length = 0;
gdjs.The_32LobbyCode.GDMovementJoystickObjects2.length = 0;
gdjs.The_32LobbyCode.GDJumpButtonObjects1.length = 0;
gdjs.The_32LobbyCode.GDJumpButtonObjects2.length = 0;
gdjs.The_32LobbyCode.GDPlayerObjects1.length = 0;
gdjs.The_32LobbyCode.GDPlayerObjects2.length = 0;
gdjs.The_32LobbyCode.GDTestObjects1.length = 0;
gdjs.The_32LobbyCode.GDTestObjects2.length = 0;
gdjs.The_32LobbyCode.GD_95951stPortalObjects1.length = 0;
gdjs.The_32LobbyCode.GD_95951stPortalObjects2.length = 0;
gdjs.The_32LobbyCode.GDNew3DBoxObjects1.length = 0;
gdjs.The_32LobbyCode.GDNew3DBoxObjects2.length = 0;

gdjs.The_32LobbyCode.eventsList3(runtimeScene);
gdjs.The_32LobbyCode.GDGroundObjects1.length = 0;
gdjs.The_32LobbyCode.GDGroundObjects2.length = 0;
gdjs.The_32LobbyCode.GDObstacleObjects1.length = 0;
gdjs.The_32LobbyCode.GDObstacleObjects2.length = 0;
gdjs.The_32LobbyCode.GDPushableBoxObjects1.length = 0;
gdjs.The_32LobbyCode.GDPushableBoxObjects2.length = 0;
gdjs.The_32LobbyCode.GDMovementJoystickObjects1.length = 0;
gdjs.The_32LobbyCode.GDMovementJoystickObjects2.length = 0;
gdjs.The_32LobbyCode.GDJumpButtonObjects1.length = 0;
gdjs.The_32LobbyCode.GDJumpButtonObjects2.length = 0;
gdjs.The_32LobbyCode.GDPlayerObjects1.length = 0;
gdjs.The_32LobbyCode.GDPlayerObjects2.length = 0;
gdjs.The_32LobbyCode.GDTestObjects1.length = 0;
gdjs.The_32LobbyCode.GDTestObjects2.length = 0;
gdjs.The_32LobbyCode.GD_95951stPortalObjects1.length = 0;
gdjs.The_32LobbyCode.GD_95951stPortalObjects2.length = 0;
gdjs.The_32LobbyCode.GDNew3DBoxObjects1.length = 0;
gdjs.The_32LobbyCode.GDNew3DBoxObjects2.length = 0;


return;

}

gdjs['The_32LobbyCode'] = gdjs.The_32LobbyCode;
