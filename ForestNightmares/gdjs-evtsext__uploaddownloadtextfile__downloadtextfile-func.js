
if (typeof gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile !== "undefined") {
  gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile = {};
gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.idToCallbackMap = new Map();


gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.userFunc0xbc5930 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
function DownloadTextContent(filename, mimeType,content) {
    var link = document.createElement('a')
    var blob = new Blob([content], {type: mimeType})
    var url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.click();
    link.remove();
}

const FileName = eventsFunctionContext.getArgument("FileName");
const TextContent = eventsFunctionContext.getArgument("TextContent");

DownloadTextContent(FileName, "text/plain", TextContent);
};
gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.userFunc0xbc5930(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.func = function(runtimeScene, FileName, TextContent, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("UploadDownloadTextFile"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("UploadDownloadTextFile"),
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
if (argName === "FileName") return FileName;
if (argName === "TextContent") return TextContent;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.registeredGdjsCallbacks = [];