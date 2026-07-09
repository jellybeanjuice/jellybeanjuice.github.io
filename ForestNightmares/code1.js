gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.idToCallbackMap = new Map();
gdjs.Main_32MenuCode.GDLogoObjects1= [];
gdjs.Main_32MenuCode.GDLogoObjects2= [];
gdjs.Main_32MenuCode.GDOld3Objects1= [];
gdjs.Main_32MenuCode.GDOld3Objects2= [];
gdjs.Main_32MenuCode.GDOld2Objects1= [];
gdjs.Main_32MenuCode.GDOld2Objects2= [];
gdjs.Main_32MenuCode.GDOld1Objects1= [];
gdjs.Main_32MenuCode.GDOld1Objects2= [];
gdjs.Main_32MenuCode.GDCreatorObjects1= [];
gdjs.Main_32MenuCode.GDCreatorObjects2= [];
gdjs.Main_32MenuCode.GDBGObjects1= [];
gdjs.Main_32MenuCode.GDBGObjects2= [];
gdjs.Main_32MenuCode.GDVerObjects1= [];
gdjs.Main_32MenuCode.GDVerObjects2= [];
gdjs.Main_32MenuCode.GDPlayBtnObjects1= [];
gdjs.Main_32MenuCode.GDPlayBtnObjects2= [];
gdjs.Main_32MenuCode.GDSkipBtnObjects1= [];
gdjs.Main_32MenuCode.GDSkipBtnObjects2= [];
gdjs.Main_32MenuCode.GDQuitBtnObjects1= [];
gdjs.Main_32MenuCode.GDQuitBtnObjects2= [];
gdjs.Main_32MenuCode.GDGreenButtonObjects1= [];
gdjs.Main_32MenuCode.GDGreenButtonObjects2= [];
gdjs.Main_32MenuCode.GDYellowButtonObjects1= [];
gdjs.Main_32MenuCode.GDYellowButtonObjects2= [];
gdjs.Main_32MenuCode.GDRedButtonObjects1= [];
gdjs.Main_32MenuCode.GDRedButtonObjects2= [];
gdjs.Main_32MenuCode.GDGreyButtonObjects1= [];
gdjs.Main_32MenuCode.GDGreyButtonObjects2= [];
gdjs.Main_32MenuCode.GDShareBtnObjects1= [];
gdjs.Main_32MenuCode.GDShareBtnObjects2= [];


gdjs.Main_32MenuCode.asyncCallback16157828 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.idToCallbackMap.set(16157828, gdjs.Main_32MenuCode.asyncCallback16157828);
gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__Share__Share.func(runtimeScene, "Check out the new Horror Game: The Forest Nightmares!", gdjs.evtsExt__URLTools__CurrentURL.func(runtimeScene, null), "Share", null), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback16157828(runtimeScene, asyncObjectsList)), 16157828, asyncObjectsList);
}
}

}


};gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayBtn"), gdjs.Main_32MenuCode.GDPlayBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDPlayBtnObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDPlayBtnObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDPlayBtnObjects1[k] = gdjs.Main_32MenuCode.GDPlayBtnObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDPlayBtnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("LevelsUnlocked", "Forest", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelSelect", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SkipBtn"), gdjs.Main_32MenuCode.GDSkipBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDSkipBtnObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDSkipBtnObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDSkipBtnObjects1[k] = gdjs.Main_32MenuCode.GDSkipBtnObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDSkipBtnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.storage.clearJSONFile("LevelsUnlocked");
}
{gdjs.evtTools.storage.writeNumberInJSONFile("LevelsUnlocked", "Forest", 0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Forest", true);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("QuitBtn"), gdjs.Main_32MenuCode.GDQuitBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDQuitBtnObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDQuitBtnObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDQuitBtnObjects1[k] = gdjs.Main_32MenuCode.GDQuitBtnObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDQuitBtnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.Main_32MenuCode.GDBGObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "727cbbfad864e69994ecb6cb36e667805b4f7bc4174525cdbcba0ec95913b116_Forest Night.aac", true, 100, 1);
}
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBGObjects1[i].getBehavior("Animation").resumeAnimation();
}
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


