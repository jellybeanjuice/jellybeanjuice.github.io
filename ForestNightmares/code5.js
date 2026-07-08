gdjs.StartCode = {};
gdjs.StartCode.localVariables = [];
gdjs.StartCode.idToCallbackMap = new Map();
gdjs.StartCode.GDMonsterObjects2_1final = [];

gdjs.StartCode.GDObstacleObjects2_1final = [];

gdjs.StartCode.GDPlayerObjects2_1final = [];

gdjs.StartCode.GDPushableBoxObjects2_1final = [];

gdjs.StartCode.GDGroundObjects1= [];
gdjs.StartCode.GDGroundObjects2= [];
gdjs.StartCode.GDGroundObjects3= [];
gdjs.StartCode.GDGroundObjects4= [];
gdjs.StartCode.GDObstacleObjects1= [];
gdjs.StartCode.GDObstacleObjects2= [];
gdjs.StartCode.GDObstacleObjects3= [];
gdjs.StartCode.GDObstacleObjects4= [];
gdjs.StartCode.GDPushableBoxObjects1= [];
gdjs.StartCode.GDPushableBoxObjects2= [];
gdjs.StartCode.GDPushableBoxObjects3= [];
gdjs.StartCode.GDPushableBoxObjects4= [];
gdjs.StartCode.GDMovementJoystickObjects1= [];
gdjs.StartCode.GDMovementJoystickObjects2= [];
gdjs.StartCode.GDMovementJoystickObjects3= [];
gdjs.StartCode.GDMovementJoystickObjects4= [];
gdjs.StartCode.GDJumpButtonObjects1= [];
gdjs.StartCode.GDJumpButtonObjects2= [];
gdjs.StartCode.GDJumpButtonObjects3= [];
gdjs.StartCode.GDJumpButtonObjects4= [];
gdjs.StartCode.GDPlayerObjects1= [];
gdjs.StartCode.GDPlayerObjects2= [];
gdjs.StartCode.GDPlayerObjects3= [];
gdjs.StartCode.GDPlayerObjects4= [];
gdjs.StartCode.GDControlsToggleObjects1= [];
gdjs.StartCode.GDControlsToggleObjects2= [];
gdjs.StartCode.GDControlsToggleObjects3= [];
gdjs.StartCode.GDControlsToggleObjects4= [];
gdjs.StartCode.GDMonsterObjects1= [];
gdjs.StartCode.GDMonsterObjects2= [];
gdjs.StartCode.GDMonsterObjects3= [];
gdjs.StartCode.GDMonsterObjects4= [];
gdjs.StartCode.GDPathfindingObstacleObjects1= [];
gdjs.StartCode.GDPathfindingObstacleObjects2= [];
gdjs.StartCode.GDPathfindingObstacleObjects3= [];
gdjs.StartCode.GDPathfindingObstacleObjects4= [];
gdjs.StartCode.GDFlashlightObjects1= [];
gdjs.StartCode.GDFlashlightObjects2= [];
gdjs.StartCode.GDFlashlightObjects3= [];
gdjs.StartCode.GDFlashlightObjects4= [];
gdjs.StartCode.GDmappatObjects1= [];
gdjs.StartCode.GDmappatObjects2= [];
gdjs.StartCode.GDmappatObjects3= [];
gdjs.StartCode.GDmappatObjects4= [];
gdjs.StartCode.GDHouse_9595Type_959501Objects1= [];
gdjs.StartCode.GDHouse_9595Type_959501Objects2= [];
gdjs.StartCode.GDHouse_9595Type_959501Objects3= [];
gdjs.StartCode.GDHouse_9595Type_959501Objects4= [];
gdjs.StartCode.GDInvisibleObstacleObjects1= [];
gdjs.StartCode.GDInvisibleObstacleObjects2= [];
gdjs.StartCode.GDInvisibleObstacleObjects3= [];
gdjs.StartCode.GDInvisibleObstacleObjects4= [];
gdjs.StartCode.GDNew3DModelObjects1= [];
gdjs.StartCode.GDNew3DModelObjects2= [];
gdjs.StartCode.GDNew3DModelObjects3= [];
gdjs.StartCode.GDNew3DModelObjects4= [];
gdjs.StartCode.GDDoor_9595StraightObjects1= [];
gdjs.StartCode.GDDoor_9595StraightObjects2= [];
gdjs.StartCode.GDDoor_9595StraightObjects3= [];
gdjs.StartCode.GDDoor_9595StraightObjects4= [];
gdjs.StartCode.GDFadeObjects1= [];
gdjs.StartCode.GDFadeObjects2= [];
gdjs.StartCode.GDFadeObjects3= [];
gdjs.StartCode.GDFadeObjects4= [];


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.StartCode.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.StartCode.GDMovementJoystickObjects1);
{for(var i = 0, len = gdjs.StartCode.GDMovementJoystickObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDMovementJoystickObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StartCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDJumpButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StartCode.GDMovementJoystickObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDMovementJoystickObjects1[i].ActivateControl(false, null);
}
}
}

}


};gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.StartCode.GDPlayerObjects2});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.StartCode.GDMonsterObjects2});
gdjs.StartCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.StartCode.GDMonsterObjects2, gdjs.StartCode.GDMonsterObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDMonsterObjects3.length;i<l;++i) {
    if ( !(gdjs.StartCode.GDMonsterObjects3[i].getBehavior("Pathfinding").pathFound()) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDMonsterObjects3[k] = gdjs.StartCode.GDMonsterObjects3[i];
        ++k;
    }
}
gdjs.StartCode.GDMonsterObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.StartCode.GDGroundObjects3);
/* Reuse gdjs.StartCode.GDMonsterObjects3 */
{for(var i = 0, len = gdjs.StartCode.GDMonsterObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDMonsterObjects3[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.randomInRange((( gdjs.StartCode.GDGroundObjects3.length === 0 ) ? 0 :gdjs.StartCode.GDGroundObjects3[0].getAABBLeft()), (( gdjs.StartCode.GDGroundObjects3.length === 0 ) ? 0 :gdjs.StartCode.GDGroundObjects3[0].getAABBRight())), gdjs.randomInRange((( gdjs.StartCode.GDGroundObjects3.length === 0 ) ? 0 :gdjs.StartCode.GDGroundObjects3[0].getAABBTop()), (( gdjs.StartCode.GDGroundObjects3.length === 0 ) ? 0 :gdjs.StartCode.GDGroundObjects3[0].getAABBBottom())));
}
}
}

}


