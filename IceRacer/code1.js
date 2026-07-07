gdjs.SandboxCode = {};
gdjs.SandboxCode.localVariables = [];
gdjs.SandboxCode.idToCallbackMap = new Map();
gdjs.SandboxCode.GDRoad_95953DObjects1= [];
gdjs.SandboxCode.GDRoad_95953DObjects2= [];
gdjs.SandboxCode.GDGrass_95953DObjects1= [];
gdjs.SandboxCode.GDGrass_95953DObjects2= [];
gdjs.SandboxCode.GDPlayerCarObjects1= [];
gdjs.SandboxCode.GDPlayerCarObjects2= [];
gdjs.SandboxCode.GDTrafficConeObjects1= [];
gdjs.SandboxCode.GDTrafficConeObjects2= [];
gdjs.SandboxCode.GDWalls_95953DObjects1= [];
gdjs.SandboxCode.GDWalls_95953DObjects2= [];
gdjs.SandboxCode.GDNew3DBoxObjects1= [];
gdjs.SandboxCode.GDNew3DBoxObjects2= [];
gdjs.SandboxCode.GDDynamiteObjects1= [];
gdjs.SandboxCode.GDDynamiteObjects2= [];
gdjs.SandboxCode.GDRedExplosionObjects1= [];
gdjs.SandboxCode.GDRedExplosionObjects2= [];


gdjs.SandboxCode.mapOfGDgdjs_9546SandboxCode_9546GDTrafficConeObjects1Objects = Hashtable.newFrom({"TrafficCone": gdjs.SandboxCode.GDTrafficConeObjects1});
gdjs.SandboxCode.mapOfGDgdjs_9546SandboxCode_9546GDPlayerCarObjects1Objects = Hashtable.newFrom({"PlayerCar": gdjs.SandboxCode.GDPlayerCarObjects1});
gdjs.SandboxCode.mapOfGDgdjs_9546SandboxCode_9546GDPlayerCarObjects1Objects = Hashtable.newFrom({"PlayerCar": gdjs.SandboxCode.GDPlayerCarObjects1});
gdjs.SandboxCode.mapOfGDgdjs_9546SandboxCode_9546GDNew3DBoxObjects1Objects = Hashtable.newFrom({"New3DBox": gdjs.SandboxCode.GDNew3DBoxObjects1});
gdjs.SandboxCode.mapOfGDgdjs_9546SandboxCode_9546GDTrafficConeObjects1Objects = Hashtable.newFrom({"TrafficCone": gdjs.SandboxCode.GDTrafficConeObjects1});
gdjs.SandboxCode.mapOfGDgdjs_9546SandboxCode_9546GDDynamiteObjects1Objects = Hashtable.newFrom({"Dynamite": gdjs.SandboxCode.GDDynamiteObjects1});
gdjs.SandboxCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayerCar"), gdjs.SandboxCode.GDPlayerCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("TrafficCone"), gdjs.SandboxCode.GDTrafficConeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.SandboxCode.mapOfGDgdjs_9546SandboxCode_9546GDTrafficConeObjects1Objects, "Physics3D", gdjs.SandboxCode.mapOfGDgdjs_9546SandboxCode_9546GDPlayerCarObjects1Objects, "Physics3D", false);
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
gdjs.copyArray(runtimeScene.getObjects("PlayerCar"), gdjs.SandboxCode.GDPlayerCarObjects1);
{for(var i = 0, len = gdjs.SandboxCode.GDPlayerCarObjects1.length ;i < len;++i) {
    gdjs.SandboxCode.GDPlayerCarObjects1[i].getBehavior("PhysicsCar3D").setEngineSpeedMax(100000);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LShift");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerCar"), gdjs.SandboxCode.GDPlayerCarObjects1);
{for(var i = 0, len = gdjs.SandboxCode.GDPlayerCarObjects1.length ;i < len;++i) {
    gdjs.SandboxCode.GDPlayerCarObjects1[i].getBehavior("PhysicsCar3D").setEngineSpeedMax(6000);
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

gdjs.copyArray(runtimeScene.getObjects("New3DBox"), gdjs.SandboxCode.GDNew3DBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerCar"), gdjs.SandboxCode.GDPlayerCarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SandboxCode.mapOfGDgdjs_9546SandboxCode_9546GDPlayerCarObjects1Objects, gdjs.SandboxCode.mapOfGDgdjs_9546SandboxCode_9546GDNew3DBoxObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level " + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3)), true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerCar"), gdjs.SandboxCode.GDPlayerCarObjects1);
gdjs.SandboxCode.GDTrafficConeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SandboxCode.mapOfGDgdjs_9546SandboxCode_9546GDTrafficConeObjects1Objects, (( gdjs.SandboxCode.GDPlayerCarObjects1.length === 0 ) ? 0 :gdjs.SandboxCode.GDPlayerCarObjects1[0].getCenterXInScene()), (( gdjs.SandboxCode.GDPlayerCarObjects1.length === 0 ) ? 0 :gdjs.SandboxCode.GDPlayerCarObjects1[0].getCenterYInScene()), "");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num2");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerCar"), gdjs.SandboxCode.GDPlayerCarObjects1);
gdjs.SandboxCode.GDDynamiteObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SandboxCode.mapOfGDgdjs_9546SandboxCode_9546GDDynamiteObjects1Objects, (( gdjs.SandboxCode.GDPlayerCarObjects1.length === 0 ) ? 0 :gdjs.SandboxCode.GDPlayerCarObjects1[0].getCenterXInScene()), (( gdjs.SandboxCode.GDPlayerCarObjects1.length === 0 ) ? 0 :gdjs.SandboxCode.GDPlayerCarObjects1[0].getCenterYInScene()), "");
}
}

}


};

