const mongoose = require('mongoose');

// create a schema
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    load: {
        type:Number,
        required:true
    },
    reps: {
        type:Number,
        required:true
    }
},{timestamps:true})



/*
Mongoose schemas support a timestamps option. If you set timestamps: true , 
Mongoose will add two properties of type Date to your schema: 
createdAt : a date representing when this document was created. 
updatedAt : a date representing when this document was last updated.
*/

module.exports = mongoose.model('workout' , workoutSchema)
