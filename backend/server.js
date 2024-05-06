require('dotenv').config();
const express = require("express");
const cors = require('cors');
// express app 
const app = express();
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));
const mongooes = require('mongoose');
mongooes.connect(process.env.MONGO_URL)
    .then(() => {
        // app.listen(process.env.PORT, (error) => {
        //     if (error) {
        //         console.log("Error while server listening..")
        //     }
        //     else {
        //         console.log("Listening on port ", process.env.PORT);
        //     }
        // })
        console.log("Database connected.. ");
    })
    .catch((error) => {
        console.log(error)
    })



app.get('/', (req, res) => {
    res.status(200).json({ "error": "no error" });
})

const workoutRoute = require("./routes/workout")
app.use((req, res, next) => {
    console.log(req.path, req.method,);
    next();
})
// app.get("/" , (req,res)=>{
//     res.json({mssg:"Welcome to my page "})
// })
app.use('/api/workout', workoutRoute);
app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log("Error while server listening..")
    }
    else {
        console.log("Listening on port ", process.env.PORT);
    }
})



// commands - npm init -y
// envoirment variables- npm in dotenv

// what we did
// frontend ============================= backend
//  React APP<----------------------------------Express/ Node.js <----------------> MongoDb
// \--------------------------------^



/*
Get     /workout   --> Gets all the workout documents
Post     /workout   --> Create a new workout document 
Get     /workout/:id   --> Get a single workout document 
Delete     /workout/:id   --> Delete a single workout 
Patch     /workout/:id   --> update a single workout
 */

/*
The first line app.use(express.json()); tells Express to parse incoming requests with JSON payloads. This is commonly used for APIs that receive data in JSON format.

The second line app.use(express.urlencoded({ extended: true })); tells Express to parse incoming requests with URL-encoded payloads. This is typically used for processing form data submitted via POST requests.

In short, the first line is for handling JSON data, while the second line is for handling URL-encoded form data.
*/