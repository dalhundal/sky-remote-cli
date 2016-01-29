#sky-remote-cli

A command line app to send remote control commands to a Sky TV box.

##Usage

#### Installation

You'll need to install this globally with the `-g` flag.

```
npm install -g sky-remote-cli
```

#### Controlling a Sky TV box

The first argument must be the IP address of the Sky box you want to control. All arguments after that are commands to send to the box - you can send just one command or many at once (they will be sent in sequence).

###### Turn the box on / off
```
sky-remote-cli 192.168.0.40 power
```

###### Channel up, pause, show info
```
sky-remote-cli 192.168.0.40 channelup pause info
```

###### Change channel to 101
```
sky-remote-cli 192.168.0.40 1 0 1
```

#### Remote control commands

`sky` `power`

`tvguide` `boxoffice` `services` `interactive`

`up` `down` `left` `right` `select`

`channelup` `channeldown` `i`

`backup` `text` `help`

`play` `pause` `rewind` `fastforward` `stop` `record`

`red` `green` `yellow` `blue`

`0` `1` `2` `3` `4` `5` `6` `7` `8` `9`