module.exports = function (){
    StructureSpawn.prototype.updateQueue = function()
    {
        var mem = this.memory
        if(mem.queue == undefined){mem.queue = [];}
        
        //console.log("Updating spawning queue for " + this.name);
        for(let i = 0; i < mem.roles.length; i++)
        {
            var currentCreeps = _.filter(Game.creeps, (c) => c.memory.role == i);
            //console.log("\trole: " + i + " needed: " + (mem.roles[i]-currentCreeps.length));
            for(let j = 0; j < mem.roles[i]-currentCreeps.length; j++)
            {
                mem.queue.push(i);
            }
        }
    }
};