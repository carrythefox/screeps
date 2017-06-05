module.exports = function(){
    Creep.prototype.miner = function()
    {
        var room = this.room;
        if(this.memory.state == 0)
        {
            var sources = room.find(FIND_SOURCES);
            for(let ind in sources)
            {
                var source = sources[ind];
                var flag = room.lookAt(source.pos)[1];
                
                if(flag.type != "flag")
                {
                    room.createFlag(source.pos, this.name);
                    this.memory.target = source.id;
                    this.memory.state++
                    break;
                }
                
            }
            
            
        }
        else if(this.memory.state == 1)
        {
            var source = Game.getObjectById(this.memory.target);
            let err = this.harvest(source);
            if(err == ERR_NOT_IN_RANGE) this.moveTo(source);
        }
    }
};