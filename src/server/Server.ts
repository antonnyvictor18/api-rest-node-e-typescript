import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("Hello World");
  return;
});


export { server };
