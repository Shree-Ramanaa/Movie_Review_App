import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import dao from "./dao/reviewsDAO.js"

dotenv.config();



const MongoClient = mongodb.MongoClient;
const user_name =process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const uri = `mongodb+srv://${user_name}:${password}@cluster0.weogols.mongodb.net/?retryWrites=true&w=majority`;


const port = process.env.PORT || 3000;

MongoClient.connect(
    uri,
    {
        maxPoolSize : 50,
        wtimeoutMS : 2500,
        useNewUrlParser : true
    })
    .then(async client => {
        console.log("Db connection is successful\n");
        dao.injectDB(client);
        app.listen(port,
            ()=>{console.log("Listening at port",port)}
        );
    })
    .catch(err => {
        console.log("Error in db connection");
        console.error(err.stack);
        process.exit(1);
    }
);
