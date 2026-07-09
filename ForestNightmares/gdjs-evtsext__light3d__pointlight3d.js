
gdjs.evtsExt__Light3D__PointLight3D = gdjs.evtsExt__Light3D__PointLight3D || {};

/**
 * Object generated from 3D point light
 */
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D = class PointLight3D extends gdjs.CustomRuntimeObject3D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    this._objectData.Color = objectData.content.Color !== undefined ? objectData.content.Color : "255;255;255";
    this._objectData.Intensity = objectData.content.Intensity !== undefined ? objectData.content.Intensity : Number("1") || 0;
    this._objectData.Decay = objectData.content.Decay !== undefined ? objectData.content.Decay : Number("2") || 0;
    this._objectData.IsCastingShadow = objectData.content.IsCastingShadow !== undefined ? objectData.content.IsCastingShadow : true;
    this._objectData.ShadowQuality = objectData.content.ShadowQuality !== undefined ? objectData.content.ShadowQuality : "Medium";
    this._objectData.ShadowCameraNearPlane = objectData.content.ShadowCameraNearPlane !== undefined ? objectData.content.ShadowCameraNearPlane : Number("20") || 0;
    this._objectData.ShadowCameraFarPlane = objectData.content.ShadowCameraFarPlane !== undefined ? objectData.content.ShadowCameraFarPlane : Number("2000") || 0;
    this._objectData.Range = objectData.content.Range !== undefined ? objectData.content.Range : Number("2000") || 0;
    this._objectData.ShadowBias = objectData.content.ShadowBias !== undefined ? objectData.content.ShadowBias : Number("0") || 0;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.Color !== newObjectData.content.Color)
      this._objectData.Color = newObjectData.content.Color;
    if (oldObjectData.content.Intensity !== newObjectData.content.Intensity)
      this._objectData.Intensity = newObjectData.content.Intensity;
    if (oldObjectData.content.Decay !== newObjectData.content.Decay)
      this._objectData.Decay = newObjectData.content.Decay;
    if (oldObjectData.content.IsCastingShadow !== newObjectData.content.IsCastingShadow)
      this._objectData.IsCastingShadow = newObjectData.content.IsCastingShadow;
    if (oldObjectData.content.ShadowQuality !== newObjectData.content.ShadowQuality)
      this._objectData.ShadowQuality = newObjectData.content.ShadowQuality;
    if (oldObjectData.content.ShadowCameraNearPlane !== newObjectData.content.ShadowCameraNearPlane)
      this._objectData.ShadowCameraNearPlane = newObjectData.content.ShadowCameraNearPlane;
    if (oldObjectData.content.ShadowCameraFarPlane !== newObjectData.content.ShadowCameraFarPlane)
      this._objectData.ShadowCameraFarPlane = newObjectData.content.ShadowCameraFarPlane;
    if (oldObjectData.content.Range !== newObjectData.content.Range)
      this._objectData.Range = newObjectData.content.Range;
    if (oldObjectData.content.ShadowBias !== newObjectData.content.ShadowBias)
      this._objectData.ShadowBias = newObjectData.content.ShadowBias;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getColor() {
    return this._objectData.Color !== undefined ? this._objectData.Color : "255;255;255";
  }
  _setColor(newValue) {
    this._objectData.Color = newValue;
  }
  _getIntensity() {
    return this._objectData.Intensity !== undefined ? this._objectData.Intensity : Number("1") || 0;
  }
  _setIntensity(newValue) {
    this._objectData.Intensity = newValue;
  }
  _getDecay() {
    return this._objectData.Decay !== undefined ? this._objectData.Decay : Number("2") || 0;
  }
  _setDecay(newValue) {
    this._objectData.Decay = newValue;
  }
  _getIsCastingShadow() {
    return this._objectData.IsCastingShadow !== undefined ? this._objectData.IsCastingShadow : true;
  }
  _setIsCastingShadow(newValue) {
    this._objectData.IsCastingShadow = newValue;
  }
  _toggleIsCastingShadow() {
    this._setIsCastingShadow(!this._getIsCastingShadow());
  }
  _getShadowQuality() {
    return this._objectData.ShadowQuality !== undefined ? this._objectData.ShadowQuality : "Medium";
  }
  _setShadowQuality(newValue) {
    this._objectData.ShadowQuality = newValue;
  }
  _getShadowCameraNearPlane() {
    return this._objectData.ShadowCameraNearPlane !== undefined ? this._objectData.ShadowCameraNearPlane : Number("20") || 0;
  }
  _setShadowCameraNearPlane(newValue) {
    this._objectData.ShadowCameraNearPlane = newValue;
  }
  _getShadowCameraFarPlane() {
    return this._objectData.ShadowCameraFarPlane !== undefined ? this._objectData.ShadowCameraFarPlane : Number("2000") || 0;
  }
  _setShadowCameraFarPlane(newValue) {
    this._objectData.ShadowCameraFarPlane = newValue;
  }
  _getRange() {
    return this._objectData.Range !== undefined ? this._objectData.Range : Number("2000") || 0;
  }
  _setRange(newValue) {
    this._objectData.Range = newValue;
  }
  _getShadowBias() {
    return this._objectData.ShadowBias !== undefined ? this._objectData.ShadowBias : Number("0") || 0;
  }
  _setShadowBias(newValue) {
    this._objectData.ShadowBias = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.userFunc0x11456b8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const {
    Light3DRenderer,
    //@ts-ignore
} = gdjs.__light3DExtension;
const {
    PointLightAdapter,
    PointLightHelper,
    //@ts-ignore
} = gdjs.__light3DExtension.point;

/** @type {gdjs.CustomRuntimeObject3D} */
//@ts-ignore
const object = objects[0];

const game = runtimeScene.getGame();

// This is a hack that may break in future releases.
// Replace the group that would hold children objects by the light.
const layer = object.getInstanceContainer().getLayer(object.getLayer());
const group = object.getRenderer()._threeGroup;
layer.getRenderer().remove3DRendererObject(group);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.copy(group.position);
pointLight.rotation.copy(group.rotation);
pointLight.up.set(0, 0, 1);
pointLight.shadow.camera.up.set(0, 0, 1);
//@ts-ignore
object.__light3D = pointLight;
//@ts-ignore
object.__pointLightAdapter = new PointLightAdapter(object, pointLight);

const pointLight3DRenderer = new Light3DRenderer(object, object._instanceContainer, object.getInstanceContainer());
object._renderer = pointLight3DRenderer;
if (game.isInGameEdition && game.isInGameEdition()) {
    const pointLightHelper = new PointLightHelper(object);
    pointLightHelper.rotation.order = 'ZYX';
    pointLightHelper.add(pointLight);
    pointLight3DRenderer._threeGroup = pointLightHelper;
    layer.getRenderer().add3DRendererObject(pointLightHelper);
}
else {
    pointLight3DRenderer._threeGroup = pointLight;
    layer.getRenderer().add3DRendererObject(pointLight);
}

pointLight.updateMatrixWorld(true);

// Allow to tween the light color.
//@ts-ignore
if (!object.setColor && !object.getColor) {
    const prototype = Object.getPrototypeOf(object);
    prototype.setColor = function(tint) {
        this._setColor(tint);
        this.__pointLightAdapter.setColor(tint);
    }
    prototype.getColor = function() {
        return this._getColor(eventsFunctionContext);
    }
}

};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__Light3D__DefineHelperClasses.func(runtimeScene, eventsFunctionContext);
}
{gdjs.evtsExt__Light3D__DefinePointLightHelperClasses.func(runtimeScene, eventsFunctionContext);
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.userFunc0x11456b8(runtimeScene, objects, eventsFunctionContext);

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.GDObjectObjects1[i].UpdateFromProperties(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onCreatedContext.GDPlaceholderObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onDestroyContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onDestroyContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onDestroyContext.GDPlaceholderObjects1= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onDestroyContext.userFunc0x19ac950 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
/** @type {gdjs.CustomRuntimeObject} */
const object = objects[0];
// Here runtimeScene is the gdjs.CustomRuntimeObjectInstanceContainer inside the custom object.
const gameScene = object.getRuntimeScene();

object.__light3D.dispose();
object.get3DRendererObject().dispose();

};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onDestroyContext.userFunc0x19ac950(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onDestroyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onDestroyContext.GDPlaceholderObjects1.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onDestroyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onDestroyContext.GDPlaceholderObjects1.length = 0;


return;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onHotReloadingContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onHotReloadingContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onHotReloadingContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onHotReloadingContext.GDObjectObjects2= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onHotReloadingContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onHotReloadingContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onHotReloadingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onHotReloadingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onHotReloadingContext.GDObjectObjects1[i].UpdateFromProperties(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onHotReloading = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onHotReloadingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onHotReloadingContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onHotReloadingContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onHotReloadingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onHotReloadingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onHotReloadingContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.onHotReloadingContext.GDPlaceholderObjects2.length = 0;


return;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects2= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1[i].SetColor(eventsFunctionContext.getObjects("Object")[0]._getColor(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1[i].SetIntensity(eventsFunctionContext.getObjects("Object")[0]._getIntensity(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1[i].SetDecay(eventsFunctionContext.getObjects("Object")[0]._getDecay(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1[i].SetRange(eventsFunctionContext.getObjects("Object")[0]._getRange(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1[i].SetShadowQuality(eventsFunctionContext.getObjects("Object")[0]._getShadowQuality(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1[i].SetShadowCameraNearPlane(eventsFunctionContext.getObjects("Object")[0]._getShadowCameraNearPlane(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1[i].SetShadowCameraFarPlane(eventsFunctionContext.getObjects("Object")[0]._getShadowCameraFarPlane(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1[i].SetShadowBias(eventsFunctionContext.getObjects("Object")[0]._getShadowBias(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1[i].UpdateHelper(eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0]._getIsCastingShadow();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1[i].SetCastingShadow(false, eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getIsCastingShadow();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1[i].SetCastingShadow(true, eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromProperties = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateFromPropertiesContext.GDPlaceholderObjects2.length = 0;


return;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateHelperContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateHelperContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateHelperContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateHelperContext.GDPlaceholderObjects1= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateHelperContext.userFunc0xd420d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const game = runtimeScene.getGame();
if (game.isInGameEdition && game.isInGameEdition()) {
    const pointLightHelper = objects[0].get3DRendererObject();
    pointLightHelper.update();
}

};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateHelperContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateHelperContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateHelperContext.GDObjectObjects1;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateHelperContext.userFunc0xd420d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateHelper = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateHelperContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateHelperContext.GDPlaceholderObjects1.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateHelperContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateHelperContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.UpdateHelperContext.GDPlaceholderObjects1.length = 0;


return;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ColorContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ColorContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ColorContext.GDObjectObjects2= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ColorContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ColorContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getColor();}
}

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.Color = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ColorContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ColorContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ColorContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ColorContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ColorContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ColorContext.GDPlaceholderObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetColorContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetColorContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetColorContext.GDObjectObjects2= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetColorContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetColorContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetColorContext.userFunc0xed5f80 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const color = eventsFunctionContext.getArgument("Value");

object.__pointLightAdapter.setColor(color);
};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0]._setColor(eventsFunctionContext.getArgument("Value"))
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetColorContext.GDObjectObjects1;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetColorContext.userFunc0xed5f80(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetColor = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetColorContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetColorContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetColorContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetColorContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetColorContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetColorContext.GDPlaceholderObjects2.length = 0;


return;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IntensityContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IntensityContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IntensityContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IntensityContext.GDObjectObjects2= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IntensityContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IntensityContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IntensityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getIntensity();}
}

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.Intensity = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IntensityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IntensityContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IntensityContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IntensityContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IntensityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IntensityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IntensityContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IntensityContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IntensityContext.GDPlaceholderObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetIntensityContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetIntensityContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetIntensityContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetIntensityContext.GDObjectObjects2= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetIntensityContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetIntensityContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetIntensityContext.userFunc0x17a0118 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const value = eventsFunctionContext.getArgument("Value");

object.__pointLightAdapter.setIntensity(value);

};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetIntensityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0]._setIntensity(eventsFunctionContext.getArgument("Value"))
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetIntensityContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetIntensityContext.GDObjectObjects1;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetIntensityContext.userFunc0x17a0118(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetIntensity = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetIntensityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetIntensityContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetIntensityContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetIntensityContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetIntensityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetIntensityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetIntensityContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetIntensityContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetIntensityContext.GDPlaceholderObjects2.length = 0;


return;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.DecayContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.DecayContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.DecayContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.DecayContext.GDObjectObjects2= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.DecayContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.DecayContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.DecayContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getDecay();}
}

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.Decay = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.DecayContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.DecayContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.DecayContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.DecayContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.DecayContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.DecayContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.DecayContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.DecayContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.DecayContext.GDPlaceholderObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetDecayContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetDecayContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetDecayContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetDecayContext.GDObjectObjects2= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetDecayContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetDecayContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetDecayContext.userFunc0xaf2ce0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const value = eventsFunctionContext.getArgument("Value");

object.__pointLightAdapter.setDecay(value);
};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetDecayContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0]._setDecay(eventsFunctionContext.getArgument("Value"))
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetDecayContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetDecayContext.GDObjectObjects1;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetDecayContext.userFunc0xaf2ce0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetDecay = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetDecayContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetDecayContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetDecayContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetDecayContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetDecayContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetDecayContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetDecayContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetDecayContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetDecayContext.GDPlaceholderObjects2.length = 0;


return;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IsCastingShadowContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IsCastingShadowContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IsCastingShadowContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IsCastingShadowContext.GDObjectObjects2= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IsCastingShadowContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IsCastingShadowContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IsCastingShadowContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getIsCastingShadow();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IsCastingShadowContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = true;}
{for(var i = 0, len = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IsCastingShadowContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IsCastingShadowContext.GDObjectObjects1[i].SetRange(eventsFunctionContext.getObjects("Object")[0]._getRange(), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IsCastingShadow = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IsCastingShadowContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IsCastingShadowContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IsCastingShadowContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IsCastingShadowContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IsCastingShadowContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IsCastingShadowContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IsCastingShadowContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IsCastingShadowContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.IsCastingShadowContext.GDPlaceholderObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetCastingShadowContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetCastingShadowContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetCastingShadowContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetCastingShadowContext.GDObjectObjects2= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetCastingShadowContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetCastingShadowContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetCastingShadowContext.userFunc0x19ac950 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const value = eventsFunctionContext.getArgument("Value");

object.__pointLightAdapter.setCastingShadow(value);
};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetCastingShadowContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0]._setIsCastingShadow(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0]._setIsCastingShadow(true)
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetCastingShadowContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetCastingShadowContext.GDObjectObjects1;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetCastingShadowContext.userFunc0x19ac950(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetCastingShadow = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetCastingShadowContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetCastingShadowContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetCastingShadowContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetCastingShadowContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetCastingShadowContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetCastingShadowContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetCastingShadowContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetCastingShadowContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetCastingShadowContext.GDPlaceholderObjects2.length = 0;


return;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowQualityContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowQualityContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowQualityContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowQualityContext.GDObjectObjects2= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowQualityContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowQualityContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowQualityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getShadowQuality();}
}

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowQuality = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowQualityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowQualityContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowQualityContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowQualityContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowQualityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowQualityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowQualityContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowQualityContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowQualityContext.GDPlaceholderObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.GDObjectObjects2= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.userFunc0xe8fbb0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const value = eventsFunctionContext.getArgument("Value");

object.__pointLightAdapter.setShadowQuality(value);
};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setShadowQuality(eventsFunctionContext.getArgument("Value"))
}
{for(var i = 0, len = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.GDObjectObjects1[i].ApplyShadowBias(eventsFunctionContext.getObjects("Object")[0]._getShadowBias(), eventsFunctionContext.getObjects("Object")[0]._getShadowQuality(), eventsFunctionContext);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.GDObjectObjects1;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.userFunc0xe8fbb0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQuality = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowQualityContext.GDPlaceholderObjects2.length = 0;


return;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraNearPlaneContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraNearPlaneContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraNearPlaneContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraNearPlaneContext.GDObjectObjects2= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraNearPlaneContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraNearPlaneContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraNearPlaneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getShadowCameraNearPlane();}
}

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraNearPlane = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraNearPlaneContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraNearPlaneContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraNearPlaneContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraNearPlaneContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraNearPlaneContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraNearPlaneContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraNearPlaneContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraNearPlaneContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraNearPlaneContext.GDPlaceholderObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.GDObjectObjects2= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.userFunc0xca2030 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const value = eventsFunctionContext.getArgument("Value");

object.__pointLightAdapter.setShadowCameraNearPlane(value);

};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0]._setShadowCameraNearPlane(eventsFunctionContext.getArgument("Value"))
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.GDObjectObjects1;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.userFunc0xca2030(runtimeScene, objects, eventsFunctionContext);

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.GDObjectObjects1[i].SetRange(eventsFunctionContext.getObjects("Object")[0]._getRange(), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlane = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraNearPlaneContext.GDPlaceholderObjects2.length = 0;


return;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraFarPlaneContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraFarPlaneContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraFarPlaneContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraFarPlaneContext.GDObjectObjects2= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraFarPlaneContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraFarPlaneContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraFarPlaneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getShadowCameraFarPlane();}
}

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraFarPlane = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraFarPlaneContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraFarPlaneContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraFarPlaneContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraFarPlaneContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraFarPlaneContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraFarPlaneContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraFarPlaneContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraFarPlaneContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowCameraFarPlaneContext.GDPlaceholderObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraFarPlaneContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraFarPlaneContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraFarPlaneContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraFarPlaneContext.GDObjectObjects2= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraFarPlaneContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraFarPlaneContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraFarPlaneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraFarPlaneContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setShadowCameraFarPlane(eventsFunctionContext.getArgument("Value"))
}
{for(var i = 0, len = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraFarPlaneContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraFarPlaneContext.GDObjectObjects1[i].ApplyShadowCameraFarPlane(Math.min(eventsFunctionContext.getArgument("Value"), eventsFunctionContext.getObjects("Object")[0]._getRange()), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraFarPlane = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraFarPlaneContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraFarPlaneContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraFarPlaneContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraFarPlaneContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraFarPlaneContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraFarPlaneContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraFarPlaneContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraFarPlaneContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowCameraFarPlaneContext.GDPlaceholderObjects2.length = 0;


return;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.RangeContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.RangeContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.RangeContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.RangeContext.GDObjectObjects2= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.RangeContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.RangeContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.RangeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getRange();}
}

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.Range = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.RangeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.RangeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.RangeContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.RangeContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.RangeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.RangeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.RangeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.RangeContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.RangeContext.GDPlaceholderObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.GDObjectObjects2= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.userFunc0x12931c0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const value = eventsFunctionContext.getArgument("Value");

object.__pointLightAdapter.setRange(value);
};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0]._setRange(eventsFunctionContext.getArgument("Value"))
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.GDObjectObjects1;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.userFunc0x12931c0(runtimeScene, objects, eventsFunctionContext);

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.GDObjectObjects1[i].ApplyShadowCameraFarPlane(Math.min(eventsFunctionContext.getArgument("Value"), eventsFunctionContext.getObjects("Object")[0]._getShadowCameraFarPlane()), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRange = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetRangeContext.GDPlaceholderObjects2.length = 0;


return;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowCameraFarPlaneContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowCameraFarPlaneContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowCameraFarPlaneContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowCameraFarPlaneContext.GDPlaceholderObjects1= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowCameraFarPlaneContext.userFunc0x1408448 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const value = eventsFunctionContext.getArgument("Value");

object.__pointLightAdapter.setShadowCameraFarPlane(value);

};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowCameraFarPlaneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowCameraFarPlaneContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowCameraFarPlaneContext.GDObjectObjects1;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowCameraFarPlaneContext.userFunc0x1408448(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowCameraFarPlane = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowCameraFarPlaneContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowCameraFarPlaneContext.GDPlaceholderObjects1.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowCameraFarPlaneContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowCameraFarPlaneContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowCameraFarPlaneContext.GDPlaceholderObjects1.length = 0;


return;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowBiasContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowBiasContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowBiasContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowBiasContext.GDObjectObjects2= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowBiasContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowBiasContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowBiasContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getShadowBias();}
}

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowBias = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowBiasContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowBiasContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowBiasContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowBiasContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowBiasContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowBiasContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowBiasContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowBiasContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ShadowBiasContext.GDPlaceholderObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowBiasContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowBiasContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowBiasContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowBiasContext.GDObjectObjects2= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowBiasContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowBiasContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowBiasContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowBiasContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setShadowBias(eventsFunctionContext.getArgument("Value"))
}
{for(var i = 0, len = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowBiasContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowBiasContext.GDObjectObjects1[i].ApplyShadowBias(eventsFunctionContext.getArgument("Value"), eventsFunctionContext.getObjects("Object")[0]._getShadowQuality(), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowBias = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowBiasContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowBiasContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowBiasContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowBiasContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowBiasContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowBiasContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowBiasContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowBiasContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.SetShadowBiasContext.GDPlaceholderObjects2.length = 0;


return;
}
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowBiasContext = {};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowBiasContext.idToCallbackMap = new Map();
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowBiasContext.GDObjectObjects1= [];
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowBiasContext.GDPlaceholderObjects1= [];


gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowBiasContext.userFunc0xe94c08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const value = eventsFunctionContext.getArgument("Value");
const quality = eventsFunctionContext.getArgument("Quality");

object.__pointLightAdapter.setShadowBias(value, quality);

};
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowBiasContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowBiasContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowBiasContext.GDObjectObjects1;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowBiasContext.userFunc0xe94c08(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowBias = function(Value, Quality, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Placeholder": thisGDPlaceholderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Light3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Light3D"),
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
if (argName === "Value") return Value;
if (argName === "Quality") return Quality;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowBiasContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowBiasContext.GDPlaceholderObjects1.length = 0;

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowBiasContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowBiasContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.ApplyShadowBiasContext.GDPlaceholderObjects1.length = 0;


return;
}

gdjs.evtsExt__Light3D__PointLight3D.PointLight3D.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("Light3D::PointLight3D", gdjs.evtsExt__Light3D__PointLight3D.PointLight3D);
