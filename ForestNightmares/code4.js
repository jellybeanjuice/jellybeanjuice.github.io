gdjs.ForestCode = {};
gdjs.ForestCode.localVariables = [];
gdjs.ForestCode.idToCallbackMap = new Map();
gdjs.ForestCode.GDMonsterObjects2_1final = [];

gdjs.ForestCode.GDObstacleObjects2_1final = [];

gdjs.ForestCode.GDPlayerObjects2_1final = [];

gdjs.ForestCode.GDPushableBoxObjects2_1final = [];

gdjs.ForestCode.GDGroundObjects1= [];
gdjs.ForestCode.GDGroundObjects2= [];
gdjs.ForestCode.GDGroundObjects3= [];
gdjs.ForestCode.GDGroundObjects4= [];
gdjs.ForestCode.GDObstacleObjects1= [];
gdjs.ForestCode.GDObstacleObjects2= [];
gdjs.ForestCode.GDObstacleObjects3= [];
gdjs.ForestCode.GDObstacleObjects4= [];
gdjs.ForestCode.GDPushableBoxObjects1= [];
gdjs.ForestCode.GDPushableBoxObjects2= [];
gdjs.ForestCode.GDPushableBoxObjects3= [];
gdjs.ForestCode.GDPushableBoxObjects4= [];
gdjs.ForestCode.GDMovementJoystickObjects1= [];
gdjs.ForestCode.GDMovementJoystickObjects2= [];
gdjs.ForestCode.GDMovementJoystickObjects3= [];
gdjs.ForestCode.GDMovementJoystickObjects4= [];
gdjs.ForestCode.GDJumpButtonObjects1= [];
gdjs.ForestCode.GDJumpButtonObjects2= [];
gdjs.ForestCode.GDJumpButtonObjects3= [];
gdjs.ForestCode.GDJumpButtonObjects4= [];
gdjs.ForestCode.GDPlayerObjects1= [];
gdjs.ForestCode.GDPlayerObjects2= [];
gdjs.ForestCode.GDPlayerObjects3= [];
gdjs.ForestCode.GDPlayerObjects4= [];
gdjs.ForestCode.GDControlsToggleObjects1= [];
gdjs.ForestCode.GDControlsToggleObjects2= [];
gdjs.ForestCode.GDControlsToggleObjects3= [];
gdjs.ForestCode.GDControlsToggleObjects4= [];
gdjs.ForestCode.GDMonsterObjects1= [];
gdjs.ForestCode.GDMonsterObjects2= [];
gdjs.ForestCode.GDMonsterObjects3= [];
gdjs.ForestCode.GDMonsterObjects4= [];
gdjs.ForestCode.GDPathfindingObstacleObjects1= [];
gdjs.ForestCode.GDPathfindingObstacleObjects2= [];
gdjs.ForestCode.GDPathfindingObstacleObjects3= [];
gdjs.ForestCode.GDPathfindingObstacleObjects4= [];
gdjs.ForestCode.GDFlashlightObjects1= [];
gdjs.ForestCode.GDFlashlightObjects2= [];
gdjs.ForestCode.GDFlashlightObjects3= [];
gdjs.ForestCode.GDFlashlightObjects4= [];
gdjs.ForestCode.GDmappatObjects1= [];
gdjs.ForestCode.GDmappatObjects2= [];
gdjs.ForestCode.GDmappatObjects3= [];
gdjs.ForestCode.GDmappatObjects4= [];
gdjs.ForestCode.GDHouse_9595Type_959501Objects1= [];
gdjs.ForestCode.GDHouse_9595Type_959501Objects2= [];
gdjs.ForestCode.GDHouse_9595Type_959501Objects3= [];
gdjs.ForestCode.GDHouse_9595Type_959501Objects4= [];
gdjs.ForestCode.GDInvisibleObstacleObjects1= [];
gdjs.ForestCode.GDInvisibleObstacleObjects2= [];
gdjs.ForestCode.GDInvisibleObstacleObjects3= [];
gdjs.ForestCode.GDInvisibleObstacleObjects4= [];
gdjs.ForestCode.GDDoor_9595StraightObjects1= [];
gdjs.ForestCode.GDDoor_9595StraightObjects2= [];
gdjs.ForestCode.GDDoor_9595StraightObjects3= [];
gdjs.ForestCode.GDDoor_9595StraightObjects4= [];
gdjs.ForestCode.GDPine_9595Tree_95951Objects1= [];
gdjs.ForestCode.GDPine_9595Tree_95951Objects2= [];
gdjs.ForestCode.GDPine_9595Tree_95951Objects3= [];
gdjs.ForestCode.GDPine_9595Tree_95951Objects4= [];


