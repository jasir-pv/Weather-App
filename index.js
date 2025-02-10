import express from "express";
import axios from "axios";
import env from "dotenv"


const app = express()
const port = 3000
env.config()

app.use(express.static("public"))

app.get("/", async (req,res)=>{

    const city = req.query.city || "Mumbai"
    const apiKey = process.env.API_KEY
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

try{
        const response = await axios.get(apiUrl)
        const weatherData = response.data
        console.log(response);
        res.render("index.ejs", {data:weatherData})
    }catch(err){console.error("weather not fetching");
    }
})

app.listen(port ,()=>{
    console.log("server running ");
    
})
