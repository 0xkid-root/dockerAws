import express from 'express';
import {createServer} from 'http';
import {Server} from 'socket.io';
import {YSocketIO} from 'y-socket.io/dist/server';
const PORT =8080;


const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer);

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Hello World!",
        success:true,
    })
})

app.get('/health',(req,res)=>{
    res.status(200).json({
        messsage:"OK!",
        succcess:true
    })
})

httpServer.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
