
gdjs.evtsExt__Material3D__Material3D = gdjs.evtsExt__Material3D__Material3D || {};

/**
 * Behavior generated from 3D Material
 */
gdjs.evtsExt__Material3D__Material3D.Material3D = class Material3D extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Material3D__Material3D.Material3D.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
  }

  // Properties:
  
}

/**
 * Shared data generated from 3D Material
 */
gdjs.evtsExt__Material3D__Material3D.Material3D.SharedData = class Material3DSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Material3D__Material3D.Material3D.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Material3D_Material3DSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Material3D_Material3DSharedData = new gdjs.evtsExt__Material3D__Material3D.Material3D.SharedData(
      initialData
    );
  }
  return instanceContainer._Material3D_Material3DSharedData;
}

// Methods:
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.opacityContext = {};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.opacityContext.idToCallbackMap = new Map();
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.opacityContext.GDObjectObjects1= [];


gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.opacityContext.userFunc0x1ab2900 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
let paramValue = eventsFunctionContext.getArgument("opacityValue");

for (let i in objects) {
    let threeObject = objects[i].get3DRendererObject();

    if (threeObject.isMesh && threeObject.material) {
        let newMaterial = threeObject.material.clone();
        newMaterial.transparent = true;
        newMaterial.opacity = paramValue;
        threeObject.material = newMaterial;
    }

    if (threeObject.materials) {
        for (let j in threeObject.materials) {
            let newMaterial = threeObject.materials[j].clone();
            newMaterial.transparent = true;
            newMaterial.opacity = paramValue;
            threeObject.materials[j] = newMaterial;
        }
    }

    threeObject.traverse((node) => {
        if (node.isMesh && node.material) {
            let newMaterial = node.material.clone();
            newMaterial.transparent = true;
            newMaterial.opacity = paramValue;
            node.material = newMaterial;
        }
    });

}
};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.opacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.opacityContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.opacityContext.GDObjectObjects1;
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.opacityContext.userFunc0x1ab2900(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.opacity = function(opacityValue, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Material3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Material3D"),
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
if (argName === "opacityValue") return opacityValue;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.opacityContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.opacityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.opacityContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.roughnessContext = {};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.roughnessContext.idToCallbackMap = new Map();
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.roughnessContext.GDObjectObjects1= [];


gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.roughnessContext.userFunc0x1ab2900 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
let paramValue = eventsFunctionContext.getArgument("roughnessValue");

for (let i in objects) {
    let threeObject = objects[i].get3DRendererObject();

    if (threeObject.isMesh && threeObject.material) {
        let newMaterial = threeObject.material.clone();
        newMaterial.roughness = paramValue;
        threeObject.material = newMaterial;
    }

    if (threeObject.materials) {
        for (let j in threeObject.materials) {
            let newMaterial = threeObject.materials[j].clone();
            newMaterial.roughness = paramValue;
            threeObject.materials[j] = newMaterial;
        }
    }

    threeObject.traverse((node) => {
        if (node.isMesh && node.material) {
            let newMaterial = node.material.clone();
            newMaterial.roughness = paramValue;
            node.material = newMaterial;
        }
    });

}
};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.roughnessContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.roughnessContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.roughnessContext.GDObjectObjects1;
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.roughnessContext.userFunc0x1ab2900(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.roughness = function(roughnessValue, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Material3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Material3D"),
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
if (argName === "roughnessValue") return roughnessValue;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.roughnessContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.roughnessContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.roughnessContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.metalnessContext = {};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.metalnessContext.idToCallbackMap = new Map();
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.metalnessContext.GDObjectObjects1= [];


gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.metalnessContext.userFunc0x1ab2900 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
let paramValue = eventsFunctionContext.getArgument("metalnessValue");

for (let i in objects) {
    let threeObject = objects[i].get3DRendererObject();

    if (threeObject.isMesh && threeObject.material) {
        let newMaterial = threeObject.material.clone();
        newMaterial.metalness = paramValue;
        threeObject.material = newMaterial;
    }

    if (threeObject.materials) {
        for (let j in threeObject.materials) {
            let newMaterial = threeObject.materials[j].clone();
            newMaterial.metalness = paramValue;
            threeObject.materials[j] = newMaterial;
        }
    }

    threeObject.traverse((node) => {
        if (node.isMesh && node.material) {
            let newMaterial = node.material.clone();
            newMaterial.metalness = paramValue;
            node.material = newMaterial;
        }
    });

}
};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.metalnessContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.metalnessContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.metalnessContext.GDObjectObjects1;
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.metalnessContext.userFunc0x1ab2900(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.metalness = function(metalnessValue, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Material3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Material3D"),
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
if (argName === "metalnessValue") return metalnessValue;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.metalnessContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.metalnessContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.metalnessContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.emissiveContext = {};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.emissiveContext.idToCallbackMap = new Map();
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.emissiveContext.GDObjectObjects1= [];


gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.emissiveContext.userFunc0x1ab2900 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
let rgbString = eventsFunctionContext.getArgument("colorValue");
let [r, g, b] = rgbString.split(';').map(Number);
let hexColor = (r << 16) | (g << 8) | b;

for (let i in objects) {
    let threeObject = objects[i].get3DRendererObject();

    if (threeObject.isMesh && threeObject.material) {
        let newMaterial = threeObject.material.clone();
        newMaterial.emissive.set(hexColor);
        threeObject.material = newMaterial;
    }

    if (threeObject.materials) {
        for (let j in threeObject.materials) {
            let newMaterial = threeObject.materials[j].clone();
            newMaterial.emissive.set(hexColor);
            threeObject.materials[j] = newMaterial;
        }
    }

    threeObject.traverse((node) => {
        if (node.isMesh && node.material) {
            let newMaterial = node.material.clone();
            newMaterial.emissive.set(hexColor);
            node.material = newMaterial;
        }
    });

}
};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.emissiveContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.emissiveContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.emissiveContext.GDObjectObjects1;
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.emissiveContext.userFunc0x1ab2900(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.emissive = function(colorValue, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Material3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Material3D"),
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
if (argName === "colorValue") return colorValue;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.emissiveContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.emissiveContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.emissiveContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.colorContext = {};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.colorContext.idToCallbackMap = new Map();
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.colorContext.GDObjectObjects1= [];


gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.colorContext.userFunc0x1ab2900 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
let rgbString = eventsFunctionContext.getArgument("colorValue");
let [r, g, b] = rgbString.split(';').map(Number);
let hexColor = (r << 16) | (g << 8) | b;

for (let i in objects) {
    let threeObject = objects[i].get3DRendererObject();

    if (threeObject.isMesh && threeObject.material) {
        let newMaterial = threeObject.material.clone();
        newMaterial.color.set(hexColor);
        threeObject.material = newMaterial;
    }

    if (threeObject.materials) {
        for (let j in threeObject.materials) {
            let newMaterial = threeObject.materials[j].clone();
            newMaterial.color.set(hexColor);
            threeObject.materials[j] = newMaterial;
        }
    }

    threeObject.traverse((node) => {
        if (node.isMesh && node.material) {
            let newMaterial = node.material.clone();
            newMaterial.color.set(hexColor);
            node.material = newMaterial;
        }
    });

}
};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.colorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.colorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.colorContext.GDObjectObjects1;
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.colorContext.userFunc0x1ab2900(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.color = function(colorValue, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Material3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Material3D"),
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
if (argName === "colorValue") return colorValue;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.colorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.colorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.colorContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.repeatContext = {};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.repeatContext.idToCallbackMap = new Map();
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.repeatContext.GDObjectObjects1= [];


gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.repeatContext.userFunc0x1ab2900 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
let valueX = eventsFunctionContext.getArgument("x");
let valueY = eventsFunctionContext.getArgument("y");

for (let i in objects) {
    let threeObject = objects[i].get3DRendererObject();

    if (threeObject.isMesh && threeObject.material && threeObject.material.map) {
        let newMaterial = threeObject.material.clone();
        newMaterial.map.repeat.set(valueX, valueY);
        newMaterial.map.needsUpdate = true;
        newMaterial.needsUpdate = true;
        threeObject.material = newMaterial;
    }

    if (threeObject.materials) {
        for (let j in threeObject.materials) {
            if (threeObject.materials[j].map) {
                let newMaterial = threeObject.materials[j].clone();
                newMaterial.map.repeat.set(valueX, valueY);
                newMaterial.map.needsUpdate = true;
                newMaterial.needsUpdate = true;
                threeObject.materials[j] = newMaterial;
            }
        }
    }

    threeObject.traverse((node) => {
        if (node.isMesh && node.material && node.material.map) {
            let newMaterial = node.material.clone();
            newMaterial.map.repeat.set(valueX, valueY);
            newMaterial.map.needsUpdate = true;
            newMaterial.needsUpdate = true;
            node.material = newMaterial;
        }
    });

}
};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.repeatContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.repeatContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.repeatContext.GDObjectObjects1;
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.repeatContext.userFunc0x1ab2900(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.repeat = function(x, y, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Material3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Material3D"),
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
if (argName === "x") return x;
if (argName === "y") return y;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.repeatContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.repeatContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.repeatContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.offsetContext = {};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.offsetContext.idToCallbackMap = new Map();
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.offsetContext.GDObjectObjects1= [];


gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.offsetContext.userFunc0x1ab2900 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
let valueX = eventsFunctionContext.getArgument("x");
let valueY = eventsFunctionContext.getArgument("y");

for (let i in objects) {
    let threeObject = objects[i].get3DRendererObject();

    if (threeObject.isMesh && threeObject.material && threeObject.material.map) {
        let newMaterial = threeObject.material.clone();
        newMaterial.map.offset.set(valueX, valueY);
        newMaterial.map.needsUpdate = true;
        newMaterial.needsUpdate = true;
        threeObject.material = newMaterial;
    }

    if (threeObject.materials) {
        for (let j in threeObject.materials) {
            if (threeObject.materials[j].map) {
                let newMaterial = threeObject.materials[j].clone();
                newMaterial.map.offset.set(valueX, valueY);
                newMaterial.map.needsUpdate = true;
                newMaterial.needsUpdate = true;
                threeObject.materials[j] = newMaterial;
            }
        }
    }

    threeObject.traverse((node) => {
        if (node.isMesh && node.material && node.material.map) {
            let newMaterial = node.material.clone();
            newMaterial.map.offset.set(valueX, valueY);
            newMaterial.map.needsUpdate = true;
            newMaterial.needsUpdate = true;
            node.material = newMaterial;
        }
    });

}
};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.offsetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.offsetContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.offsetContext.GDObjectObjects1;
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.offsetContext.userFunc0x1ab2900(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.offset = function(x, y, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Material3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Material3D"),
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
if (argName === "x") return x;
if (argName === "y") return y;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.offsetContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.offsetContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.offsetContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapSContext = {};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapSContext.idToCallbackMap = new Map();
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapSContext.GDObjectObjects1= [];


gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapSContext.userFunc0x1ab2900 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
let wrap = eventsFunctionContext.getArgument("wrap");

let wrapValue = THREE.RepeatWrapping;
if (wrap === "MirroredRepeatWrapping") {
    wrapValue = THREE.MirroredRepeatWrapping;
} else if (wrap === "ClampToEdgeWrapping") {
    wrapValue = THREE.ClampToEdgeWrapping;
}

for (let i in objects) {
    let threeObject = objects[i].get3DRendererObject();

    if (threeObject.isMesh && threeObject.material && threeObject.material.map) {
        let newMaterial = threeObject.material.clone();
        newMaterial.map.wrapS = wrapValue;
        newMaterial.map.needsUpdate = true;
        newMaterial.needsUpdate = true;
        threeObject.material = newMaterial;
    }

    if (threeObject.materials) {
        for (let j in threeObject.materials) {
            if (threeObject.materials[j].map) {
                let newMaterial = threeObject.materials[j].clone();
                newMaterial.map.wrapS = wrapValue;
                newMaterial.map.needsUpdate = true;
                newMaterial.needsUpdate = true;
                threeObject.materials[j] = newMaterial;
            }
        }
    }

    threeObject.traverse((node) => {
        if (node.isMesh && node.material && node.material.map) {
            let newMaterial = node.material.clone();
            newMaterial.map.wrapS = wrapValue;
            newMaterial.map.needsUpdate = true;
            newMaterial.needsUpdate = true;
            node.material = newMaterial;
        }
    });

}
};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapSContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapSContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapSContext.GDObjectObjects1;
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapSContext.userFunc0x1ab2900(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapS = function(wrap, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Material3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Material3D"),
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
if (argName === "wrap") return wrap;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapSContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapSContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapSContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapTContext = {};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapTContext.idToCallbackMap = new Map();
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapTContext.GDObjectObjects1= [];


gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapTContext.userFunc0x1ab2900 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
let wrap = eventsFunctionContext.getArgument("wrap");

let wrapValue = THREE.RepeatWrapping;
if (wrap === "MirroredRepeatWrapping") {
    wrapValue = THREE.MirroredRepeatWrapping;
} else if (wrap === "ClampToEdgeWrapping") {
    wrapValue = THREE.ClampToEdgeWrapping;
}

for (let i in objects) {
    let threeObject = objects[i].get3DRendererObject();

    if (threeObject.isMesh && threeObject.material && threeObject.material.map) {
        let newMaterial = threeObject.material.clone();
        newMaterial.map.wrapT = wrapValue;
        newMaterial.map.needsUpdate = true;
        newMaterial.needsUpdate = true;
        threeObject.material = newMaterial;
    }

    if (threeObject.materials) {
        for (let j in threeObject.materials) {
            if (threeObject.materials[j].map) {
                let newMaterial = threeObject.materials[j].clone();
                newMaterial.map.wrapT = wrapValue;
                newMaterial.map.needsUpdate = true;
                newMaterial.needsUpdate = true;
                threeObject.materials[j] = newMaterial;
            }
        }
    }

    threeObject.traverse((node) => {
        if (node.isMesh && node.material && node.material.map) {
            let newMaterial = node.material.clone();
            newMaterial.map.wrapT = wrapValue;
            newMaterial.map.needsUpdate = true;
            newMaterial.needsUpdate = true;
            node.material = newMaterial;
        }
    });

}
};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapTContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapTContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapTContext.GDObjectObjects1;
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapTContext.userFunc0x1ab2900(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapT = function(wrap, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Material3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Material3D"),
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
if (argName === "wrap") return wrap;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapTContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapTContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.wrapTContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureResourceContext = {};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureResourceContext.idToCallbackMap = new Map();
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureResourceContext.GDObjectObjects1= [];


gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureResourceContext.userFunc0x1ab2900 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
let texturePath = eventsFunctionContext.getArgument("texture");

const loader = new THREE.TextureLoader();

for (let i in objects) {
    let threeObject = objects[i].get3DRendererObject();

    if (threeObject.isMesh && threeObject.material) {
        loader.load(texturePath, (texture) => {
            let newMaterial = threeObject.material.clone();
            newMaterial.map = texture;
            newMaterial.needsUpdate = true;
            threeObject.material = newMaterial;
        }, undefined, (error) => {
            console.log("Error loading texture: "+texturePath);
        });
    }

    if (threeObject.materials) {
        for (let j in threeObject.materials) {
            loader.load(texturePath, (texture) => {
                let newMaterial = threeObject.materials[j].clone();
                newMaterial.map = texture;
                newMaterial.needsUpdate = true;
                threeObject.materials[j] = newMaterial;
            }, undefined, (error) => {
                console.log("Error loading texture: "+texturePath);
            });
        }
    }

    threeObject.traverse((node) => {
        if (node.isMesh && node.material) {
            loader.load(texturePath, (texture) => {
                let newMaterial = node.material.clone();
                newMaterial.map = texture;
                newMaterial.needsUpdate = true;
                node.material = newMaterial;
            }, undefined, (error) => {
                console.log("Error loading texture: "+texturePath);
            });
        }
    });

}
};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureResourceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureResourceContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureResourceContext.GDObjectObjects1;
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureResourceContext.userFunc0x1ab2900(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureResource = function(texture, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Material3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Material3D"),
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
if (argName === "texture") return texture;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureResourceContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureResourceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureResourceContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureURLContext = {};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureURLContext.idToCallbackMap = new Map();
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureURLContext.GDObjectObjects1= [];


gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureURLContext.userFunc0x1ab2900 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
let texturePath = eventsFunctionContext.getArgument("texture");

const loader = new THREE.TextureLoader();

for (let i in objects) {
    let threeObject = objects[i].get3DRendererObject();

    if (threeObject.isMesh && threeObject.material) {
        loader.load(texturePath, (texture) => {
            let newMaterial = threeObject.material.clone();
            newMaterial.map = texture;
            newMaterial.needsUpdate = true;
            threeObject.material = newMaterial;
        }, undefined, (error) => {
            console.log("Error loading texture: "+texturePath);
        });
    }

    if (threeObject.materials) {
        for (let j in threeObject.materials) {
            loader.load(texturePath, (texture) => {
                let newMaterial = threeObject.materials[j].clone();
                newMaterial.map = texture;
                newMaterial.needsUpdate = true;
                threeObject.materials[j] = newMaterial;
            }, undefined, (error) => {
                console.log("Error loading texture: "+texturePath);
            });
        }
    }

    threeObject.traverse((node) => {
        if (node.isMesh && node.material) {
            loader.load(texturePath, (texture) => {
                let newMaterial = node.material.clone();
                newMaterial.map = texture;
                newMaterial.needsUpdate = true;
                node.material = newMaterial;
            }, undefined, (error) => {
                console.log("Error loading texture: "+texturePath);
            });
        }   
    });

}
};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureURLContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureURLContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureURLContext.GDObjectObjects1;
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureURLContext.userFunc0x1ab2900(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureURL = function(texture, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Material3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Material3D"),
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
if (argName === "texture") return texture;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureURLContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureURLContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.textureURLContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureResourceContext = {};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureResourceContext.idToCallbackMap = new Map();
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureResourceContext.GDObjectObjects1= [];


gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureResourceContext.userFunc0x1ab2900 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const texturePath = eventsFunctionContext.getArgument("texture");
const shouldLoop = eventsFunctionContext.getArgument("loop");

const video = document.createElement('video');
video.style.display = 'none';
document.body.appendChild(video);
video.muted = true;
video.playsInline = true;
video.autoplay = true;
video.loop = shouldLoop;
video.src = texturePath;

video.addEventListener('error', (e) => {
    console.error('[Material3D] Video error:', video.error ? video.error.message : e);
});

const objRefs = [];
for (let i in objects) {
    objRefs.push(objects[i]);
}

const startVideo = () => {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 256;
    canvas.height = video.videoHeight || 256;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const loader = new THREE.TextureLoader();
    loader.load(canvas.toDataURL(), (texture) => {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;

        for (const obj of objRefs) {
            const threeObject = obj.get3DRendererObject();
            threeObject.traverse((node) => {
                if (node.isMesh && node.material) {
                    const newMaterial = node.material.clone();
                    newMaterial.map = texture;
                    newMaterial.needsUpdate = true;
                    node.material = newMaterial;
                }
            });
        }

        texture.image = canvas;
        video.play().catch(() => {});

        const updateLoop = () => {
            if (video.readyState >= video.HAVE_CURRENT_DATA) {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                texture.needsUpdate = true;
            }
            requestAnimationFrame(updateLoop);
        };
        updateLoop();
    });
};

if (video.readyState >= 3) {
    startVideo();
} else {
    video.addEventListener('canplay', startVideo, { once: true });
}
};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureResourceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureResourceContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureResourceContext.GDObjectObjects1;
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureResourceContext.userFunc0x1ab2900(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureResource = function(texture, loop, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Material3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Material3D"),
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
if (argName === "texture") return texture;
if (argName === "loop") return loop;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureResourceContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureResourceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureResourceContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureURLContext = {};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureURLContext.idToCallbackMap = new Map();
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureURLContext.GDObjectObjects1= [];


gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureURLContext.userFunc0x1ab2900 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const texturePath = eventsFunctionContext.getArgument("texture");
const shouldLoop = eventsFunctionContext.getArgument("loop");

const video = document.createElement('video');
video.style.display = 'none';
document.body.appendChild(video);
video.crossOrigin = 'anonymous';
video.muted = true;
video.playsInline = true;
video.autoplay = true;
video.loop = shouldLoop;
video.src = texturePath;

video.addEventListener('error', (e) => {
    console.error('[Material3D] Video error:', video.error ? video.error.message : e);
});

const objRefs = [];
for (let i in objects) {
    objRefs.push(objects[i]);
}

const startVideo = () => {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 256;
    canvas.height = video.videoHeight || 256;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const loader = new THREE.TextureLoader();
    loader.load(canvas.toDataURL(), (texture) => {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;

        for (const obj of objRefs) {
            const threeObject = obj.get3DRendererObject();
            threeObject.traverse((node) => {
                if (node.isMesh && node.material) {
                    const newMaterial = node.material.clone();
                    newMaterial.map = texture;
                    newMaterial.needsUpdate = true;
                    node.material = newMaterial;
                }
            });
        }

        texture.image = canvas;
        video.play().catch(() => {});

        const updateLoop = () => {
            if (video.readyState >= video.HAVE_CURRENT_DATA) {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                texture.needsUpdate = true;
            }
            requestAnimationFrame(updateLoop);
        };
        updateLoop();
    });
};

if (video.readyState >= 3) {
    startVideo();
} else {
    video.addEventListener('canplay', startVideo, { once: true });
}
};
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureURLContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureURLContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureURLContext.GDObjectObjects1;
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureURLContext.userFunc0x1ab2900(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureURL = function(texture, loop, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Material3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Material3D"),
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
if (argName === "texture") return texture;
if (argName === "loop") return loop;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureURLContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureURLContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.videoTextureURLContext.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__Material3D__Material3D.Material3D.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Material3D::Material3D", gdjs.evtsExt__Material3D__Material3D.Material3D);
