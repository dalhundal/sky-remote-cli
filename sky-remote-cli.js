#!/usr/bin/env node

var SkyRemote = require('sky-remote');

var args = process.argv.splice(2);
var ip = args.splice(0,1)[0];
var commands = args;

var remoteControl = new SkyRemote(ip);
remoteControl.press(commands);
