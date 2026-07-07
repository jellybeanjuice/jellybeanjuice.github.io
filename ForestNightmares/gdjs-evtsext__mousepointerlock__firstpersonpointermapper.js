
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper = gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper || {};

/**
 * Behavior generated from First person camera mouse mapper
 */
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper = class FirstPersonPointerMapper extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Object3D = behaviorData.Object3D !== undefined ? behaviorData.Object3D : "";
    this._behaviorData.HorizontalSpeed = behaviorData.HorizontalSpeed !== undefined ? behaviorData.HorizontalSpeed : Number("200") || 0;
    this._behaviorData.VerticalSpeed = behaviorData.VerticalSpeed !== undefined ? behaviorData.VerticalSpeed : Number("100") || 0;
    this._behaviorData.VerticalAngleMin = behaviorData.VerticalAngleMin !== undefined ? behaviorData.VerticalAngleMin : Number("-90") || 0;
    this._behaviorData.VerticalAngleMax = behaviorData.VerticalAngleMax !== undefined ? behaviorData.VerticalAngleMax : Number("90") || 0;
    this._behaviorData.OffsetZ = behaviorData.OffsetZ !== undefined ? behaviorData.OffsetZ : Number("0") || 0;
    this._behaviorData.ShouldLock = behaviorData.ShouldLock !== undefined ? behaviorData.ShouldLock : true;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Object3D !== undefined)
      this._behaviorData.Object3D = behaviorOverriding.Object3D;
    if (behaviorOverriding.HorizontalSpeed !== undefined)
      this._behaviorData.HorizontalSpeed = behaviorOverriding.HorizontalSpeed;
    if (behaviorOverriding.VerticalSpeed !== undefined)
      this._behaviorData.VerticalSpeed = behaviorOverriding.VerticalSpeed;
    if (behaviorOverriding.VerticalAngleMin !== undefined)
      this._behaviorData.VerticalAngleMin = behaviorOverriding.VerticalAngleMin;
    if (behaviorOverriding.VerticalAngleMax !== undefined)
      this._behaviorData.VerticalAngleMax = behaviorOverriding.VerticalAngleMax;
    if (behaviorOverriding.OffsetZ !== undefined)
      this._behaviorData.OffsetZ = behaviorOverriding.OffsetZ;
    if (behaviorOverriding.ShouldLock !== undefined)
      this._behaviorData.ShouldLock = behaviorOverriding.ShouldLock;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Object3D: this._behaviorData.Object3D,
    HorizontalSpeed: this._behaviorData.HorizontalSpeed,
    VerticalSpeed: this._behaviorData.VerticalSpeed,
    VerticalAngleMin: this._behaviorData.VerticalAngleMin,
    VerticalAngleMax: this._behaviorData.VerticalAngleMax,
    OffsetZ: this._behaviorData.OffsetZ,
    ShouldLock: this._behaviorData.ShouldLock,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Object3D !== undefined)
      this._behaviorData.Object3D = networkSyncData.props.Object3D;
    if (networkSyncData.props.HorizontalSpeed !== undefined)
      this._behaviorData.HorizontalSpeed = networkSyncData.props.HorizontalSpeed;
    if (networkSyncData.props.VerticalSpeed !== undefined)
      this._behaviorData.VerticalSpeed = networkSyncData.props.VerticalSpeed;
    if (networkSyncData.props.VerticalAngleMin !== undefined)
      this._behaviorData.VerticalAngleMin = networkSyncData.props.VerticalAngleMin;
    if (networkSyncData.props.VerticalAngleMax !== undefined)
      this._behaviorData.VerticalAngleMax = networkSyncData.props.VerticalAngleMax;
    if (networkSyncData.props.OffsetZ !== undefined)
      this._behaviorData.OffsetZ = networkSyncData.props.OffsetZ;
    if (networkSyncData.props.ShouldLock !== undefined)
      this._behaviorData.ShouldLock = networkSyncData.props.ShouldLock;
  }

  // Properties:
  
  _getObject3D() {
    return this._behaviorData.Object3D !== undefined ? this._behaviorData.Object3D : "";
  }
  _setObject3D(newValue) {
    this._behaviorData.Object3D = newValue;
  }
  _getHorizontalSpeed() {
    return this._behaviorData.HorizontalSpeed !== undefined ? this._behaviorData.HorizontalSpeed : Number("200") || 0;
  }
  _setHorizontalSpeed(newValue) {
    this._behaviorData.HorizontalSpeed = newValue;
  }
  _getVerticalSpeed() {
    return this._behaviorData.VerticalSpeed !== undefined ? this._behaviorData.VerticalSpeed : Number("100") || 0;
  }
  _setVerticalSpeed(newValue) {
    this._behaviorData.VerticalSpeed = newValue;
  }
  _getVerticalAngleMin() {
    return this._behaviorData.VerticalAngleMin !== undefined ? this._behaviorData.VerticalAngleMin : Number("-90") || 0;
  }
  _setVerticalAngleMin(newValue) {
    this._behaviorData.VerticalAngleMin = newValue;
  }
  _getVerticalAngleMax() {
    return this._behaviorData.VerticalAngleMax !== undefined ? this._behaviorData.VerticalAngleMax : Number("90") || 0;
  }
  _setVerticalAngleMax(newValue) {
    this._behaviorData.VerticalAngleMax = newValue;
  }
  _getOffsetZ() {
    return this._behaviorData.OffsetZ !== undefined ? this._behaviorData.OffsetZ : Number("0") || 0;
  }
  _setOffsetZ(newValue) {
    this._behaviorData.OffsetZ = newValue;
  }
  _getShouldLock() {
    return this._behaviorData.ShouldLock !== undefined ? this._behaviorData.ShouldLock : true;
  }
  _setShouldLock(newValue) {
    this._behaviorData.ShouldLock = newValue;
  }
  _toggleShouldLock() {
    this._setShouldLock(!this._getShouldLock());
  }
}

