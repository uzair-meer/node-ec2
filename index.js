import express from "express"

const app = express();

app.listen(5000 , (req, res) =>{
    console.log('lisitnineif on pirt 5000')
})

app.get('/', (req, res) =>{
    res.json('testing ec2 app')
})