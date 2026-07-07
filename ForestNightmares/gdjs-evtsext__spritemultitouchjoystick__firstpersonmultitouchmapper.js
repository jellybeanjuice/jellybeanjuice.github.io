
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper = gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper || {};

/**
 * Behavior generated from First person camera multitouch controller mapper
 */
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper = class FirstPersonMultitouchMapper extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Object3D = behaviorData.Object3D !== undefined ? behaviorData.Object3D : "";
    this._behaviorData.ControllerIdentifier = behaviorData.ControllerIdentifier !== undefined ? behaviorData.ControllerIdentifier : Number("1") || 0;
    this._behaviorData.CameraStick = behaviorData.CameraStick !== undefined ? behaviorData.CameraStick : "Secondary";
    this._behaviorData.HorizontalRotationSpeedMax = behaviorData.HorizontalRotationSpeedMax !== undefined ? behaviorData.HorizontalRotationSpeedMax : Number("180") || 0;
    this._behaviorData.HorizontalRotationAcceleration = behaviorData.HorizontalRotationAcceleration !== undefined ? behaviorData.HorizontalRotationAcceleration : Number("360") || 0;
    this._behaviorData.HorizontalRotationDeceleration = behaviorData.HorizontalRotationDeceleration !== undefined ? behaviorData.HorizontalRotationDeceleration : Number("720") || 0;
    this._behaviorData.VerticalRotationSpeedMax = behaviorData.VerticalRotationSpeedMax !== undefined ? behaviorData.VerticalRotationSpeedMax : Number("120") || 0;
    this._behaviorData.VerticalRotationAcceleration = behaviorData.VerticalRotationAcceleration !== undefined ? behaviorData.VerticalRotationAcceleration : Number("240") || 0;
    this._behaviorData.VerticalRotationDeceleration = behaviorData.VerticalRotationDeceleration !== undefined ? behaviorData.VerticalRotationDeceleration : Number("480") || 0;
    this._behaviorData.VerticalAngleMin = behaviorData.VerticalAngleMin !== undefined ? behaviorData.VerticalAngleMin : Number("-90") || 0;
    this._behaviorData.VerticalAngleMax = behaviorData.VerticalAngleMax !== undefined ? behaviorData.VerticalAngleMax : Number("90") || 0;
    this._behaviorData.OffsetZ = behaviorData.OffsetZ !== undefined ? behaviorData.OffsetZ : Number("0") || 0;
    this._behaviorData.CurrentRotationSpeedZ = Number("0") || 0;
    this._behaviorData.CurrentRotationSpeedY = Number("0") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Object3D !== undefined)
      this._behaviorData.Object3D = behaviorOverriding.Object3D;
    if (behaviorOverriding.ControllerIdentifier !== undefined)
      this._behaviorData.ControllerIdentifier = behaviorOverriding.ControllerIdentifier;
    if (behaviorOverriding.CameraStick !== undefined)
      this._behaviorData.CameraStick = behaviorOverriding.CameraStick;
    if (behaviorOverriding.HorizontalRotationSpeedMax !== undefined)
      this._behaviorData.HorizontalRotationSpeedMax = behaviorOverriding.HorizontalRotationSpeedMax;
    if (behaviorOverriding.HorizontalRotationAcceleration !== undefined)
      this._behaviorData.HorizontalRotationAcceleration = behaviorOverriding.HorizontalRotationAcceleration;
    if (behaviorOverriding.HorizontalRotationDeceleration !== undefined)
      this._behaviorData.HorizontalRotationDeceleration = behaviorOverriding.HorizontalRotationDeceleration;
    if (behaviorOverriding.VerticalRotationSpeedMax !== undefined)
      this._behaviorData.VerticalRotationSpeedMax = behaviorOverriding.VerticalRotationSpeedMax;
    if (behaviorOverriding.VerticalRotationAcceleration !== undefined)
      this._behaviorData.VerticalRotationAcceleration = behaviorOverriding.VerticalRotationAcceleration;
    if (behaviorOverriding.VerticalRotationDeceleration !== undefined)
      this._behaviorData.VerticalRotationDeceleration = behaviorOverriding.VerticalRotationDeceleration;
    if (behaviorOverriding.VerticalAngleMin !== undefined)
      this._behaviorData.VerticalAngleMin = behaviorOverriding.VerticalAngleMin;
    if (behaviorOverriding.VerticalAngleMax !== undefined)
      this._behaviorData.VerticalAngleMax = behaviorOverriding.VerticalAngleMax;
    if (behaviorOverriding.OffsetZ !== undefined)
      this._behaviorData.OffsetZ = behaviorOverriding.OffsetZ;
    if (behaviorOverriding.CurrentRotationSpeedZ !== undefined)
      this._behaviorData.CurrentRotationSpeedZ = behaviorOverriding.CurrentRotationSpeedZ;
    if (behaviorOverriding.CurrentRotationSpeedY !== undefined)
      this._behaviorData.CurrentRotationSpeedY = behaviorOverriding.CurrentRotationSpeedY;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Object3D: this._behaviorData.Object3D,
    ControllerIdentifier: this._behaviorData.ControllerIdentifier,
    CameraStick: this._behaviorData.CameraStick,
    HorizontalRotationSpeedMax: this._behaviorData.HorizontalRotationSpeedMax,
    HorizontalRotationAcceleration: this._behaviorData.HorizontalRotationAcceleration,
    HorizontalRotationDeceleration: this._behaviorData.HorizontalRotationDeceleration,
    VerticalRotationSpeedMax: this._behaviorData.VerticalRotationSpeedMax,
    VerticalRotationAcceleration: this._behaviorData.VerticalRotationAcceleration,
    VerticalRotationDeceleration: this._behaviorData.VerticalRotationDeceleration,
    VerticalAngleMin: this._behaviorData.VerticalAngleMin,
    VerticalAngleMax: this._behaviorData.VerticalAngleMax,
    OffsetZ: this._behaviorData.OffsetZ,
    CurrentRotationSpeedZ: this._behaviorData.CurrentRotationSpeedZ,
    CurrentRotationSpeedY: this._behaviorData.CurrentRotationSpeedY,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Object3D !== undefined)
      this._behaviorData.Object3D = networkSyncData.props.Object3D;
    if (networkSyncData.props.ControllerIdentifier !== undefined)
      this._behaviorData.ControllerIdentifier = networkSyncData.props.ControllerIdentifier;
    if (networkSyncData.props.CameraStick !== undefined)
      this._behaviorData.CameraStick = networkSyncData.props.CameraStick;
    if (networkSyncData.props.HorizontalRotationSpeedMax !== undefined)
      this._behaviorData.HorizontalRotationSpeedMax = networkSyncData.props.HorizontalRotationSpeedMax;
    if (networkSyncData.props.HorizontalRotationAcceleration !== undefined)
      this._behaviorData.HorizontalRotationAcceleration = networkSyncData.props.HorizontalRotationAcceleration;
    if (networkSyncData.props.HorizontalRotationDeceleration !== undefined)
      this._behaviorData.HorizontalRotationDeceleration = networkSyncData.props.HorizontalRotationDeceleration;
    if (networkSyncData.props.VerticalRotationSpeedMax !== undefined)
      this._behaviorData.VerticalRotationSpeedMax = networkSyncData.props.VerticalRotationSpeedMax;
    if (networkSyncData.props.VerticalRotationAcceleration !== undefined)
      this._behaviorData.VerticalRotationAcceleration = networkSyncData.props.VerticalRotationAcceleration;
    if (networkSyncData.props.VerticalRotationDeceleration !== undefined)
      this._behaviorData.VerticalRotationDeceleration = networkSyncData.props.VerticalRotationDeceleration;
    if (networkSyncData.props.VerticalAngleMin !== undefined)
      this._behaviorData.VerticalAngleMin = networkSyncData.props.VerticalAngleMin;
    if (networkSyncData.props.VerticalAngleMax !== undefined)
      this._behaviorData.VerticalAngleMax = networkSyncData.props.VerticalAngleMax;
    if (networkSyncData.props.OffsetZ !== undefined)
      this._behaviorData.OffsetZ = networkSyncData.props.OffsetZ;
    if (networkSyncData.props.CurrentRotationSpeedZ !== undefined)
      this._behaviorData.CurrentRotationSpeedZ = networkSyncData.props.CurrentRotationSpeedZ;
    if (networkSyncData.props.CurrentRotationSpeedY !== undefined)
      this._behaviorData.CurrentRotationSpeedY = networkSyncData.props.CurrentRotationSpeedY;
  }

  // Properties:
  
  _getObject3D() {
    return this._behaviorData.Object3D !== undefined ? this._behaviorData.Object3D : "";
  }
  _setObject3D(newValue) {
    this._behaviorData.Object3D = newValue;
  }
  _getControllerIdentifier() {
    return this._behaviorData.ControllerIdentifier !== undefined ? this._behaviorData.ControllerIdentifier : Number("1") || 0;
  }
  _setControllerIdentifier(newValue) {
    this._behaviorData.ControllerIdentifier = newValue;
  }
  _getCameraStick() {
    return this._behaviorData.CameraStick !== undefined ? this._behaviorData.CameraStick : "Secondary";
  }
  _setCameraStick(newValue) {
    this._behaviorData.CameraStick = newValue;
  }
  _getHorizontalRotationSpeedMax() {
    return this._behaviorData.HorizontalRotationSpeedMax !== undefined ? this._behaviorData.HorizontalRotationSpeedMax : Number("180") || 0;
  }
  _setHorizontalRotationSpeedMax(newValue) {
    this._behaviorData.HorizontalRotationSpeedMax = newValue;
  }
  _getHorizontalRotationAcceleration() {
    return this._behaviorData.HorizontalRotationAcceleration !== undefined ? this._behaviorData.HorizontalRotationAcceleration : Number("360") || 0;
  }
  _setHorizontalRotationAcceleration(newValue) {
    this._behaviorData.HorizontalRotationAcceleration = newValue;
  }
  _getHorizontalRotationDeceleration() {
    return this._behaviorData.HorizontalRotationDeceleration !== undefined ? this._behaviorData.HorizontalRotationDeceleration : Number("720") || 0;
  }
  _setHorizontalRotationDeceleration(newValue) {
    this._behaviorData.HorizontalRotationDeceleration = newValue;
  }
  _getVerticalRotationSpeedMax() {
    return this._behaviorData.VerticalRotationSpeedMax !== undefined ? this._behaviorData.VerticalRotationSpeedMax : Number("120") || 0;
  }
  _setVerticalRotationSpeedMax(newValue) {
    this._behaviorData.VerticalRotationSpeedMax = newValue;
  }
  _getVerticalRotationAcceleration() {
    return this._behaviorData.VerticalRotationAcceleration !== undefined ? this._behaviorData.VerticalRotationAcceleration : Number("240") || 0;
  }
  _setVerticalRotationAcceleration(newValue) {
    this._behaviorData.VerticalRotationAcceleration = newValue;
  }
  _getVerticalRotationDeceleration() {
    return this._behaviorData.VerticalRotationDeceleration !== undefined ? this._behaviorData.VerticalRotationDeceleration : Number("480") || 0;
  }
  _setVerticalRotationDeceleration(newValue) {
    this._behaviorData.VerticalRotationDeceleration = newValue;
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
  _getCurrentRotationSpeedZ() {
    return this._behaviorData.CurrentRotationSpeedZ !== undefined ? this._behaviorData.CurrentRotationSpeedZ : Number("0") || 0;
  }
  _setCurrentRotationSpeedZ(newValue) {
    this._behaviorData.CurrentRotationSpeedZ = newValue;
  }
  _getCurrentRotationSpeedY() {
    return this._behaviorData.CurrentRotationSpeedY !== undefined ? this._behaviorData.CurrentRotationSpeedY : Number("0") || 0;
  }
  _setCurrentRotationSpeedY(newValue) {
    this._behaviorData.CurrentRotationSpeedY = newValue;
  }
}

