gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.idToCallbackMap = new Map();
gdjs.GameCode.GDMonsterObjects2_1final = [];

gdjs.GameCode.GDObstacleObjects2_1final = [];

gdjs.GameCode.GDPlayerObjects2_1final = [];

gdjs.GameCode.GDPushableBoxObjects2_1final = [];

gdjs.GameCode.GDGroundObjects1= [];
gdjs.GameCode.GDGroundObjects2= [];
gdjs.GameCode.GDGroundObjects3= [];
gdjs.GameCode.GDGroundObjects4= [];
gdjs.GameCode.GDObstacleObjects1= [];
gdjs.GameCode.GDObstacleObjects2= [];
gdjs.GameCode.GDObstacleObjects3= [];
gdjs.GameCode.GDObstacleObjects4= [];
gdjs.GameCode.GDPushableBoxObjects1= [];
gdjs.GameCode.GDPushableBoxObjects2= [];
gdjs.GameCode.GDPushableBoxObjects3= [];
gdjs.GameCode.GDPushableBoxObjects4= [];
gdjs.GameCode.GDMovementJoystickObjects1= [];
gdjs.GameCode.GDMovementJoystickObjects2= [];
gdjs.GameCode.GDMovementJoystickObjects3= [];
gdjs.GameCode.GDMovementJoystickObjects4= [];
gdjs.GameCode.GDJumpButtonObjects1= [];
gdjs.GameCode.GDJumpButtonObjects2= [];
gdjs.GameCode.GDJumpButtonObjects3= [];
gdjs.GameCode.GDJumpButtonObjects4= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlayerObjects4= [];
gdjs.GameCode.GDControlsToggleObjects1= [];
gdjs.GameCode.GDControlsToggleObjects2= [];
gdjs.GameCode.GDControlsToggleObjects3= [];
gdjs.GameCode.GDControlsToggleObjects4= [];
gdjs.GameCode.GDMonsterObjects1= [];
gdjs.GameCode.GDMonsterObjects2= [];
gdjs.GameCode.GDMonsterObjects3= [];
gdjs.GameCode.GDMonsterObjects4= [];
gdjs.GameCode.GDPathfindingObstacleObjects1= [];
gdjs.GameCode.GDPathfindingObstacleObjects2= [];
gdjs.GameCode.GDPathfindingObstacleObjects3= [];
gdjs.GameCode.GDPathfindingObstacleObjects4= [];
gdjs.GameCode.GDFlashlightObjects1= [];
gdjs.GameCode.GDFlashlightObjects2= [];
gdjs.GameCode.GDFlashlightObjects3= [];
gdjs.GameCode.GDFlashlightObjects4= [];
gdjs.GameCode.GDmappatObjects1= [];
gdjs.GameCode.GDmappatObjects2= [];
gdjs.GameCode.GDmappatObjects3= [];
gdjs.GameCode.GDmappatObjects4= [];
gdjs.GameCode.GDHouse_9595Type_959501Objects1= [];
gdjs.GameCode.GDHouse_9595Type_959501Objects2= [];
gdjs.GameCode.GDHouse_9595Type_959501Objects3= [];
gdjs.GameCode.GDHouse_9595Type_959501Objects4= [];
gdjs.GameCode.GDInvisibleObstacleObjects1= [];
gdjs.GameCode.GDInvisibleObstacleObjects2= [];
gdjs.GameCode.GDInvisibleObstacleObjects3= [];
gdjs.GameCode.GDInvisibleObstacleObjects4= [];
gdjs.GameCode.GDDoor_9595StraightObjects1= [];
gdjs.GameCode.GDDoor_9595StraightObjects2= [];
gdjs.GameCode.GDDoor_9595StraightObjects3= [];
gdjs.GameCode.GDDoor_9595StraightObjects4= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.GameCode.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.GameCode.GDMovementJoystickObjects1);
{for(var i = 0, len = gdjs.GameCode.GDMovementJoystickObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMovementJoystickObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDJumpButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDMovementJoystickObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMovementJoystickObjects1[i].ActivateControl(false, null);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.GameCode.GDMonsterObjects2});
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDMonsterObjects2, gdjs.GameCode.GDMonsterObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMonsterObjects3.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDMonsterObjects3[i].getBehavior("Pathfinding").pathFound()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMonsterObjects3[k] = gdjs.GameCode.GDMonsterObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDMonsterObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects3);
/* Reuse gdjs.GameCode.GDMonsterObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDMonsterObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDMonsterObjects3[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.randomInRange((( gdjs.GameCode.GDGroundObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDGroundObjects3[0].getAABBLeft()), (( gdjs.GameCode.GDGroundObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDGroundObjects3[0].getAABBRight())), gdjs.randomInRange((( gdjs.GameCode.GDGroundObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDGroundObjects3[0].getAABBTop()), (( gdjs.GameCode.GDGroundObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDGroundObjects3[0].getAABBBottom())));
}
}
}

}


{

/* Reuse gdjs.GameCode.GDMonsterObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMonsterObjects2[i].getBehavior("Pathfinding").pathFound() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMonsterObjects2[k] = gdjs.GameCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMonsterObjects2[i].resetTimer("PositionChange");
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMonsterObjects3Objects = Hashtable.newFrom({"Monster": gdjs.GameCode.GDMonsterObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDObstacleObjects3ObjectsGDgdjs_9546GameCode_9546GDPushableBoxObjects3ObjectsGDgdjs_9546GameCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Obstacle": gdjs.GameCode.GDObstacleObjects3, "PushableBox": gdjs.GameCode.GDPushableBoxObjects3, "Player": gdjs.GameCode.GDPlayerObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects3});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22603012);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDMonsterObjects2, gdjs.GameCode.GDMonsterObjects3);

{for(var i = 0, len = gdjs.GameCode.GDMonsterObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDMonsterObjects3[i].getBehavior("Pathfinding").moveTo(runtimeScene, (gdjs.GameCode.GDMonsterObjects3[i].getX()), (gdjs.GameCode.GDMonsterObjects3[i].getY()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameCode.GDMonsterObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMonsterObjects2[i].getBehavior("Physics3D").applyForceTowardPosition(60, (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getCenterXInScene()), (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getCenterYInScene()), (gdjs.GameCode.GDMonsterObjects2[i].getBehavior("Object3D").getZ()));
}
}
{for(var i = 0, len = gdjs.GameCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMonsterObjects2[i].rotateTowardPosition((( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getCenterXInScene()), (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getCenterYInScene()), 0, runtimeScene);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMonsterObjects1Objects = Hashtable.newFrom({"Monster": gdjs.GameCode.GDMonsterObjects1});
gdjs.GameCode.asyncCallback24035388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(24035388, gdjs.GameCode.asyncCallback24035388);
gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.GameCode.asyncCallback24035388(runtimeScene, asyncObjectsList)), 24035388, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.GameCode.GDMonsterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMonsterObjects2[i].getVariableString(gdjs.GameCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)) == "Chasing" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMonsterObjects2[k] = gdjs.GameCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMonsterObjects2Objects, 600, true);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMonsterObjects2[i].returnVariable(gdjs.GameCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)).setString("Patrolling");
}
}
{for(var i = 0, len = gdjs.GameCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMonsterObjects2[i].resetTimer("PositionChange");
}
}
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.GameCode.GDMonsterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMonsterObjects2[i].getVariableString(gdjs.GameCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)) == "Patrolling" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMonsterObjects2[k] = gdjs.GameCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMonsterObjects2[i].getTimerElapsedTimeInSecondsOrNaN("PositionChange") >= 5 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMonsterObjects2[k] = gdjs.GameCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMonsterObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMonsterObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMonsterObjects2[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getCenterXInScene()), (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getCenterYInScene()));
}
}

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.GameCode.GDMonsterObjects2);
gdjs.GameCode.GDObstacleObjects2.length = 0;

gdjs.GameCode.GDPlayerObjects2.length = 0;

gdjs.GameCode.GDPushableBoxObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMonsterObjects2[i].getVariableString(gdjs.GameCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)) == "Patrolling" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMonsterObjects2[k] = gdjs.GameCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.GameCode.GDMonsterObjects2_1final.length = 0;
gdjs.GameCode.GDObstacleObjects2_1final.length = 0;
gdjs.GameCode.GDPlayerObjects2_1final.length = 0;
gdjs.GameCode.GDPushableBoxObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameCode.GDMonsterObjects2, gdjs.GameCode.GDMonsterObjects3);

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
isConditionTrue_1 = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMonsterObjects3Objects, 300, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDMonsterObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDMonsterObjects2_1final.indexOf(gdjs.GameCode.GDMonsterObjects3[j]) === -1 )
            gdjs.GameCode.GDMonsterObjects2_1final.push(gdjs.GameCode.GDMonsterObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDPlayerObjects2_1final.indexOf(gdjs.GameCode.GDPlayerObjects3[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects2_1final.push(gdjs.GameCode.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDMonsterObjects2, gdjs.GameCode.GDMonsterObjects3);

gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.GameCode.GDObstacleObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("PushableBox"), gdjs.GameCode.GDPushableBoxObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__Raycaster3D__RaycastWithAngle.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDObstacleObjects3ObjectsGDgdjs_9546GameCode_9546GDPushableBoxObjects3ObjectsGDgdjs_9546GameCode_9546GDPlayerObjects3Objects, (( gdjs.GameCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDMonsterObjects3[0].getCenterXInScene()), (( gdjs.GameCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDMonsterObjects3[0].getCenterYInScene()), (( gdjs.GameCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDMonsterObjects3[0].getBehavior("Object3D").getCenterZInScene()), (( gdjs.GameCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDMonsterObjects3[0].getAngle()), gdjs.toDegrees(Math.atan(((( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getBehavior("Object3D").getCenterZInScene()) - (( gdjs.GameCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDMonsterObjects3[0].getBehavior("Object3D").getCenterZInScene())) / (( gdjs.GameCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDMonsterObjects3[0].getDistanceToObject((gdjs.GameCode.GDPlayerObjects3.length !== 0 ? gdjs.GameCode.GDPlayerObjects3[0] : null))))), 600, null);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects) > 0;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDMonsterObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDMonsterObjects2_1final.indexOf(gdjs.GameCode.GDMonsterObjects3[j]) === -1 )
            gdjs.GameCode.GDMonsterObjects2_1final.push(gdjs.GameCode.GDMonsterObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDObstacleObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDObstacleObjects2_1final.indexOf(gdjs.GameCode.GDObstacleObjects3[j]) === -1 )
            gdjs.GameCode.GDObstacleObjects2_1final.push(gdjs.GameCode.GDObstacleObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDPlayerObjects2_1final.indexOf(gdjs.GameCode.GDPlayerObjects3[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects2_1final.push(gdjs.GameCode.GDPlayerObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDPushableBoxObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDPushableBoxObjects2_1final.indexOf(gdjs.GameCode.GDPushableBoxObjects3[j]) === -1 )
            gdjs.GameCode.GDPushableBoxObjects2_1final.push(gdjs.GameCode.GDPushableBoxObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDMonsterObjects2_1final, gdjs.GameCode.GDMonsterObjects2);
gdjs.copyArray(gdjs.GameCode.GDObstacleObjects2_1final, gdjs.GameCode.GDObstacleObjects2);
gdjs.copyArray(gdjs.GameCode.GDPlayerObjects2_1final, gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(gdjs.GameCode.GDPushableBoxObjects2_1final, gdjs.GameCode.GDPushableBoxObjects2);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMonsterObjects2[i].returnVariable(gdjs.GameCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)).setString("Chasing");
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "0cb760a522d3d9b9e29b08d1abd13cac9226be2ee970754e3e850f47209d4975_01 - rock city ransom.aac", 1, true, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.GameCode.GDMonsterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMonsterObjects2[i].getVariableString(gdjs.GameCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)) == "Chasing" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMonsterObjects2[k] = gdjs.GameCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.GameCode.GDMonsterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.haveObjectsStartedColliding(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, "Physics3D", gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMonsterObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "823b6a7f6747d704ae7d2bec3143c4ee702fe7344685400486594cbd3aeb71a2_Bleep_03.aac", false, 100, 1);
}

{ //Subevents
gdjs.GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDControlsToggleObjects1, gdjs.GameCode.GDControlsToggleObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDControlsToggleObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDControlsToggleObjects2[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDControlsToggleObjects2[k] = gdjs.GameCode.GDControlsToggleObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDControlsToggleObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.GameCode.GDJumpButtonObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Touch");
}
{for(var i = 0, len = gdjs.GameCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDJumpButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDJumpButtonObjects2[i].activateBehavior("MultitouchButton", true);
}
}
}

}


{

/* Reuse gdjs.GameCode.GDControlsToggleObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDControlsToggleObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDControlsToggleObjects1[i].IsChecked(null)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDControlsToggleObjects1[k] = gdjs.GameCode.GDControlsToggleObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDControlsToggleObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.GameCode.GDJumpButtonObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Keyboard");
}
{for(var i = 0, len = gdjs.GameCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDJumpButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDJumpButtonObjects1[i].activateBehavior("MultitouchButton", false);
}
}
}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.GameCode.GDControlsToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDControlsToggleObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDControlsToggleObjects1[i].HasJustBeenToggled(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDControlsToggleObjects1[k] = gdjs.GameCode.GDControlsToggleObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDControlsToggleObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDControlsToggleObjects1Objects = Hashtable.newFrom({"ControlsToggle": gdjs.GameCode.GDControlsToggleObjects1});
gdjs.GameCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.GameCode.GDControlsToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Keyboard");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDControlsToggleObjects1Objects, runtimeScene, true, true);
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


};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Flashlight"), gdjs.GameCode.GDFlashlightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDFlashlightObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlashlightObjects1[i].setPosition((( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getXFromAngleAndDistance((( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getAngle()) - 90, -20)),(( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.GameCode.GDFlashlightObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlashlightObjects1[i].getBehavior("Object3D").setZ((( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getBehavior("Object3D").getCenterZInScene()) + 38);
}
}
{for(var i = 0, len = gdjs.GameCode.GDFlashlightObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlashlightObjects1[i].getBehavior("Object3D").setRotationY(90 - gdjs.scene3d.camera.getCameraRotationX(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.GameCode.GDFlashlightObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlashlightObjects1[i].setAngle((( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getAngle()));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDoor_95959595StraightObjects1Objects = Hashtable.newFrom({"Door_Straight": gdjs.GameCode.GDDoor_9595StraightObjects1});
gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PathfindingObstacle"), gdjs.GameCode.GDPathfindingObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPathfindingObstacleObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPathfindingObstacleObjects1[i].hide();
}
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Fog", true);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "FullLight", false);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Forest", false);
}

{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


{


gdjs.GameCode.eventsList7(runtimeScene);
}


{


gdjs.GameCode.eventsList8(runtimeScene);
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
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").setForwardSpeedMax(600);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LShift");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").setForwardSpeedMax(300);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door_Straight"), gdjs.GameCode.GDDoor_9595StraightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.haveObjectsStartedColliding(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, "Physics3D", gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDoor_95959595StraightObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "House");
}
}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDGroundObjects1.length = 0;
gdjs.GameCode.GDGroundObjects2.length = 0;
gdjs.GameCode.GDGroundObjects3.length = 0;
gdjs.GameCode.GDGroundObjects4.length = 0;
gdjs.GameCode.GDObstacleObjects1.length = 0;
gdjs.GameCode.GDObstacleObjects2.length = 0;
gdjs.GameCode.GDObstacleObjects3.length = 0;
gdjs.GameCode.GDObstacleObjects4.length = 0;
gdjs.GameCode.GDPushableBoxObjects1.length = 0;
gdjs.GameCode.GDPushableBoxObjects2.length = 0;
gdjs.GameCode.GDPushableBoxObjects3.length = 0;
gdjs.GameCode.GDPushableBoxObjects4.length = 0;
gdjs.GameCode.GDMovementJoystickObjects1.length = 0;
gdjs.GameCode.GDMovementJoystickObjects2.length = 0;
gdjs.GameCode.GDMovementJoystickObjects3.length = 0;
gdjs.GameCode.GDMovementJoystickObjects4.length = 0;
gdjs.GameCode.GDJumpButtonObjects1.length = 0;
gdjs.GameCode.GDJumpButtonObjects2.length = 0;
gdjs.GameCode.GDJumpButtonObjects3.length = 0;
gdjs.GameCode.GDJumpButtonObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDControlsToggleObjects1.length = 0;
gdjs.GameCode.GDControlsToggleObjects2.length = 0;
gdjs.GameCode.GDControlsToggleObjects3.length = 0;
gdjs.GameCode.GDControlsToggleObjects4.length = 0;
gdjs.GameCode.GDMonsterObjects1.length = 0;
gdjs.GameCode.GDMonsterObjects2.length = 0;
gdjs.GameCode.GDMonsterObjects3.length = 0;
gdjs.GameCode.GDMonsterObjects4.length = 0;
gdjs.GameCode.GDPathfindingObstacleObjects1.length = 0;
gdjs.GameCode.GDPathfindingObstacleObjects2.length = 0;
gdjs.GameCode.GDPathfindingObstacleObjects3.length = 0;
gdjs.GameCode.GDPathfindingObstacleObjects4.length = 0;
gdjs.GameCode.GDFlashlightObjects1.length = 0;
gdjs.GameCode.GDFlashlightObjects2.length = 0;
gdjs.GameCode.GDFlashlightObjects3.length = 0;
gdjs.GameCode.GDFlashlightObjects4.length = 0;
gdjs.GameCode.GDmappatObjects1.length = 0;
gdjs.GameCode.GDmappatObjects2.length = 0;
gdjs.GameCode.GDmappatObjects3.length = 0;
gdjs.GameCode.GDmappatObjects4.length = 0;
gdjs.GameCode.GDHouse_9595Type_959501Objects1.length = 0;
gdjs.GameCode.GDHouse_9595Type_959501Objects2.length = 0;
gdjs.GameCode.GDHouse_9595Type_959501Objects3.length = 0;
gdjs.GameCode.GDHouse_9595Type_959501Objects4.length = 0;
gdjs.GameCode.GDInvisibleObstacleObjects1.length = 0;
gdjs.GameCode.GDInvisibleObstacleObjects2.length = 0;
gdjs.GameCode.GDInvisibleObstacleObjects3.length = 0;
gdjs.GameCode.GDInvisibleObstacleObjects4.length = 0;
gdjs.GameCode.GDDoor_9595StraightObjects1.length = 0;
gdjs.GameCode.GDDoor_9595StraightObjects2.length = 0;
gdjs.GameCode.GDDoor_9595StraightObjects3.length = 0;
gdjs.GameCode.GDDoor_9595StraightObjects4.length = 0;

gdjs.GameCode.eventsList9(runtimeScene);
gdjs.GameCode.GDGroundObjects1.length = 0;
gdjs.GameCode.GDGroundObjects2.length = 0;
gdjs.GameCode.GDGroundObjects3.length = 0;
gdjs.GameCode.GDGroundObjects4.length = 0;
gdjs.GameCode.GDObstacleObjects1.length = 0;
gdjs.GameCode.GDObstacleObjects2.length = 0;
gdjs.GameCode.GDObstacleObjects3.length = 0;
gdjs.GameCode.GDObstacleObjects4.length = 0;
gdjs.GameCode.GDPushableBoxObjects1.length = 0;
gdjs.GameCode.GDPushableBoxObjects2.length = 0;
gdjs.GameCode.GDPushableBoxObjects3.length = 0;
gdjs.GameCode.GDPushableBoxObjects4.length = 0;
gdjs.GameCode.GDMovementJoystickObjects1.length = 0;
gdjs.GameCode.GDMovementJoystickObjects2.length = 0;
gdjs.GameCode.GDMovementJoystickObjects3.length = 0;
gdjs.GameCode.GDMovementJoystickObjects4.length = 0;
gdjs.GameCode.GDJumpButtonObjects1.length = 0;
gdjs.GameCode.GDJumpButtonObjects2.length = 0;
gdjs.GameCode.GDJumpButtonObjects3.length = 0;
gdjs.GameCode.GDJumpButtonObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDControlsToggleObjects1.length = 0;
gdjs.GameCode.GDControlsToggleObjects2.length = 0;
gdjs.GameCode.GDControlsToggleObjects3.length = 0;
gdjs.GameCode.GDControlsToggleObjects4.length = 0;
gdjs.GameCode.GDMonsterObjects1.length = 0;
gdjs.GameCode.GDMonsterObjects2.length = 0;
gdjs.GameCode.GDMonsterObjects3.length = 0;
gdjs.GameCode.GDMonsterObjects4.length = 0;
gdjs.GameCode.GDPathfindingObstacleObjects1.length = 0;
gdjs.GameCode.GDPathfindingObstacleObjects2.length = 0;
gdjs.GameCode.GDPathfindingObstacleObjects3.length = 0;
gdjs.GameCode.GDPathfindingObstacleObjects4.length = 0;
gdjs.GameCode.GDFlashlightObjects1.length = 0;
gdjs.GameCode.GDFlashlightObjects2.length = 0;
gdjs.GameCode.GDFlashlightObjects3.length = 0;
gdjs.GameCode.GDFlashlightObjects4.length = 0;
gdjs.GameCode.GDmappatObjects1.length = 0;
gdjs.GameCode.GDmappatObjects2.length = 0;
gdjs.GameCode.GDmappatObjects3.length = 0;
gdjs.GameCode.GDmappatObjects4.length = 0;
gdjs.GameCode.GDHouse_9595Type_959501Objects1.length = 0;
gdjs.GameCode.GDHouse_9595Type_959501Objects2.length = 0;
gdjs.GameCode.GDHouse_9595Type_959501Objects3.length = 0;
gdjs.GameCode.GDHouse_9595Type_959501Objects4.length = 0;
gdjs.GameCode.GDInvisibleObstacleObjects1.length = 0;
gdjs.GameCode.GDInvisibleObstacleObjects2.length = 0;
gdjs.GameCode.GDInvisibleObstacleObjects3.length = 0;
gdjs.GameCode.GDInvisibleObstacleObjects4.length = 0;
gdjs.GameCode.GDDoor_9595StraightObjects1.length = 0;
gdjs.GameCode.GDDoor_9595StraightObjects2.length = 0;
gdjs.GameCode.GDDoor_9595StraightObjects3.length = 0;
gdjs.GameCode.GDDoor_9595StraightObjects4.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
