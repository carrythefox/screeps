var roleUpgrader = {

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
	        var c = creep.room.controller
	       if(creep.upgradeController(c) == ERR_NOT_IN_RANGE)
	       {
	           creep.moveTo(c);
	       }
	   }
	}
};

module.exports = roleUpgrader;