import * as express from 'express';
import { Request, Response } from 'express';
import * as WebSocket from 'ws';
import * as http from 'http';
import * as https from 'https';
import * as url from 'url';


function initialize(server: http.Server | https.Server) {
  const wss = new WebSocket.Server({ noServer: true });
  
  wss.on('connection', function connection(ws: WebSocket, req: http.IncomingMessage) {
    console.log('========================================================================')
    console.log('                          ???')
    console.log('========================================================================')
    //console.log(ws.url);
    console.log(req);
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });
  
    console.log('connected');
    ws.send('something from server');
  });

  server.on('upgrade', function upgrade(request, socket, head) {
    const pathname = url.parse(request.url).pathname;
  
    if (pathname === '/ws') {
      wss.handleUpgrade(request, socket, head, function done(ws) {
        wss.emit('connection', ws, request);
      });
    } else {
      socket.destroy();
    }
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


