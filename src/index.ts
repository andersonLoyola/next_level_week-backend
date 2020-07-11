import express from "express";
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("ola cara");
})

app.post('/user', (req, res) => {
    console.log(req.body);
})

app.listen(8080);