/**
 * Shared data generated from First person camera multitouch controller mapper
 */
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.SharedData = class FirstPersonMultitouchMapperSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SpriteMultitouchJoystick_FirstPersonMultitouchMapperSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SpriteMultitouchJoystick_FirstPersonMultitouchMapperSharedData = new gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.SharedData(
      initialData
    );
  }
  return instanceContainer._SpriteMultitouchJoystick_FirstPersonMultitouchMapperSharedData;
}

// Methods:
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentRotationSpeedZ(gdjs.evtsExt__SpriteMultitouchJoystick__AcceleratedSpeed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentRotationSpeedZ(), gdjs.evtsExt__SpriteMultitouchJoystick__StickForceX.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraStick(), eventsFunctionContext) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalRotationSpeedMax(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalRotationSpeedMax(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalRotationAcceleration(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalRotationDeceleration(), eventsFunctionContext))
}
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAngle(gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getAngle() + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentRotationSpeedZ() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentRotationSpeedY(gdjs.evtsExt__SpriteMultitouchJoystick__AcceleratedSpeed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentRotationSpeedY(), gdjs.evtsExt__SpriteMultitouchJoystick__StickForceY.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraStick(), eventsFunctionContext) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalRotationSpeedMax(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalRotationSpeedMax(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalRotationAcceleration(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalRotationDeceleration(), eventsFunctionContext))
}
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setRotationY(gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationY() + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentRotationSpeedY() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setRotationY(gdjs.evtTools.common.clamp((gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationY()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalAngleMin(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalAngleMax()));
}
}
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).LookFromObjectEyes(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1[0] : null), true, (( gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1[0].getLayer()), 0);
}
{gdjs.scene3d.camera.setCameraZ(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()) + (( gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetZ(), "", 0);
}
{gdjs.scene3d.camera.setCameraRotationX(runtimeScene, -((( gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationY())) + 90, "" + eventsFunctionContext.getArgument("Layer"), 0);
}
{gdjs.scene3d.camera.setCameraRotationY(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationX()), "" + eventsFunctionContext.getArgument("Layer"), 0);
}
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1[0].getAngle()) + 90, (( gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1[0].getLayer()), 0);
}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyes = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.LookFromObjectEyesContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationSpeedMaxContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationSpeedMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationSpeedMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationSpeedMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationSpeedMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalRotationSpeedMax();}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationSpeedMax = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationSpeedMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationSpeedMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationSpeedMaxContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationSpeedMaxContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationSpeedMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationSpeedMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationSpeedMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationSpeedMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHorizontalRotationSpeedMax(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationSpeedMax = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationSpeedMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationSpeedMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationSpeedMaxContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationAccelerationContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationAccelerationContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationAccelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationAccelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationAccelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalRotationAcceleration();}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationAcceleration = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationAccelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationAccelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationAccelerationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationAccelerationContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationAccelerationContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationAccelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationAccelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationAccelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHorizontalRotationAcceleration(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationAcceleration = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationAccelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationAccelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationAccelerationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationDecelerationContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationDecelerationContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationDecelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationDecelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationDecelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalRotationDeceleration();}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationDeceleration = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationDecelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationDecelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationDecelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationDecelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.HorizontalRotationDecelerationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationDecelerationContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationDecelerationContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationDecelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationDecelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationDecelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHorizontalRotationDeceleration(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationDeceleration = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationDecelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationDecelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationDecelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationDecelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetHorizontalRotationDecelerationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationSpeedMaxContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationSpeedMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationSpeedMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationSpeedMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationSpeedMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalRotationSpeedMax();}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationSpeedMax = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationSpeedMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationSpeedMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationSpeedMaxContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationSpeedMaxContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationSpeedMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationSpeedMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationSpeedMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationSpeedMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setVerticalRotationSpeedMax(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationSpeedMax = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationSpeedMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationSpeedMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationSpeedMaxContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationAccelerationContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationAccelerationContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationAccelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationAccelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationAccelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalRotationAcceleration();}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationAcceleration = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationAccelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationAccelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationAccelerationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationAccelerationContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationAccelerationContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationAccelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationAccelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationAccelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setVerticalRotationAcceleration(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationAcceleration = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationAccelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationAccelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationAccelerationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationDecelerationContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationDecelerationContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationDecelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationDecelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationDecelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalRotationDeceleration();}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationDeceleration = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationDecelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationDecelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationDecelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationDecelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalRotationDecelerationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationDecelerationContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationDecelerationContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationDecelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationDecelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationDecelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setVerticalRotationDeceleration(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationDeceleration = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationDecelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationDecelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationDecelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationDecelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalRotationDecelerationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMinContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMinContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMinContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMinContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMinContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalAngleMin();}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMin = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMinContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMinContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMinContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMinContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMinContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMinContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMinContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMinContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setVerticalAngleMin(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMin = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMinContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMinContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMinContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMaxContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalAngleMax();}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMax = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.VerticalAngleMaxContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMaxContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setVerticalAngleMax(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMax = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetVerticalAngleMaxContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.OffsetZContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.OffsetZContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.OffsetZContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.OffsetZContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.OffsetZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetZ();}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.OffsetZ = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.OffsetZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.OffsetZContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.OffsetZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.OffsetZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.OffsetZContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetOffsetZContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetOffsetZContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetOffsetZContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetOffsetZContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetOffsetZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOffsetZ(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetOffsetZ = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetOffsetZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetOffsetZContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetOffsetZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetOffsetZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper.prototype.SetOffsetZContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("SpriteMultitouchJoystick::FirstPersonMultitouchMapper", gdjs.evtsExt__SpriteMultitouchJoystick__FirstPersonMultitouchMapper.FirstPersonMultitouchMapper);
