import express from "express";

const app = express();
const port = 4000;

app.get("/test", (req, res) => {
    return res.json(data);
});

app.listen(port, () => {
    console.log("server use port at" + port);
});

const data = {
    name : "John",
    age : "20"
};

const test = {
    name : "a",
    age : 20
};