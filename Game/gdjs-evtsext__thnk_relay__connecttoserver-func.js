
if (typeof gdjs.evtsExt__THNK_Relay__ConnectToServer !== "undefined") {
  gdjs.evtsExt__THNK_Relay__ConnectToServer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__THNK_Relay__ConnectToServer = {};
gdjs.evtsExt__THNK_Relay__ConnectToServer.idToCallbackMap = new Map();


gdjs.evtsExt__THNK_Relay__ConnectToServer.userFunc0xbaf7c0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
THNK.client.startClient(
    runtimeScene,
    new THNK.RelayClientAdapter(
        runtimeScene.getGame().getGameData().properties.projectUuid + runtimeScene.getGame().getGameData().properties.packageName,
        eventsFunctionContext.getArgument("RoomID")
    )
);

};
gdjs.evtsExt__THNK_Relay__ConnectToServer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__THNK_Relay__ConnectToServer.userFunc0xbaf7c0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__THNK_Relay__ConnectToServer.func = function(runtimeScene, RoomID, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__THNK_Relay__ConnectToServer.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__THNK_Relay__ConnectToServer.registeredGdjsCallbacks = [];