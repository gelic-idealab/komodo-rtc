// komodo-rtc WebRTC signaling server
// establishes and manages connections for 
// voice, video, and screen sharing calls

const app = require('express')();
const { ExpressPeerServer } = require('peer');


// peerjs server and handlers
const server = app.listen(9000);
const peerServer = ExpressPeerServer(server);
peerServer.on('connection', (client) => {
    console.log(`RTC connection: ${client.id}`);
});
app.use('/call', peerServer);