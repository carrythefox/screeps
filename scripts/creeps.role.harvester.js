module.exports = function(){
    Creep.prototype.harvester = function()
    {
        if(this.memory.state == 0)
        {
           let source = this.pos.findClosestByRange(FIND_SOURCES);
           this.memory.target = source.id;
           this.memory.state++;
          
        }
        else if(this.memory.state == 1)
        {
            let source = Game.getObjectById(this.memory.target);
            let err = this.harvest(source);
            if(err == ERR_NOT_IN_RANGE) this.moveTo(source);
            if(this.carry.energy == this.carryCapacity)
            {
                this.memory.state++;
                this.memory.target = Game.spawns.Spawn1.id;
            }
        }
        else if(this.memory.state == 2)
        {
            let s = Game.getObjectById(this.memory.target);
            if(s.energy == s.energyCapacity) this.memory.state++;
            else
            {
                let err = this.transfer(s, RESOURCE_ENERGY);
                if(err == ERR_NOT_IN_RANGE) this.moveTo(s);
                if(this.carry.energy == 0) this.memory.state = 0;
            }
        }
        else if(this.memory.state == 3)
        {
            if(this.carry.energy == this.carryCapacity) 
            {
                this.memory.state++;
                this.memory.target = this.room.controller.id;
            }
            else
            {
                let s = Game.spawns.Spawn1;
                let err = this.withdraw(s, RESOURCE_ENERGY);
                if(err = ERR_NOT_IN_RANGE) this.moveTo(s);
            }
        }
        else if(this.memory.state == 4)
        {
            let controller = Game.getObjectById(this.memory.target);
            let err = this.upgradeController(controller);
            if(err == ERR_NOT_IN_RANGE) this.moveTo(controller);
            if(this.carry.energy == 0) this.memory.state = 0;
        }
    }
    
};