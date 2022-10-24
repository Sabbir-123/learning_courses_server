const express = require ('express');
const cors = require('cors');
const app = express();
app.use(cors());
const Port = process.env.Port || 5000;

app.get("/", (req, res)=>{
    res.send("Now Server is running")
})

app.listen(Port, ()=>{
    console.log('first', Port);
})
