
if (typeof gdjs.evtsExt__THNK_Relay__StartServer !== "undefined") {
  gdjs.evtsExt__THNK_Relay__StartServer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__THNK_Relay__StartServer = {};
gdjs.evtsExt__THNK_Relay__StartServer.idToCallbackMap = new Map();


gdjs.evtsExt__THNK_Relay__StartServer.userFunc0x99cb60 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
THNK.server.startServer(
    new THNK.RelayServerAdapter(
        runtimeScene.getGame().getGameData().properties.projectUuid + runtimeScene.getGame().getGameData().properties.packageName,
        eventsFunctionContext.getArgument("RoomID")
    ),
    runtimeScene,
    eventsFunctionContext.getArgument("Scene")
);

};
gdjs.evtsExt__THNK_Relay__StartServer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__THNK_Relay__StartServer.userFunc0x99cb60(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__THNK_Relay__StartServer.func = function(runtimeScene, RoomID, Scene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("THNK_Relay"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("THNK_Relay"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "RoomID") return RoomID;
if (argName === "Scene") return Scene;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__THNK_Relay__StartServer.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__THNK_Relay__StartServer.registeredGdjsCallbacks = [];