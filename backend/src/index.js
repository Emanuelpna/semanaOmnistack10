const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const http = require('http');
const { setupWebSocket } = require('./websocket');

const routes = require('./routes');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect(
  'mongodb+srv://emanuel:UDk3CR8j5GdM3Cx@semanaomnistack-sakmi.mongodb.net/week10?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(routes);

server.listen(3333);
