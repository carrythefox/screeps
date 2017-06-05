Creep.prototype.setTarget = function(t)
{
    this.memory.target = t.id;
}
Creep.prototype.getTarget = function()
{
    return Game.getObjectById(this.memory.target);
}
module.exports = Creep;