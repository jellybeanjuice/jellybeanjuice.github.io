
gdjs.evtsExt__PhysicsCar__PhysicsCar = gdjs.evtsExt__PhysicsCar__PhysicsCar || {};

/**
 * Behavior generated from Physics car
 */
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar = class PhysicsCar extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Physics2 = behaviorData.Physics2 !== undefined ? behaviorData.Physics2 : "";
    this._behaviorData.Acceleration = behaviorData.Acceleration !== undefined ? behaviorData.Acceleration : Number("500") || 0;
    this._behaviorData.SpeedMax = behaviorData.SpeedMax !== undefined ? behaviorData.SpeedMax : Number("800") || 0;
    this._behaviorData.WheelGripRatio = behaviorData.WheelGripRatio !== undefined ? behaviorData.WheelGripRatio : Number("0.5") || 0;
    this._behaviorData.SteeringSpeed = behaviorData.SteeringSpeed !== undefined ? behaviorData.SteeringSpeed : Number("50") || 0;
    this._behaviorData.SteeringBackSpeed = behaviorData.SteeringBackSpeed !== undefined ? behaviorData.SteeringBackSpeed : Number("240") || 0;
    this._behaviorData.SteeringAngleMax = behaviorData.SteeringAngleMax !== undefined ? behaviorData.SteeringAngleMax : Number("30") || 0;
    this._behaviorData.SteeringAngle = Number("0") || 0;
    this._behaviorData.IsRightPressed = false;
    this._behaviorData.IsLeftPressed = false;
    this._behaviorData.IsUpPressed = false;
    this._behaviorData.IsDownPressed = false;
    this._behaviorData.FrontWheelsPosition = behaviorData.FrontWheelsPosition !== undefined ? behaviorData.FrontWheelsPosition : Number("0.8") || 0;
    this._behaviorData.RearWheelsPosition = behaviorData.RearWheelsPosition !== undefined ? behaviorData.RearWheelsPosition : Number("0.8") || 0;
    this._behaviorData.AccelerationStickValue = Number("0") || 0;
    this._behaviorData.SteeringStickValue = Number("0") || 0;
    this._behaviorData.IsDebug = false;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Physics2 !== undefined)
      this._behaviorData.Physics2 = behaviorOverriding.Physics2;
    if (behaviorOverriding.Acceleration !== undefined)
      this._behaviorData.Acceleration = behaviorOverriding.Acceleration;
    if (behaviorOverriding.SpeedMax !== undefined)
      this._behaviorData.SpeedMax = behaviorOverriding.SpeedMax;
    if (behaviorOverriding.WheelGripRatio !== undefined)
      this._behaviorData.WheelGripRatio = behaviorOverriding.WheelGripRatio;
    if (behaviorOverriding.SteeringSpeed !== undefined)
      this._behaviorData.SteeringSpeed = behaviorOverriding.SteeringSpeed;
    if (behaviorOverriding.SteeringBackSpeed !== undefined)
      this._behaviorData.SteeringBackSpeed = behaviorOverriding.SteeringBackSpeed;
    if (behaviorOverriding.SteeringAngleMax !== undefined)
      this._behaviorData.SteeringAngleMax = behaviorOverriding.SteeringAngleMax;
    if (behaviorOverriding.SteeringAngle !== undefined)
      this._behaviorData.SteeringAngle = behaviorOverriding.SteeringAngle;
    if (behaviorOverriding.IsRightPressed !== undefined)
      this._behaviorData.IsRightPressed = behaviorOverriding.IsRightPressed;
    if (behaviorOverriding.IsLeftPressed !== undefined)
      this._behaviorData.IsLeftPressed = behaviorOverriding.IsLeftPressed;
    if (behaviorOverriding.IsUpPressed !== undefined)
      this._behaviorData.IsUpPressed = behaviorOverriding.IsUpPressed;
    if (behaviorOverriding.IsDownPressed !== undefined)
      this._behaviorData.IsDownPressed = behaviorOverriding.IsDownPressed;
    if (behaviorOverriding.FrontWheelsPosition !== undefined)
      this._behaviorData.FrontWheelsPosition = behaviorOverriding.FrontWheelsPosition;
    if (behaviorOverriding.RearWheelsPosition !== undefined)
      this._behaviorData.RearWheelsPosition = behaviorOverriding.RearWheelsPosition;
    if (behaviorOverriding.AccelerationStickValue !== undefined)
      this._behaviorData.AccelerationStickValue = behaviorOverriding.AccelerationStickValue;
    if (behaviorOverriding.SteeringStickValue !== undefined)
      this._behaviorData.SteeringStickValue = behaviorOverriding.SteeringStickValue;
    if (behaviorOverriding.IsDebug !== undefined)
      this._behaviorData.IsDebug = behaviorOverriding.IsDebug;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Physics2: this._behaviorData.Physics2,
    Acceleration: this._behaviorData.Acceleration,
    SpeedMax: this._behaviorData.SpeedMax,
    WheelGripRatio: this._behaviorData.WheelGripRatio,
    SteeringSpeed: this._behaviorData.SteeringSpeed,
    SteeringBackSpeed: this._behaviorData.SteeringBackSpeed,
    SteeringAngleMax: this._behaviorData.SteeringAngleMax,
    SteeringAngle: this._behaviorData.SteeringAngle,
    IsRightPressed: this._behaviorData.IsRightPressed,
    IsLeftPressed: this._behaviorData.IsLeftPressed,
    IsUpPressed: this._behaviorData.IsUpPressed,
    IsDownPressed: this._behaviorData.IsDownPressed,
    FrontWheelsPosition: this._behaviorData.FrontWheelsPosition,
    RearWheelsPosition: this._behaviorData.RearWheelsPosition,
    AccelerationStickValue: this._behaviorData.AccelerationStickValue,
    SteeringStickValue: this._behaviorData.SteeringStickValue,
    IsDebug: this._behaviorData.IsDebug,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Physics2 !== undefined)
      this._behaviorData.Physics2 = networkSyncData.props.Physics2;
    if (networkSyncData.props.Acceleration !== undefined)
      this._behaviorData.Acceleration = networkSyncData.props.Acceleration;
    if (networkSyncData.props.SpeedMax !== undefined)
      this._behaviorData.SpeedMax = networkSyncData.props.SpeedMax;
    if (networkSyncData.props.WheelGripRatio !== undefined)
      this._behaviorData.WheelGripRatio = networkSyncData.props.WheelGripRatio;
    if (networkSyncData.props.SteeringSpeed !== undefined)
      this._behaviorData.SteeringSpeed = networkSyncData.props.SteeringSpeed;
    if (networkSyncData.props.SteeringBackSpeed !== undefined)
      this._behaviorData.SteeringBackSpeed = networkSyncData.props.SteeringBackSpeed;
    if (networkSyncData.props.SteeringAngleMax !== undefined)
      this._behaviorData.SteeringAngleMax = networkSyncData.props.SteeringAngleMax;
    if (networkSyncData.props.SteeringAngle !== undefined)
      this._behaviorData.SteeringAngle = networkSyncData.props.SteeringAngle;
    if (networkSyncData.props.IsRightPressed !== undefined)
      this._behaviorData.IsRightPressed = networkSyncData.props.IsRightPressed;
    if (networkSyncData.props.IsLeftPressed !== undefined)
      this._behaviorData.IsLeftPressed = networkSyncData.props.IsLeftPressed;
    if (networkSyncData.props.IsUpPressed !== undefined)
      this._behaviorData.IsUpPressed = networkSyncData.props.IsUpPressed;
    if (networkSyncData.props.IsDownPressed !== undefined)
      this._behaviorData.IsDownPressed = networkSyncData.props.IsDownPressed;
    if (networkSyncData.props.FrontWheelsPosition !== undefined)
      this._behaviorData.FrontWheelsPosition = networkSyncData.props.FrontWheelsPosition;
    if (networkSyncData.props.RearWheelsPosition !== undefined)
      this._behaviorData.RearWheelsPosition = networkSyncData.props.RearWheelsPosition;
    if (networkSyncData.props.AccelerationStickValue !== undefined)
      this._behaviorData.AccelerationStickValue = networkSyncData.props.AccelerationStickValue;
    if (networkSyncData.props.SteeringStickValue !== undefined)
      this._behaviorData.SteeringStickValue = networkSyncData.props.SteeringStickValue;
    if (networkSyncData.props.IsDebug !== undefined)
      this._behaviorData.IsDebug = networkSyncData.props.IsDebug;
  }

  // Properties:
  
  _getPhysics2() {
    return this._behaviorData.Physics2 !== undefined ? this._behaviorData.Physics2 : "";
  }
  _setPhysics2(newValue) {
    this._behaviorData.Physics2 = newValue;
  }
  _getAcceleration() {
    return this._behaviorData.Acceleration !== undefined ? this._behaviorData.Acceleration : Number("500") || 0;
  }
  _setAcceleration(newValue) {
    this._behaviorData.Acceleration = newValue;
  }
  _getSpeedMax() {
    return this._behaviorData.SpeedMax !== undefined ? this._behaviorData.SpeedMax : Number("800") || 0;
  }
  _setSpeedMax(newValue) {
    this._behaviorData.SpeedMax = newValue;
  }
  _getWheelGripRatio() {
    return this._behaviorData.WheelGripRatio !== undefined ? this._behaviorData.WheelGripRatio : Number("0.5") || 0;
  }
  _setWheelGripRatio(newValue) {
    this._behaviorData.WheelGripRatio = newValue;
  }
  _getSteeringSpeed() {
    return this._behaviorData.SteeringSpeed !== undefined ? this._behaviorData.SteeringSpeed : Number("50") || 0;
  }
  _setSteeringSpeed(newValue) {
    this._behaviorData.SteeringSpeed = newValue;
  }
  _getSteeringBackSpeed() {
    return this._behaviorData.SteeringBackSpeed !== undefined ? this._behaviorData.SteeringBackSpeed : Number("240") || 0;
  }
  _setSteeringBackSpeed(newValue) {
    this._behaviorData.SteeringBackSpeed = newValue;
  }
  _getSteeringAngleMax() {
    return this._behaviorData.SteeringAngleMax !== undefined ? this._behaviorData.SteeringAngleMax : Number("30") || 0;
  }
  _setSteeringAngleMax(newValue) {
    this._behaviorData.SteeringAngleMax = newValue;
  }
  _getSteeringAngle() {
    return this._behaviorData.SteeringAngle !== undefined ? this._behaviorData.SteeringAngle : Number("0") || 0;
  }
  _setSteeringAngle(newValue) {
    this._behaviorData.SteeringAngle = newValue;
  }
  _getIsRightPressed() {
    return this._behaviorData.IsRightPressed !== undefined ? this._behaviorData.IsRightPressed : false;
  }
  _setIsRightPressed(newValue) {
    this._behaviorData.IsRightPressed = newValue;
  }
  _toggleIsRightPressed() {
    this._setIsRightPressed(!this._getIsRightPressed());
  }
  _getIsLeftPressed() {
    return this._behaviorData.IsLeftPressed !== undefined ? this._behaviorData.IsLeftPressed : false;
  }
  _setIsLeftPressed(newValue) {
    this._behaviorData.IsLeftPressed = newValue;
  }
  _toggleIsLeftPressed() {
    this._setIsLeftPressed(!this._getIsLeftPressed());
  }
  _getIsUpPressed() {
    return this._behaviorData.IsUpPressed !== undefined ? this._behaviorData.IsUpPressed : false;
  }
  _setIsUpPressed(newValue) {
    this._behaviorData.IsUpPressed = newValue;
  }
  _toggleIsUpPressed() {
    this._setIsUpPressed(!this._getIsUpPressed());
  }
  _getIsDownPressed() {
    return this._behaviorData.IsDownPressed !== undefined ? this._behaviorData.IsDownPressed : false;
  }
  _setIsDownPressed(newValue) {
    this._behaviorData.IsDownPressed = newValue;
  }
  _toggleIsDownPressed() {
    this._setIsDownPressed(!this._getIsDownPressed());
  }
  _getFrontWheelsPosition() {
    return this._behaviorData.FrontWheelsPosition !== undefined ? this._behaviorData.FrontWheelsPosition : Number("0.8") || 0;
  }
  _setFrontWheelsPosition(newValue) {
    this._behaviorData.FrontWheelsPosition = newValue;
  }
  _getRearWheelsPosition() {
    return this._behaviorData.RearWheelsPosition !== undefined ? this._behaviorData.RearWheelsPosition : Number("0.8") || 0;
  }
  _setRearWheelsPosition(newValue) {
    this._behaviorData.RearWheelsPosition = newValue;
  }
  _getAccelerationStickValue() {
    return this._behaviorData.AccelerationStickValue !== undefined ? this._behaviorData.AccelerationStickValue : Number("0") || 0;
  }
  _setAccelerationStickValue(newValue) {
    this._behaviorData.AccelerationStickValue = newValue;
  }
  _getSteeringStickValue() {
    return this._behaviorData.SteeringStickValue !== undefined ? this._behaviorData.SteeringStickValue : Number("0") || 0;
  }
  _setSteeringStickValue(newValue) {
    this._behaviorData.SteeringStickValue = newValue;
  }
  _getIsDebug() {
    return this._behaviorData.IsDebug !== undefined ? this._behaviorData.IsDebug : false;
  }
  _setIsDebug(newValue) {
    this._behaviorData.IsDebug = newValue;
  }
  _toggleIsDebug() {
    this._setIsDebug(!this._getIsDebug());
  }
}

