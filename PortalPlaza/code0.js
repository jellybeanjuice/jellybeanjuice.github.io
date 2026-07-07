gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDRedButtonWithGoldFrameObjects1= [];
gdjs.MenuCode.GDRedButtonWithGoldFrameObjects2= [];
gdjs.MenuCode.GDLogoObjects1= [];
gdjs.MenuCode.GDLogoObjects2= [];
gdjs.MenuCode.GDContinueObjects1= [];
gdjs.MenuCode.GDContinueObjects2= [];
gdjs.MenuCode.GDNew_9595GameObjects1= [];
gdjs.MenuCode.GDNew_9595GameObjects2= [];
gdjs.MenuCode.GDNewTextObjects1= [];
gdjs.MenuCode.GDNewTextObjects2= [];


gdjs.MenuCode.asyncCallback30468852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lobby", false);
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(30468852, gdjs.MenuCode.asyncCallback30468852);
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.saveState.restoreGameSaveStateFromStorage(runtimeScene, "Save01", "", true), (runtimeScene) => (gdjs.MenuCode.asyncCallback30468852(runtimeScene, asyncObjectsList)), 30468852, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback30470620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lobby", false);
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(30470620, gdjs.MenuCode.asyncCallback30470620);
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.saveState.deleteSaveFromStorage(runtimeScene, "Save01"), (runtimeScene) => (gdjs.MenuCode.asyncCallback30470620(runtimeScene, asyncObjectsList)), 30470620, asyncObjectsList);
}
}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.MenuCode.GDContinueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDContinueObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDContinueObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDContinueObjects1[k] = gdjs.MenuCode.GDContinueObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDContinueObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("New_Game"), gdjs.MenuCode.GDNew_9595GameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDNew_9595GameObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDNew_9595GameObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDNew_9595GameObjects1[k] = gdjs.MenuCode.GDNew_9595GameObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDNew_9595GameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "drop_001.ogg", false, 100, 1);
}

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Buy Something!.mp3", true, 30, 1);
}
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.MenuCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.MenuCode.GDLogoObjects1.length = 0;
gdjs.MenuCode.GDLogoObjects2.length = 0;
gdjs.MenuCode.GDContinueObjects1.length = 0;
gdjs.MenuCode.GDContinueObjects2.length = 0;
gdjs.MenuCode.GDNew_9595GameObjects1.length = 0;
gdjs.MenuCode.GDNew_9595GameObjects2.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;

gdjs.MenuCode.eventsList2(runtimeScene);
gdjs.MenuCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.MenuCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.MenuCode.GDLogoObjects1.length = 0;
gdjs.MenuCode.GDLogoObjects2.length = 0;
gdjs.MenuCode.GDContinueObjects1.length = 0;
gdjs.MenuCode.GDContinueObjects2.length = 0;
gdjs.MenuCode.GDNew_9595GameObjects1.length = 0;
gdjs.MenuCode.GDNew_9595GameObjects2.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
