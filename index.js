const express = require('express')();
express.get('/', (req, res) => res.send('<!-- auto-pinging 525316393768452098 -->'))
express.listen(3000);
const sleep = require('util').promisify(setTimeout);

const mineflayer = require('mineflayer')
const bot = mineflayer.createBot({
  host: 'play.parsermc.ga', // minecraft server ip
  username: 'uptimer', // minecraft username
  port: '46009'
  
  // minecraft password, comment out if you want to log into online-mode=false servers
  // port: 25565,                // only set if you need a port that isn't 25565
  // version: false,             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
  // auth: 'mojang'              // only set if you need microsoft auth, then set this to '
})
