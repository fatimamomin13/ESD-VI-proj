const mongoose = require("mongoose");
const express = require("express");
const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//homepage
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

//geting required files
// app.get('/lowerTab.js', (req, res) => {
//     res.sendFile(__dirname + '/lowerTab.js');
// })

//read all quiz files
uploadDirectory = "/quiz"
fs.readdir(__dirname + uploadDirectory, function (err, files) {
    if (err) {
        return console.log("Unable to scan uploaded files: " + err);
    } 
    files.forEach(function (file) {
        app.get("/" + file, (req, res) => {
            uploadDirectory = "/quiz"
            res.sendFile(__dirname + uploadDirectory + "/" + file);
        })
    });
});

uploadDirectory = "/quiz/js"
fs.readdir(__dirname + uploadDirectory, function (err, files) {
    if (err) {
        return console.log("Unable to scan uploaded files: " + err);
    } 
    files.forEach(function (file) {
        app.get("/js/" + file, (req, res) => {
            uploadDirectory = "/quiz/js"
            res.sendFile(__dirname + uploadDirectory + "/" + file);
        })
    });
});

//read all uploaded files
uploadDirectory = "/uploads"
fs.readdir(__dirname + uploadDirectory, function (err, files) {
    if (err) {
        return console.log("Unable to scan uploaded files: " + err);
    } 
    files.forEach(function (file) {
        app.get("/" + file, (req, res) => {
            uploadDirectory = "/uploads"
            res.sendFile(__dirname + uploadDirectory + "/" + file);
        })
    });
});

//feedback and storage in mongoDB
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => console.log("Connected to mongoDB Successfully..."))
    .catch( (error) => console.log("Unable to connect to mongoDB: " + error) );
const feedbackSchema = new mongoose.Schema({
    msg: String
})
const feedbackModel = new mongoose.model("Feedback", feedbackSchema);

app.post("/feedback", async (req, res) => {
    feedback1 = new feedbackModel(req.body);
    //let result = await feedback1.save();
    //res.send(result);
    feedback1.save(function (err, feed) {
        if (err) return console.error(err);
        res.redirect('/')
    });
})

app.listen(8080, function() {
    console.log(`web server is listening on 8080!`)
})

// Chat room WebSocket
const server = http.createServer(express);
const wss = new WebSocket.Server({ server })
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        })
    })
})

server.listen(8989, function() {
  console.log(`Chat server is listening on 8989!`)
})
