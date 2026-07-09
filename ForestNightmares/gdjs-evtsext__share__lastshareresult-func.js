
if (typeof gdjs.evtsExt__Share__LastShareResult !== "undefined") {
  gdjs.evtsExt__Share__LastShareResult.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Share__LastShareResult = {};
gdjs.evtsExt__Share__LastShareResult.idToCallbackMap = new Map();


gdjs.evtsExt__Share__LastShareResult.userFunc0xee8db8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._shareExtension = gdjs._shareExtension || {
    lastShareResult: '',
};

eventsFunctionContext.returnValue = gdjs._shareExtension.lastShareResult;
};
gdjs.evtsExt__Share__LastShareResult.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Share__LastShareResult.userFunc0xee8db8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Share__LastShareResult.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Share"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Share"),
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Share__LastShareResult.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Share__LastShareResult.registeredGdjsCallbacks = [];