{

/* Reuse gdjs.StartCode.GDMonsterObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDMonsterObjects2[i].getBehavior("Pathfinding").pathFound() ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDMonsterObjects2[k] = gdjs.StartCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDMonsterObjects2[i].resetTimer("PositionChange");
}
}
}

}


};gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.StartCode.GDPlayerObjects3});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDMonsterObjects3Objects = Hashtable.newFrom({"Monster": gdjs.StartCode.GDMonsterObjects3});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDObstacleObjects3ObjectsGDgdjs_9546StartCode_9546GDPushableBoxObjects3ObjectsGDgdjs_9546StartCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Obstacle": gdjs.StartCode.GDObstacleObjects3, "PushableBox": gdjs.StartCode.GDPushableBoxObjects3, "Player": gdjs.StartCode.GDPlayerObjects3});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.StartCode.GDPlayerObjects3});
gdjs.StartCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11401684);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.StartCode.GDMonsterObjects2, gdjs.StartCode.GDMonsterObjects3);

{for(var i = 0, len = gdjs.StartCode.GDMonsterObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDMonsterObjects3[i].getBehavior("Pathfinding").moveTo(runtimeScene, (gdjs.StartCode.GDMonsterObjects3[i].getX()), (gdjs.StartCode.GDMonsterObjects3[i].getY()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.StartCode.GDMonsterObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.StartCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDMonsterObjects2[i].getBehavior("Physics3D").applyForceTowardPosition(120, (( gdjs.StartCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects2[0].getCenterXInScene()), (( gdjs.StartCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects2[0].getCenterYInScene()), (gdjs.StartCode.GDMonsterObjects2[i].getBehavior("Object3D").getZ()));
}
}
{for(var i = 0, len = gdjs.StartCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDMonsterObjects2[i].rotateTowardPosition((( gdjs.StartCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects2[0].getCenterXInScene()), (( gdjs.StartCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects2[0].getCenterYInScene()), 0, runtimeScene);
}
}
}

}


};gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.StartCode.GDPlayerObjects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDMonsterObjects1Objects = Hashtable.newFrom({"Monster": gdjs.StartCode.GDMonsterObjects1});
gdjs.StartCode.asyncCallback10988796 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.StartCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}
gdjs.StartCode.localVariables.length = 0;
}
gdjs.StartCode.idToCallbackMap.set(10988796, gdjs.StartCode.asyncCallback10988796);
gdjs.StartCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.StartCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.StartCode.asyncCallback10988796(runtimeScene, asyncObjectsList)), 10988796, asyncObjectsList);
}
}

}


};gdjs.StartCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.StartCode.GDMonsterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDMonsterObjects2[i].getVariableString(gdjs.StartCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)) == "Chasing" ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDMonsterObjects2[k] = gdjs.StartCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects2Objects, gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDMonsterObjects2Objects, 600, true);
}
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDMonsterObjects2[i].returnVariable(gdjs.StartCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)).setString("Patrolling");
}
}
{for(var i = 0, len = gdjs.StartCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDMonsterObjects2[i].resetTimer("PositionChange");
}
}
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.StartCode.GDMonsterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDMonsterObjects2[i].getVariableString(gdjs.StartCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)) == "Patrolling" ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDMonsterObjects2[k] = gdjs.StartCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDMonsterObjects2[i].getTimerElapsedTimeInSecondsOrNaN("PositionChange") >= 5 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDMonsterObjects2[k] = gdjs.StartCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDMonsterObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDMonsterObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.StartCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDMonsterObjects2[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.StartCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects2[0].getCenterXInScene()), (( gdjs.StartCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects2[0].getCenterYInScene()));
}
}

{ //Subevents
gdjs.StartCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.StartCode.GDMonsterObjects2);
gdjs.StartCode.GDObstacleObjects2.length = 0;

gdjs.StartCode.GDPlayerObjects2.length = 0;

gdjs.StartCode.GDPushableBoxObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDMonsterObjects2[i].getVariableString(gdjs.StartCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)) == "Patrolling" ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDMonsterObjects2[k] = gdjs.StartCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.StartCode.GDMonsterObjects2_1final.length = 0;
gdjs.StartCode.GDObstacleObjects2_1final.length = 0;
gdjs.StartCode.GDPlayerObjects2_1final.length = 0;
gdjs.StartCode.GDPushableBoxObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.StartCode.GDMonsterObjects2, gdjs.StartCode.GDMonsterObjects3);

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects3);
isConditionTrue_1 = gdjs.evtTools.object.distanceTest(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects3Objects, gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDMonsterObjects3Objects, 300, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.StartCode.GDMonsterObjects3.length; j < jLen ; ++j) {
        if ( gdjs.StartCode.GDMonsterObjects2_1final.indexOf(gdjs.StartCode.GDMonsterObjects3[j]) === -1 )
            gdjs.StartCode.GDMonsterObjects2_1final.push(gdjs.StartCode.GDMonsterObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.StartCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.StartCode.GDPlayerObjects2_1final.indexOf(gdjs.StartCode.GDPlayerObjects3[j]) === -1 )
            gdjs.StartCode.GDPlayerObjects2_1final.push(gdjs.StartCode.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.StartCode.GDMonsterObjects2, gdjs.StartCode.GDMonsterObjects3);

gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.StartCode.GDObstacleObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("PushableBox"), gdjs.StartCode.GDPushableBoxObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__Raycaster3D__RaycastWithAngle.func(runtimeScene, gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDObstacleObjects3ObjectsGDgdjs_9546StartCode_9546GDPushableBoxObjects3ObjectsGDgdjs_9546StartCode_9546GDPlayerObjects3Objects, (( gdjs.StartCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.StartCode.GDMonsterObjects3[0].getCenterXInScene()), (( gdjs.StartCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.StartCode.GDMonsterObjects3[0].getCenterYInScene()), (( gdjs.StartCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.StartCode.GDMonsterObjects3[0].getBehavior("Object3D").getCenterZInScene()), (( gdjs.StartCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.StartCode.GDMonsterObjects3[0].getAngle()), gdjs.toDegrees(Math.atan(((( gdjs.StartCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects3[0].getBehavior("Object3D").getCenterZInScene()) - (( gdjs.StartCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.StartCode.GDMonsterObjects3[0].getBehavior("Object3D").getCenterZInScene())) / (( gdjs.StartCode.GDMonsterObjects3.length === 0 ) ? 0 :gdjs.StartCode.GDMonsterObjects3[0].getDistanceToObject((gdjs.StartCode.GDPlayerObjects3.length !== 0 ? gdjs.StartCode.GDPlayerObjects3[0] : null))))), 600, null);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects3Objects) > 0;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.StartCode.GDMonsterObjects3.length; j < jLen ; ++j) {
        if ( gdjs.StartCode.GDMonsterObjects2_1final.indexOf(gdjs.StartCode.GDMonsterObjects3[j]) === -1 )
            gdjs.StartCode.GDMonsterObjects2_1final.push(gdjs.StartCode.GDMonsterObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.StartCode.GDObstacleObjects3.length; j < jLen ; ++j) {
        if ( gdjs.StartCode.GDObstacleObjects2_1final.indexOf(gdjs.StartCode.GDObstacleObjects3[j]) === -1 )
            gdjs.StartCode.GDObstacleObjects2_1final.push(gdjs.StartCode.GDObstacleObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.StartCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.StartCode.GDPlayerObjects2_1final.indexOf(gdjs.StartCode.GDPlayerObjects3[j]) === -1 )
            gdjs.StartCode.GDPlayerObjects2_1final.push(gdjs.StartCode.GDPlayerObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.StartCode.GDPushableBoxObjects3.length; j < jLen ; ++j) {
        if ( gdjs.StartCode.GDPushableBoxObjects2_1final.indexOf(gdjs.StartCode.GDPushableBoxObjects3[j]) === -1 )
            gdjs.StartCode.GDPushableBoxObjects2_1final.push(gdjs.StartCode.GDPushableBoxObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.StartCode.GDMonsterObjects2_1final, gdjs.StartCode.GDMonsterObjects2);
gdjs.copyArray(gdjs.StartCode.GDObstacleObjects2_1final, gdjs.StartCode.GDObstacleObjects2);
gdjs.copyArray(gdjs.StartCode.GDPlayerObjects2_1final, gdjs.StartCode.GDPlayerObjects2);
gdjs.copyArray(gdjs.StartCode.GDPushableBoxObjects2_1final, gdjs.StartCode.GDPushableBoxObjects2);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDMonsterObjects2[i].returnVariable(gdjs.StartCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)).setString("Chasing");
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "5de189bcb6bd33d94771d296ecd55fd6ecebdcc3307a129c73cfe930f048ad58_Run_01.wav", 1, true, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.StartCode.GDMonsterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDMonsterObjects2[i].getVariableString(gdjs.StartCode.GDMonsterObjects2[i].getVariables().getFromIndex(0)) == "Chasing" ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDMonsterObjects2[k] = gdjs.StartCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.StartCode.GDMonsterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.haveObjectsStartedColliding(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects1Objects, "Physics3D", gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDMonsterObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "823b6a7f6747d704ae7d2bec3143c4ee702fe7344685400486594cbd3aeb71a2_Bleep_03.aac", false, 100, 1);
}

{ //Subevents
gdjs.StartCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.StartCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.StartCode.GDControlsToggleObjects1, gdjs.StartCode.GDControlsToggleObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDControlsToggleObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDControlsToggleObjects2[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDControlsToggleObjects2[k] = gdjs.StartCode.GDControlsToggleObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDControlsToggleObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.StartCode.GDJumpButtonObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Touch");
}
{for(var i = 0, len = gdjs.StartCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDJumpButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.StartCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDJumpButtonObjects2[i].activateBehavior("MultitouchButton", true);
}
}
}

}


{

/* Reuse gdjs.StartCode.GDControlsToggleObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDControlsToggleObjects1.length;i<l;++i) {
    if ( !(gdjs.StartCode.GDControlsToggleObjects1[i].IsChecked(null)) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDControlsToggleObjects1[k] = gdjs.StartCode.GDControlsToggleObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDControlsToggleObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.StartCode.GDJumpButtonObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Keyboard");
}
{for(var i = 0, len = gdjs.StartCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDJumpButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StartCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDJumpButtonObjects1[i].activateBehavior("MultitouchButton", false);
}
}
}

}


};gdjs.StartCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.StartCode.GDControlsToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDControlsToggleObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDControlsToggleObjects1[i].HasJustBeenToggled(null) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDControlsToggleObjects1[k] = gdjs.StartCode.GDControlsToggleObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDControlsToggleObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDControlsToggleObjects1Objects = Hashtable.newFrom({"ControlsToggle": gdjs.StartCode.GDControlsToggleObjects1});
gdjs.StartCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.StartCode.GDControlsToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Keyboard");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDControlsToggleObjects1Objects, runtimeScene, true, true);
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


};gdjs.StartCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Flashlight"), gdjs.StartCode.GDFlashlightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.StartCode.GDFlashlightObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDFlashlightObjects1[i].setPosition((( gdjs.StartCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects1[0].getXFromAngleAndDistance((( gdjs.StartCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects1[0].getAngle()) - 90, -20)),(( gdjs.StartCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects1[0].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.StartCode.GDFlashlightObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDFlashlightObjects1[i].getBehavior("Object3D").setZ((( gdjs.StartCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects1[0].getBehavior("Object3D").getCenterZInScene()) + 38);
}
}
{for(var i = 0, len = gdjs.StartCode.GDFlashlightObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDFlashlightObjects1[i].getBehavior("Object3D").setRotationY(90 - gdjs.scene3d.camera.getCameraRotationX(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.StartCode.GDFlashlightObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDFlashlightObjects1[i].setAngle((( gdjs.StartCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects1[0].getAngle()));
}
}
}

}


};gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.StartCode.GDPlayerObjects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDDoor_95959595StraightObjects1Objects = Hashtable.newFrom({"Door_Straight": gdjs.StartCode.GDDoor_9595StraightObjects1});
gdjs.StartCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PathfindingObstacle"), gdjs.StartCode.GDPathfindingObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StartCode.GDPathfindingObstacleObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPathfindingObstacleObjects1[i].hide();
}
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Fog", true);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "FullLight", false);
}

{ //Subevents
gdjs.StartCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.StartCode.eventsList4(runtimeScene);
}


{


gdjs.StartCode.eventsList6(runtimeScene);
}


{


gdjs.StartCode.eventsList7(runtimeScene);
}


{


gdjs.StartCode.eventsList8(runtimeScene);
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
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").setForwardSpeedMax(600);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LShift");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").setForwardSpeedMax(300);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fade"), gdjs.StartCode.GDFadeObjects1);
{for(var i = 0, len = gdjs.StartCode.GDFadeObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Test", 0, "linear", 2, true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door_Straight"), gdjs.StartCode.GDDoor_9595StraightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.haveObjectsStartedColliding(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects1Objects, "Physics3D", gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDDoor_95959595StraightObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDGroundObjects1.length = 0;
gdjs.StartCode.GDGroundObjects2.length = 0;
gdjs.StartCode.GDGroundObjects3.length = 0;
gdjs.StartCode.GDGroundObjects4.length = 0;
gdjs.StartCode.GDObstacleObjects1.length = 0;
gdjs.StartCode.GDObstacleObjects2.length = 0;
gdjs.StartCode.GDObstacleObjects3.length = 0;
gdjs.StartCode.GDObstacleObjects4.length = 0;
gdjs.StartCode.GDPushableBoxObjects1.length = 0;
gdjs.StartCode.GDPushableBoxObjects2.length = 0;
gdjs.StartCode.GDPushableBoxObjects3.length = 0;
gdjs.StartCode.GDPushableBoxObjects4.length = 0;
gdjs.StartCode.GDMovementJoystickObjects1.length = 0;
gdjs.StartCode.GDMovementJoystickObjects2.length = 0;
gdjs.StartCode.GDMovementJoystickObjects3.length = 0;
gdjs.StartCode.GDMovementJoystickObjects4.length = 0;
gdjs.StartCode.GDJumpButtonObjects1.length = 0;
gdjs.StartCode.GDJumpButtonObjects2.length = 0;
gdjs.StartCode.GDJumpButtonObjects3.length = 0;
gdjs.StartCode.GDJumpButtonObjects4.length = 0;
gdjs.StartCode.GDPlayerObjects1.length = 0;
gdjs.StartCode.GDPlayerObjects2.length = 0;
gdjs.StartCode.GDPlayerObjects3.length = 0;
gdjs.StartCode.GDPlayerObjects4.length = 0;
gdjs.StartCode.GDControlsToggleObjects1.length = 0;
gdjs.StartCode.GDControlsToggleObjects2.length = 0;
gdjs.StartCode.GDControlsToggleObjects3.length = 0;
gdjs.StartCode.GDControlsToggleObjects4.length = 0;
gdjs.StartCode.GDMonsterObjects1.length = 0;
gdjs.StartCode.GDMonsterObjects2.length = 0;
gdjs.StartCode.GDMonsterObjects3.length = 0;
gdjs.StartCode.GDMonsterObjects4.length = 0;
gdjs.StartCode.GDPathfindingObstacleObjects1.length = 0;
gdjs.StartCode.GDPathfindingObstacleObjects2.length = 0;
gdjs.StartCode.GDPathfindingObstacleObjects3.length = 0;
gdjs.StartCode.GDPathfindingObstacleObjects4.length = 0;
gdjs.StartCode.GDFlashlightObjects1.length = 0;
gdjs.StartCode.GDFlashlightObjects2.length = 0;
gdjs.StartCode.GDFlashlightObjects3.length = 0;
gdjs.StartCode.GDFlashlightObjects4.length = 0;
gdjs.StartCode.GDmappatObjects1.length = 0;
gdjs.StartCode.GDmappatObjects2.length = 0;
gdjs.StartCode.GDmappatObjects3.length = 0;
gdjs.StartCode.GDmappatObjects4.length = 0;
gdjs.StartCode.GDHouse_9595Type_959501Objects1.length = 0;
gdjs.StartCode.GDHouse_9595Type_959501Objects2.length = 0;
gdjs.StartCode.GDHouse_9595Type_959501Objects3.length = 0;
gdjs.StartCode.GDHouse_9595Type_959501Objects4.length = 0;
gdjs.StartCode.GDInvisibleObstacleObjects1.length = 0;
gdjs.StartCode.GDInvisibleObstacleObjects2.length = 0;
gdjs.StartCode.GDInvisibleObstacleObjects3.length = 0;
gdjs.StartCode.GDInvisibleObstacleObjects4.length = 0;
gdjs.StartCode.GDNew3DModelObjects1.length = 0;
gdjs.StartCode.GDNew3DModelObjects2.length = 0;
gdjs.StartCode.GDNew3DModelObjects3.length = 0;
gdjs.StartCode.GDNew3DModelObjects4.length = 0;
gdjs.StartCode.GDDoor_9595StraightObjects1.length = 0;
gdjs.StartCode.GDDoor_9595StraightObjects2.length = 0;
gdjs.StartCode.GDDoor_9595StraightObjects3.length = 0;
gdjs.StartCode.GDDoor_9595StraightObjects4.length = 0;
gdjs.StartCode.GDFadeObjects1.length = 0;
gdjs.StartCode.GDFadeObjects2.length = 0;
gdjs.StartCode.GDFadeObjects3.length = 0;
gdjs.StartCode.GDFadeObjects4.length = 0;

gdjs.StartCode.eventsList9(runtimeScene);
gdjs.StartCode.GDGroundObjects1.length = 0;
gdjs.StartCode.GDGroundObjects2.length = 0;
gdjs.StartCode.GDGroundObjects3.length = 0;
gdjs.StartCode.GDGroundObjects4.length = 0;
gdjs.StartCode.GDObstacleObjects1.length = 0;
gdjs.StartCode.GDObstacleObjects2.length = 0;
gdjs.StartCode.GDObstacleObjects3.length = 0;
gdjs.StartCode.GDObstacleObjects4.length = 0;
gdjs.StartCode.GDPushableBoxObjects1.length = 0;
gdjs.StartCode.GDPushableBoxObjects2.length = 0;
gdjs.StartCode.GDPushableBoxObjects3.length = 0;
gdjs.StartCode.GDPushableBoxObjects4.length = 0;
gdjs.StartCode.GDMovementJoystickObjects1.length = 0;
gdjs.StartCode.GDMovementJoystickObjects2.length = 0;
gdjs.StartCode.GDMovementJoystickObjects3.length = 0;
gdjs.StartCode.GDMovementJoystickObjects4.length = 0;
gdjs.StartCode.GDJumpButtonObjects1.length = 0;
gdjs.StartCode.GDJumpButtonObjects2.length = 0;
gdjs.StartCode.GDJumpButtonObjects3.length = 0;
gdjs.StartCode.GDJumpButtonObjects4.length = 0;
gdjs.StartCode.GDPlayerObjects1.length = 0;
gdjs.StartCode.GDPlayerObjects2.length = 0;
gdjs.StartCode.GDPlayerObjects3.length = 0;
gdjs.StartCode.GDPlayerObjects4.length = 0;
gdjs.StartCode.GDControlsToggleObjects1.length = 0;
gdjs.StartCode.GDControlsToggleObjects2.length = 0;
gdjs.StartCode.GDControlsToggleObjects3.length = 0;
gdjs.StartCode.GDControlsToggleObjects4.length = 0;
gdjs.StartCode.GDMonsterObjects1.length = 0;
gdjs.StartCode.GDMonsterObjects2.length = 0;
gdjs.StartCode.GDMonsterObjects3.length = 0;
gdjs.StartCode.GDMonsterObjects4.length = 0;
gdjs.StartCode.GDPathfindingObstacleObjects1.length = 0;
gdjs.StartCode.GDPathfindingObstacleObjects2.length = 0;
gdjs.StartCode.GDPathfindingObstacleObjects3.length = 0;
gdjs.StartCode.GDPathfindingObstacleObjects4.length = 0;
gdjs.StartCode.GDFlashlightObjects1.length = 0;
gdjs.StartCode.GDFlashlightObjects2.length = 0;
gdjs.StartCode.GDFlashlightObjects3.length = 0;
gdjs.StartCode.GDFlashlightObjects4.length = 0;
gdjs.StartCode.GDmappatObjects1.length = 0;
gdjs.StartCode.GDmappatObjects2.length = 0;
gdjs.StartCode.GDmappatObjects3.length = 0;
gdjs.StartCode.GDmappatObjects4.length = 0;
gdjs.StartCode.GDHouse_9595Type_959501Objects1.length = 0;
gdjs.StartCode.GDHouse_9595Type_959501Objects2.length = 0;
gdjs.StartCode.GDHouse_9595Type_959501Objects3.length = 0;
gdjs.StartCode.GDHouse_9595Type_959501Objects4.length = 0;
gdjs.StartCode.GDInvisibleObstacleObjects1.length = 0;
gdjs.StartCode.GDInvisibleObstacleObjects2.length = 0;
gdjs.StartCode.GDInvisibleObstacleObjects3.length = 0;
gdjs.StartCode.GDInvisibleObstacleObjects4.length = 0;
gdjs.StartCode.GDNew3DModelObjects1.length = 0;
gdjs.StartCode.GDNew3DModelObjects2.length = 0;
gdjs.StartCode.GDNew3DModelObjects3.length = 0;
gdjs.StartCode.GDNew3DModelObjects4.length = 0;
gdjs.StartCode.GDDoor_9595StraightObjects1.length = 0;
gdjs.StartCode.GDDoor_9595StraightObjects2.length = 0;
gdjs.StartCode.GDDoor_9595StraightObjects3.length = 0;
gdjs.StartCode.GDDoor_9595StraightObjects4.length = 0;
gdjs.StartCode.GDFadeObjects1.length = 0;
gdjs.StartCode.GDFadeObjects2.length = 0;
gdjs.StartCode.GDFadeObjects3.length = 0;
gdjs.StartCode.GDFadeObjects4.length = 0;


return;

}

gdjs['StartCode'] = gdjs.StartCode;
