const Workout = require("../models/workoutModels");
const mongoose = require('mongoose');
// create a new workout 
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error });
    }
}
//get all workouts
const getWorkouts = async (req, res) => {
    console.log('hello')
    const workout = await Workout.find({}).sort({ createdAt: -1 });
    console.log(workout);
    res.status(200).json(workout);
}
//get single workout 
const getWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "No such id like that  " })
    }
    const workout = await Workout.findById(id)
    if (!workout) {
        res.status(400).json({ error: "No such workout " })
    }
    res.status(200).json({ workout });
    // res.status(400).json({"hello": "world "})
}

const deleteWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "This is not the formate of id  " })
    }
    const workout = await Workout.findOneAndDelete({ _id: id });
    if (!workout) {
        res.status(400).json({ error: "No such workout for deleting  " })
    }
    res.status(200).json({ workout });
    // res.status(200).json({ "helo":"world"});

}

const updateWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "This is not the formate of id  " })
    }
    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!workout) {
        res.status(400).json({ error: "Id not found for updation . " })
    }
    res.status(200).json({ workout });
}

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}