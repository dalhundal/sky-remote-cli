var SkyRemote = require('sky-remote');

var args = process.argv.splice(2);
var ip = args.splice(0,1);
var commands = args;

var remoteControl = new SkyRemote('192.168.0.40');
remoteControl.press(commands);