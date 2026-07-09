gdjs.HouseCode = {};
gdjs.HouseCode.localVariables = [];
gdjs.HouseCode.idToCallbackMap = new Map();
gdjs.HouseCode.GDMonsterObjects2_1final = [];

gdjs.HouseCode.GDObstacleObjects2_1final = [];

gdjs.HouseCode.GDPlayerObjects2_1final = [];

gdjs.HouseCode.GDPushableBoxObjects2_1final = [];

gdjs.HouseCode.GDGroundObjects1= [];
gdjs.HouseCode.GDGroundObjects2= [];
gdjs.HouseCode.GDGroundObjects3= [];
gdjs.HouseCode.GDGroundObjects4= [];
gdjs.HouseCode.GDObstacleObjects1= [];
gdjs.HouseCode.GDObstacleObjects2= [];
gdjs.HouseCode.GDObstacleObjects3= [];
gdjs.HouseCode.GDObstacleObjects4= [];
gdjs.HouseCode.GDPushableBoxObjects1= [];
gdjs.HouseCode.GDPushableBoxObjects2= [];
gdjs.HouseCode.GDPushableBoxObjects3= [];
gdjs.HouseCode.GDPushableBoxObjects4= [];
gdjs.HouseCode.GDMovementJoystickObjects1= [];
gdjs.HouseCode.GDMovementJoystickObjects2= [];
gdjs.HouseCode.GDMovementJoystickObjects3= [];
gdjs.HouseCode.GDMovementJoystickObjects4= [];
gdjs.HouseCode.GDJumpButtonObjects1= [];
gdjs.HouseCode.GDJumpButtonObjects2= [];
gdjs.HouseCode.GDJumpButtonObjects3= [];
gdjs.HouseCode.GDJumpButtonObjects4= [];
gdjs.HouseCode.GDPlayerObjects1= [];
gdjs.HouseCode.GDPlayerObjects2= [];
gdjs.HouseCode.GDPlayerObjects3= [];
gdjs.HouseCode.GDPlayerObjects4= [];
gdjs.HouseCode.GDControlsToggleObjects1= [];
gdjs.HouseCode.GDControlsToggleObjects2= [];
gdjs.HouseCode.GDControlsToggleObjects3= [];
gdjs.HouseCode.GDControlsToggleObjects4= [];
gdjs.HouseCode.GDMonsterObjects1= [];
gdjs.HouseCode.GDMonsterObjects2= [];
gdjs.HouseCode.GDMonsterObjects3= [];
gdjs.HouseCode.GDMonsterObjects4= [];
gdjs.HouseCode.GDPathfindingObstacleObjects1= [];
gdjs.HouseCode.GDPathfindingObstacleObjects2= [];
gdjs.HouseCode.GDPathfindingObstacleObjects3= [];
gdjs.HouseCode.GDPathfindingObstacleObjects4= [];
gdjs.HouseCode.GDFlashlightObjects1= [];
gdjs.HouseCode.GDFlashlightObjects2= [];
gdjs.HouseCode.GDFlashlightObjects3= [];
gdjs.HouseCode.GDFlashlightObjects4= [];
gdjs.HouseCode.GDmappatObjects1= [];
gdjs.HouseCode.GDmappatObjects2= [];
gdjs.HouseCode.GDmappatObjects3= [];
gdjs.HouseCode.GDmappatObjects4= [];
gdjs.HouseCode.GDHouse_9595Type_959501Objects1= [];
gdjs.HouseCode.GDHouse_9595Type_959501Objects2= [];
gdjs.HouseCode.GDHouse_9595Type_959501Objects3= [];
gdjs.HouseCode.GDHouse_9595Type_959501Objects4= [];
gdjs.HouseCode.GDInvisibleObstacleObjects1= [];
gdjs.HouseCode.GDInvisibleObstacleObjects2= [];
gdjs.HouseCode.GDInvisibleObstacleObjects3= [];
gdjs.HouseCode.GDInvisibleObstacleObjects4= [];
gdjs.HouseCode.GDNew3DModelObjects1= [];
gdjs.HouseCode.GDNew3DModelObjects2= [];
gdjs.HouseCode.GDNew3DModelObjects3= [];
gdjs.HouseCode.GDNew3DModelObjects4= [];
gdjs.HouseCode.GDDoor_9595StraightObjects1= [];
gdjs.HouseCode.GDDoor_9595StraightObjects2= [];
gdjs.HouseCode.GDDoor_9595StraightObjects3= [];
gdjs.HouseCode.GDDoor_9595StraightObjects4= [];


