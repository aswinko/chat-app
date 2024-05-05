import { Server } from "socket.io"
import http from "http"
import express from 'express'
import fs from "fs"



const app = express()


 app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "https://www.differentServerDomain.fr https://www.differentServerDomain.fr");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });


    // var options = {
    //     key: fs.readFileSync('/etc/letsencrypt/live/devpeter.net/privkey.pem'),
    //     cert: fs.readFileSync('/etc/letsencrypt/live/devpeter.net/fullchain.pem')
    // };

const server = http.createServer(app)
const io = new Server(server,{ cors: { origin: '*' } })

export const getReceiverSoceketId = (receiverId) => {
	return userSocketMap[receiverId];
}

const userSocketMap = {}; //{userId: socketId}


io.on("connection", (socket) => {
	console.log("user connected", socket.id);

	const userId = socket.handshake.query.userId;
	if (userId != "undefined") userSocketMap[userId] = socket.id;

	// io.emit() is used to send events to all the connected clients
	io.emit("getOnlineUsers", Object.keys(userSocketMap));

	// socket.on() is used to listen to the events. can be used both on client and server side
	socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);
		delete userSocketMap[userId];
		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});


export {app, io, server}