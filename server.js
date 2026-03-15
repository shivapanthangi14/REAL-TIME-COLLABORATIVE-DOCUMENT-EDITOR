const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = socketIo(server,{
  cors:{
    origin:"*"
  }
});

io.on("connection",(socket)=>{
  console.log("User connected");

  socket.on("send-text",(data)=>{
    socket.broadcast.emit("receive-text",data);
  });
});

server.listen(5000,()=>{
  console.log("Server running on port 5000");
});