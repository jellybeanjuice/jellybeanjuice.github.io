gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.GDCarObjects1= [];
gdjs.Game_32SceneCode.GDCarObjects2= [];
gdjs.Game_32SceneCode.GDCarObjects3= [];
gdjs.Game_32SceneCode.GDCarObjects4= [];
gdjs.Game_32SceneCode.GDCarObjects5= [];
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects1= [];
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects2= [];
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects3= [];
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects4= [];
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects5= [];
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects1= [];
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects2= [];
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects3= [];
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects4= [];
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects5= [];
gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects1= [];
gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects2= [];
gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects3= [];
gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects4= [];
gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects5= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects1= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects2= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects3= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects4= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects5= [];
gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDPlayerObjects3= [];
gdjs.Game_32SceneCode.GDPlayerObjects4= [];
gdjs.Game_32SceneCode.GDPlayerObjects5= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects1= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects2= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects3= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects4= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects5= [];
gdjs.Game_32SceneCode.GDObstacleObjects1= [];
gdjs.Game_32SceneCode.GDObstacleObjects2= [];
gdjs.Game_32SceneCode.GDObstacleObjects3= [];
gdjs.Game_32SceneCode.GDObstacleObjects4= [];
gdjs.Game_32SceneCode.GDObstacleObjects5= [];
gdjs.Game_32SceneCode.GDGroundObjects1= [];
gdjs.Game_32SceneCode.GDGroundObjects2= [];
gdjs.Game_32SceneCode.GDGroundObjects3= [];
gdjs.Game_32SceneCode.GDGroundObjects4= [];
gdjs.Game_32SceneCode.GDGroundObjects5= [];
gdjs.Game_32SceneCode.GDControlsToggleObjects1= [];
gdjs.Game_32SceneCode.GDControlsToggleObjects2= [];
gdjs.Game_32SceneCode.GDControlsToggleObjects3= [];
gdjs.Game_32SceneCode.GDControlsToggleObjects4= [];
gdjs.Game_32SceneCode.GDControlsToggleObjects5= [];
gdjs.Game_32SceneCode.GDDriven_9595CarObjects1= [];
gdjs.Game_32SceneCode.GDDriven_9595CarObjects2= [];
gdjs.Game_32SceneCode.GDDriven_9595CarObjects3= [];
gdjs.Game_32SceneCode.GDDriven_9595CarObjects4= [];
gdjs.Game_32SceneCode.GDDriven_9595CarObjects5= [];
gdjs.Game_32SceneCode.GDActionButtonObjects1= [];
gdjs.Game_32SceneCode.GDActionButtonObjects2= [];
gdjs.Game_32SceneCode.GDActionButtonObjects3= [];
gdjs.Game_32SceneCode.GDActionButtonObjects4= [];
gdjs.Game_32SceneCode.GDActionButtonObjects5= [];
gdjs.Game_32SceneCode.GDSnowyMountainsTerrainObjects1= [];
gdjs.Game_32SceneCode.GDSnowyMountainsTerrainObjects2= [];
gdjs.Game_32SceneCode.GDSnowyMountainsTerrainObjects3= [];
gdjs.Game_32SceneCode.GDSnowyMountainsTerrainObjects4= [];
gdjs.Game_32SceneCode.GDSnowyMountainsTerrainObjects5= [];
gdjs.Game_32SceneCode.GDWhiteGrassObjects1= [];
gdjs.Game_32SceneCode.GDWhiteGrassObjects2= [];
gdjs.Game_32SceneCode.GDWhiteGrassObjects3= [];
gdjs.Game_32SceneCode.GDWhiteGrassObjects4= [];
gdjs.Game_32SceneCode.GDWhiteGrassObjects5= [];
gdjs.Game_32SceneCode.GDWaterObjects1= [];
gdjs.Game_32SceneCode.GDWaterObjects2= [];
gdjs.Game_32SceneCode.GDWaterObjects3= [];
gdjs.Game_32SceneCode.GDWaterObjects4= [];
gdjs.Game_32SceneCode.GDWaterObjects5= [];
gdjs.Game_32SceneCode.GDSeedTextObjects1= [];
gdjs.Game_32SceneCode.GDSeedTextObjects2= [];
gdjs.Game_32SceneCode.GDSeedTextObjects3= [];
gdjs.Game_32SceneCode.GDSeedTextObjects4= [];
gdjs.Game_32SceneCode.GDSeedTextObjects5= [];


gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32SceneCode.GDControlsToggleObjects1, gdjs.Game_32SceneCode.GDControlsToggleObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDControlsToggleObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDControlsToggleObjects2[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDControlsToggleObjects2[k] = gdjs.Game_32SceneCode.GDControlsToggleObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDControlsToggleObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ActionButton"), gdjs.Game_32SceneCode.GDActionButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Game_32SceneCode.GDJumpButtonObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Touch");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJumpButtonObjects2[i].activateBehavior("MultitouchButton", true);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDActionButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDActionButtonObjects2[i].activateBehavior("ButtonFSM", true);
}
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "MobileControls_Common");
}
}

}


{

/* Reuse gdjs.Game_32SceneCode.GDControlsToggleObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDControlsToggleObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDControlsToggleObjects1[i].IsChecked(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDControlsToggleObjects1[k] = gdjs.Game_32SceneCode.GDControlsToggleObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDControlsToggleObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ActionButton"), gdjs.Game_32SceneCode.GDActionButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Game_32SceneCode.GDJumpButtonObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Keyboard");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJumpButtonObjects1[i].activateBehavior("MultitouchButton", false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDActionButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDActionButtonObjects1[i].activateBehavior("ButtonFSM", false);
}
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "MobileControls_Common");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "MobileControls_Driving");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "MobileControls_Walking");
}
}

}


};gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.Game_32SceneCode.GDControlsToggleObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDControlsToggleObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDControlsToggleObjects2[i].SetChecked(true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.Game_32SceneCode.GDControlsToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDControlsToggleObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDControlsToggleObjects1[i].HasJustBeenToggled(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDControlsToggleObjects1[k] = gdjs.Game_32SceneCode.GDControlsToggleObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDControlsToggleObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCarObjects3Objects = Hashtable.newFrom({"Car": gdjs.Game_32SceneCode.GDCarObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCarObjects3Objects = Hashtable.newFrom({"Car": gdjs.Game_32SceneCode.GDCarObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDriven_95959595CarObjects3Objects = Hashtable.newFrom({"Driven_Car": gdjs.Game_32SceneCode.GDDriven_9595CarObjects3});
gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.Game_32SceneCode.GDCarObjects3 */
gdjs.Game_32SceneCode.GDDriven_9595CarObjects3.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDriven_95959595CarObjects3Objects, "Driven_" + (( gdjs.Game_32SceneCode.GDCarObjects3.length === 0 ) ? "" :gdjs.Game_32SceneCode.GDCarObjects3[0].getName()), (( gdjs.Game_32SceneCode.GDCarObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDCarObjects3[0].getX()), (( gdjs.Game_32SceneCode.GDCarObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDCarObjects3[0].getY()), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDriven_9595CarObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDriven_9595CarObjects3[i].setAngle((( gdjs.Game_32SceneCode.GDCarObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDCarObjects3[0].getAngle()));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDriven_9595CarObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDriven_9595CarObjects3[i].getBehavior("Object3D").setZ((( gdjs.Game_32SceneCode.GDCarObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDCarObjects3[0].getBehavior("Object3D").getZ()));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCarObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCarObjects3[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.Game_32SceneCode.GDCarObjects3);
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects2, gdjs.Game_32SceneCode.GDPlayerObjects3);


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCarObjects3Objects, (( gdjs.Game_32SceneCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects3[0].getX()), (( gdjs.Game_32SceneCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects3[0].getY()), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCarObjects3Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects3Objects, ((( gdjs.Game_32SceneCode.GDCarObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDCarObjects3[0].getWidth()) + (( gdjs.Game_32SceneCode.GDCarObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDCarObjects3[0].getHeight())) / 2, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].activateBehavior("ThirdPersonCamera", false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].activateBehavior("Physics3D", false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].activateBehavior("Platformer3DMultitouchMapper", false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].activateBehavior("Platformer3DKeyboardMapper", false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)).setString("Driving");
}
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList2(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setString("Walking");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs.Game_32SceneCode.GDCarObjects1});
gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.Game_32SceneCode.GDDriven_9595CarObjects1 */
gdjs.Game_32SceneCode.GDCarObjects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCarObjects1Objects, gdjs.evtTools.string.subStr((( gdjs.Game_32SceneCode.GDDriven_9595CarObjects1.length === 0 ) ? "" :gdjs.Game_32SceneCode.GDDriven_9595CarObjects1[0].getName()), 7, 100), (( gdjs.Game_32SceneCode.GDDriven_9595CarObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDDriven_9595CarObjects1[0].getX()), (( gdjs.Game_32SceneCode.GDDriven_9595CarObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDDriven_9595CarObjects1[0].getY()), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCarObjects1[i].setAngle((( gdjs.Game_32SceneCode.GDDriven_9595CarObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDDriven_9595CarObjects1[0].getAngle()));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCarObjects1[i].getBehavior("Object3D").setZ((( gdjs.Game_32SceneCode.GDDriven_9595CarObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDDriven_9595CarObjects1[0].getBehavior("Object3D").getZ()));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDriven_9595CarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDriven_9595CarObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Driven_Car"), gdjs.Game_32SceneCode.GDDriven_9595CarObjects1);
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].activateBehavior("ThirdPersonCamera", true);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].activateBehavior("Physics3D", true);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].activateBehavior("Platformer3DMultitouchMapper", true);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].activateBehavior("Platformer3DKeyboardMapper", true);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].setPosition((( gdjs.Game_32SceneCode.GDDriven_9595CarObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDDriven_9595CarObjects1[0].getCenterXInScene()),(( gdjs.Game_32SceneCode.GDDriven_9595CarObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDDriven_9595CarObjects1[0].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Object3D").setZ((( gdjs.Game_32SceneCode.GDDriven_9595CarObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDDriven_9595CarObjects1[0].getBehavior("Object3D").getZ()));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setString("Walking");
}
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == "EnterVehicle" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == "ExitVehicle" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("Object3D").setRotationY(gdjs.evtTools.common.clamp((gdjs.Game_32SceneCode.GDPlayerObjects2[i].getRotationY()), -90, 90));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetElevationAngleOffset(gdjs.evtTools.common.clamp((gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").ElevationAngleOffset(null)), -90, 90), null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__MousePointerLock__IsMoving.func(runtimeScene, null);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetCameraRotation(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").RotationAngle(null) + (180 * gdjs.evtsExt__MousePointerLock__MovementX.func(runtimeScene, null) / gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)), null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetElevationAngleOffset(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").ElevationAngleOffset(null) + (90 * gdjs.evtsExt__MousePointerLock__MovementY.func(runtimeScene, null) / gdjs.evtTools.window.getGameResolutionHeight(runtimeScene)), null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(1000000, null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetTargetedRotationAngle((gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("PhysicsCharacter3D").getForwardAngle()), null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (Math.abs(gdjs.evtTools.common.angleDifference(90, gdjs.evtsExt__SpriteMultitouchJoystick__StickAngle.func(runtimeScene, 1, "Primary", null))) < 90);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetTargetedRotationAngle(180 - (gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("PhysicsCharacter3D").getForwardAngle()), null);
}
}
}

}


{

/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtTools.common.angleDifference((( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getBehavior("ThirdPersonCamera").TargetedRotationAngle(null)) + 90, gdjs.evtTools.camera.getCameraRotation(runtimeScene, "", 0))) > 90);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(1000000, null);
}
}
}

}


};gdjs.Game_32SceneCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == "Walking" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19791060);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "MobileControls_Common");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "MobileControls_Walking");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "MobileControls_Driving");
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDControlsToggleObjects3Objects = Hashtable.newFrom({"ControlsToggle": gdjs.Game_32SceneCode.GDControlsToggleObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWalk_95959595JoystickObjects4Objects = Hashtable.newFrom({"Walk_Joystick": gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects4});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWalk_95959595JoystickObjects3Objects = Hashtable.newFrom({"Walk_Joystick": gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects3});
gdjs.Game_32SceneCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ActionButton"), gdjs.Game_32SceneCode.GDActionButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("Walk_Joystick"), gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWalk_95959595JoystickObjects3Objects, "Left", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDActionButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDActionButtonObjects3[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDActionButtonObjects3[k] = gdjs.Game_32SceneCode.GDActionButtonObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDActionButtonObjects3.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, null);
}
}

}


};gdjs.Game_32SceneCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Walk_Joystick"), gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWalk_95959595JoystickObjects4Objects, "Left", null);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects4 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects4[i].TeleportAndPress(null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects2, gdjs.Game_32SceneCode.GDPlayerObjects3);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(2, null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects2, gdjs.Game_32SceneCode.GDPlayerObjects3);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(0.5, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19799756);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}
}

}


};gdjs.Game_32SceneCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19792852);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "MobileControls_Common");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "MobileControls_Walking");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "MobileControls_Driving");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.Game_32SceneCode.GDControlsToggleObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDControlsToggleObjects3Objects, runtimeScene, true, true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Walk_Joystick"), gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects2[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects2[k] = gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList14 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == "Walking" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setString("EnterVehicle");
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == "Driving" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setString("ExitVehicle");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Game_32SceneCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == "Driving" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == "Walking" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ActionButton"), gdjs.Game_32SceneCode.GDActionButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDActionButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDActionButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDActionButtonObjects1[k] = gdjs.Game_32SceneCode.GDActionButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDActionButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ActionButton"), gdjs.Game_32SceneCode.GDActionButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Game_32SceneCode.GDJumpButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Walk_Joystick"), gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects2[i].ActivateControl(false, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJumpButtonObjects2[i].activateBehavior("MultitouchButton", false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDActionButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDActionButtonObjects2[i].activateBehavior("ButtonFSM", false);
}
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "MobileControls_Common");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "MobileControls_Driving");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "MobileControls_Walking");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Touch");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDControlsToggleObjects2Objects = Hashtable.newFrom({"ControlsToggle": gdjs.Game_32SceneCode.GDControlsToggleObjects2});
gdjs.Game_32SceneCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects2, gdjs.Game_32SceneCode.GDPlayerObjects3);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(2, null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects2, gdjs.Game_32SceneCode.GDPlayerObjects3);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(1000000, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19807836);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}
}

}


};gdjs.Game_32SceneCode.eventsList18 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == "Walking" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setString("EnterVehicle");
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == "Driving" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setString("ExitVehicle");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Game_32SceneCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.Game_32SceneCode.GDControlsToggleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDControlsToggleObjects2Objects, runtimeScene, true, true);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == "Walking" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(2, null);
}
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "e");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Keyboard");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WhiteGrass"), gdjs.Game_32SceneCode.GDWhiteGrassObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDWhiteGrassObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWhiteGrassObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Bloom", false);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "DepthOfField", false);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Exposure", false);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "HueAndSaturation", false);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "ToneMapping", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SnowyMountainsTerrain"), gdjs.Game_32SceneCode.GDSnowyMountainsTerrainObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(1, 10000000));
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDSnowyMountainsTerrainObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDSnowyMountainsTerrainObjects2[i].GenerateRelief("Mountains", runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() != 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SnowyMountainsTerrain"), gdjs.Game_32SceneCode.GDSnowyMountainsTerrainObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDSnowyMountainsTerrainObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDSnowyMountainsTerrainObjects2[i].GenerateRelief("Mountains", runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Driven_Car"), gdjs.Game_32SceneCode.GDDriven_9595CarObjects1);
gdjs.copyArray(runtimeScene.getObjects("SeedText"), gdjs.Game_32SceneCode.GDSeedTextObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDSeedTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDSeedTextObjects1[i].getBehavior("Text").setText("SEED: " + runtimeScene.getScene().getVariables().getFromIndex(3).getAsString());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDriven_9595CarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDriven_9595CarObjects1[i].getBehavior("PhysicsCar3D").setEngineTorqueMax(8000 * runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDriven_9595CarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDriven_9595CarObjects1[i].getBehavior("PhysicsCar3D").setEngineSpeedMax(6000 * runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDriven_9595CarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDriven_9595CarObjects1[i].getBehavior("PhysicsCar3D").setEngineTorqueMax(0.1 / runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
}
}

}


};gdjs.Game_32SceneCode.eventsList22 = function(runtimeScene) {

{


gdjs.Game_32SceneCode.eventsList1(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList6(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList8(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList16(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList20(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList21(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Water"), gdjs.Game_32SceneCode.GDWaterObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDWaterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWaterObjects1[i].getBehavior("Object3D").setZ(gdjs.Game_32SceneCode.GDWaterObjects1[i].getBehavior("Object3D").getZ() + (0.5));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Water"), gdjs.Game_32SceneCode.GDWaterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Object3D").getZ() <= (( gdjs.Game_32SceneCode.GDWaterObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDWaterObjects1[0].getBehavior("Object3D").getZ()) + 50 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Physics3D").setGravityScale(-1);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").setGravity(-1000);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Water"), gdjs.Game_32SceneCode.GDWaterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Object3D").getZ() > (( gdjs.Game_32SceneCode.GDWaterObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDWaterObjects1[0].getBehavior("Object3D").getZ()) + 50 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Physics3D").setGravityScale(1);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").setGravity(1000);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.Game_32SceneCode.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Water"), gdjs.Game_32SceneCode.GDWaterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDCarObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDCarObjects1[i].getBehavior("Object3D").getZ() > (( gdjs.Game_32SceneCode.GDWaterObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDWaterObjects1[0].getBehavior("Object3D").getZ()) + 50 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDCarObjects1[k] = gdjs.Game_32SceneCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDCarObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCarObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCarObjects1[i].getBehavior("Physics3D").setGravityScale(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.Game_32SceneCode.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Water"), gdjs.Game_32SceneCode.GDWaterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDCarObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDCarObjects1[i].getBehavior("Object3D").getZ() <= (( gdjs.Game_32SceneCode.GDWaterObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDWaterObjects1[0].getBehavior("Object3D").getZ()) + 50 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDCarObjects1[k] = gdjs.Game_32SceneCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDCarObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCarObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCarObjects1[i].getBehavior("Physics3D").setGravityScale(-1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Driven_Car"), gdjs.Game_32SceneCode.GDDriven_9595CarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Water"), gdjs.Game_32SceneCode.GDWaterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDDriven_9595CarObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDDriven_9595CarObjects1[i].getBehavior("Object3D").getZ() <= (( gdjs.Game_32SceneCode.GDWaterObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDWaterObjects1[0].getBehavior("Object3D").getZ()) + 50 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDDriven_9595CarObjects1[k] = gdjs.Game_32SceneCode.GDDriven_9595CarObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDDriven_9595CarObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDDriven_9595CarObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDriven_9595CarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDriven_9595CarObjects1[i].getBehavior("Physics3D").setGravityScale(-1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Driven_Car"), gdjs.Game_32SceneCode.GDDriven_9595CarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Water"), gdjs.Game_32SceneCode.GDWaterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDDriven_9595CarObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDDriven_9595CarObjects1[i].getBehavior("Object3D").getZ() > (( gdjs.Game_32SceneCode.GDWaterObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDWaterObjects1[0].getBehavior("Object3D").getZ()) + 50 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDDriven_9595CarObjects1[k] = gdjs.Game_32SceneCode.GDDriven_9595CarObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDDriven_9595CarObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDDriven_9595CarObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDriven_9595CarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDriven_9595CarObjects1[i].getBehavior("Physics3D").setGravityScale(1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "k");
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Equal");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Tilde");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDCarObjects1.length = 0;
gdjs.Game_32SceneCode.GDCarObjects2.length = 0;
gdjs.Game_32SceneCode.GDCarObjects3.length = 0;
gdjs.Game_32SceneCode.GDCarObjects4.length = 0;
gdjs.Game_32SceneCode.GDCarObjects5.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects4.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects5.length = 0;
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects4.length = 0;
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects5.length = 0;
gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects4.length = 0;
gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects5.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects5.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects5.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects3.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects4.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects5.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects4.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects5.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects5.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects1.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects2.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects3.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects4.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects5.length = 0;
gdjs.Game_32SceneCode.GDDriven_9595CarObjects1.length = 0;
gdjs.Game_32SceneCode.GDDriven_9595CarObjects2.length = 0;
gdjs.Game_32SceneCode.GDDriven_9595CarObjects3.length = 0;
gdjs.Game_32SceneCode.GDDriven_9595CarObjects4.length = 0;
gdjs.Game_32SceneCode.GDDriven_9595CarObjects5.length = 0;
gdjs.Game_32SceneCode.GDActionButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDActionButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDActionButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDActionButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDActionButtonObjects5.length = 0;
gdjs.Game_32SceneCode.GDSnowyMountainsTerrainObjects1.length = 0;
gdjs.Game_32SceneCode.GDSnowyMountainsTerrainObjects2.length = 0;
gdjs.Game_32SceneCode.GDSnowyMountainsTerrainObjects3.length = 0;
gdjs.Game_32SceneCode.GDSnowyMountainsTerrainObjects4.length = 0;
gdjs.Game_32SceneCode.GDSnowyMountainsTerrainObjects5.length = 0;
gdjs.Game_32SceneCode.GDWhiteGrassObjects1.length = 0;
gdjs.Game_32SceneCode.GDWhiteGrassObjects2.length = 0;
gdjs.Game_32SceneCode.GDWhiteGrassObjects3.length = 0;
gdjs.Game_32SceneCode.GDWhiteGrassObjects4.length = 0;
gdjs.Game_32SceneCode.GDWhiteGrassObjects5.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects1.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects2.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects3.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects4.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects5.length = 0;
gdjs.Game_32SceneCode.GDSeedTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDSeedTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDSeedTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDSeedTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDSeedTextObjects5.length = 0;

gdjs.Game_32SceneCode.eventsList22(runtimeScene);
gdjs.Game_32SceneCode.GDCarObjects1.length = 0;
gdjs.Game_32SceneCode.GDCarObjects2.length = 0;
gdjs.Game_32SceneCode.GDCarObjects3.length = 0;
gdjs.Game_32SceneCode.GDCarObjects4.length = 0;
gdjs.Game_32SceneCode.GDCarObjects5.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects4.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects5.length = 0;
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects4.length = 0;
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects5.length = 0;
gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects4.length = 0;
gdjs.Game_32SceneCode.GDWalk_9595JoystickObjects5.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects5.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects5.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects3.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects4.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects5.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects4.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects5.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects5.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects1.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects2.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects3.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects4.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects5.length = 0;
gdjs.Game_32SceneCode.GDDriven_9595CarObjects1.length = 0;
gdjs.Game_32SceneCode.GDDriven_9595CarObjects2.length = 0;
gdjs.Game_32SceneCode.GDDriven_9595CarObjects3.length = 0;
gdjs.Game_32SceneCode.GDDriven_9595CarObjects4.length = 0;
gdjs.Game_32SceneCode.GDDriven_9595CarObjects5.length = 0;
gdjs.Game_32SceneCode.GDActionButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDActionButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDActionButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDActionButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDActionButtonObjects5.length = 0;
gdjs.Game_32SceneCode.GDSnowyMountainsTerrainObjects1.length = 0;
gdjs.Game_32SceneCode.GDSnowyMountainsTerrainObjects2.length = 0;
gdjs.Game_32SceneCode.GDSnowyMountainsTerrainObjects3.length = 0;
gdjs.Game_32SceneCode.GDSnowyMountainsTerrainObjects4.length = 0;
gdjs.Game_32SceneCode.GDSnowyMountainsTerrainObjects5.length = 0;
gdjs.Game_32SceneCode.GDWhiteGrassObjects1.length = 0;
gdjs.Game_32SceneCode.GDWhiteGrassObjects2.length = 0;
gdjs.Game_32SceneCode.GDWhiteGrassObjects3.length = 0;
gdjs.Game_32SceneCode.GDWhiteGrassObjects4.length = 0;
gdjs.Game_32SceneCode.GDWhiteGrassObjects5.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects1.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects2.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects3.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects4.length = 0;
gdjs.Game_32SceneCode.GDWaterObjects5.length = 0;
gdjs.Game_32SceneCode.GDSeedTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDSeedTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDSeedTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDSeedTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDSeedTextObjects5.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