gdjs.ForestCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.ForestCode.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.ForestCode.GDMovementJoystickObjects1);
{for(var i = 0, len = gdjs.ForestCode.GDMovementJoystickObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDMovementJoystickObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ForestCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDJumpButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ForestCode.GDMovementJoystickObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDMovementJoystickObjects1[i].ActivateControl(false, null);
}
}
}

}


};gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.ForestCode.GDPlayerObjects2});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.ForestCode.GDMonsterObjects2});
gdjs.ForestCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.ForestCode.GDMonsterObjects2, gdjs.ForestCode.GDMonsterObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ForestCode.GDMonsterObjects3.length;i<l;++i) {
    if ( !(gdjs.ForestCode.GDMonsterObjects3[i].getBehavior("Pathfinding").pathFound()) ) {
        isConditionTrue_0 = true;
        gdjs.ForestCode.GDMonsterObjects3[k] = gdjs.ForestCode.GDMonsterObjects3[i];
        ++k;
    }
}
gdjs.ForestCode.GDMonsterObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.ForestCode.GDGroundObjects3);
/* Reuse gdjs.ForestCode.GDMonsterObjects3 */
{for(var i = 0, len = gdjs.ForestCode.GDMonsterObjects3.length ;i < len;++i) {
    gdjs.ForestCode.GDMonsterObjects3[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.randomInRange((( gdjs.ForestCode.GDGroundObjects3.length === 0 ) ? 0 :gdjs.ForestCode.GDGroundObjects3[0].getAABBLeft()), (( gdjs.ForestCode.GDGroundObjects3.length === 0 ) ? 0 :gdjs.ForestCode.GDGroundObjects3[0].getAABBRight())), gdjs.randomInRange((( gdjs.ForestCode.GDGroundObjects3.length === 0 ) ? 0 :gdjs.ForestCode.GDGroundObjects3[0].getAABBTop()), (( gdjs.ForestCode.GDGroundObjects3.length === 0 ) ? 0 :gdjs.ForestCode.GDGroundObjects3[0].getAABBBottom())));
}
}
}

}