/**
 * Shared data generated from Physics car
 */
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.SharedData = class PhysicsCarSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PhysicsCar_PhysicsCarSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PhysicsCar_PhysicsCarSharedData = new gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.SharedData(
      initialData
    );
  }
  return instanceContainer._PhysicsCar_PhysicsCarSharedData;
}

// Methods:
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.onCreatedContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).setAngularDamping(0);
}
}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.onCreated = function(parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringAngle() < 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSteeringAngle(Math.min(0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringAngle() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringBackSpeed() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)))
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringAngle() > 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSteeringAngle(Math.max(0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringAngle() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringBackSpeed() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)))
}
}

}


};gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringAngle() < 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSteeringAngle(Math.min(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringAngleMax(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringAngle() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringBackSpeed() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)))
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringAngle() >= 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSteeringAngle(Math.min(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringAngleMax(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringAngle() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringSpeed() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringStickValue()))
}
}

}


};gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringAngle() <= 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSteeringAngle(Math.max(-(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringAngleMax()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringAngle() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringSpeed() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringStickValue()))
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringAngle() > 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSteeringAngle(Math.max(-(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringAngleMax()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringAngle() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringBackSpeed() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)))
}
}

}


};gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsLeftPressed();
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSteeringStickValue(-1)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsRightPressed();
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSteeringStickValue(1)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringStickValue() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringStickValue() > 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringStickValue() < 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsUpPressed();
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAccelerationStickValue(1)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsDownPressed();
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAccelerationStickValue(-1)
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ApplyPolarForce(eventsFunctionContext.localVariables[0].getFromIndex(2).getAsNumber(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAccelerationStickValue() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAcceleration() * (gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getMass()), eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber(), eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ApplyWheelForces(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(2).getAsNumber(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ApplyWheelForces(eventsFunctionContext.localVariables[0].getFromIndex(3).getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(4).getAsNumber(), (gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[i].getAngle()), eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsDebug();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[i].variableClearChildren(gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("_PhysicsCarExtension").getChild("Forces"));
}
}
}

}


{


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("FrontWheelX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("FrontWheelY", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("FrontWheelAngle", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("RearWheelX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("RearWheelY", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1);
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[0].getCenterXInScene()) + gdjs.evtTools.common.getXFromAngleAndDistance((( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[0].getAngle()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFrontWheelsPosition() * (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[0].getWidth()) / 2));
}
{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber((( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[0].getCenterYInScene()) + gdjs.evtTools.common.getYFromAngleAndDistance((( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[0].getAngle()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFrontWheelsPosition() * (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[0].getWidth()) / 2));
}
{eventsFunctionContext.localVariables[0].getFromIndex(2).setNumber((( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[0].getAngle()) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringAngle());
}
{eventsFunctionContext.localVariables[0].getFromIndex(3).setNumber((( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[0].getCenterXInScene()) - gdjs.evtTools.common.getXFromAngleAndDistance((( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[0].getAngle()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRearWheelsPosition() * (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[0].getWidth()) / 2));
}
{eventsFunctionContext.localVariables[0].getFromIndex(4).setNumber((( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[0].getCenterYInScene()) - gdjs.evtTools.common.getYFromAngleAndDistance((( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[0].getAngle()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRearWheelsPosition() * (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[0].getWidth()) / 2));
}

{ //Subevents
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getLinearVelocityLength() > eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedMax() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).setLinearVelocityAngle((gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getLinearVelocityAngle()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedMax());
}
}
}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsLeftPressed(false)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsRightPressed(false)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsUpPressed(false)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsDownPressed(false)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAccelerationStickValue(0)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSteeringStickValue(0)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsDebug(false)
}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateRightKeyContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateRightKeyContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateRightKeyContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateRightKeyContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateRightKeyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsRightPressed(true)
}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateRightKey = function(parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateRightKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateRightKeyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateRightKeyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateRightKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateRightKeyContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateLeftKeyContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateLeftKeyContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateLeftKeyContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateLeftKeyContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateLeftKeyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsLeftPressed(true)
}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateLeftKey = function(parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateLeftKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateLeftKeyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateLeftKeyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateLeftKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateLeftKeyContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateUpKeyContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateUpKeyContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateUpKeyContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateUpKeyContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateUpKeyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsUpPressed(true)
}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateUpKey = function(parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateUpKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateUpKeyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateUpKeyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateUpKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateUpKeyContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateDownKeyContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateDownKeyContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateDownKeyContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateDownKeyContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateDownKeyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsDownPressed(true)
}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateDownKey = function(parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateDownKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateDownKeyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateDownKeyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateDownKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateDownKeyContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateSteeringStickContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateSteeringStickContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateSteeringStickContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateSteeringStickContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateSteeringStickContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSteeringStickValue(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateSteeringStick = function(Value, parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateSteeringStickContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateSteeringStickContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateSteeringStickContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateSteeringStickContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateSteeringStickContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateAccelerationStickContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateAccelerationStickContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateAccelerationStickContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateAccelerationStickContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateAccelerationStickContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAccelerationStickValue(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateAccelerationStick = function(Value, parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateAccelerationStickContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateAccelerationStickContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateAccelerationStickContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateAccelerationStickContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SimulateAccelerationStickContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("DistanceSquared", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.GDObjectObjects1);
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((eventsFunctionContext.getArgument("WheelX") - (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getMassCenterX())) * (eventsFunctionContext.getArgument("WheelX") - (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getMassCenterX())) + (eventsFunctionContext.getArgument("WheelY") - (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getMassCenterY())) * (eventsFunctionContext.getArgument("WheelY") - (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.GDObjectObjects1[0].getCenterYInScene())));
}
{for(var i = 0, len = gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ApplyPolarForce(eventsFunctionContext.getArgument("WheelAngle") + 90, -(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWheelGripRatio()) * (gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).LinearVelocityAt(eventsFunctionContext.getArgument("WheelX"), eventsFunctionContext.getArgument("WheelY"), eventsFunctionContext)) * Math.sin(gdjs.toRad((gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).LinearVelocityAngleAt(eventsFunctionContext.getArgument("WheelX"), eventsFunctionContext.getArgument("WheelY"), eventsFunctionContext)) - eventsFunctionContext.getArgument("WheelAngle"))) * (gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Inertia(eventsFunctionContext)) / (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)) / 2, eventsFunctionContext.getArgument("WheelX"), eventsFunctionContext.getArgument("WheelY"), eventsFunctionContext);
}
}
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForces = function(WheelX, WheelY, WheelAngle, parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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
if (argName === "WheelX") return WheelX;
if (argName === "WheelY") return WheelY;
if (argName === "WheelAngle") return WheelAngle;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyWheelForcesContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityXAtContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityXAtContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityXAtContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityXAtContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityXAtContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityXAtContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityXAtContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityXAtContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getLinearVelocityX()) - gdjs.toRad((( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityXAtContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityXAtContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getAngularVelocity())) * (eventsFunctionContext.getArgument("PositionY") - (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityXAtContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityXAtContext.GDObjectObjects1[0].getCenterYInScene()));}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityXAt = function(PositionX, PositionY, parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityXAtContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityXAtContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityXAtContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityXAtContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityXAtContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityYAtContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityYAtContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityYAtContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityYAtContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityYAtContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityYAtContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityYAtContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityYAtContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getLinearVelocityY()) + gdjs.toRad((( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityYAtContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityYAtContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getAngularVelocity())) * (eventsFunctionContext.getArgument("PositionX") - (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityYAtContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityYAtContext.GDObjectObjects1[0].getCenterXInScene()));}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityYAt = function(PositionX, PositionY, parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityYAtContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityYAtContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityYAtContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityYAtContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityYAtContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAtContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAtContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAtContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAtContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAtContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAtContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = gdjs.evtTools.common.distanceBetweenPositions(0, 0, (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAtContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAtContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).LinearVelocityXAt(eventsFunctionContext.getArgument("PositionX"), eventsFunctionContext.getArgument("PositionY"), eventsFunctionContext)), (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAtContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAtContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).LinearVelocityYAt(eventsFunctionContext.getArgument("PositionX"), eventsFunctionContext.getArgument("PositionY"), eventsFunctionContext)));}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAt = function(PositionX, PositionY, parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAtContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAtContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAtContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAtContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAtContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAngleAtContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAngleAtContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAngleAtContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAngleAtContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAngleAtContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAngleAtContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = gdjs.evtTools.common.angleBetweenPositions(0, 0, (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAngleAtContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAngleAtContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).LinearVelocityXAt(eventsFunctionContext.getArgument("PositionX"), eventsFunctionContext.getArgument("PositionY"), eventsFunctionContext)), (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAngleAtContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAngleAtContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).LinearVelocityYAt(eventsFunctionContext.getArgument("PositionX"), eventsFunctionContext.getArgument("PositionY"), eventsFunctionContext)));}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAngleAt = function(PositionX, PositionY, parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAngleAtContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAngleAtContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAngleAtContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAngleAtContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.LinearVelocityAngleAtContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.InertiaContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.InertiaContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.InertiaContext.GDObjectObjects1= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.InertiaContext.userFunc0xeb2558 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// TODO Remove this function when the engine uses pixels instead of meters.

const object = objects[0];
const behavior = object.getBehavior(eventsFunctionContext.getBehaviorName("Behavior"));
const physics2 = object.getBehavior(behavior._getPhysics2());

// If there is no body, set a new one
if (physics2._body === null) {
    if (!physics2.createBody()) return 0;
}
// Wake up the object
physics2._body.SetAwake(true);
// scaleX or scaleY doesn't matter as they can't be different or it breaks any physics law.
eventsFunctionContext.returnValue = physics2._body.GetInertia() * physics2._sharedData.scaleX * physics2._sharedData.scaleX;
};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.InertiaContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.InertiaContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.InertiaContext.GDObjectObjects1;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.InertiaContext.userFunc0xeb2558(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.Inertia = function(parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.InertiaContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.InertiaContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.InertiaContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Index", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects1);
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects1[0].getVariables()).get("_PhysicsCarExtension").getChild("Forces"))));
}
{for(var i = 0, len = gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects1[i].getVariables().get("_PhysicsCarExtension").getChild("Forces").getChild(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()).getChild("Angle")).setNumber(eventsFunctionContext.getArgument("Angle"));
}
}
{for(var i = 0, len = gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects1[i].getVariables().get("_PhysicsCarExtension").getChild("Forces").getChild(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()).getChild("Length")).setNumber(eventsFunctionContext.getArgument("Length"));
}
}
{for(var i = 0, len = gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects1[i].getVariables().get("_PhysicsCarExtension").getChild("Forces").getChild(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()).getChild("OriginX")).setNumber(eventsFunctionContext.getArgument("OriginX"));
}
}
{for(var i = 0, len = gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects1[i].getVariables().get("_PhysicsCarExtension").getChild("Forces").getChild(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()).getChild("OriginY")).setNumber(eventsFunctionContext.getArgument("OriginY"));
}
}
}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.userFunc0x1e21bb8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// TODO Remove this function when the engine uses pixels instead of meters.

