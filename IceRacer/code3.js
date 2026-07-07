gdjs.Level_322Code = {};
gdjs.Level_322Code.localVariables = [];
gdjs.Level_322Code.idToCallbackMap = new Map();
gdjs.Level_322Code.GDRoad_95953DObjects1= [];
gdjs.Level_322Code.GDRoad_95953DObjects2= [];
gdjs.Level_322Code.GDGrass_95953DObjects1= [];
gdjs.Level_322Code.GDGrass_95953DObjects2= [];
gdjs.Level_322Code.GDPlayerCarObjects1= [];
gdjs.Level_322Code.GDPlayerCarObjects2= [];
gdjs.Level_322Code.GDTrafficConeObjects1= [];
gdjs.Level_322Code.GDTrafficConeObjects2= [];
gdjs.Level_322Code.GDWalls_95953DObjects1= [];
gdjs.Level_322Code.GDWalls_95953DObjects2= [];
gdjs.Level_322Code.GDDynamiteObjects1= [];
gdjs.Level_322Code.GDDynamiteObjects2= [];
gdjs.Level_322Code.GDRedExplosionObjects1= [];
gdjs.Level_322Code.GDRedExplosionObjects2= [];
gdjs.Level_322Code.GDNew3DBoxObjects1= [];
gdjs.Level_322Code.GDNew3DBoxObjects2= [];


gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDTrafficConeObjects1Objects = Hashtable.newFrom({"TrafficCone": gdjs.Level_322Code.GDTrafficConeObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDPlayerCarObjects1Objects = Hashtable.newFrom({"PlayerCar": gdjs.Level_322Code.GDPlayerCarObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDDynamiteObjects1Objects = Hashtable.newFrom({"Dynamite": gdjs.Level_322Code.GDDynamiteObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDPlayerCarObjects1Objects = Hashtable.newFrom({"PlayerCar": gdjs.Level_322Code.GDPlayerCarObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDRedExplosionObjects1Objects = Hashtable.newFrom({"RedExplosion": gdjs.Level_322Code.GDRedExplosionObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDPlayerCarObjects1Objects = Hashtable.newFrom({"PlayerCar": gdjs.Level_322Code.GDPlayerCarObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDNew3DBoxObjects1Objects = Hashtable.newFrom({"New3DBox": gdjs.Level_322Code.GDNew3DBoxObjects1});
gdjs.Level_322Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayerCar"), gdjs.Level_322Code.GDPlayerCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("TrafficCone"), gdjs.Level_322Code.GDTrafficConeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDTrafficConeObjects1Objects, "Physics3D", gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDPlayerCarObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Plastic.ogg", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerCar"), gdjs.Level_322Code.GDPlayerCarObjects1);
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerCarObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerCarObjects1[i].getBehavior("PhysicsCar3D").setEngineSpeedMax(100000);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LShift");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerCar"), gdjs.Level_322Code.GDPlayerCarObjects1);
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerCarObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerCarObjects1[i].getBehavior("PhysicsCar3D").setEngineSpeedMax(6000);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "untitled.mp3", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dynamite"), gdjs.Level_322Code.GDDynamiteObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerCar"), gdjs.Level_322Code.GDPlayerCarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDDynamiteObjects1Objects, "Physics3D", gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDPlayerCarObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_322Code.GDDynamiteObjects1 */
/* Reuse gdjs.Level_322Code.GDPlayerCarObjects1 */
gdjs.Level_322Code.GDRedExplosionObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDRedExplosionObjects1Objects, (( gdjs.Level_322Code.GDDynamiteObjects1.length === 0 ) ? 0 :gdjs.Level_322Code.GDDynamiteObjects1[0].getCenterXInScene()), (( gdjs.Level_322Code.GDDynamiteObjects1.length === 0 ) ? 0 :gdjs.Level_322Code.GDDynamiteObjects1[0].getCenterYInScene()), "");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "JDSherbert - Pixel Explosions SFX Pack - Explosion (Large - 2).wav", false, 100, 1);
}
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerCarObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerCarObjects1[i].clearForces();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("New3DBox"), gdjs.Level_322Code.GDNew3DBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerCar"), gdjs.Level_322Code.GDPlayerCarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDPlayerCarObjects1Objects, gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDNew3DBoxObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level " + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3)), true);
}
}

}


};

gdjs.Level_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_322Code.GDRoad_95953DObjects1.length = 0;
gdjs.Level_322Code.GDRoad_95953DObjects2.length = 0;
gdjs.Level_322Code.GDGrass_95953DObjects1.length = 0;
gdjs.Level_322Code.GDGrass_95953DObjects2.length = 0;
gdjs.Level_322Code.GDPlayerCarObjects1.length = 0;
gdjs.Level_322Code.GDPlayerCarObjects2.length = 0;
gdjs.Level_322Code.GDTrafficConeObjects1.length = 0;
gdjs.Level_322Code.GDTrafficConeObjects2.length = 0;
gdjs.Level_322Code.GDWalls_95953DObjects1.length = 0;
gdjs.Level_322Code.GDWalls_95953DObjects2.length = 0;
gdjs.Level_322Code.GDDynamiteObjects1.length = 0;
gdjs.Level_322Code.GDDynamiteObjects2.length = 0;
gdjs.Level_322Code.GDRedExplosionObjects1.length = 0;
gdjs.Level_322Code.GDRedExplosionObjects2.length = 0;
gdjs.Level_322Code.GDNew3DBoxObjects1.length = 0;
gdjs.Level_322Code.GDNew3DBoxObjects2.length = 0;

gdjs.Level_322Code.eventsList0(runtimeScene);
gdjs.Level_322Code.GDRoad_95953DObjects1.length = 0;
gdjs.Level_322Code.GDRoad_95953DObjects2.length = 0;
gdjs.Level_322Code.GDGrass_95953DObjects1.length = 0;
gdjs.Level_322Code.GDGrass_95953DObjects2.length = 0;
gdjs.Level_322Code.GDPlayerCarObjects1.length = 0;
gdjs.Level_322Code.GDPlayerCarObjects2.length = 0;
gdjs.Level_322Code.GDTrafficConeObjects1.length = 0;
gdjs.Level_322Code.GDTrafficConeObjects2.length = 0;
gdjs.Level_322Code.GDWalls_95953DObjects1.length = 0;
gdjs.Level_322Code.GDWalls_95953DObjects2.length = 0;
gdjs.Level_322Code.GDDynamiteObjects1.length = 0;
gdjs.Level_322Code.GDDynamiteObjects2.length = 0;
gdjs.Level_322Code.GDRedExplosionObjects1.length = 0;
gdjs.Level_322Code.GDRedExplosionObjects2.length = 0;
gdjs.Level_322Code.GDNew3DBoxObjects1.length = 0;
gdjs.Level_322Code.GDNew3DBoxObjects2.length = 0;


return;

}

gdjs['Level_322Code'] = gdjs.Level_322Code;
