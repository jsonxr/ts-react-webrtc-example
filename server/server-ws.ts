import * as express from 'express';
import { Request, Response } from 'express';
import * as WebSocket from 'ws';
import * as http from 'http';
import * as path from 'path';


function initialize(server: http.Server) {
  const wss = new WebSocket.Server({ server: server });
  wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });
  
    console.log('connected');
    ws.send('something from server');
  });
}

export default initialize;

// class WSConnection {
//   constructor(ws: WebSocket) {

//   }
// }

// class WSApp {
//   private wss: WebSocket.Server;
//   constructor(server: http.Server) {
//     this.wss = new WebSocket.Server({ server });
    
//     this.wss.on('connection', (ws: WebSocket) => {
//       ws.on('message')
//     });
//   }
// }

// const app: express.Application = express();