const object = objects[0];
const behavior = object.getBehavior(eventsFunctionContext.getBehaviorName("Behavior"));
const physics2 = object.getBehavior(behavior._getPhysics2());
const angle = gdjs.toRad(eventsFunctionContext.getArgument("Angle"));
// scaleX or scaleY doesn't matter as they can't be different or it breaks any physics law.
const length = eventsFunctionContext.getArgument("Length") * physics2._sharedData.invScaleX;
const originX = eventsFunctionContext.getArgument("OriginX") * physics2._sharedData.invScaleX;
const originY = eventsFunctionContext.getArgument("OriginY") * physics2._sharedData.invScaleX;

// If there is no body, set a new one
if (physics2._body === null) {
  if (!physics2.createBody()) return;
}

// Wake up the object
physics2._body.SetAwake(true);

// Apply the force
physics2._body.ApplyForce(
  physics2.b2Vec2(length * Math.cos(angle), length * Math.sin(angle)),
  physics2.b2Vec2Sec(originX, originY),
  false
);
};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsDebug();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects1;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.userFunc0x1e21bb8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForce = function(Angle, Length, OriginX, OriginY, parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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
if (argName === "Angle") return Angle;
if (argName === "Length") return Length;
if (argName === "OriginX") return OriginX;
if (argName === "OriginY") return OriginY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.ApplyPolarForceContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects2= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects4= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDShapePainterObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDShapePainterObjects2= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDShapePainterObjects3= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDShapePainterObjects4= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("LineX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("LineY", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("LineAngle", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("LineLength", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("DeltaAngle", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("DeltaLength", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects1, gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3);

gdjs.copyArray(eventsFunctionContext.getObjects("ShapePainter"), gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDShapePainterObjects3);
{eventsFunctionContext.localVariables[1].getFromIndex(4).setNumber(gdjs.evtTools.common.angleBetweenPositions((( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3[0].getCenterXInScene()), (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3[0].getCenterYInScene()), (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3[0].getVariables()).get("_PhysicsCarExtension").getChild("Forces").getChild(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()).getChild("OriginX"))), (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3[0].getVariables()).get("_PhysicsCarExtension").getChild("Forces").getChild(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()).getChild("OriginY")))) - (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3[0].getAngle()));
}
{eventsFunctionContext.localVariables[1].getFromIndex(5).setNumber(gdjs.evtTools.common.distanceBetweenPositions((( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3[0].getCenterXInScene()), (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3[0].getCenterYInScene()), (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3[0].getVariables()).get("_PhysicsCarExtension").getChild("Forces").getChild(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()).getChild("OriginX"))), (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3[0].getVariables()).get("_PhysicsCarExtension").getChild("Forces").getChild(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()).getChild("OriginY")))));
}
{eventsFunctionContext.localVariables[1].getFromIndex(0).setNumber(gdjs.evtTools.common.getXFromAngleAndDistance(eventsFunctionContext.localVariables[1].getFromIndex(4).getAsNumber(), eventsFunctionContext.localVariables[1].getFromIndex(5).getAsNumber()));
}
{eventsFunctionContext.localVariables[1].getFromIndex(1).setNumber(gdjs.evtTools.common.getYFromAngleAndDistance(eventsFunctionContext.localVariables[1].getFromIndex(4).getAsNumber(), eventsFunctionContext.localVariables[1].getFromIndex(5).getAsNumber()));
}
{eventsFunctionContext.localVariables[1].getFromIndex(2).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3[0].getVariables()).get("_PhysicsCarExtension").getChild("Forces").getChild(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()).getChild("Angle"))) - (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3[0].getAngle()));
}
{eventsFunctionContext.localVariables[1].getFromIndex(3).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3[0].getVariables()).get("_PhysicsCarExtension").getChild("Forces").getChild(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()).getChild("Length"))));
}
{for(var i = 0, len = gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDShapePainterObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDShapePainterObjects3[i].drawLineV2(eventsFunctionContext.localVariables[1].getFromIndex(0).getAsNumber(), eventsFunctionContext.localVariables[1].getFromIndex(1).getAsNumber(), eventsFunctionContext.localVariables[1].getFromIndex(0).getAsNumber() + gdjs.evtTools.common.getXFromAngleAndDistance(eventsFunctionContext.localVariables[1].getFromIndex(2).getAsNumber(), eventsFunctionContext.localVariables[1].getFromIndex(3).getAsNumber()), eventsFunctionContext.localVariables[1].getFromIndex(1).getAsNumber() + gdjs.evtTools.common.getYFromAngleAndDistance(eventsFunctionContext.localVariables[1].getFromIndex(2).getAsNumber(), eventsFunctionContext.localVariables[1].getFromIndex(3).getAsNumber()), 2);
}
}
}
eventsFunctionContext.localVariables.pop();

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(0).add(1);
}
}

}


};gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects1);

