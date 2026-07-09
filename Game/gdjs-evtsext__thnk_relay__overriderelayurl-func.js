
if (typeof gdjs.evtsExt__THNK_Relay__OverrideRelayURL !== "undefined") {
  gdjs.evtsExt__THNK_Relay__OverrideRelayURL.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__THNK_Relay__OverrideRelayURL = {};
gdjs.evtsExt__THNK_Relay__OverrideRelayURL.idToCallbackMap = new Map();


gdjs.evtsExt__THNK_Relay__OverrideRelayURL.userFunc0xae2300 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
THNK.RELAY_SERVER_URL = eventsFunctionContext.getArgument("URL");

};
gdjs.evtsExt__THNK_Relay__OverrideRelayURL.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__THNK_Relay__OverrideRelayURL.userFunc0xae2300(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__THNK_Relay__OverrideRelayURL.func = function(runtimeScene, URL, parentEventsFunctionContext) {
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
if (argName === "URL") return URL;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__THNK_Relay__OverrideRelayURL.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__THNK_Relay__OverrideRelayURL.registeredGdjsCallbacks = [];