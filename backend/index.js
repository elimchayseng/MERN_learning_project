import express from "express";
import mongoose from 'mongoose'
import bodyParser from "body-parser";
import routes from "./routes/soccerRoutes";
import cors from "cors"

const app = express();
const PORT = 8000;

//mongoose connection 
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/soccerDB' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// bodyparser setup 

app.use(bodyParser.urlencoded({ extended:true}))
app.use(bodyParser.json())

app.use(cors())

routes(app);


app.get("/", (req, res) => {
  res.send(`Our app is running on port ${PORT}`) 
});



app.listen(PORT, () => {
    console.log(`Our app is running on port ${PORT}`)
})


