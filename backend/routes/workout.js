const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModels.js");
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController.js')

//Get all workout  
// router.get('/', (req, res) => {
//     res.json({ mssg: "Get all workout " })
// })
router.get("/", getWorkouts);

//Get single workout 
// router.get('/:id', (req, res) => {
//     res.json({ mssg: "Get single workout" })
// })
router.get("/:id",getWorkout);

// Post a new workout 
router.post("/", createWorkout);
// router.post("/", async (req, res) => {
// console.log("getting this... ");
// console.log(req.body);
// const { title, load, reps } = req.body;
// try {
//     const workout = await Workout.create({ title, load, reps })
//     res.status(200).json(workout);
// } catch (error) {
//     console.log(error);
//     res.status(400).json({ error: error });
// }
// res.json({ mssg: "Post a new workout " })
// })


// for deletion of workouts 
// router.delete("/", (req, res) => {
//     res.json({ mssg: "Delete a workout " })
// })
router.delete("/:id", deleteWorkout)


//Update a workout 
// router.patch("/:id", (req, res)=>{
//     res.json({mssg: "Update a workout "});
// })
router.patch("/:id" , updateWorkout);


module.exports = router;
