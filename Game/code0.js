gdjs.In_45GameCode = {};
gdjs.In_45GameCode.localVariables = [];
gdjs.In_45GameCode.idToCallbackMap = new Map();
gdjs.In_45GameCode.GDNewTextObjects1= [];
gdjs.In_45GameCode.GDNewTextObjects2= [];


gdjs.In_45GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "g");
if (isConditionTrue_0) {
{gdjs.evtsExt__THNK_Relay__StartServer.func(runtimeScene, "TestRoom", "In-Game", null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "h");
if (isConditionTrue_0) {
{gdjs.evtsExt__THNK_Relay__ConnectToServer.func(runtimeScene, "TestRoom", null);
}
{gdjs.evtsExt__THNK__SendMessage.func(runtimeScene, "Test", gdjs.VariablesContainer.badVariable, null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__THNK__OnMessage.func(runtimeScene, "Test", gdjs.VariablesContainer.badVariable, null);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.In_45GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.In_45GameCode.GDNewTextObjects1.length = 0;
gdjs.In_45GameCode.GDNewTextObjects2.length = 0;

gdjs.In_45GameCode.eventsList0(runtimeScene);
gdjs.In_45GameCode.GDNewTextObjects1.length = 0;
gdjs.In_45GameCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['In_45GameCode'] = gdjs.In_45GameCode;
