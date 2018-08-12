import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';
import app from './app';
import appws from './app-ws';


const port: number = process.env.PORT === undefined ? 3000 : parseInt(process.env.PORT);
const serverConfig = {
  key: fs.readFileSync('local.key'),
  cert: fs.readFileSync('local.crt'),
};
const server: https.Server = https.createServer(serverConfig, app);

appws(server);

server.listen(port, '0.0.0.0', null, () => {
  console.log(`Server running. Visit https://localhost:${port} in Firefox/Chrome (note the HTTPS; there is no HTTP -> HTTPS redirect!)`);
});
