var net = require("net");
var HOST = "127.0.0.1";
var PORT = 3200;

var socket_server = net.createServer ( c =>{
    console.log("one client connect");
    c.on("end",()=>{
        console.log("client disconnect");
    })
    c.write("hello connect");
    console.log(c.address());
})

socket_server.on("error",(err)=>{
    console.log(err.message);
})
socket_server.listen(PORT,()=>{
    console.log("server bind");
})