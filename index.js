// komodo-rtc WebRTC signaling server
// establishes and manages connections for 
// voice, video, and screen sharing calls

const app = require('express')();
const { ExpressPeerServer } = require('peer');

const PORT = 9000;

// peerjs server and handlers
const server = app.listen(PORT);
const peerServer = ExpressPeerServer(server);
peerServer.on('connection', (client) => {
    console.log(`RTC connection: ${client.id}`);
});
app.use('/call', peerServer);

console.log(`RTC server listening on ${PORT}.`)