gdjs.HouseCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.HouseCode.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.HouseCode.GDMovementJoystickObjects1);
{for(var i = 0, len = gdjs.HouseCode.GDMovementJoystickObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDMovementJoystickObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.HouseCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDJumpButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.HouseCode.GDMovementJoystickObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDMovementJoystickObjects1[i].ActivateControl(false, null);
}
}
}

}


};gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.HouseCode.GDPlayerObjects2});
gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.HouseCode.GDMonsterObjects2});
gdjs.HouseCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.HouseCode.GDMonsterObjects2, gdjs.HouseCode.GDMonsterObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HouseCode.GDMonsterObjects3.length;i<l;++i) {
    if ( !(gdjs.HouseCode.GDMonsterObjects3[i].getBehavior("Pathfinding").pathFound()) ) {
        isConditionTrue_0 = true;
        gdjs.HouseCode.GDMonsterObjects3[k] = gdjs.HouseCode.GDMonsterObjects3[i];
        ++k;
    }
}
gdjs.HouseCode.GDMonsterObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.HouseCode.GDGroundObjects3);
/* Reuse gdjs.HouseCode.GDMonsterObjects3 */
{for(var i = 0, len = gdjs.HouseCode.GDMonsterObjects3.length ;i < len;++i) {
    gdjs.HouseCode.GDMonsterObjects3[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.randomInRange((( gdjs.HouseCode.GDGroundObjects3.length === 0 ) ? 0 :gdjs.HouseCode.GDGroundObjects3[0].getAABBLeft()), (( gdjs.HouseCode.GDGroundObjects3.length === 0 ) ? 0 :gdjs.HouseCode.GDGroundObjects3[0].getAABBRight())), gdjs.randomInRange((( gdjs.HouseCode.GDGroundObjects3.length === 0 ) ? 0 :gdjs.HouseCode.GDGroundObjects3[0].getAABBTop()), (( gdjs.HouseCode.GDGroundObjects3.length === 0 ) ? 0 :gdjs.HouseCode.GDGroundObjects3[0].getAABBBottom())));
}
}
}

}


