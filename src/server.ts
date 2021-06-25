console.clear();

import express from "express";
import { mongoose } from "./config/database";
import { router } from "./config/routes";

const app = express();
const db = mongoose;


// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  next();
});

app.use(express.json());
app.use(router);


app.listen(1234, () => {
  console.log("O servidor está rodando...");
});
