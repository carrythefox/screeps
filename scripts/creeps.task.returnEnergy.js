/** @param {Creep} creep **/
module.exports = function(creep)
{
    let s = Game.spawns.Spawn1;
    let err = creep.transfer(s, RESOURCE_ENERGY);
    if(s.energy == s.energyCapacity) 
    {
        return TASK_FAILED;
    }
    if(err == ERR_NOT_IN_RANGE)
    {
        creep.moveTo(s);
        return TASK_IN_PROGRESS
    }
    if(creep.carry.energy == 0)
    {
        return TASK_SUCCESSFUL;
    }
};