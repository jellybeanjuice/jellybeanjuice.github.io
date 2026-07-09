
if (typeof gdjs.evtsExt__THNK_Relay__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__THNK_Relay__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__THNK_Relay__onFirstSceneLoaded = {};
gdjs.evtsExt__THNK_Relay__onFirstSceneLoaded.idToCallbackMap = new Map();


gdjs.evtsExt__THNK_Relay__onFirstSceneLoaded.userFunc0x98b300 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Load THNK Cloud Relay Adapter (https://github.com/arthuro555/THNK)
"use strict";
(() => {
  // code/relay/src/messages.ts
  var staticBinarySlotsMessage = new Uint8Array(2);
  var staticArbitrarySizeMessage = new Uint8Array(1024 ** 2);

  // code/adapters/relay.ts
  THNK.RELAY_SERVER_URL = "wss://relay.thnk.cloud";
  THNK.RelayClientAdapter = class RelayClientAdapter extends THNK.ClientAdapter {
    connection;
    roomID;
    constructor(gameID, roomID) {
      super();
      this.roomID = roomID;
      this.connection = new WebSocket(
        `${THNK.RELAY_SERVER_URL}/${gameID}/${roomID}/join`
      );
    }
    async prepare() {
      this.connection.onclose = () => this.onDisconnection();
      this.connection.onmessage = async ({ data }) => this.onMessage(await data.arrayBuffer());
      await new Promise((resolve) => {
        this.connection.onopen = () => resolve();
      });
    }
    close() {
      this.connection.close();
    }
    doSendMessage(message) {
      this.connection.send(
        message.buffer.slice(message.buffer.byteLength - message.byteLength)
      );
    }
  };
  THNK.RelayServerAdapter = class GeckosServerAdapter extends THNK.ServerAdapter {
    connection;
    roomID;
    constructor(gameID, roomID) {
      super();
      this.roomID = roomID;
      this.connection = new WebSocket(
        `${THNK.RELAY_SERVER_URL}/${gameID}/${roomID}/claim`
      );
      this.connection.onmessage = async ({ data }) => {
        if (!(data instanceof Blob))
          return console.error(data, " is not a Blob!");
        const message = new Uint8Array(await data.arrayBuffer());
        if (message.length < 2)
          return console.error("Message too small! ", message);
        const messageType = message[message.length - 1];
        switch (messageType) {
          case 0 /* ClientMessage */:
            if (message.length < 3)
              return console.error("Message too small! ", message);
            this.onMessage(
              message[message.length - 2].toString(),
              message.subarray(0, message.length - 2)
            );
            break;
          case 1 /* Connection */:
            this.onConnection(message[0].toString());
            break;
          case 2 /* Disconnection */:
            this.onDisconnection(message[0].toString());
            break;
          default:
            console.error("Unrecognized message type: ", messageType);
        }
      };
    }
    async prepare() {
      await new Promise((resolve) => {
        this.connection.onopen = () => {
          this.connection.onopen = null;
          resolve();
        };
      });
    }
    close() {
      this.connection.close();
    }
    doSendMessageTo(userID, message) {
      const extendedMessage = new Uint8Array(message.byteLength + 1);
      extendedMessage.set(
        message,
        message.buffer.byteLength - message.byteLength
      );
      extendedMessage[message.byteLength] = parseInt(userID, 10);
      this.connection.send(extendedMessage);
    }
    getServerID() {
      return "-1";
    }
  };
})();

};
gdjs.evtsExt__THNK_Relay__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__THNK_Relay__onFirstSceneLoaded.userFunc0x98b300(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__THNK_Relay__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("THNK_Relay"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("THNK_Relay"),
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


gdjs.evtsExt__THNK_Relay__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__THNK_Relay__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__THNK_Relay__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__THNK_Relay__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__THNK_Relay__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__THNK_Relay__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
