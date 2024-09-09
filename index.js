const express = require("express")
const {apidata} = require("./apidata")
const app = express();

const taskata = [{
    task: "Add laundry"
},
{
    task:"Add basket laundry"
},{
    task:"Meow meow"
}]

app.get(express.json());


app.get("/",(req,res)=>{

    res.status(200).send("IT is runnning")
})

app.get("/todo",(req,res)=>{
    res.status(200).send({data:taskata});
})

app.listen(5000);