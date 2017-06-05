module.exports = function(){
    Creep.prototype.lorry = function()
    {
        if(this.memory.state == false && this.carry.energy == 0) this.memory.state = true;
        else if(this.memory.state == true && this.carry.energy == this.carryCapacity) this.memory.state = false;

        if(this.memory.state == true)
        {
            var energyPos = this.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
            if(this.pickup(energyPos) == ERR_NOT_IN_RANGE) this.moveTo(energyPos);
        }
        else
        {
            var s = Game.spawns.Spawn1;
            if(this.transfer(s, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) this.moveTo(s);
        }
    }
};