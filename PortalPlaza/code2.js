gdjs.Driving_322DCode = {};
gdjs.Driving_322DCode.localVariables = [];
gdjs.Driving_322DCode.idToCallbackMap = new Map();
gdjs.Driving_322DCode.GDCarObjects1= [];
gdjs.Driving_322DCode.GDCarObjects2= [];
gdjs.Driving_322DCode.GDNormWallObjects1= [];
gdjs.Driving_322DCode.GDNormWallObjects2= [];
gdjs.Driving_322DCode.GDFinishObjects1= [];
gdjs.Driving_322DCode.GDFinishObjects2= [];


gdjs.Driving_322DCode.mapOfGDgdjs_9546Driving_9595322DCode_9546GDFinishObjects1Objects = Hashtable.newFrom({"Finish": gdjs.Driving_322DCode.GDFinishObjects1});
gdjs.Driving_322DCode.mapOfGDgdjs_9546Driving_9595322DCode_9546GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs.Driving_322DCode.GDCarObjects1});
gdjs.Driving_322DCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.Driving_322DCode.GDCarObjects1);
{for(var i = 0, len = gdjs.Driving_322DCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.Driving_322DCode.GDCarObjects1[i].getBehavior("PhysicsCar").SimulateUpKey(null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.Driving_322DCode.GDCarObjects1);
{for(var i = 0, len = gdjs.Driving_322DCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.Driving_322DCode.GDCarObjects1[i].getBehavior("PhysicsCar").SimulateDownKey(null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.Driving_322DCode.GDCarObjects1);
{for(var i = 0, len = gdjs.Driving_322DCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.Driving_322DCode.GDCarObjects1[i].getBehavior("PhysicsCar").SimulateLeftKey(null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.Driving_322DCode.GDCarObjects1);
{for(var i = 0, len = gdjs.Driving_322DCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.Driving_322DCode.GDCarObjects1[i].getBehavior("PhysicsCar").SimulateRightKey(null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.Driving_322DCode.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Finish"), gdjs.Driving_322DCode.GDFinishObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Driving_322DCode.mapOfGDgdjs_9546Driving_9595322DCode_9546GDFinishObjects1Objects, gdjs.Driving_322DCode.mapOfGDgdjs_9546Driving_9595322DCode_9546GDCarObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "The Lobby", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Juhani Junkala [Chiptune Adventures] 1. Stage 1.ogg", true, 100, 1);
}
}

}


};

gdjs.Driving_322DCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Driving_322DCode.GDCarObjects1.length = 0;
gdjs.Driving_322DCode.GDCarObjects2.length = 0;
gdjs.Driving_322DCode.GDNormWallObjects1.length = 0;
gdjs.Driving_322DCode.GDNormWallObjects2.length = 0;
gdjs.Driving_322DCode.GDFinishObjects1.length = 0;
gdjs.Driving_322DCode.GDFinishObjects2.length = 0;

gdjs.Driving_322DCode.eventsList0(runtimeScene);
gdjs.Driving_322DCode.GDCarObjects1.length = 0;
gdjs.Driving_322DCode.GDCarObjects2.length = 0;
gdjs.Driving_322DCode.GDNormWallObjects1.length = 0;
gdjs.Driving_322DCode.GDNormWallObjects2.length = 0;
gdjs.Driving_322DCode.GDFinishObjects1.length = 0;
gdjs.Driving_322DCode.GDFinishObjects2.length = 0;


return;

}

gdjs['Driving_322DCode'] = gdjs.Driving_322DCode;