/**
 * Shared data generated from First person camera mouse mapper
 */
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.SharedData = class FirstPersonPointerMapperSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._MousePointerLock_FirstPersonPointerMapperSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._MousePointerLock_FirstPersonPointerMapperSharedData = new gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.SharedData(
      initialData
    );
  }
  return instanceContainer._MousePointerLock_FirstPersonPointerMapperSharedData;
}

// Methods:
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAngle(gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getAngle() + (gdjs.evtsExt__MousePointerLock__MovementX.func(runtimeScene, eventsFunctionContext) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalSpeed() / gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)));
}
}
{for(var i = 0, len = gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setRotationY(gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationY() + (gdjs.evtsExt__MousePointerLock__MovementY.func(runtimeScene, eventsFunctionContext) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalSpeed() / gdjs.evtTools.window.getGameResolutionHeight(runtimeScene)));
}
}
{for(var i = 0, len = gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setRotationY(gdjs.evtTools.common.clamp((gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationY()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalAngleMin(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalAngleMax()));
}
}
{for(var i = 0, len = gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).LookFromObjectEyes(eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldLock();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, eventsFunctionContext));
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, eventsFunctionContext);
}
}

}


};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MousePointerLock"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MousePointerLock"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext = {};
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.idToCallbackMap = new Map();
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1= [];
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects2= [];


gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1[0] : null), true, (( gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1[0].getLayer()), 0);
}
{gdjs.scene3d.camera.setCameraZ(runtimeScene, (( gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()) + (( gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetZ(), "", 0);
}
{gdjs.scene3d.camera.setCameraRotationX(runtimeScene, -((( gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationY())) + 90, "" + eventsFunctionContext.getArgument("Layer"), 0);
}
{gdjs.scene3d.camera.setCameraRotationY(runtimeScene, (( gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationX()), "" + eventsFunctionContext.getArgument("Layer"), 0);
}
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, (( gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1[0].getAngle()) + 90, (( gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1[0].getLayer()), 0);
}
}

}


};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyes = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MousePointerLock"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MousePointerLock"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.LookFromObjectEyesContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.HorizontalSpeedContext = {};
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.HorizontalSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.HorizontalSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.HorizontalSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.HorizontalSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalSpeed();}
}

}


};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.HorizontalSpeed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MousePointerLock"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MousePointerLock"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.HorizontalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.HorizontalSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.HorizontalSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.HorizontalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.HorizontalSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetHorizontalSpeedContext = {};
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetHorizontalSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetHorizontalSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetHorizontalSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetHorizontalSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHorizontalSpeed(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetHorizontalSpeed = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MousePointerLock"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MousePointerLock"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetHorizontalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetHorizontalSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetHorizontalSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetHorizontalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetHorizontalSpeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalSpeedContext = {};
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalSpeed();}
}

}


};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalSpeed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MousePointerLock"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MousePointerLock"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalSpeedContext = {};
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setVerticalSpeed(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalSpeed = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MousePointerLock"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MousePointerLock"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalSpeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMinContext = {};
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMinContext.idToCallbackMap = new Map();
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMinContext.GDObjectObjects1= [];
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMinContext.GDObjectObjects2= [];


gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMinContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalAngleMin();}
}

}


};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMin = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MousePointerLock"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MousePointerLock"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMinContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMinContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMinContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMinContext = {};
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMinContext.idToCallbackMap = new Map();
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMinContext.GDObjectObjects1= [];
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMinContext.GDObjectObjects2= [];


gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMinContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setVerticalAngleMin(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMin = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MousePointerLock"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MousePointerLock"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMinContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMinContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMinContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMaxContext = {};
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalAngleMax();}
}

}


};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMax = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MousePointerLock"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MousePointerLock"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.VerticalAngleMaxContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMaxContext = {};
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setVerticalAngleMax(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMax = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MousePointerLock"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MousePointerLock"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetVerticalAngleMaxContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.OffsetZContext = {};
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.OffsetZContext.idToCallbackMap = new Map();
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.OffsetZContext.GDObjectObjects1= [];
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.OffsetZContext.GDObjectObjects2= [];


gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.OffsetZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetZ();}
}

}


};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.OffsetZ = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MousePointerLock"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MousePointerLock"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.OffsetZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.OffsetZContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.OffsetZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.OffsetZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.OffsetZContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetOffsetZContext = {};
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetOffsetZContext.idToCallbackMap = new Map();
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetOffsetZContext.GDObjectObjects1= [];
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetOffsetZContext.GDObjectObjects2= [];


gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetOffsetZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOffsetZ(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetOffsetZ = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MousePointerLock"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MousePointerLock"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetOffsetZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetOffsetZContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetOffsetZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetOffsetZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper.prototype.SetOffsetZContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("MousePointerLock::FirstPersonPointerMapper", gdjs.evtsExt__MousePointerLock__FirstPersonPointerMapper.FirstPersonPointerMapper);