const repeatCount2 = (gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects1[0].getVariables()).get("_PhysicsCarExtension").getChild("Forces")));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("ShapePainter"), gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDShapePainterObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsDebug(true)
}
{for(var i = 0, len = gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDShapePainterObjects1[i].drawRectangle(-((( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects1[0].getWidth())) / 2, -((( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects1[0].getHeight())) / 2, (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects1[0].getWidth()) / 2, (( gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects1[0].getHeight()) / 2);
}
}
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Index", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebug = function(ShapePainter, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ShapePainter": ShapePainter
},
  _objectArraysMap: {
"Object": thisObjectList
, "ShapePainter": gdjs.objectsListsToArray(ShapePainter)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDShapePainterObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDShapePainterObjects2.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDShapePainterObjects3.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDShapePainterObjects4.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDShapePainterObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDShapePainterObjects2.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDShapePainterObjects3.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.DrawDebugContext.GDShapePainterObjects4.length = 0;


return;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngleContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngleContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringAngle();}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngle = function(parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngleContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngleContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngleContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSteeringAngle(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngle = function(Value, parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngleContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.AccelerationContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.AccelerationContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.AccelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.AccelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.AccelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAcceleration();}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.Acceleration = function(parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.AccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.AccelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.AccelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.AccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.AccelerationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetAccelerationContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetAccelerationContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetAccelerationContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetAccelerationContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetAccelerationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAcceleration(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetAcceleration = function(Value, parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetAccelerationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetAccelerationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetAccelerationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetAccelerationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SpeedMaxContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SpeedMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SpeedMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SpeedMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SpeedMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedMax();}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SpeedMax = function(parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SpeedMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SpeedMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SpeedMaxContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSpeedMaxContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSpeedMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSpeedMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSpeedMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSpeedMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeedMax(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSpeedMax = function(Value, parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSpeedMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSpeedMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSpeedMaxContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.WheelGripRatioContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.WheelGripRatioContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.WheelGripRatioContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.WheelGripRatioContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.WheelGripRatioContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWheelGripRatio();}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.WheelGripRatio = function(parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.WheelGripRatioContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.WheelGripRatioContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.WheelGripRatioContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.WheelGripRatioContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.WheelGripRatioContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetWheelGripRatioContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetWheelGripRatioContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetWheelGripRatioContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetWheelGripRatioContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetWheelGripRatioContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWheelGripRatio(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetWheelGripRatio = function(Value, parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetWheelGripRatioContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetWheelGripRatioContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetWheelGripRatioContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetWheelGripRatioContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetWheelGripRatioContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngleMaxContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngleMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngleMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngleMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngleMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringAngleMax();}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngleMax = function(parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngleMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngleMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngleMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngleMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringAngleMaxContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngleMaxContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngleMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngleMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngleMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngleMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSteeringAngleMax(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngleMax = function(Value, parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngleMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngleMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngleMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngleMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringAngleMaxContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringSpeedContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringSpeed();}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringSpeed = function(parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringSpeedContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSteeringSpeed(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringSpeed = function(Value, parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringSpeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringBackSpeedContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringBackSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringBackSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringBackSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringBackSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSteeringBackSpeed();}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringBackSpeed = function(parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringBackSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringBackSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringBackSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringBackSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SteeringBackSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringBackSpeedContext = {};
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringBackSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringBackSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringBackSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringBackSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSteeringBackSpeed(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringBackSpeed = function(Value, parentEventsFunctionContext) {

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
, "Physics2": this._getPhysics2()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCar"),
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

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringBackSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringBackSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringBackSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringBackSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar.prototype.SetSteeringBackSpeedContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("PhysicsCar::PhysicsCar", gdjs.evtsExt__PhysicsCar__PhysicsCar.PhysicsCar);
