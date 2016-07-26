var roleUpgrader = require('role.upgrader');

module.exports = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        if(creep.carry.energy == 0)
        {
            creep.memory.working = false;
        }
        else if(creep.carry.energy == creep.carryCapacity)
        {
            creep.memory.working = true;
        }
        
        
	   if(creep.memory.working == false)
	   {
	       var spawn = Game.spawns["Spawn1"]
	       if(creep.withdraw(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
	       {
	           creep.moveTo(spawn);
	       }
	   }
	   else
	   {
	       var site = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES)
	       if(site != undefined)
	       {
    	       if(creep.build(site) == ERR_NOT_IN_RANGE)
    	       {
    	           creep.moveTo(site)
    	       }
	       }
	       else
	       {
	           roleUpgrader.run(creep);
	       }
	   }
	}
};