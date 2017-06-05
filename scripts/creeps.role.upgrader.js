var task = require("creeps.task");

module.exports = function(){
    Creep.prototype.upgrader = function()
    {
        switch(this.memory.state)
        {
            case 0:
                let source = this.pos.findClosestByRange(FIND_SOURCES);
                this.setTarget(source);
                this.memory.state++;
                break;
            case 1:
                if(task.mine(this) == TASK_FINISHED) 
                {
                    this.setTarget(this.room.controller);
                    this.memory.state++;
                }
                break;
            case 2:
                if(task.upgrade(this) == TASK_FINISHED) this.memory.state = 0;
                break;
        }
    }
};