{

gdjs.copyArray(runtimeScene.getObjects("ShareBtn"), gdjs.Main_32MenuCode.GDShareBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDShareBtnObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDShareBtnObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDShareBtnObjects1[k] = gdjs.Main_32MenuCode.GDShareBtnObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDShareBtnObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Share__IsSharingSupported.func(runtimeScene, null));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShareBtn"), gdjs.Main_32MenuCode.GDShareBtnObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDShareBtnObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDShareBtnObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDLogoObjects1.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects2.length = 0;
gdjs.Main_32MenuCode.GDOld3Objects1.length = 0;
gdjs.Main_32MenuCode.GDOld3Objects2.length = 0;
gdjs.Main_32MenuCode.GDOld2Objects1.length = 0;
gdjs.Main_32MenuCode.GDOld2Objects2.length = 0;
gdjs.Main_32MenuCode.GDOld1Objects1.length = 0;
gdjs.Main_32MenuCode.GDOld1Objects2.length = 0;
gdjs.Main_32MenuCode.GDCreatorObjects1.length = 0;
gdjs.Main_32MenuCode.GDCreatorObjects2.length = 0;
gdjs.Main_32MenuCode.GDBGObjects1.length = 0;
gdjs.Main_32MenuCode.GDBGObjects2.length = 0;
gdjs.Main_32MenuCode.GDVerObjects1.length = 0;
gdjs.Main_32MenuCode.GDVerObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayBtnObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayBtnObjects2.length = 0;
gdjs.Main_32MenuCode.GDSkipBtnObjects1.length = 0;
gdjs.Main_32MenuCode.GDSkipBtnObjects2.length = 0;
gdjs.Main_32MenuCode.GDQuitBtnObjects1.length = 0;
gdjs.Main_32MenuCode.GDQuitBtnObjects2.length = 0;
gdjs.Main_32MenuCode.GDGreenButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDGreenButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDYellowButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDYellowButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDRedButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDRedButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDGreyButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDGreyButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDShareBtnObjects1.length = 0;
gdjs.Main_32MenuCode.GDShareBtnObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList1(runtimeScene);
gdjs.Main_32MenuCode.GDLogoObjects1.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects2.length = 0;
gdjs.Main_32MenuCode.GDOld3Objects1.length = 0;
gdjs.Main_32MenuCode.GDOld3Objects2.length = 0;
gdjs.Main_32MenuCode.GDOld2Objects1.length = 0;
gdjs.Main_32MenuCode.GDOld2Objects2.length = 0;
gdjs.Main_32MenuCode.GDOld1Objects1.length = 0;
gdjs.Main_32MenuCode.GDOld1Objects2.length = 0;
gdjs.Main_32MenuCode.GDCreatorObjects1.length = 0;
gdjs.Main_32MenuCode.GDCreatorObjects2.length = 0;
gdjs.Main_32MenuCode.GDBGObjects1.length = 0;
gdjs.Main_32MenuCode.GDBGObjects2.length = 0;
gdjs.Main_32MenuCode.GDVerObjects1.length = 0;
gdjs.Main_32MenuCode.GDVerObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayBtnObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayBtnObjects2.length = 0;
gdjs.Main_32MenuCode.GDSkipBtnObjects1.length = 0;
gdjs.Main_32MenuCode.GDSkipBtnObjects2.length = 0;
gdjs.Main_32MenuCode.GDQuitBtnObjects1.length = 0;
gdjs.Main_32MenuCode.GDQuitBtnObjects2.length = 0;
gdjs.Main_32MenuCode.GDGreenButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDGreenButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDYellowButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDYellowButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDRedButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDRedButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDGreyButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDGreyButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDShareBtnObjects1.length = 0;
gdjs.Main_32MenuCode.GDShareBtnObjects2.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