{

/* Reuse gdjs.ForestCode.GDMonsterObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ForestCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.ForestCode.GDMonsterObjects2[i].getBehavior("Pathfinding").pathFound() ) {
        isConditionTrue_0 = true;
        gdjs.ForestCode.GDMonsterObjects2[k] = gdjs.ForestCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.ForestCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ForestCode.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.ForestCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDMonsterObjects2[i].resetTimer("PositionChange");
}
}
}

}


};gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.ForestCode.GDPlayerObjects3});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDMonsterObjects3Objects = Hashtable.newFrom({"Monster": gdjs.ForestCode.GDMonsterObjects3});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDObstacleObjects3ObjectsGDgdjs_9546ForestCode_9546GDPushableBoxObjects3ObjectsGDgdjs_9546ForestCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Obstacle": gdjs.ForestCode.GDObstacleObjects3, "PushableBox": gdjs.ForestCode.GDPushableBoxObjects3, "Player": gdjs.ForestCode.GDPlayerObjects3});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.ForestCode.GDPlayerObjects3});
gdjs.ForestCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15103724);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ForestCode.GDMonsterObjects2, gdjs.ForestCode.GDMonsterObjects3);

{for(var i = 0, len = gdjs.ForestCode.GDMonsterObjects3.length ;i < len;++i) {
    gdjs.ForestCode.GDMonsterObjects3[i].getBehavior("Pathfinding").moveTo(runtimeScene, (gdjs.ForestCode.GDMonsterObjects3[i].getX()), (gdjs.ForestCode.GDMonsterObjects3[i].getY()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.ForestCode.GDMonsterObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.ForestCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDMonsterObjects2[i].getBehavior("Physics3D").applyForceTowardPosition(60, (( gdjs.ForestCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.ForestCode.GDPlayerObjects2[0].getCenterXInScene()), (( gdjs.ForestCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.ForestCode.GDPlayerObjects2[0].getCenterYInScene()), (gdjs.ForestCode.GDMonsterObjects2[i].getBehavior("Object3D").getZ()));
}
}
{for(var i = 0, len = gdjs.ForestCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDMonsterObjects2[i].rotateTowardPosition((( gdjs.ForestCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.ForestCode.GDPlayerObjects2[0].getCenterXInScene()), (( gdjs.ForestCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.ForestCode.GDPlayerObjects2[0].getCenterYInScene()), 0, runtimeScene);
}
}
}

}


};gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.ForestCode.GDPlayerObjects1});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDMonsterObjects1Objects = Hashtable.newFrom({"Monster": gdjs.ForestCode.GDMonsterObjects1});
gdjs.ForestCode.asyncCallback16413788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ForestCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}
gdjs.ForestCode.localVariables.length = 0;
}
gdjs.ForestCode.idToCallbackMap.set(16413788, gdjs.ForestCode.asyncCallback16413788);
gdjs.ForestCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ForestCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.ForestCode.asyncCallback16413788(runtimeScene, asyncObjectsList)), 16413788, asyncObjectsList);
}
}

}


};gdjs.ForestCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.ForestCode.GDMonsterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ForestCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.ForestCode.GDMonsterObjects2[i].getVariableString(gdjs.ForestCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)) == "Chasing" ) {
        isConditionTrue_0 = true;
        gdjs.ForestCode.GDMonsterObjects2[k] = gdjs.ForestCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.ForestCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects2Objects, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDMonsterObjects2Objects, 600, true);
}
if (isConditionTrue_0) {
/* Reuse gdjs.ForestCode.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.ForestCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDMonsterObjects2[i].returnVariable(gdjs.ForestCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)).setString("Patrolling");
}
}
{for(var i = 0, len = gdjs.ForestCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDMonsterObjects2[i].resetTimer("PositionChange");
}
}
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.ForestCode.GDMonsterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ForestCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.ForestCode.GDMonsterObjects2[i].getVariableString(gdjs.ForestCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)) == "Patrolling" ) {
        isConditionTrue_0 = true;
        gdjs.ForestCode.GDMonsterObjects2[k] = gdjs.ForestCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.ForestCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ForestCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.ForestCode.GDMonsterObjects2[i].getTimerElapsedTimeInSecondsOrNaN("PositionChange") >= 5 ) {
        isConditionTrue_0 = true;
        gdjs.ForestCode.GDMonsterObjects2[k] = gdjs.ForestCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.ForestCode.GDMonsterObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.ForestCode.GDMonsterObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.ForestCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDMonsterObjects2[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.ForestCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.ForestCode.GDPlayerObjects2[0].getCenterXInScene()), (( gdjs.ForestCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.ForestCode.GDPlayerObjects2[0].getCenterYInScene()));
}
}

{ //Subevents
gdjs.ForestCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.ForestCode.GDMonsterObjects2);
gdjs.ForestCode.GDObstacleObjects2.length = 0;

gdjs.ForestCode.GDPlayerObjects2.length = 0;

gdjs.ForestCode.GDPushableBoxObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ForestCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.ForestCode.GDMonsterObjects2[i].getVariableString(gdjs.ForestCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)) == "Patrolling" ) {
        isConditionTrue_0 = true;
        gdjs.ForestCode.GDMonsterObjects2[k] = gdjs.ForestCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.ForestCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.ForestCode.GDMonsterObjects2_1final.length = 0;
gdjs.ForestCode.GDObstacleObjects2_1final.length = 0;
gdjs.ForestCode.GDPlayerObjects2_1final.length = 0;
gdjs.ForestCode.GDPushableBoxObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.ForestCode.GDMonsterObjects2, gdjs.ForestCode.GDMonsterObjects3);

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects3);
isConditionTrue_1 = gdjs.evtTools.object.distanceTest(gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects3Objects, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDMonsterObjects3Objects, 300, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.ForestCode.GDMonsterObjects3.length; j < jLen ; ++j) {
        if ( gdjs.ForestCode.GDMonsterObjects2_1final.indexOf(gdjs.ForestCode.GDMonsterObjects3[j]) === -1 )
            gdjs.ForestCode.GDMonsterObjects2_1final.push(gdjs.ForestCode.GDMonsterObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.ForestCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.ForestCode.GDPlayerObjects2_1final.indexOf(gdjs.ForestCode.GDPlayerObjects3[j]) === -1 )
            gdjs.ForestCode.GDPlayerObjects2_1final.push(gdjs.ForestCode.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.ForestCode.GDMonsterObjects2, gdjs.ForestCode.GDMonsterObjects3);

gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.ForestCode.GDObstacleObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("PushableBox"), gdjs.ForestCode.GDPushableBoxObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__Raycaster3D__RaycastWithAngle.func(runtimeScene, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDObstacleObjects3ObjectsGDgdjs_9546ForestCode_9546GDPushableBoxObjects3ObjectsGDgdjs_9546ForestCode_9546GDPlayerObjects3Objects, (( gdjs.ForestCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.ForestCode.GDMonsterObjects3[0].getCenterXInScene()), (( gdjs.ForestCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.ForestCode.GDMonsterObjects3[0].getCenterYInScene()), (( gdjs.ForestCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.ForestCode.GDMonsterObjects3[0].getBehavior("Object3D").getCenterZInScene()), (( gdjs.ForestCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.ForestCode.GDMonsterObjects3[0].getAngle()), gdjs.toDegrees(Math.atan(((( gdjs.ForestCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.ForestCode.GDPlayerObjects3[0].getBehavior("Object3D").getCenterZInScene()) - (( gdjs.ForestCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.ForestCode.GDMonsterObjects3[0].getBehavior("Object3D").getCenterZInScene())) / (( gdjs.ForestCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.ForestCode.GDMonsterObjects3[0].getDistanceToObject((gdjs.ForestCode.GDPlayerObjects3.length !== 0 ? gdjs.ForestCode.GDPlayerObjects3[0] : null))))), 600, null);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects3Objects) > 0;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.ForestCode.GDMonsterObjects3.length; j < jLen ; ++j) {
        if ( gdjs.ForestCode.GDMonsterObjects2_1final.indexOf(gdjs.ForestCode.GDMonsterObjects3[j]) === -1 )
            gdjs.ForestCode.GDMonsterObjects2_1final.push(gdjs.ForestCode.GDMonsterObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.ForestCode.GDObstacleObjects3.length; j < jLen ; ++j) {
        if ( gdjs.ForestCode.GDObstacleObjects2_1final.indexOf(gdjs.ForestCode.GDObstacleObjects3[j]) === -1 )
            gdjs.ForestCode.GDObstacleObjects2_1final.push(gdjs.ForestCode.GDObstacleObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.ForestCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.ForestCode.GDPlayerObjects2_1final.indexOf(gdjs.ForestCode.GDPlayerObjects3[j]) === -1 )
            gdjs.ForestCode.GDPlayerObjects2_1final.push(gdjs.ForestCode.GDPlayerObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.ForestCode.GDPushableBoxObjects3.length; j < jLen ; ++j) {
        if ( gdjs.ForestCode.GDPushableBoxObjects2_1final.indexOf(gdjs.ForestCode.GDPushableBoxObjects3[j]) === -1 )
            gdjs.ForestCode.GDPushableBoxObjects2_1final.push(gdjs.ForestCode.GDPushableBoxObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.ForestCode.GDMonsterObjects2_1final, gdjs.ForestCode.GDMonsterObjects2);
gdjs.copyArray(gdjs.ForestCode.GDObstacleObjects2_1final, gdjs.ForestCode.GDObstacleObjects2);
gdjs.copyArray(gdjs.ForestCode.GDPlayerObjects2_1final, gdjs.ForestCode.GDPlayerObjects2);
gdjs.copyArray(gdjs.ForestCode.GDPushableBoxObjects2_1final, gdjs.ForestCode.GDPushableBoxObjects2);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ForestCode.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.ForestCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDMonsterObjects2[i].returnVariable(gdjs.ForestCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)).setString("Chasing");
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "0cb760a522d3d9b9e29b08d1abd13cac9226be2ee970754e3e850f47209d4975_01 - rock city ransom.aac", 1, true, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.ForestCode.GDMonsterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ForestCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.ForestCode.GDMonsterObjects2[i].getVariableString(gdjs.ForestCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)) == "Chasing" ) {
        isConditionTrue_0 = true;
        gdjs.ForestCode.GDMonsterObjects2[k] = gdjs.ForestCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.ForestCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.ForestCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.ForestCode.GDMonsterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.haveObjectsStartedColliding(gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects1Objects, "Physics3D", gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDMonsterObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "823b6a7f6747d704ae7d2bec3143c4ee702fe7344685400486594cbd3aeb71a2_Bleep_03.aac", false, 100, 1);
}

{ //Subevents
gdjs.ForestCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.ForestCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.ForestCode.GDControlsToggleObjects1, gdjs.ForestCode.GDControlsToggleObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ForestCode.GDControlsToggleObjects2.length;i<l;++i) {
    if ( gdjs.ForestCode.GDControlsToggleObjects2[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ForestCode.GDControlsToggleObjects2[k] = gdjs.ForestCode.GDControlsToggleObjects2[i];
        ++k;
    }
}
gdjs.ForestCode.GDControlsToggleObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.ForestCode.GDJumpButtonObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Touch");
}
{for(var i = 0, len = gdjs.ForestCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDJumpButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ForestCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDJumpButtonObjects2[i].activateBehavior("MultitouchButton", true);
}
}
}

}


{

/* Reuse gdjs.ForestCode.GDControlsToggleObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ForestCode.GDControlsToggleObjects1.length;i<l;++i) {
    if ( !(gdjs.ForestCode.GDControlsToggleObjects1[i].IsChecked(null)) ) {
        isConditionTrue_0 = true;
        gdjs.ForestCode.GDControlsToggleObjects1[k] = gdjs.ForestCode.GDControlsToggleObjects1[i];
        ++k;
    }
}
gdjs.ForestCode.GDControlsToggleObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.ForestCode.GDJumpButtonObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Keyboard");
}
{for(var i = 0, len = gdjs.ForestCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDJumpButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ForestCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDJumpButtonObjects1[i].activateBehavior("MultitouchButton", false);
}
}
}

}


};gdjs.ForestCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.ForestCode.GDControlsToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ForestCode.GDControlsToggleObjects1.length;i<l;++i) {
    if ( gdjs.ForestCode.GDControlsToggleObjects1[i].HasJustBeenToggled(null) ) {
        isConditionTrue_0 = true;
        gdjs.ForestCode.GDControlsToggleObjects1[k] = gdjs.ForestCode.GDControlsToggleObjects1[i];
        ++k;
    }
}
gdjs.ForestCode.GDControlsToggleObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.ForestCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDControlsToggleObjects1Objects = Hashtable.newFrom({"ControlsToggle": gdjs.ForestCode.GDControlsToggleObjects1});
gdjs.ForestCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.ForestCode.GDControlsToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Keyboard");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDControlsToggleObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, null));
}
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, null);
}
}

}


};gdjs.ForestCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Flashlight"), gdjs.ForestCode.GDFlashlightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.ForestCode.GDFlashlightObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDFlashlightObjects1[i].setPosition((( gdjs.ForestCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.ForestCode.GDPlayerObjects1[0].getXFromAngleAndDistance((( gdjs.ForestCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.ForestCode.GDPlayerObjects1[0].getAngle()) - 90, -20)),(( gdjs.ForestCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.ForestCode.GDPlayerObjects1[0].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.ForestCode.GDFlashlightObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDFlashlightObjects1[i].getBehavior("Object3D").setZ((( gdjs.ForestCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.ForestCode.GDPlayerObjects1[0].getBehavior("Object3D").getCenterZInScene()) + 38);
}
}
{for(var i = 0, len = gdjs.ForestCode.GDFlashlightObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDFlashlightObjects1[i].getBehavior("Object3D").setRotationY(90 - gdjs.scene3d.camera.getCameraRotationX(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.ForestCode.GDFlashlightObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDFlashlightObjects1[i].setAngle((( gdjs.ForestCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.ForestCode.GDPlayerObjects1[0].getAngle()));
}
}
}

}


};gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.ForestCode.GDPlayerObjects1});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDDoor_95959595StraightObjects1Objects = Hashtable.newFrom({"Door_Straight": gdjs.ForestCode.GDDoor_9595StraightObjects1});
gdjs.ForestCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PathfindingObstacle"), gdjs.ForestCode.GDPathfindingObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ForestCode.GDPathfindingObstacleObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDPathfindingObstacleObjects1[i].hide();
}
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Fog", true);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "FullLight", false);
}

{ //Subevents
gdjs.ForestCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.ForestCode.eventsList4(runtimeScene);
}


{


gdjs.ForestCode.eventsList6(runtimeScene);
}


{


gdjs.ForestCode.eventsList7(runtimeScene);
}


{


gdjs.ForestCode.eventsList8(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "p");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Pause");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "15f9b6aec4406fc99b9bb716e14f565325caf812039c22d18d836da97f5bc2a6_crickets.aac", true, 80, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "97701ff6384d4127d73de32c166e50e4e65cf893c7f781956fe966f192812d0b_Gold 1.aac", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "15f9b6aec4406fc99b9bb716e14f565325caf812039c22d18d836da97f5bc2a6_crickets.aac", true, 80, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").setForwardSpeedMax(600);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LShift");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").setForwardSpeedMax(300);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").setForwardSpeedMax(600);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "X", null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").setForwardSpeedMax(300);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door_Straight"), gdjs.ForestCode.GDDoor_9595StraightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.haveObjectsStartedColliding(gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects1Objects, "Physics3D", gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDDoor_95959595StraightObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "House");
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.ForestCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ForestCode.GDGroundObjects1.length = 0;
gdjs.ForestCode.GDGroundObjects2.length = 0;
gdjs.ForestCode.GDGroundObjects3.length = 0;
gdjs.ForestCode.GDGroundObjects4.length = 0;
gdjs.ForestCode.GDObstacleObjects1.length = 0;
gdjs.ForestCode.GDObstacleObjects2.length = 0;
gdjs.ForestCode.GDObstacleObjects3.length = 0;
gdjs.ForestCode.GDObstacleObjects4.length = 0;
gdjs.ForestCode.GDPushableBoxObjects1.length = 0;
gdjs.ForestCode.GDPushableBoxObjects2.length = 0;
gdjs.ForestCode.GDPushableBoxObjects3.length = 0;
gdjs.ForestCode.GDPushableBoxObjects4.length = 0;
gdjs.ForestCode.GDMovementJoystickObjects1.length = 0;
gdjs.ForestCode.GDMovementJoystickObjects2.length = 0;
gdjs.ForestCode.GDMovementJoystickObjects3.length = 0;
gdjs.ForestCode.GDMovementJoystickObjects4.length = 0;
gdjs.ForestCode.GDJumpButtonObjects1.length = 0;
gdjs.ForestCode.GDJumpButtonObjects2.length = 0;
gdjs.ForestCode.GDJumpButtonObjects3.length = 0;
gdjs.ForestCode.GDJumpButtonObjects4.length = 0;
gdjs.ForestCode.GDPlayerObjects1.length = 0;
gdjs.ForestCode.GDPlayerObjects2.length = 0;
gdjs.ForestCode.GDPlayerObjects3.length = 0;
gdjs.ForestCode.GDPlayerObjects4.length = 0;
gdjs.ForestCode.GDControlsToggleObjects1.length = 0;
gdjs.ForestCode.GDControlsToggleObjects2.length = 0;
gdjs.ForestCode.GDControlsToggleObjects3.length = 0;
gdjs.ForestCode.GDControlsToggleObjects4.length = 0;
gdjs.ForestCode.GDMonsterObjects1.length = 0;
gdjs.ForestCode.GDMonsterObjects2.length = 0;
gdjs.ForestCode.GDMonsterObjects3.length = 0;
gdjs.ForestCode.GDMonsterObjects4.length = 0;
gdjs.ForestCode.GDPathfindingObstacleObjects1.length = 0;
gdjs.ForestCode.GDPathfindingObstacleObjects2.length = 0;
gdjs.ForestCode.GDPathfindingObstacleObjects3.length = 0;
gdjs.ForestCode.GDPathfindingObstacleObjects4.length = 0;
gdjs.ForestCode.GDFlashlightObjects1.length = 0;
gdjs.ForestCode.GDFlashlightObjects2.length = 0;
gdjs.ForestCode.GDFlashlightObjects3.length = 0;
gdjs.ForestCode.GDFlashlightObjects4.length = 0;
gdjs.ForestCode.GDmappatObjects1.length = 0;
gdjs.ForestCode.GDmappatObjects2.length = 0;
gdjs.ForestCode.GDmappatObjects3.length = 0;
gdjs.ForestCode.GDmappatObjects4.length = 0;
gdjs.ForestCode.GDHouse_9595Type_959501Objects1.length = 0;
gdjs.ForestCode.GDHouse_9595Type_959501Objects2.length = 0;
gdjs.ForestCode.GDHouse_9595Type_959501Objects3.length = 0;
gdjs.ForestCode.GDHouse_9595Type_959501Objects4.length = 0;
gdjs.ForestCode.GDInvisibleObstacleObjects1.length = 0;
gdjs.ForestCode.GDInvisibleObstacleObjects2.length = 0;
gdjs.ForestCode.GDInvisibleObstacleObjects3.length = 0;
gdjs.ForestCode.GDInvisibleObstacleObjects4.length = 0;
gdjs.ForestCode.GDDoor_9595StraightObjects1.length = 0;
gdjs.ForestCode.GDDoor_9595StraightObjects2.length = 0;
gdjs.ForestCode.GDDoor_9595StraightObjects3.length = 0;
gdjs.ForestCode.GDDoor_9595StraightObjects4.length = 0;
gdjs.ForestCode.GDPine_9595Tree_95951Objects1.length = 0;
gdjs.ForestCode.GDPine_9595Tree_95951Objects2.length = 0;
gdjs.ForestCode.GDPine_9595Tree_95951Objects3.length = 0;
gdjs.ForestCode.GDPine_9595Tree_95951Objects4.length = 0;

gdjs.ForestCode.eventsList9(runtimeScene);
gdjs.ForestCode.GDGroundObjects1.length = 0;
gdjs.ForestCode.GDGroundObjects2.length = 0;
gdjs.ForestCode.GDGroundObjects3.length = 0;
gdjs.ForestCode.GDGroundObjects4.length = 0;
gdjs.ForestCode.GDObstacleObjects1.length = 0;
gdjs.ForestCode.GDObstacleObjects2.length = 0;
gdjs.ForestCode.GDObstacleObjects3.length = 0;
gdjs.ForestCode.GDObstacleObjects4.length = 0;
gdjs.ForestCode.GDPushableBoxObjects1.length = 0;
gdjs.ForestCode.GDPushableBoxObjects2.length = 0;
gdjs.ForestCode.GDPushableBoxObjects3.length = 0;
gdjs.ForestCode.GDPushableBoxObjects4.length = 0;
gdjs.ForestCode.GDMovementJoystickObjects1.length = 0;
gdjs.ForestCode.GDMovementJoystickObjects2.length = 0;
gdjs.ForestCode.GDMovementJoystickObjects3.length = 0;
gdjs.ForestCode.GDMovementJoystickObjects4.length = 0;
gdjs.ForestCode.GDJumpButtonObjects1.length = 0;
gdjs.ForestCode.GDJumpButtonObjects2.length = 0;
gdjs.ForestCode.GDJumpButtonObjects3.length = 0;
gdjs.ForestCode.GDJumpButtonObjects4.length = 0;
gdjs.ForestCode.GDPlayerObjects1.length = 0;
gdjs.ForestCode.GDPlayerObjects2.length = 0;
gdjs.ForestCode.GDPlayerObjects3.length = 0;
gdjs.ForestCode.GDPlayerObjects4.length = 0;
gdjs.ForestCode.GDControlsToggleObjects1.length = 0;
gdjs.ForestCode.GDControlsToggleObjects2.length = 0;
gdjs.ForestCode.GDControlsToggleObjects3.length = 0;
gdjs.ForestCode.GDControlsToggleObjects4.length = 0;
gdjs.ForestCode.GDMonsterObjects1.length = 0;
gdjs.ForestCode.GDMonsterObjects2.length = 0;
gdjs.ForestCode.GDMonsterObjects3.length = 0;
gdjs.ForestCode.GDMonsterObjects4.length = 0;
gdjs.ForestCode.GDPathfindingObstacleObjects1.length = 0;
gdjs.ForestCode.GDPathfindingObstacleObjects2.length = 0;
gdjs.ForestCode.GDPathfindingObstacleObjects3.length = 0;
gdjs.ForestCode.GDPathfindingObstacleObjects4.length = 0;
gdjs.ForestCode.GDFlashlightObjects1.length = 0;
gdjs.ForestCode.GDFlashlightObjects2.length = 0;
gdjs.ForestCode.GDFlashlightObjects3.length = 0;
gdjs.ForestCode.GDFlashlightObjects4.length = 0;
gdjs.ForestCode.GDmappatObjects1.length = 0;
gdjs.ForestCode.GDmappatObjects2.length = 0;
gdjs.ForestCode.GDmappatObjects3.length = 0;
gdjs.ForestCode.GDmappatObjects4.length = 0;
gdjs.ForestCode.GDHouse_9595Type_959501Objects1.length = 0;
gdjs.ForestCode.GDHouse_9595Type_959501Objects2.length = 0;
gdjs.ForestCode.GDHouse_9595Type_959501Objects3.length = 0;
gdjs.ForestCode.GDHouse_9595Type_959501Objects4.length = 0;
gdjs.ForestCode.GDInvisibleObstacleObjects1.length = 0;
gdjs.ForestCode.GDInvisibleObstacleObjects2.length = 0;
gdjs.ForestCode.GDInvisibleObstacleObjects3.length = 0;
gdjs.ForestCode.GDInvisibleObstacleObjects4.length = 0;
gdjs.ForestCode.GDDoor_9595StraightObjects1.length = 0;
gdjs.ForestCode.GDDoor_9595StraightObjects2.length = 0;
gdjs.ForestCode.GDDoor_9595StraightObjects3.length = 0;
gdjs.ForestCode.GDDoor_9595StraightObjects4.length = 0;
gdjs.ForestCode.GDPine_9595Tree_95951Objects1.length = 0;
gdjs.ForestCode.GDPine_9595Tree_95951Objects2.length = 0;
gdjs.ForestCode.GDPine_9595Tree_95951Objects3.length = 0;
gdjs.ForestCode.GDPine_9595Tree_95951Objects4.length = 0;


return;

}

gdjs['ForestCode'] = gdjs.ForestCode;
