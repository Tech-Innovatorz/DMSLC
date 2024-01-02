import {default as express} from 'express'
import {default as dotenv} from 'dotenv'
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

import { Server } from 'socket.io';
import http from 'http';

const app = express()
const server = http.createServer(app);

const io= new Server(server,{
    cors:{
        origin:"*"
    }
})

io.on("connection",(socket)=>{
    console.log("user connected")
    // socket.on()
    socket.on("send_message",(data)=>{
        //console.log(data);
        socket.broadcast.emit("recieve_message",data)
    })
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', router);

dotenv.config();

const PORT = process.env.SERVER_PORT_NUMBER;

server.listen(PORT, () => console.log(`Server running successfully on port 8800!!`));




