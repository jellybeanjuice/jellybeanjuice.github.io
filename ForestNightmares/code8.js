gdjs.JungleCode = {};
gdjs.JungleCode.localVariables = [];
gdjs.JungleCode.idToCallbackMap = new Map();
gdjs.JungleCode.GDChompieObjects1= [];
gdjs.JungleCode.GDChompieObjects2= [];
gdjs.JungleCode.GDPlayerObjects1= [];
gdjs.JungleCode.GDPlayerObjects2= [];
gdjs.JungleCode.GDGroundObjects1= [];
gdjs.JungleCode.GDGroundObjects2= [];
gdjs.JungleCode.GDObstacleObjects1= [];
gdjs.JungleCode.GDObstacleObjects2= [];
gdjs.JungleCode.GDWall_9595Gate_9595ClosedObjects1= [];
gdjs.JungleCode.GDWall_9595Gate_9595ClosedObjects2= [];
gdjs.JungleCode.GDWall_9595StraightObjects1= [];
gdjs.JungleCode.GDWall_9595StraightObjects2= [];
gdjs.JungleCode.GDLightObjects1= [];
gdjs.JungleCode.GDLightObjects2= [];
gdjs.JungleCode.GDTree_9595DetailedObjects1= [];
gdjs.JungleCode.GDTree_9595DetailedObjects2= [];


gdjs.JungleCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, null));
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, null);
}
}

}


};gdjs.JungleCode.mapOfGDgdjs_9546JungleCode_9546GDChompieObjects1Objects = Hashtable.newFrom({"Chompie": gdjs.JungleCode.GDChompieObjects1});
gdjs.JungleCode.mapOfGDgdjs_9546JungleCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.JungleCode.GDPlayerObjects1});
gdjs.JungleCode.asyncCallback13319668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.JungleCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}
gdjs.JungleCode.localVariables.length = 0;
}
gdjs.JungleCode.idToCallbackMap.set(13319668, gdjs.JungleCode.asyncCallback13319668);
gdjs.JungleCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.JungleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.JungleCode.asyncCallback13319668(runtimeScene, asyncObjectsList)), 13319668, asyncObjectsList);
}
}

}


};gdjs.JungleCode.mapOfGDgdjs_9546JungleCode_9546GDWall_95959595Gate_95959595ClosedObjects1Objects = Hashtable.newFrom({"Wall_Gate_Closed": gdjs.JungleCode.GDWall_9595Gate_9595ClosedObjects1});
gdjs.JungleCode.mapOfGDgdjs_9546JungleCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.JungleCode.GDPlayerObjects1});
gdjs.JungleCode.eventsList2 = function(runtimeScene) {

{


gdjs.JungleCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chompie"), gdjs.JungleCode.GDChompieObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JungleCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.JungleCode.GDChompieObjects1.length ;i < len;++i) {
    gdjs.JungleCode.GDChompieObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.JungleCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.JungleCode.GDPlayerObjects1[0].getX()), (( gdjs.JungleCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.JungleCode.GDPlayerObjects1[0].getY()));
}
}
{for(var i = 0, len = gdjs.JungleCode.GDChompieObjects1.length ;i < len;++i) {
    gdjs.JungleCode.GDChompieObjects1[i].getBehavior("Animation").resumeAnimation();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chompie"), gdjs.JungleCode.GDChompieObjects1);
{for(var i = 0, len = gdjs.JungleCode.GDChompieObjects1.length ;i < len;++i) {
    gdjs.JungleCode.GDChompieObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (gdjs.JungleCode.GDChompieObjects1[i].getCenterXInScene()), (gdjs.JungleCode.GDChompieObjects1[i].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.JungleCode.GDChompieObjects1.length ;i < len;++i) {
    gdjs.JungleCode.GDChompieObjects1[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.JungleCode.GDChompieObjects1.length ;i < len;++i) {
    gdjs.JungleCode.GDChompieObjects1[i].clearForces();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chompie"), gdjs.JungleCode.GDChompieObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JungleCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.haveObjectsStartedColliding(gdjs.JungleCode.mapOfGDgdjs_9546JungleCode_9546GDChompieObjects1Objects, "Physics3D", gdjs.JungleCode.mapOfGDgdjs_9546JungleCode_9546GDPlayerObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "823b6a7f6747d704ae7d2bec3143c4ee702fe7344685400486594cbd3aeb71a2_Bleep_03.aac", false, 100, 1);
}

{ //Subevents
gdjs.JungleCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JungleCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall_Gate_Closed"), gdjs.JungleCode.GDWall_9595Gate_9595ClosedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.haveObjectsStartedColliding(gdjs.JungleCode.mapOfGDgdjs_9546JungleCode_9546GDWall_95959595Gate_95959595ClosedObjects1Objects, "Physics3D", gdjs.JungleCode.mapOfGDgdjs_9546JungleCode_9546GDPlayerObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Forest", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JungleCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.JungleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.JungleCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").setForwardSpeedMax(600);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LShift");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JungleCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.JungleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.JungleCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").setForwardSpeedMax(300);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JungleCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.JungleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.JungleCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").setForwardSpeedMax(600);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "X", null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JungleCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.JungleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.JungleCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").setForwardSpeedMax(300);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "p");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Pause");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chompie"), gdjs.JungleCode.GDChompieObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JungleCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.JungleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.JungleCode.GDPlayerObjects1[i].hide();
}
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Fog", true);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "FullLight", false);
}
{for(var i = 0, len = gdjs.JungleCode.GDChompieObjects1.length ;i < len;++i) {
    gdjs.JungleCode.GDChompieObjects1[i].getBehavior("Material3D").color("143;0;17", null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("LevelsUnlocked", "Jungle"));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("LevelsUnlocked", "Forest", 1);
}
}

}


};

