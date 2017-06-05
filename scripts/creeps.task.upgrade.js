/** @param {Creep} creep **/
module.exports = function(creep)
{
    let controller = creep.getTarget();
    
    if(!controller instanceof StructureController) return TASK_INVALID_TARGET;
    
    let err = creep.upgradeController(controller);
    if(err == ERR_NOT_IN_RANGE)
    {
        creep.moveTo(controller);
    }
    if(creep.carry.energy == 0) return TASK_FINISHED;
};