{

/* Reuse gdjs.HouseCode.GDMonsterObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HouseCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.HouseCode.GDMonsterObjects2[i].getBehavior("Pathfinding").pathFound() ) {
        isConditionTrue_0 = true;
        gdjs.HouseCode.GDMonsterObjects2[k] = gdjs.HouseCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.HouseCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.HouseCode.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.HouseCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDMonsterObjects2[i].resetTimer("PositionChange");
}
}
}

}


};gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.HouseCode.GDPlayerObjects3});
gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDMonsterObjects3Objects = Hashtable.newFrom({"Monster": gdjs.HouseCode.GDMonsterObjects3});
gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDObstacleObjects3ObjectsGDgdjs_9546HouseCode_9546GDPushableBoxObjects3ObjectsGDgdjs_9546HouseCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Obstacle": gdjs.HouseCode.GDObstacleObjects3, "PushableBox": gdjs.HouseCode.GDPushableBoxObjects3, "Player": gdjs.HouseCode.GDPlayerObjects3});
gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.HouseCode.GDPlayerObjects3});
gdjs.HouseCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20811900);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.HouseCode.GDMonsterObjects2, gdjs.HouseCode.GDMonsterObjects3);

{for(var i = 0, len = gdjs.HouseCode.GDMonsterObjects3.length ;i < len;++i) {
    gdjs.HouseCode.GDMonsterObjects3[i].getBehavior("Pathfinding").moveTo(runtimeScene, (gdjs.HouseCode.GDMonsterObjects3[i].getX()), (gdjs.HouseCode.GDMonsterObjects3[i].getY()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.HouseCode.GDMonsterObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.HouseCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.HouseCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDMonsterObjects2[i].getBehavior("Physics3D").applyForceTowardPosition(120, (( gdjs.HouseCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.HouseCode.GDPlayerObjects2[0].getCenterXInScene()), (( gdjs.HouseCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.HouseCode.GDPlayerObjects2[0].getCenterYInScene()), (gdjs.HouseCode.GDMonsterObjects2[i].getBehavior("Object3D").getZ()));
}
}
{for(var i = 0, len = gdjs.HouseCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDMonsterObjects2[i].rotateTowardPosition((( gdjs.HouseCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.HouseCode.GDPlayerObjects2[0].getCenterXInScene()), (( gdjs.HouseCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.HouseCode.GDPlayerObjects2[0].getCenterYInScene()), 0, runtimeScene);
}
}
}

}


};gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.HouseCode.GDPlayerObjects1});
gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDMonsterObjects1Objects = Hashtable.newFrom({"Monster": gdjs.HouseCode.GDMonsterObjects1});
gdjs.HouseCode.asyncCallback27271084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.HouseCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}
gdjs.HouseCode.localVariables.length = 0;
}
gdjs.HouseCode.idToCallbackMap.set(27271084, gdjs.HouseCode.asyncCallback27271084);
gdjs.HouseCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.HouseCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.HouseCode.asyncCallback27271084(runtimeScene, asyncObjectsList)), 27271084, asyncObjectsList);
}
}

}


};gdjs.HouseCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.HouseCode.GDMonsterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.HouseCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HouseCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.HouseCode.GDMonsterObjects2[i].getVariableString(gdjs.HouseCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)) == "Chasing" ) {
        isConditionTrue_0 = true;
        gdjs.HouseCode.GDMonsterObjects2[k] = gdjs.HouseCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.HouseCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDPlayerObjects2Objects, gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDMonsterObjects2Objects, 600, true);
}
if (isConditionTrue_0) {
/* Reuse gdjs.HouseCode.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.HouseCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDMonsterObjects2[i].returnVariable(gdjs.HouseCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)).setString("Patrolling");
}
}
{for(var i = 0, len = gdjs.HouseCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDMonsterObjects2[i].resetTimer("PositionChange");
}
}
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.HouseCode.GDMonsterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HouseCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.HouseCode.GDMonsterObjects2[i].getVariableString(gdjs.HouseCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)) == "Patrolling" ) {
        isConditionTrue_0 = true;
        gdjs.HouseCode.GDMonsterObjects2[k] = gdjs.HouseCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.HouseCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HouseCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.HouseCode.GDMonsterObjects2[i].getTimerElapsedTimeInSecondsOrNaN("PositionChange") >= 5 ) {
        isConditionTrue_0 = true;
        gdjs.HouseCode.GDMonsterObjects2[k] = gdjs.HouseCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.HouseCode.GDMonsterObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.HouseCode.GDMonsterObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.HouseCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.HouseCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDMonsterObjects2[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.HouseCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.HouseCode.GDPlayerObjects2[0].getCenterXInScene()), (( gdjs.HouseCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.HouseCode.GDPlayerObjects2[0].getCenterYInScene()));
}
}

{ //Subevents
gdjs.HouseCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.HouseCode.GDMonsterObjects2);
gdjs.HouseCode.GDObstacleObjects2.length = 0;

gdjs.HouseCode.GDPlayerObjects2.length = 0;

gdjs.HouseCode.GDPushableBoxObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HouseCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.HouseCode.GDMonsterObjects2[i].getVariableString(gdjs.HouseCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)) == "Patrolling" ) {
        isConditionTrue_0 = true;
        gdjs.HouseCode.GDMonsterObjects2[k] = gdjs.HouseCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.HouseCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.HouseCode.GDMonsterObjects2_1final.length = 0;
gdjs.HouseCode.GDObstacleObjects2_1final.length = 0;
gdjs.HouseCode.GDPlayerObjects2_1final.length = 0;
gdjs.HouseCode.GDPushableBoxObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.HouseCode.GDMonsterObjects2, gdjs.HouseCode.GDMonsterObjects3);

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.HouseCode.GDPlayerObjects3);
isConditionTrue_1 = gdjs.evtTools.object.distanceTest(gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDPlayerObjects3Objects, gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDMonsterObjects3Objects, 300, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.HouseCode.GDMonsterObjects3.length; j < jLen ; ++j) {
        if ( gdjs.HouseCode.GDMonsterObjects2_1final.indexOf(gdjs.HouseCode.GDMonsterObjects3[j]) === -1 )
            gdjs.HouseCode.GDMonsterObjects2_1final.push(gdjs.HouseCode.GDMonsterObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.HouseCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.HouseCode.GDPlayerObjects2_1final.indexOf(gdjs.HouseCode.GDPlayerObjects3[j]) === -1 )
            gdjs.HouseCode.GDPlayerObjects2_1final.push(gdjs.HouseCode.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.HouseCode.GDMonsterObjects2, gdjs.HouseCode.GDMonsterObjects3);

gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.HouseCode.GDObstacleObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.HouseCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("PushableBox"), gdjs.HouseCode.GDPushableBoxObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__Raycaster3D__RaycastWithAngle.func(runtimeScene, gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDObstacleObjects3ObjectsGDgdjs_9546HouseCode_9546GDPushableBoxObjects3ObjectsGDgdjs_9546HouseCode_9546GDPlayerObjects3Objects, (( gdjs.HouseCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.HouseCode.GDMonsterObjects3[0].getCenterXInScene()), (( gdjs.HouseCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.HouseCode.GDMonsterObjects3[0].getCenterYInScene()), (( gdjs.HouseCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.HouseCode.GDMonsterObjects3[0].getBehavior("Object3D").getCenterZInScene()), (( gdjs.HouseCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.HouseCode.GDMonsterObjects3[0].getAngle()), gdjs.toDegrees(Math.atan(((( gdjs.HouseCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.HouseCode.GDPlayerObjects3[0].getBehavior("Object3D").getCenterZInScene()) - (( gdjs.HouseCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.HouseCode.GDMonsterObjects3[0].getBehavior("Object3D").getCenterZInScene())) / (( gdjs.HouseCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.HouseCode.GDMonsterObjects3[0].getDistanceToObject((gdjs.HouseCode.GDPlayerObjects3.length !== 0 ? gdjs.HouseCode.GDPlayerObjects3[0] : null))))), 600, null);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDPlayerObjects3Objects) > 0;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.HouseCode.GDMonsterObjects3.length; j < jLen ; ++j) {
        if ( gdjs.HouseCode.GDMonsterObjects2_1final.indexOf(gdjs.HouseCode.GDMonsterObjects3[j]) === -1 )
            gdjs.HouseCode.GDMonsterObjects2_1final.push(gdjs.HouseCode.GDMonsterObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.HouseCode.GDObstacleObjects3.length; j < jLen ; ++j) {
        if ( gdjs.HouseCode.GDObstacleObjects2_1final.indexOf(gdjs.HouseCode.GDObstacleObjects3[j]) === -1 )
            gdjs.HouseCode.GDObstacleObjects2_1final.push(gdjs.HouseCode.GDObstacleObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.HouseCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.HouseCode.GDPlayerObjects2_1final.indexOf(gdjs.HouseCode.GDPlayerObjects3[j]) === -1 )
            gdjs.HouseCode.GDPlayerObjects2_1final.push(gdjs.HouseCode.GDPlayerObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.HouseCode.GDPushableBoxObjects3.length; j < jLen ; ++j) {
        if ( gdjs.HouseCode.GDPushableBoxObjects2_1final.indexOf(gdjs.HouseCode.GDPushableBoxObjects3[j]) === -1 )
            gdjs.HouseCode.GDPushableBoxObjects2_1final.push(gdjs.HouseCode.GDPushableBoxObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.HouseCode.GDMonsterObjects2_1final, gdjs.HouseCode.GDMonsterObjects2);
gdjs.copyArray(gdjs.HouseCode.GDObstacleObjects2_1final, gdjs.HouseCode.GDObstacleObjects2);
gdjs.copyArray(gdjs.HouseCode.GDPlayerObjects2_1final, gdjs.HouseCode.GDPlayerObjects2);
gdjs.copyArray(gdjs.HouseCode.GDPushableBoxObjects2_1final, gdjs.HouseCode.GDPushableBoxObjects2);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.HouseCode.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.HouseCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDMonsterObjects2[i].returnVariable(gdjs.HouseCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)).setString("Chasing");
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "5de189bcb6bd33d94771d296ecd55fd6ecebdcc3307a129c73cfe930f048ad58_Run_01.wav", 1, true, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.HouseCode.GDMonsterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HouseCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.HouseCode.GDMonsterObjects2[i].getVariableString(gdjs.HouseCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)) == "Chasing" ) {
        isConditionTrue_0 = true;
        gdjs.HouseCode.GDMonsterObjects2[k] = gdjs.HouseCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.HouseCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.HouseCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.HouseCode.GDMonsterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.HouseCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.haveObjectsStartedColliding(gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDPlayerObjects1Objects, "Physics3D", gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDMonsterObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "823b6a7f6747d704ae7d2bec3143c4ee702fe7344685400486594cbd3aeb71a2_Bleep_03.aac", false, 100, 1);
}

{ //Subevents
gdjs.HouseCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.HouseCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.HouseCode.GDControlsToggleObjects1, gdjs.HouseCode.GDControlsToggleObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HouseCode.GDControlsToggleObjects2.length;i<l;++i) {
    if ( gdjs.HouseCode.GDControlsToggleObjects2[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.HouseCode.GDControlsToggleObjects2[k] = gdjs.HouseCode.GDControlsToggleObjects2[i];
        ++k;
    }
}
gdjs.HouseCode.GDControlsToggleObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.HouseCode.GDJumpButtonObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Touch");
}
{for(var i = 0, len = gdjs.HouseCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDJumpButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.HouseCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDJumpButtonObjects2[i].activateBehavior("MultitouchButton", true);
}
}
}

}


{

/* Reuse gdjs.HouseCode.GDControlsToggleObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HouseCode.GDControlsToggleObjects1.length;i<l;++i) {
    if ( !(gdjs.HouseCode.GDControlsToggleObjects1[i].IsChecked(null)) ) {
        isConditionTrue_0 = true;
        gdjs.HouseCode.GDControlsToggleObjects1[k] = gdjs.HouseCode.GDControlsToggleObjects1[i];
        ++k;
    }
}
gdjs.HouseCode.GDControlsToggleObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.HouseCode.GDJumpButtonObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Keyboard");
}
{for(var i = 0, len = gdjs.HouseCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDJumpButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.HouseCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDJumpButtonObjects1[i].activateBehavior("MultitouchButton", false);
}
}
}

}


};gdjs.HouseCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.HouseCode.GDControlsToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HouseCode.GDControlsToggleObjects1.length;i<l;++i) {
    if ( gdjs.HouseCode.GDControlsToggleObjects1[i].HasJustBeenToggled(null) ) {
        isConditionTrue_0 = true;
        gdjs.HouseCode.GDControlsToggleObjects1[k] = gdjs.HouseCode.GDControlsToggleObjects1[i];
        ++k;
    }
}
gdjs.HouseCode.GDControlsToggleObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.HouseCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDControlsToggleObjects1Objects = Hashtable.newFrom({"ControlsToggle": gdjs.HouseCode.GDControlsToggleObjects1});
gdjs.HouseCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.HouseCode.GDControlsToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Keyboard");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDControlsToggleObjects1Objects, runtimeScene, true, true);
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


};gdjs.HouseCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Flashlight"), gdjs.HouseCode.GDFlashlightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.HouseCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.HouseCode.GDFlashlightObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDFlashlightObjects1[i].setPosition((( gdjs.HouseCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.HouseCode.GDPlayerObjects1[0].getXFromAngleAndDistance((( gdjs.HouseCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.HouseCode.GDPlayerObjects1[0].getAngle()) - 90, -20)),(( gdjs.HouseCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.HouseCode.GDPlayerObjects1[0].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.HouseCode.GDFlashlightObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDFlashlightObjects1[i].getBehavior("Object3D").setZ((( gdjs.HouseCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.HouseCode.GDPlayerObjects1[0].getBehavior("Object3D").getCenterZInScene()) + 38);
}
}
{for(var i = 0, len = gdjs.HouseCode.GDFlashlightObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDFlashlightObjects1[i].getBehavior("Object3D").setRotationY(90 - gdjs.scene3d.camera.getCameraRotationX(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.HouseCode.GDFlashlightObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDFlashlightObjects1[i].setAngle((( gdjs.HouseCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.HouseCode.GDPlayerObjects1[0].getAngle()));
}
}
}

}


};gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.HouseCode.GDPlayerObjects1});
gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDDoor_95959595StraightObjects1Objects = Hashtable.newFrom({"Door_Straight": gdjs.HouseCode.GDDoor_9595StraightObjects1});
gdjs.HouseCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PathfindingObstacle"), gdjs.HouseCode.GDPathfindingObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.HouseCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.HouseCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDPlayerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.HouseCode.GDPathfindingObstacleObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDPathfindingObstacleObjects1[i].hide();
}
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Fog", true);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "FullLight", false);
}

{ //Subevents
gdjs.HouseCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.HouseCode.eventsList4(runtimeScene);
}


{


gdjs.HouseCode.eventsList6(runtimeScene);
}


{


gdjs.HouseCode.eventsList7(runtimeScene);
}


{


gdjs.HouseCode.eventsList8(runtimeScene);
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
{gdjs.evtTools.sound.playSound(runtimeScene, "97701ff6384d4127d73de32c166e50e4e65cf893c7f781956fe966f192812d0b_Gold 1.aac", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.HouseCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.HouseCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").setForwardSpeedMax(600);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LShift");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.HouseCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.HouseCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").setForwardSpeedMax(300);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door_Straight"), gdjs.HouseCode.GDDoor_9595StraightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.HouseCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.haveObjectsStartedColliding(gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDPlayerObjects1Objects, "Physics3D", gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDDoor_95959595StraightObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


};

gdjs.HouseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HouseCode.GDGroundObjects1.length = 0;
gdjs.HouseCode.GDGroundObjects2.length = 0;
gdjs.HouseCode.GDGroundObjects3.length = 0;
gdjs.HouseCode.GDGroundObjects4.length = 0;
gdjs.HouseCode.GDObstacleObjects1.length = 0;
gdjs.HouseCode.GDObstacleObjects2.length = 0;
gdjs.HouseCode.GDObstacleObjects3.length = 0;
gdjs.HouseCode.GDObstacleObjects4.length = 0;
gdjs.HouseCode.GDPushableBoxObjects1.length = 0;
gdjs.HouseCode.GDPushableBoxObjects2.length = 0;
gdjs.HouseCode.GDPushableBoxObjects3.length = 0;
gdjs.HouseCode.GDPushableBoxObjects4.length = 0;
gdjs.HouseCode.GDMovementJoystickObjects1.length = 0;
gdjs.HouseCode.GDMovementJoystickObjects2.length = 0;
gdjs.HouseCode.GDMovementJoystickObjects3.length = 0;
gdjs.HouseCode.GDMovementJoystickObjects4.length = 0;
gdjs.HouseCode.GDJumpButtonObjects1.length = 0;
gdjs.HouseCode.GDJumpButtonObjects2.length = 0;
gdjs.HouseCode.GDJumpButtonObjects3.length = 0;
gdjs.HouseCode.GDJumpButtonObjects4.length = 0;
gdjs.HouseCode.GDPlayerObjects1.length = 0;
gdjs.HouseCode.GDPlayerObjects2.length = 0;
gdjs.HouseCode.GDPlayerObjects3.length = 0;
gdjs.HouseCode.GDPlayerObjects4.length = 0;
gdjs.HouseCode.GDControlsToggleObjects1.length = 0;
gdjs.HouseCode.GDControlsToggleObjects2.length = 0;
gdjs.HouseCode.GDControlsToggleObjects3.length = 0;
gdjs.HouseCode.GDControlsToggleObjects4.length = 0;
gdjs.HouseCode.GDMonsterObjects1.length = 0;
gdjs.HouseCode.GDMonsterObjects2.length = 0;
gdjs.HouseCode.GDMonsterObjects3.length = 0;
gdjs.HouseCode.GDMonsterObjects4.length = 0;
gdjs.HouseCode.GDPathfindingObstacleObjects1.length = 0;
gdjs.HouseCode.GDPathfindingObstacleObjects2.length = 0;
gdjs.HouseCode.GDPathfindingObstacleObjects3.length = 0;
gdjs.HouseCode.GDPathfindingObstacleObjects4.length = 0;
gdjs.HouseCode.GDFlashlightObjects1.length = 0;
gdjs.HouseCode.GDFlashlightObjects2.length = 0;
gdjs.HouseCode.GDFlashlightObjects3.length = 0;
gdjs.HouseCode.GDFlashlightObjects4.length = 0;
gdjs.HouseCode.GDmappatObjects1.length = 0;
gdjs.HouseCode.GDmappatObjects2.length = 0;
gdjs.HouseCode.GDmappatObjects3.length = 0;
gdjs.HouseCode.GDmappatObjects4.length = 0;
gdjs.HouseCode.GDHouse_9595Type_959501Objects1.length = 0;
gdjs.HouseCode.GDHouse_9595Type_959501Objects2.length = 0;
gdjs.HouseCode.GDHouse_9595Type_959501Objects3.length = 0;
gdjs.HouseCode.GDHouse_9595Type_959501Objects4.length = 0;
gdjs.HouseCode.GDInvisibleObstacleObjects1.length = 0;
gdjs.HouseCode.GDInvisibleObstacleObjects2.length = 0;
gdjs.HouseCode.GDInvisibleObstacleObjects3.length = 0;
gdjs.HouseCode.GDInvisibleObstacleObjects4.length = 0;
gdjs.HouseCode.GDNew3DModelObjects1.length = 0;
gdjs.HouseCode.GDNew3DModelObjects2.length = 0;
gdjs.HouseCode.GDNew3DModelObjects3.length = 0;
gdjs.HouseCode.GDNew3DModelObjects4.length = 0;
gdjs.HouseCode.GDDoor_9595StraightObjects1.length = 0;
gdjs.HouseCode.GDDoor_9595StraightObjects2.length = 0;
gdjs.HouseCode.GDDoor_9595StraightObjects3.length = 0;
gdjs.HouseCode.GDDoor_9595StraightObjects4.length = 0;

gdjs.HouseCode.eventsList9(runtimeScene);
gdjs.HouseCode.GDGroundObjects1.length = 0;
gdjs.HouseCode.GDGroundObjects2.length = 0;
gdjs.HouseCode.GDGroundObjects3.length = 0;
gdjs.HouseCode.GDGroundObjects4.length = 0;
gdjs.HouseCode.GDObstacleObjects1.length = 0;
gdjs.HouseCode.GDObstacleObjects2.length = 0;
gdjs.HouseCode.GDObstacleObjects3.length = 0;
gdjs.HouseCode.GDObstacleObjects4.length = 0;
gdjs.HouseCode.GDPushableBoxObjects1.length = 0;
gdjs.HouseCode.GDPushableBoxObjects2.length = 0;
gdjs.HouseCode.GDPushableBoxObjects3.length = 0;
gdjs.HouseCode.GDPushableBoxObjects4.length = 0;
gdjs.HouseCode.GDMovementJoystickObjects1.length = 0;
gdjs.HouseCode.GDMovementJoystickObjects2.length = 0;
gdjs.HouseCode.GDMovementJoystickObjects3.length = 0;
gdjs.HouseCode.GDMovementJoystickObjects4.length = 0;
gdjs.HouseCode.GDJumpButtonObjects1.length = 0;
gdjs.HouseCode.GDJumpButtonObjects2.length = 0;
gdjs.HouseCode.GDJumpButtonObjects3.length = 0;
gdjs.HouseCode.GDJumpButtonObjects4.length = 0;
gdjs.HouseCode.GDPlayerObjects1.length = 0;
gdjs.HouseCode.GDPlayerObjects2.length = 0;
gdjs.HouseCode.GDPlayerObjects3.length = 0;
gdjs.HouseCode.GDPlayerObjects4.length = 0;
gdjs.HouseCode.GDControlsToggleObjects1.length = 0;
gdjs.HouseCode.GDControlsToggleObjects2.length = 0;
gdjs.HouseCode.GDControlsToggleObjects3.length = 0;
gdjs.HouseCode.GDControlsToggleObjects4.length = 0;
gdjs.HouseCode.GDMonsterObjects1.length = 0;
gdjs.HouseCode.GDMonsterObjects2.length = 0;
gdjs.HouseCode.GDMonsterObjects3.length = 0;
gdjs.HouseCode.GDMonsterObjects4.length = 0;
gdjs.HouseCode.GDPathfindingObstacleObjects1.length = 0;
gdjs.HouseCode.GDPathfindingObstacleObjects2.length = 0;
gdjs.HouseCode.GDPathfindingObstacleObjects3.length = 0;
gdjs.HouseCode.GDPathfindingObstacleObjects4.length = 0;
gdjs.HouseCode.GDFlashlightObjects1.length = 0;
gdjs.HouseCode.GDFlashlightObjects2.length = 0;
gdjs.HouseCode.GDFlashlightObjects3.length = 0;
gdjs.HouseCode.GDFlashlightObjects4.length = 0;
gdjs.HouseCode.GDmappatObjects1.length = 0;
gdjs.HouseCode.GDmappatObjects2.length = 0;
gdjs.HouseCode.GDmappatObjects3.length = 0;
gdjs.HouseCode.GDmappatObjects4.length = 0;
gdjs.HouseCode.GDHouse_9595Type_959501Objects1.length = 0;
gdjs.HouseCode.GDHouse_9595Type_959501Objects2.length = 0;
gdjs.HouseCode.GDHouse_9595Type_959501Objects3.length = 0;
gdjs.HouseCode.GDHouse_9595Type_959501Objects4.length = 0;
gdjs.HouseCode.GDInvisibleObstacleObjects1.length = 0;
gdjs.HouseCode.GDInvisibleObstacleObjects2.length = 0;
gdjs.HouseCode.GDInvisibleObstacleObjects3.length = 0;
gdjs.HouseCode.GDInvisibleObstacleObjects4.length = 0;
gdjs.HouseCode.GDNew3DModelObjects1.length = 0;
gdjs.HouseCode.GDNew3DModelObjects2.length = 0;
gdjs.HouseCode.GDNew3DModelObjects3.length = 0;
gdjs.HouseCode.GDNew3DModelObjects4.length = 0;
gdjs.HouseCode.GDDoor_9595StraightObjects1.length = 0;
gdjs.HouseCode.GDDoor_9595StraightObjects2.length = 0;
gdjs.HouseCode.GDDoor_9595StraightObjects3.length = 0;
gdjs.HouseCode.GDDoor_9595StraightObjects4.length = 0;


return;

}

gdjs['HouseCode'] = gdjs.HouseCode;
