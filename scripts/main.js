require("constants");
require("creeps.role");


module.exports.loop = function()
{
    for (let name in Memory.creeps)
    {
        var creep = Game.creeps[name];
        var flag = Game.flags[name];
        if(creep == undefined)
        {
            if(flag != undefined) flag.remove();
            delete Memory.creeps[name];
            continue;
        }
        creep.run();
    }
}