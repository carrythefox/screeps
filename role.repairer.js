var roleHarvester = require("role.harvester");


module.exports = {
    run: function(creep) 
    {
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
	       var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (c) => c.hits < c.hitsMax && c.structureType != StructureWall})
	       if(structure != undefined)
	       {
    	       if(creep.repair(structure) == ERR_NOT_IN_RANGE)
    	       {
    	           creep.moveTo(structure);
    	       }
	        }
	        else
	        {
	            roleHarvester.run(creep);
	        }
	   }
	}
};

