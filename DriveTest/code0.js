gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.idToCallbackMap = new Map();
gdjs.Main_32MenuCode.GDCarObjects1= [];
gdjs.Main_32MenuCode.GDCarObjects2= [];
gdjs.Main_32MenuCode.GDCarObjects3= [];
gdjs.Main_32MenuCode.GDSpeed_9595JoystickObjects1= [];
gdjs.Main_32MenuCode.GDSpeed_9595JoystickObjects2= [];
gdjs.Main_32MenuCode.GDSpeed_9595JoystickObjects3= [];
gdjs.Main_32MenuCode.GDSteer_9595JoystickObjects1= [];
gdjs.Main_32MenuCode.GDSteer_9595JoystickObjects2= [];
gdjs.Main_32MenuCode.GDSteer_9595JoystickObjects3= [];
gdjs.Main_32MenuCode.GDWalk_9595JoystickObjects1= [];
gdjs.Main_32MenuCode.GDWalk_9595JoystickObjects2= [];
gdjs.Main_32MenuCode.GDWalk_9595JoystickObjects3= [];
gdjs.Main_32MenuCode.GDJumpButtonObjects1= [];
gdjs.Main_32MenuCode.GDJumpButtonObjects2= [];
gdjs.Main_32MenuCode.GDJumpButtonObjects3= [];
gdjs.Main_32MenuCode.GDPlayerObjects1= [];
gdjs.Main_32MenuCode.GDPlayerObjects2= [];
gdjs.Main_32MenuCode.GDPlayerObjects3= [];
gdjs.Main_32MenuCode.GDPushableBoxObjects1= [];
gdjs.Main_32MenuCode.GDPushableBoxObjects2= [];
gdjs.Main_32MenuCode.GDPushableBoxObjects3= [];
gdjs.Main_32MenuCode.GDObstacleObjects1= [];
gdjs.Main_32MenuCode.GDObstacleObjects2= [];
gdjs.Main_32MenuCode.GDObstacleObjects3= [];
gdjs.Main_32MenuCode.GDGroundObjects1= [];
gdjs.Main_32MenuCode.GDGroundObjects2= [];
gdjs.Main_32MenuCode.GDGroundObjects3= [];
gdjs.Main_32MenuCode.GDControlsToggleObjects1= [];
gdjs.Main_32MenuCode.GDControlsToggleObjects2= [];
gdjs.Main_32MenuCode.GDControlsToggleObjects3= [];
gdjs.Main_32MenuCode.GDDriven_9595CarObjects1= [];
gdjs.Main_32MenuCode.GDDriven_9595CarObjects2= [];
gdjs.Main_32MenuCode.GDDriven_9595CarObjects3= [];
gdjs.Main_32MenuCode.GDActionButtonObjects1= [];
gdjs.Main_32MenuCode.GDActionButtonObjects2= [];
gdjs.Main_32MenuCode.GDActionButtonObjects3= [];
gdjs.Main_32MenuCode.GDSnowyMountainsTerrainObjects1= [];
gdjs.Main_32MenuCode.GDSnowyMountainsTerrainObjects2= [];
gdjs.Main_32MenuCode.GDSnowyMountainsTerrainObjects3= [];
gdjs.Main_32MenuCode.GDWhiteGrassObjects1= [];
gdjs.Main_32MenuCode.GDWhiteGrassObjects2= [];
gdjs.Main_32MenuCode.GDWhiteGrassObjects3= [];
gdjs.Main_32MenuCode.GDWaterObjects1= [];
gdjs.Main_32MenuCode.GDWaterObjects2= [];
gdjs.Main_32MenuCode.GDWaterObjects3= [];
gdjs.Main_32MenuCode.GDGreenButtonObjects1= [];
gdjs.Main_32MenuCode.GDGreenButtonObjects2= [];
gdjs.Main_32MenuCode.GDGreenButtonObjects3= [];
gdjs.Main_32MenuCode.GDNameObjects1= [];
gdjs.Main_32MenuCode.GDNameObjects2= [];
gdjs.Main_32MenuCode.GDNameObjects3= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects1= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects2= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects3= [];
gdjs.Main_32MenuCode.GDYellowButtonObjects1= [];
gdjs.Main_32MenuCode.GDYellowButtonObjects2= [];
gdjs.Main_32MenuCode.GDYellowButtonObjects3= [];
gdjs.Main_32MenuCode.GDRedCircleEndedLineSliderObjects1= [];
gdjs.Main_32MenuCode.GDRedCircleEndedLineSliderObjects2= [];
gdjs.Main_32MenuCode.GDRedCircleEndedLineSliderObjects3= [];
gdjs.Main_32MenuCode.GDSeedInputObjects1= [];
gdjs.Main_32MenuCode.GDSeedInputObjects2= [];
gdjs.Main_32MenuCode.GDSeedInputObjects3= [];
gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects1= [];
gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2= [];
gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects3= [];
gdjs.Main_32MenuCode.GDPlaygroundModeCheckboxObjects1= [];
gdjs.Main_32MenuCode.GDPlaygroundModeCheckboxObjects2= [];
gdjs.Main_32MenuCode.GDPlaygroundModeCheckboxObjects3= [];
gdjs.Main_32MenuCode.GDBlehObjects1= [];
gdjs.Main_32MenuCode.GDBlehObjects2= [];
gdjs.Main_32MenuCode.GDBlehObjects3= [];
gdjs.Main_32MenuCode.GDName2Objects1= [];
gdjs.Main_32MenuCode.GDName2Objects2= [];
gdjs.Main_32MenuCode.GDName2Objects3= [];
gdjs.Main_32MenuCode.GDLoggObjects1= [];
gdjs.Main_32MenuCode.GDLoggObjects2= [];
gdjs.Main_32MenuCode.GDLoggObjects3= [];


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RoundedSquareBlueToggle"), gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2[k] = gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RoundedSquareBlueToggle"), gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2.length;i<l;++i) {
    if ( !(gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2[i].IsChecked(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2[k] = gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


};gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RoundedSquareBlueToggle"), gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2[k] = gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RoundedSquareBlueToggle"), gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2.length;i<l;++i) {
    if ( !(gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2[i].IsChecked(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2[k] = gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


};gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_32MenuCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayerObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.Main_32MenuCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDGreenButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDGreenButtonObjects1[k] = gdjs.Main_32MenuCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedCircleEndedLineSlider"), gdjs.Main_32MenuCode.GDRedCircleEndedLineSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("SeedInput"), gdjs.Main_32MenuCode.GDSeedInputObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Main_32MenuCode.GDRedCircleEndedLineSliderObjects1.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDRedCircleEndedLineSliderObjects1[0].Value(null)));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.common.toNumber((( gdjs.Main_32MenuCode.GDSeedInputObjects1.length === 0 ) ? "" :gdjs.Main_32MenuCode.GDSeedInputObjects1[0].getText())));
}

{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.Main_32MenuCode.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDYellowButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDYellowButtonObjects1[k] = gdjs.Main_32MenuCode.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDYellowButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedCircleEndedLineSlider"), gdjs.Main_32MenuCode.GDRedCircleEndedLineSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("SeedInput"), gdjs.Main_32MenuCode.GDSeedInputObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Main_32MenuCode.GDRedCircleEndedLineSliderObjects1.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDRedCircleEndedLineSliderObjects1[0].Value(null)));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.common.toNumber((( gdjs.Main_32MenuCode.GDSeedInputObjects1.length === 0 ) ? "" :gdjs.Main_32MenuCode.GDSeedInputObjects1[0].getText())));
}

{ //Subevents
gdjs.Main_32MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDCarObjects1.length = 0;
gdjs.Main_32MenuCode.GDCarObjects2.length = 0;
gdjs.Main_32MenuCode.GDCarObjects3.length = 0;
gdjs.Main_32MenuCode.GDSpeed_9595JoystickObjects1.length = 0;
gdjs.Main_32MenuCode.GDSpeed_9595JoystickObjects2.length = 0;
gdjs.Main_32MenuCode.GDSpeed_9595JoystickObjects3.length = 0;
gdjs.Main_32MenuCode.GDSteer_9595JoystickObjects1.length = 0;
gdjs.Main_32MenuCode.GDSteer_9595JoystickObjects2.length = 0;
gdjs.Main_32MenuCode.GDSteer_9595JoystickObjects3.length = 0;
gdjs.Main_32MenuCode.GDWalk_9595JoystickObjects1.length = 0;
gdjs.Main_32MenuCode.GDWalk_9595JoystickObjects2.length = 0;
gdjs.Main_32MenuCode.GDWalk_9595JoystickObjects3.length = 0;
gdjs.Main_32MenuCode.GDJumpButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDJumpButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDJumpButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDPlayerObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayerObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayerObjects3.length = 0;
gdjs.Main_32MenuCode.GDPushableBoxObjects1.length = 0;
gdjs.Main_32MenuCode.GDPushableBoxObjects2.length = 0;
gdjs.Main_32MenuCode.GDPushableBoxObjects3.length = 0;
gdjs.Main_32MenuCode.GDObstacleObjects1.length = 0;
gdjs.Main_32MenuCode.GDObstacleObjects2.length = 0;
gdjs.Main_32MenuCode.GDObstacleObjects3.length = 0;
gdjs.Main_32MenuCode.GDGroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDGroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDGroundObjects3.length = 0;
gdjs.Main_32MenuCode.GDControlsToggleObjects1.length = 0;
gdjs.Main_32MenuCode.GDControlsToggleObjects2.length = 0;
gdjs.Main_32MenuCode.GDControlsToggleObjects3.length = 0;
gdjs.Main_32MenuCode.GDDriven_9595CarObjects1.length = 0;
gdjs.Main_32MenuCode.GDDriven_9595CarObjects2.length = 0;
gdjs.Main_32MenuCode.GDDriven_9595CarObjects3.length = 0;
gdjs.Main_32MenuCode.GDActionButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDActionButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDActionButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDSnowyMountainsTerrainObjects1.length = 0;
gdjs.Main_32MenuCode.GDSnowyMountainsTerrainObjects2.length = 0;
gdjs.Main_32MenuCode.GDSnowyMountainsTerrainObjects3.length = 0;
gdjs.Main_32MenuCode.GDWhiteGrassObjects1.length = 0;
gdjs.Main_32MenuCode.GDWhiteGrassObjects2.length = 0;
gdjs.Main_32MenuCode.GDWhiteGrassObjects3.length = 0;
gdjs.Main_32MenuCode.GDWaterObjects1.length = 0;
gdjs.Main_32MenuCode.GDWaterObjects2.length = 0;
gdjs.Main_32MenuCode.GDWaterObjects3.length = 0;
gdjs.Main_32MenuCode.GDGreenButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDGreenButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDGreenButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDNameObjects1.length = 0;
gdjs.Main_32MenuCode.GDNameObjects2.length = 0;
gdjs.Main_32MenuCode.GDNameObjects3.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects3.length = 0;
gdjs.Main_32MenuCode.GDYellowButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDYellowButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDYellowButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDRedCircleEndedLineSliderObjects1.length = 0;
gdjs.Main_32MenuCode.GDRedCircleEndedLineSliderObjects2.length = 0;
gdjs.Main_32MenuCode.GDRedCircleEndedLineSliderObjects3.length = 0;
gdjs.Main_32MenuCode.GDSeedInputObjects1.length = 0;
gdjs.Main_32MenuCode.GDSeedInputObjects2.length = 0;
gdjs.Main_32MenuCode.GDSeedInputObjects3.length = 0;
gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects1.length = 0;
gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2.length = 0;
gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects3.length = 0;
gdjs.Main_32MenuCode.GDPlaygroundModeCheckboxObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlaygroundModeCheckboxObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlaygroundModeCheckboxObjects3.length = 0;
gdjs.Main_32MenuCode.GDBlehObjects1.length = 0;
gdjs.Main_32MenuCode.GDBlehObjects2.length = 0;
gdjs.Main_32MenuCode.GDBlehObjects3.length = 0;
gdjs.Main_32MenuCode.GDName2Objects1.length = 0;
gdjs.Main_32MenuCode.GDName2Objects2.length = 0;
gdjs.Main_32MenuCode.GDName2Objects3.length = 0;
gdjs.Main_32MenuCode.GDLoggObjects1.length = 0;
gdjs.Main_32MenuCode.GDLoggObjects2.length = 0;
gdjs.Main_32MenuCode.GDLoggObjects3.length = 0;

gdjs.Main_32MenuCode.eventsList2(runtimeScene);
gdjs.Main_32MenuCode.GDCarObjects1.length = 0;
gdjs.Main_32MenuCode.GDCarObjects2.length = 0;
gdjs.Main_32MenuCode.GDCarObjects3.length = 0;
gdjs.Main_32MenuCode.GDSpeed_9595JoystickObjects1.length = 0;
gdjs.Main_32MenuCode.GDSpeed_9595JoystickObjects2.length = 0;
gdjs.Main_32MenuCode.GDSpeed_9595JoystickObjects3.length = 0;
gdjs.Main_32MenuCode.GDSteer_9595JoystickObjects1.length = 0;
gdjs.Main_32MenuCode.GDSteer_9595JoystickObjects2.length = 0;
gdjs.Main_32MenuCode.GDSteer_9595JoystickObjects3.length = 0;
gdjs.Main_32MenuCode.GDWalk_9595JoystickObjects1.length = 0;
gdjs.Main_32MenuCode.GDWalk_9595JoystickObjects2.length = 0;
gdjs.Main_32MenuCode.GDWalk_9595JoystickObjects3.length = 0;
gdjs.Main_32MenuCode.GDJumpButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDJumpButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDJumpButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDPlayerObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayerObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayerObjects3.length = 0;
gdjs.Main_32MenuCode.GDPushableBoxObjects1.length = 0;
gdjs.Main_32MenuCode.GDPushableBoxObjects2.length = 0;
gdjs.Main_32MenuCode.GDPushableBoxObjects3.length = 0;
gdjs.Main_32MenuCode.GDObstacleObjects1.length = 0;
gdjs.Main_32MenuCode.GDObstacleObjects2.length = 0;
gdjs.Main_32MenuCode.GDObstacleObjects3.length = 0;
gdjs.Main_32MenuCode.GDGroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDGroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDGroundObjects3.length = 0;
gdjs.Main_32MenuCode.GDControlsToggleObjects1.length = 0;
gdjs.Main_32MenuCode.GDControlsToggleObjects2.length = 0;
gdjs.Main_32MenuCode.GDControlsToggleObjects3.length = 0;
gdjs.Main_32MenuCode.GDDriven_9595CarObjects1.length = 0;
gdjs.Main_32MenuCode.GDDriven_9595CarObjects2.length = 0;
gdjs.Main_32MenuCode.GDDriven_9595CarObjects3.length = 0;
gdjs.Main_32MenuCode.GDActionButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDActionButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDActionButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDSnowyMountainsTerrainObjects1.length = 0;
gdjs.Main_32MenuCode.GDSnowyMountainsTerrainObjects2.length = 0;
gdjs.Main_32MenuCode.GDSnowyMountainsTerrainObjects3.length = 0;
gdjs.Main_32MenuCode.GDWhiteGrassObjects1.length = 0;
gdjs.Main_32MenuCode.GDWhiteGrassObjects2.length = 0;
gdjs.Main_32MenuCode.GDWhiteGrassObjects3.length = 0;
gdjs.Main_32MenuCode.GDWaterObjects1.length = 0;
gdjs.Main_32MenuCode.GDWaterObjects2.length = 0;
gdjs.Main_32MenuCode.GDWaterObjects3.length = 0;
gdjs.Main_32MenuCode.GDGreenButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDGreenButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDGreenButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDNameObjects1.length = 0;
gdjs.Main_32MenuCode.GDNameObjects2.length = 0;
gdjs.Main_32MenuCode.GDNameObjects3.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects3.length = 0;
gdjs.Main_32MenuCode.GDYellowButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDYellowButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDYellowButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDRedCircleEndedLineSliderObjects1.length = 0;
gdjs.Main_32MenuCode.GDRedCircleEndedLineSliderObjects2.length = 0;
gdjs.Main_32MenuCode.GDRedCircleEndedLineSliderObjects3.length = 0;
gdjs.Main_32MenuCode.GDSeedInputObjects1.length = 0;
gdjs.Main_32MenuCode.GDSeedInputObjects2.length = 0;
gdjs.Main_32MenuCode.GDSeedInputObjects3.length = 0;
gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects1.length = 0;
gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects2.length = 0;
gdjs.Main_32MenuCode.GDRoundedSquareBlueToggleObjects3.length = 0;
gdjs.Main_32MenuCode.GDPlaygroundModeCheckboxObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlaygroundModeCheckboxObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlaygroundModeCheckboxObjects3.length = 0;
gdjs.Main_32MenuCode.GDBlehObjects1.length = 0;
gdjs.Main_32MenuCode.GDBlehObjects2.length = 0;
gdjs.Main_32MenuCode.GDBlehObjects3.length = 0;
gdjs.Main_32MenuCode.GDName2Objects1.length = 0;
gdjs.Main_32MenuCode.GDName2Objects2.length = 0;
gdjs.Main_32MenuCode.GDName2Objects3.length = 0;
gdjs.Main_32MenuCode.GDLoggObjects1.length = 0;
gdjs.Main_32MenuCode.GDLoggObjects2.length = 0;
gdjs.Main_32MenuCode.GDLoggObjects3.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
