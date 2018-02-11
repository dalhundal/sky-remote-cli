#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2), {
    boolean: ['sky_q_legacy','sky_q'],
    default: {
        sky_q_legacy: false
    }
});

var ip = argv._.splice(0,1)[0]
var commands = argv._

var SkyRemote = require('sky-remote');

var remoteControl = argv.sky_q_legacy ? new SkyRemote(ip, SkyRemote.SKY_Q_LEGACY): new SkyRemote(ip);
remoteControl.press(commands);