gdjs.JungleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JungleCode.GDChompieObjects1.length = 0;
gdjs.JungleCode.GDChompieObjects2.length = 0;
gdjs.JungleCode.GDPlayerObjects1.length = 0;
gdjs.JungleCode.GDPlayerObjects2.length = 0;
gdjs.JungleCode.GDGroundObjects1.length = 0;
gdjs.JungleCode.GDGroundObjects2.length = 0;
gdjs.JungleCode.GDObstacleObjects1.length = 0;
gdjs.JungleCode.GDObstacleObjects2.length = 0;
gdjs.JungleCode.GDWall_9595Gate_9595ClosedObjects1.length = 0;
gdjs.JungleCode.GDWall_9595Gate_9595ClosedObjects2.length = 0;
gdjs.JungleCode.GDWall_9595StraightObjects1.length = 0;
gdjs.JungleCode.GDWall_9595StraightObjects2.length = 0;
gdjs.JungleCode.GDLightObjects1.length = 0;
gdjs.JungleCode.GDLightObjects2.length = 0;
gdjs.JungleCode.GDTree_9595DetailedObjects1.length = 0;
gdjs.JungleCode.GDTree_9595DetailedObjects2.length = 0;

gdjs.JungleCode.eventsList2(runtimeScene);
gdjs.JungleCode.GDChompieObjects1.length = 0;
gdjs.JungleCode.GDChompieObjects2.length = 0;
gdjs.JungleCode.GDPlayerObjects1.length = 0;
gdjs.JungleCode.GDPlayerObjects2.length = 0;
gdjs.JungleCode.GDGroundObjects1.length = 0;
gdjs.JungleCode.GDGroundObjects2.length = 0;
gdjs.JungleCode.GDObstacleObjects1.length = 0;
gdjs.JungleCode.GDObstacleObjects2.length = 0;
gdjs.JungleCode.GDWall_9595Gate_9595ClosedObjects1.length = 0;
gdjs.JungleCode.GDWall_9595Gate_9595ClosedObjects2.length = 0;
gdjs.JungleCode.GDWall_9595StraightObjects1.length = 0;
gdjs.JungleCode.GDWall_9595StraightObjects2.length = 0;
gdjs.JungleCode.GDLightObjects1.length = 0;
gdjs.JungleCode.GDLightObjects2.length = 0;
gdjs.JungleCode.GDTree_9595DetailedObjects1.length = 0;
gdjs.JungleCode.GDTree_9595DetailedObjects2.length = 0;


return;

}

gdjs['JungleCode'] = gdjs.JungleCode;
