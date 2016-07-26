var roleBuilder = require('role.builder');

var roleHarvester = {

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
        
        
	   if(creep.memory.working == true)//
	   {
	       var spawn = Game.spawns["Spawn1"];
	       var s = creep.pos.findClosestByPath(FIND_STRUCTURES, 
	            { filter: (s) => (s.structureType == STRUCTURE_EXTENSION || s.structureType == STRUCTURE_SPAWN)  && s.energy < s.energyCapacity});
            
            if(s != undefined)
            {
    	       if(creep.transfer(s, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
    	       {
    	           creep.moveTo(s);
    	       }
            }
            else
            {
                roleBuilder.run(creep);
            }
	   }
	   else
	   {
	       var source = creep.pos.findClosestByPath(FIND_SOURCES);
	       if(creep.harvest(source) == ERR_NOT_IN_RANGE)
	       {
	           creep.moveTo(source);
	       }
	   }
	}
};

module.exports = roleHarvester;