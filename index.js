// komodo-rtc WebRTC signaling server
// establishes and manages connections for 
// voice, video, and screen sharing calls

const { PeerServer } = require('peer');

const PORT = 9000;

const peerServer = PeerServer({
  port: PORT,
  path: '/call',
  proxied: true
});

peerServer.on('connection', (client) => {
    console.log(`RTC connection: ${client.id}`);
});

console.log(`RTC server listening on ${PORT}.`)