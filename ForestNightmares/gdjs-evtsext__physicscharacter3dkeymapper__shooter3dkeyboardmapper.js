
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper || {};

/**
 * Behavior generated from 3D shooter keyboard mapper
 */
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper = class Shooter3DKeyboardMapper extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PhysicsCharacter3D = behaviorData.PhysicsCharacter3D !== undefined ? behaviorData.PhysicsCharacter3D : "";
    this._behaviorData.Jump = behaviorData.Jump !== undefined ? behaviorData.Jump : "Space";
    this._behaviorData.Up = behaviorData.Up !== undefined ? behaviorData.Up : "w";
    this._behaviorData.Left = behaviorData.Left !== undefined ? behaviorData.Left : "a";
    this._behaviorData.Down = behaviorData.Down !== undefined ? behaviorData.Down : "s";
    this._behaviorData.Right = behaviorData.Right !== undefined ? behaviorData.Right : "d";
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.PhysicsCharacter3D !== undefined)
      this._behaviorData.PhysicsCharacter3D = behaviorOverriding.PhysicsCharacter3D;
    if (behaviorOverriding.Jump !== undefined)
      this._behaviorData.Jump = behaviorOverriding.Jump;
    if (behaviorOverriding.Up !== undefined)
      this._behaviorData.Up = behaviorOverriding.Up;
    if (behaviorOverriding.Left !== undefined)
      this._behaviorData.Left = behaviorOverriding.Left;
    if (behaviorOverriding.Down !== undefined)
      this._behaviorData.Down = behaviorOverriding.Down;
    if (behaviorOverriding.Right !== undefined)
      this._behaviorData.Right = behaviorOverriding.Right;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    PhysicsCharacter3D: this._behaviorData.PhysicsCharacter3D,
    Jump: this._behaviorData.Jump,
    Up: this._behaviorData.Up,
    Left: this._behaviorData.Left,
    Down: this._behaviorData.Down,
    Right: this._behaviorData.Right,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.PhysicsCharacter3D !== undefined)
      this._behaviorData.PhysicsCharacter3D = networkSyncData.props.PhysicsCharacter3D;
    if (networkSyncData.props.Jump !== undefined)
      this._behaviorData.Jump = networkSyncData.props.Jump;
    if (networkSyncData.props.Up !== undefined)
      this._behaviorData.Up = networkSyncData.props.Up;
    if (networkSyncData.props.Left !== undefined)
      this._behaviorData.Left = networkSyncData.props.Left;
    if (networkSyncData.props.Down !== undefined)
      this._behaviorData.Down = networkSyncData.props.Down;
    if (networkSyncData.props.Right !== undefined)
      this._behaviorData.Right = networkSyncData.props.Right;
  }

  // Properties:
  
  _getPhysicsCharacter3D() {
    return this._behaviorData.PhysicsCharacter3D !== undefined ? this._behaviorData.PhysicsCharacter3D : "";
  }
  _setPhysicsCharacter3D(newValue) {
    this._behaviorData.PhysicsCharacter3D = newValue;
  }
  _getJump() {
    return this._behaviorData.Jump !== undefined ? this._behaviorData.Jump : "Space";
  }
  _setJump(newValue) {
    this._behaviorData.Jump = newValue;
  }
  _getUp() {
    return this._behaviorData.Up !== undefined ? this._behaviorData.Up : "w";
  }
  _setUp(newValue) {
    this._behaviorData.Up = newValue;
  }
  _getLeft() {
    return this._behaviorData.Left !== undefined ? this._behaviorData.Left : "a";
  }
  _setLeft(newValue) {
    this._behaviorData.Left = newValue;
  }
  _getDown() {
    return this._behaviorData.Down !== undefined ? this._behaviorData.Down : "s";
  }
  _setDown(newValue) {
    this._behaviorData.Down = newValue;
  }
  _getRight() {
    return this._behaviorData.Right !== undefined ? this._behaviorData.Right : "d";
  }
  _setRight(newValue) {
    this._behaviorData.Right = newValue;
  }
}

/**
 * Shared data generated from 3D shooter keyboard mapper
 */
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.SharedData = class Shooter3DKeyboardMapperSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PhysicsCharacter3DKeyMapper_Shooter3DKeyboardMapperSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PhysicsCharacter3DKeyMapper_Shooter3DKeyboardMapperSharedData = new gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.SharedData(
      initialData
    );
  }
  return instanceContainer._PhysicsCharacter3DKeyMapper_Shooter3DKeyboardMapperSharedData;
}

// Methods:
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUp());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).simulateForwardKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDown());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).simulateBackwardKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLeft());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).simulateLeftKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRight());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).simulateRightKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJump());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).simulateJumpKey();
}
}
}

}


};

gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "PhysicsCharacter3D": this._getPhysicsCharacter3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCharacter3DKeyMapper"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCharacter3DKeyMapper"),
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

gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("PhysicsCharacter3DKeyMapper::Shooter3DKeyboardMapper", gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Shooter3DKeyboardMapper.Shooter3DKeyboardMapper);
