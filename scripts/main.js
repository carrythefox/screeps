
require('prototype.spawn')();
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');

Game.spawns["Spawn1"].memory.roles = [0,8,1,0,2]

module.exports.loop = function () {
    
    var spawn = Game.spawns["Spawn1"]
    if((spawn.memory.queue == undefined || spawn.memory.queue.length == 0) && spawn.canCreateCreep() !== ERR_BUSY)
    {
        spawn.updateQueue();
    }
    else if(spawn.canCreateCreep([WORK, CARRY, MOVE, MOVE]) == OK)
    {
        spawn.createCreep([WORK, CARRY, MOVE, MOVE], undefined, {role: spawn.memory.queue.shift()})
    }
   
    
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        switch(creep.memory.role)
        {
            case 1:
                roleHarvester.run(creep);
                break;
            case 2:
                roleUpgrader.run(creep);
                break;
            case 3:
                roleBuilder.run(creep);
                break;
            case 4:
                roleRepairer.run(creep);
                break;
            default:
                roleHarvester.run(creep);
                break;
        }
        
    }
    
    for(var i in Memory.creeps) {
        if(!Game.creeps[i]) {
            delete Memory.creeps[i];
            console.log(i + " died.");
        }
    }
}





