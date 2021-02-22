var analyze = require('analyze');
var execution = require('execution');
var maintenance = require('maintenance');
var optimise = require('optimise');

module.exports.loop = function()
{
    analyze.state_detection();
    analyze.map_zone();

    maintenance.call_maintenance();
}
