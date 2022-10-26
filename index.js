const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const Port = process.env.Port || 5000;

const categories = require("./Data/categories.json");
const blockchain = require('./Data/data.json');


app.get("/", (req, res) => {
  res.send("Now Server is running");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const category_details = blockchain.filter((n) => n.category_id === id);
  res.send(category_details);
});


app.get('/blockchain', (req, res) =>{
    res.send(blockchain);
});

app.get('/blockchain/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = blockchain.find(n => n._id === id);
    res.send(selectedNews);
});

app.get('/premium', (req, res) =>{
    res.send(blockchain);
});

app.get('/premium/:id', (req, res)=>{
    const id = req.params.id;
    const selectedNews = blockchain.find(n => n._id === id);
    res.send(selectedNews);
})

app.listen(Port, () => {
  console.log("first", Port);
});

module.exports=app;
