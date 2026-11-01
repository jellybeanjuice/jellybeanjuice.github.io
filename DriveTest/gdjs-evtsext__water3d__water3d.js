
gdjs.evtsExt__Water3D__Water3D = gdjs.evtsExt__Water3D__Water3D || {};

/**
 * Object generated from 3D water
 */
gdjs.evtsExt__Water3D__Water3D.Water3D = class Water3D extends gdjs.CustomRuntimeObject3D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    this._objectData.Color = objectData.content.Color !== undefined ? objectData.content.Color : "40;120;170";
    this._objectData.Opacity = objectData.content.Opacity !== undefined ? objectData.content.Opacity : Number("200") || 0;
    this._objectData.CrestColor = objectData.content.CrestColor !== undefined ? objectData.content.CrestColor : "140;210;220";
    this._objectData.Foam = objectData.content.Foam !== undefined ? objectData.content.Foam : Number("0.3") || 0;
    this._objectData.WaveHeight = objectData.content.WaveHeight !== undefined ? objectData.content.WaveHeight : Number("6") || 0;
    this._objectData.WaveLength = objectData.content.WaveLength !== undefined ? objectData.content.WaveLength : Number("300") || 0;
    this._objectData.WaveSpeed = objectData.content.WaveSpeed !== undefined ? objectData.content.WaveSpeed : Number("1.5") || 0;
    this._objectData.NormalMap = objectData.content.NormalMap !== undefined ? objectData.content.NormalMap : "";
    this._objectData.NormalMapSize = objectData.content.NormalMapSize !== undefined ? objectData.content.NormalMapSize : Number("600") || 0;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.Color !== newObjectData.content.Color)
      this._objectData.Color = newObjectData.content.Color;
    if (oldObjectData.content.Opacity !== newObjectData.content.Opacity)
      this._objectData.Opacity = newObjectData.content.Opacity;
    if (oldObjectData.content.CrestColor !== newObjectData.content.CrestColor)
      this._objectData.CrestColor = newObjectData.content.CrestColor;
    if (oldObjectData.content.Foam !== newObjectData.content.Foam)
      this._objectData.Foam = newObjectData.content.Foam;
    if (oldObjectData.content.WaveHeight !== newObjectData.content.WaveHeight)
      this._objectData.WaveHeight = newObjectData.content.WaveHeight;
    if (oldObjectData.content.WaveLength !== newObjectData.content.WaveLength)
      this._objectData.WaveLength = newObjectData.content.WaveLength;
    if (oldObjectData.content.WaveSpeed !== newObjectData.content.WaveSpeed)
      this._objectData.WaveSpeed = newObjectData.content.WaveSpeed;
    if (oldObjectData.content.NormalMap !== newObjectData.content.NormalMap)
      this._objectData.NormalMap = newObjectData.content.NormalMap;
    if (oldObjectData.content.NormalMapSize !== newObjectData.content.NormalMapSize)
      this._objectData.NormalMapSize = newObjectData.content.NormalMapSize;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getColor() {
    return this._objectData.Color !== undefined ? this._objectData.Color : "40;120;170";
  }
  _setColor(newValue) {
    this._objectData.Color = newValue;
  }
  _getOpacity() {
    return this._objectData.Opacity !== undefined ? this._objectData.Opacity : Number("200") || 0;
  }
  _setOpacity(newValue) {
    this._objectData.Opacity = newValue;
  }
  _getCrestColor() {
    return this._objectData.CrestColor !== undefined ? this._objectData.CrestColor : "140;210;220";
  }
  _setCrestColor(newValue) {
    this._objectData.CrestColor = newValue;
  }
  _getFoam() {
    return this._objectData.Foam !== undefined ? this._objectData.Foam : Number("0.3") || 0;
  }
  _setFoam(newValue) {
    this._objectData.Foam = newValue;
  }
  _getWaveHeight() {
    return this._objectData.WaveHeight !== undefined ? this._objectData.WaveHeight : Number("6") || 0;
  }
  _setWaveHeight(newValue) {
    this._objectData.WaveHeight = newValue;
  }
  _getWaveLength() {
    return this._objectData.WaveLength !== undefined ? this._objectData.WaveLength : Number("300") || 0;
  }
  _setWaveLength(newValue) {
    this._objectData.WaveLength = newValue;
  }
  _getWaveSpeed() {
    return this._objectData.WaveSpeed !== undefined ? this._objectData.WaveSpeed : Number("1.5") || 0;
  }
  _setWaveSpeed(newValue) {
    this._objectData.WaveSpeed = newValue;
  }
  _getNormalMap() {
    return this._objectData.NormalMap !== undefined ? this._objectData.NormalMap : "";
  }
  _setNormalMap(newValue) {
    this._objectData.NormalMap = newValue;
  }
  _getNormalMapSize() {
    return this._objectData.NormalMapSize !== undefined ? this._objectData.NormalMapSize : Number("600") || 0;
  }
  _setNormalMapSize(newValue) {
    this._objectData.NormalMapSize = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onCreatedContext = {};
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onCreatedContext.GDAreaPlaceholderObjects1= [];
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onCreatedContext.GDAreaPlaceholderObjects2= [];


gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onCreatedContext.userFunc0x1b37ff8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
/** @type {gdjs.CustomRuntimeObject3D} */
const object = objects[0];
for (const child of object.getChildrenContainer().getAdhocListOfAllInstances()) {
    child.deleteFromScene();
}
if (object.__water3D) object.__water3D.dispose();
object.__water3D = new gdjs.__water3DExtension.Water(object);
};
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__Water3D__DefineHelperClasses.func(runtimeScene, eventsFunctionContext);
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onCreatedContext.userFunc0x1b37ff8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDAreaPlaceholderObjectsList = [...runtimeScene.getObjects("AreaPlaceholder")];
var GDAreaPlaceholderObjects = Hashtable.newFrom({"AreaPlaceholder": thisGDAreaPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "AreaPlaceholder": GDAreaPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "AreaPlaceholder": thisGDAreaPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Water3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Water3D"),
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

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onCreatedContext.GDAreaPlaceholderObjects1.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onCreatedContext.GDAreaPlaceholderObjects2.length = 0;

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onCreatedContext.GDAreaPlaceholderObjects1.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onCreatedContext.GDAreaPlaceholderObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onDestroyContext = {};
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onDestroyContext.GDObjectObjects1= [];
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onDestroyContext.GDAreaPlaceholderObjects1= [];


gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onDestroyContext.userFunc0x1a5e2d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
/** @type {gdjs.CustomRuntimeObject3D} */
const object = objects[0];
object.__water3D.dispose();
};
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onDestroyContext.userFunc0x1a5e2d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDAreaPlaceholderObjectsList = [...runtimeScene.getObjects("AreaPlaceholder")];
var GDAreaPlaceholderObjects = Hashtable.newFrom({"AreaPlaceholder": thisGDAreaPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "AreaPlaceholder": GDAreaPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "AreaPlaceholder": thisGDAreaPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Water3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Water3D"),
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

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onDestroyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onDestroyContext.GDAreaPlaceholderObjects1.length = 0;

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onDestroyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onDestroyContext.GDAreaPlaceholderObjects1.length = 0;


return;
}
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.doStepPostEventsContext.GDAreaPlaceholderObjects1= [];


gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.doStepPostEventsContext.userFunc0x100e560 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
/** @type {gdjs.CustomRuntimeObject3D} */
const object = objects[0];
const game = runtimeScene.getGame();
// Time doesn't pass in the scene editor: real time is used to show the waves.
const time = game.isInGameEdition && game.isInGameEdition()
    ? performance.now() / 1000
    : object.getRuntimeScene().getTimeManager().getTimeFromStart() / 1000;
object.__water3D.update(time);
};
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.doStepPostEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.doStepPostEventsContext.GDObjectObjects1;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.doStepPostEventsContext.userFunc0x100e560(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDAreaPlaceholderObjectsList = [...runtimeScene.getObjects("AreaPlaceholder")];
var GDAreaPlaceholderObjects = Hashtable.newFrom({"AreaPlaceholder": thisGDAreaPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "AreaPlaceholder": GDAreaPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "AreaPlaceholder": thisGDAreaPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Water3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Water3D"),
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

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.doStepPostEventsContext.GDAreaPlaceholderObjects1.length = 0;

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.doStepPostEventsContext.GDAreaPlaceholderObjects1.length = 0;


return;
}
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onHotReloadingContext = {};
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onHotReloadingContext.idToCallbackMap = new Map();
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onHotReloadingContext.GDObjectObjects1= [];
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onHotReloadingContext.GDAreaPlaceholderObjects1= [];


gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onHotReloadingContext.userFunc0x181fac0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
/** @type {gdjs.CustomRuntimeObject3D} */
const object = objects[0];
object.__water3D.updateFromProperties();
};
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onHotReloadingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onHotReloadingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onHotReloadingContext.GDObjectObjects1;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onHotReloadingContext.userFunc0x181fac0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onHotReloading = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDAreaPlaceholderObjectsList = [...runtimeScene.getObjects("AreaPlaceholder")];
var GDAreaPlaceholderObjects = Hashtable.newFrom({"AreaPlaceholder": thisGDAreaPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "AreaPlaceholder": GDAreaPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "AreaPlaceholder": thisGDAreaPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Water3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Water3D"),
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

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onHotReloadingContext.GDAreaPlaceholderObjects1.length = 0;

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onHotReloadingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.onHotReloadingContext.GDAreaPlaceholderObjects1.length = 0;


return;
}
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.SurfaceZContext = {};
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.SurfaceZContext.idToCallbackMap = new Map();
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.SurfaceZContext.GDObjectObjects1= [];
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.SurfaceZContext.GDAreaPlaceholderObjects1= [];


gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.SurfaceZContext.userFunc0x1b39ee0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
/** @type {gdjs.CustomRuntimeObject3D} */
const object = objects[0];
const x = eventsFunctionContext.getArgument("X");
const y = eventsFunctionContext.getArgument("Y");
eventsFunctionContext.returnValue = object.__water3D.getSurfaceZ(x, y);
};
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.SurfaceZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.SurfaceZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.SurfaceZContext.GDObjectObjects1;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.SurfaceZContext.userFunc0x1b39ee0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.SurfaceZ = function(X, Y, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDAreaPlaceholderObjectsList = [...runtimeScene.getObjects("AreaPlaceholder")];
var GDAreaPlaceholderObjects = Hashtable.newFrom({"AreaPlaceholder": thisGDAreaPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "AreaPlaceholder": GDAreaPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "AreaPlaceholder": thisGDAreaPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Water3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Water3D"),
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
if (argName === "X") return X;
if (argName === "Y") return Y;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.SurfaceZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.SurfaceZContext.GDAreaPlaceholderObjects1.length = 0;

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.SurfaceZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.SurfaceZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.SurfaceZContext.GDAreaPlaceholderObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.IsUnderwaterContext = {};
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.IsUnderwaterContext.idToCallbackMap = new Map();
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.IsUnderwaterContext.GDObjectObjects1= [];
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.IsUnderwaterContext.GDObjectsObjects1= [];
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.IsUnderwaterContext.GDAreaPlaceholderObjects1= [];


gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.IsUnderwaterContext.userFunc0x8b72e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
/** @type {gdjs.CustomRuntimeObject3D} */
const object = objects[0];
const water = object.__water3D;
eventsFunctionContext.returnValue = gdjs.evtTools.object.pickObjectsIf(
    (objectToCheck) => water.isUnderwater(objectToCheck),
    eventsFunctionContext.getObjectsLists("Objects"),
    false,
    null
);
};
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.IsUnderwaterContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.IsUnderwaterContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.IsUnderwaterContext.GDObjectObjects1;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.IsUnderwaterContext.userFunc0x8b72e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.IsUnderwater = function(Objects, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDAreaPlaceholderObjectsList = [...runtimeScene.getObjects("AreaPlaceholder")];
var GDAreaPlaceholderObjects = Hashtable.newFrom({"AreaPlaceholder": thisGDAreaPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "AreaPlaceholder": GDAreaPlaceholderObjects
, "Objects": Objects
},
  _objectArraysMap: {
"Object": thisObjectList
, "AreaPlaceholder": thisGDAreaPlaceholderObjectsList
, "Objects": gdjs.objectsListsToArray(Objects)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Water3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Water3D"),
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

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.IsUnderwaterContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.IsUnderwaterContext.GDObjectsObjects1.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.IsUnderwaterContext.GDAreaPlaceholderObjects1.length = 0;

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.IsUnderwaterContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.IsUnderwaterContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.IsUnderwaterContext.GDObjectsObjects1.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.IsUnderwaterContext.GDAreaPlaceholderObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.ApplyBuoyancyContext = {};
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.ApplyBuoyancyContext.idToCallbackMap = new Map();
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.ApplyBuoyancyContext.GDObjectObjects1= [];
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.ApplyBuoyancyContext.GDObjectsObjects1= [];
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.ApplyBuoyancyContext.GDAreaPlaceholderObjects1= [];


gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.ApplyBuoyancyContext.userFunc0x1b39e98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
/** @type {gdjs.CustomRuntimeObject3D} */
const object = objects[0];
const objectsToFloat = eventsFunctionContext.getObjects("Objects");
const behaviorName = eventsFunctionContext.getBehaviorName("Physics3D");
const buoyancy = eventsFunctionContext.getArgument("Buoyancy");
object.__water3D.applyBuoyancy(objectsToFloat, behaviorName, buoyancy);
};
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.ApplyBuoyancyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.ApplyBuoyancyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.ApplyBuoyancyContext.GDObjectObjects1;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.ApplyBuoyancyContext.userFunc0x1b39e98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.ApplyBuoyancy = function(Objects, Physics3D, Buoyancy, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDAreaPlaceholderObjectsList = [...runtimeScene.getObjects("AreaPlaceholder")];
var GDAreaPlaceholderObjects = Hashtable.newFrom({"AreaPlaceholder": thisGDAreaPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "AreaPlaceholder": GDAreaPlaceholderObjects
, "Objects": Objects
},
  _objectArraysMap: {
"Object": thisObjectList
, "AreaPlaceholder": thisGDAreaPlaceholderObjectsList
, "Objects": gdjs.objectsListsToArray(Objects)
},
  _behaviorNamesMap: {
"Physics3D": Physics3D
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Water3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Water3D"),
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
if (argName === "Buoyancy") return Buoyancy;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.ApplyBuoyancyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.ApplyBuoyancyContext.GDObjectsObjects1.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.ApplyBuoyancyContext.GDAreaPlaceholderObjects1.length = 0;

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.ApplyBuoyancyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.ApplyBuoyancyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.ApplyBuoyancyContext.GDObjectsObjects1.length = 0;
gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.ApplyBuoyancyContext.GDAreaPlaceholderObjects1.length = 0;


return;
}

gdjs.evtsExt__Water3D__Water3D.Water3D.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("Water3D::Water3D", gdjs.evtsExt__Water3D__Water3D.Water3D);
