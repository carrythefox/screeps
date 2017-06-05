/** @param {Creep} creep **/
module.exports = function(creep)
{
    /** @type {Source} source **/
    let source = creep.getTarget();
    
    if(!source instanceof Source) return TASK_INVALID_TARGET;
    
    let err = creep.harvest(source);
    if(err == ERR_NOT_IN_RANGE) 
    {
        creep.moveTo(source);
        return TASK_IN_PROGRESS;
    }
    if(creep.carry.energy == creep.carryCapacity) return TASK_FINISHED;
};