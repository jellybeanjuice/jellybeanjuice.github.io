
if (typeof gdjs.evtsExt__Share__Share !== "undefined") {
  gdjs.evtsExt__Share__Share.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Share__Share = {};
gdjs.evtsExt__Share__Share.idToCallbackMap = new Map();


gdjs.evtsExt__Share__Share.userFunc0x19d1668 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._shareExtension = gdjs._shareExtension || {
    lastShareResult: '',
};

if (!navigator.share) {
    gdjs._shareExtension.lastShareResult = 'unsupported';
    eventsFunctionContext.task.resolve()
    return;
}

navigator.share({
    title: eventsFunctionContext.getArgument("title") || undefined,
    text: eventsFunctionContext.getArgument("text") || undefined,
    url: eventsFunctionContext.getArgument("url") || undefined,
})
    .then(() => {
        gdjs._shareExtension.lastShareResult = 'ok';
        eventsFunctionContext.task.resolve();
    })
    .catch(() => {
        gdjs._shareExtension.lastShareResult = 'canceled';
        eventsFunctionContext.task.resolve();
    });


};
gdjs.evtsExt__Share__Share.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Share__Share.userFunc0x19d1668(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Share__Share.func = function(runtimeScene, text, url, title, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
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
if (argName === "text") return text;
if (argName === "url") return url;
if (argName === "title") return title;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Share__Share.eventsList0(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__Share__Share.registeredGdjsCallbacks = [];