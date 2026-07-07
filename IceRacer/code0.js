gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.idToCallbackMap = new Map();
gdjs.Main_32MenuCode.GDYellowJellyButtonObjects1= [];
gdjs.Main_32MenuCode.GDYellowJellyButtonObjects2= [];
gdjs.Main_32MenuCode.GDNewTextObjects1= [];
gdjs.Main_32MenuCode.GDNewTextObjects2= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects1= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects2= [];
gdjs.Main_32MenuCode.GDRedButtonWithStoneFrameObjects1= [];
gdjs.Main_32MenuCode.GDRedButtonWithStoneFrameObjects2= [];
gdjs.Main_32MenuCode.GDWhiteSleekButtonObjects1= [];
gdjs.Main_32MenuCode.GDWhiteSleekButtonObjects2= [];
gdjs.Main_32MenuCode.GDOrangeButtonWithStoneFrameObjects1= [];
gdjs.Main_32MenuCode.GDOrangeButtonWithStoneFrameObjects2= [];
gdjs.Main_32MenuCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.Main_32MenuCode.GDPurpleButtonWithStoneFrameObjects2= [];
gdjs.Main_32MenuCode.GDGreenButtonWithStoneFrameObjects1= [];
gdjs.Main_32MenuCode.GDGreenButtonWithStoneFrameObjects2= [];
gdjs.Main_32MenuCode.GDNewText2Objects1= [];
gdjs.Main_32MenuCode.GDNewText2Objects2= [];


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OrangeButtonWithStoneFrame"), gdjs.Main_32MenuCode.GDOrangeButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDOrangeButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDOrangeButtonWithStoneFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDOrangeButtonWithStoneFrameObjects1[k] = gdjs.Main_32MenuCode.GDOrangeButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDOrangeButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithStoneFrame"), gdjs.Main_32MenuCode.GDRedButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDRedButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDRedButtonWithStoneFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDRedButtonWithStoneFrameObjects1[k] = gdjs.Main_32MenuCode.GDRedButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDRedButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.Main_32MenuCode.GDPurpleButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDPurpleButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDPurpleButtonWithStoneFrameObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDPurpleButtonWithStoneFrameObjects1[k] = gdjs.Main_32MenuCode.GDPurpleButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDPurpleButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sandbox", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDYellowJellyButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32MenuCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.Main_32MenuCode.GDRedButtonWithStoneFrameObjects2.length = 0;
gdjs.Main_32MenuCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDOrangeButtonWithStoneFrameObjects1.length = 0;
gdjs.Main_32MenuCode.GDOrangeButtonWithStoneFrameObjects2.length = 0;
gdjs.Main_32MenuCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.Main_32MenuCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.Main_32MenuCode.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.Main_32MenuCode.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewText2Objects1.length = 0;
gdjs.Main_32MenuCode.GDNewText2Objects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);
gdjs.Main_32MenuCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDYellowJellyButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32MenuCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.Main_32MenuCode.GDRedButtonWithStoneFrameObjects2.length = 0;
gdjs.Main_32MenuCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDOrangeButtonWithStoneFrameObjects1.length = 0;
gdjs.Main_32MenuCode.GDOrangeButtonWithStoneFrameObjects2.length = 0;
gdjs.Main_32MenuCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.Main_32MenuCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.Main_32MenuCode.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.Main_32MenuCode.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewText2Objects1.length = 0;
gdjs.Main_32MenuCode.GDNewText2Objects2.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