gdjs.SandboxCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SandboxCode.GDRoad_95953DObjects1.length = 0;
gdjs.SandboxCode.GDRoad_95953DObjects2.length = 0;
gdjs.SandboxCode.GDGrass_95953DObjects1.length = 0;
gdjs.SandboxCode.GDGrass_95953DObjects2.length = 0;
gdjs.SandboxCode.GDPlayerCarObjects1.length = 0;
gdjs.SandboxCode.GDPlayerCarObjects2.length = 0;
gdjs.SandboxCode.GDTrafficConeObjects1.length = 0;
gdjs.SandboxCode.GDTrafficConeObjects2.length = 0;
gdjs.SandboxCode.GDWalls_95953DObjects1.length = 0;
gdjs.SandboxCode.GDWalls_95953DObjects2.length = 0;
gdjs.SandboxCode.GDNew3DBoxObjects1.length = 0;
gdjs.SandboxCode.GDNew3DBoxObjects2.length = 0;
gdjs.SandboxCode.GDDynamiteObjects1.length = 0;
gdjs.SandboxCode.GDDynamiteObjects2.length = 0;
gdjs.SandboxCode.GDRedExplosionObjects1.length = 0;
gdjs.SandboxCode.GDRedExplosionObjects2.length = 0;

gdjs.SandboxCode.eventsList0(runtimeScene);
gdjs.SandboxCode.GDRoad_95953DObjects1.length = 0;
gdjs.SandboxCode.GDRoad_95953DObjects2.length = 0;
gdjs.SandboxCode.GDGrass_95953DObjects1.length = 0;
gdjs.SandboxCode.GDGrass_95953DObjects2.length = 0;
gdjs.SandboxCode.GDPlayerCarObjects1.length = 0;
gdjs.SandboxCode.GDPlayerCarObjects2.length = 0;
gdjs.SandboxCode.GDTrafficConeObjects1.length = 0;
gdjs.SandboxCode.GDTrafficConeObjects2.length = 0;
gdjs.SandboxCode.GDWalls_95953DObjects1.length = 0;
gdjs.SandboxCode.GDWalls_95953DObjects2.length = 0;
gdjs.SandboxCode.GDNew3DBoxObjects1.length = 0;
gdjs.SandboxCode.GDNew3DBoxObjects2.length = 0;
gdjs.SandboxCode.GDDynamiteObjects1.length = 0;
gdjs.SandboxCode.GDDynamiteObjects2.length = 0;
gdjs.SandboxCode.GDRedExplosionObjects1.length = 0;
gdjs.SandboxCode.GDRedExplosionObjects2.length = 0;


return;

}

gdjs['SandboxCode'] = gdjs.SandboxCode;
