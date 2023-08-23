import express from "express"
import bodyParser from "body-parser"
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
    
});
app.post("/", function(req,res){
    
})
    

app.listen(5000, function(){
    console.log("Server is running on port 5000");
});
