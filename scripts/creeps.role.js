require("creeps.role.harvester")();
require("creeps.role.miner")();
require("creeps.role.lorry")();
require("creeps.role.upgrader")();
require("creeps.memory");

Creep.prototype.run = function()
{
    var role = this.memory.role;
    if(this.spawning == false)
    {
        if(role == ROLE_HARVESTER)
        {
            this.harvester();
        }
        else if(role == ROLE_MINER)
        {
            this.miner();
        }
        else if(role == ROLE_LORRY)
        {
            this.lorry();
        }
        else if(role == ROLE_UPGRADER)
        {
           this.upgrader();
        }
        else
        {
            console.log("Unknown role: " + role);
            this.suicide();
        }
    }
}


module.exports = Creep;