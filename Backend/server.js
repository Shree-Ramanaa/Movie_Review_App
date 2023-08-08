import express from "express"
import cors from "cors"
import reviews from "./api/reviews.route.js"

const app = express();

app.use(cors());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json());

app.use("/api/reviews",reviews);
app.use("*",(req,res) =>{
    res.status(404).json({error : "not found"})
})

export default app 