import {useState} from 'react';
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
function WorkoutForms(){
    const {dispatch} =  useWorkoutsContext();
    const [title , setTitle] = useState('');
    const [load , setLoad] = useState('');
    const [reps , setReps] = useState('');
    const [error , setError] = useState(null);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const workout = {title , load , reps };
        const response =await fetch('http://localhost:4000/api/workout' ,{
            method:"POST",
            body:JSON.stringify(workout),
            headers:{
                "Content-Type":"application/json"
            }
            })
            const json = await response.json();
            if(!response.ok){
                setError(json.error);
            }
            if(response.ok){
                setError(null);
                setTitle('')
                setReps('')
                setLoad('')
                console.log("New workout added! ",json)  
                console.log(json._id)   
                dispatch({type:'CREATE_WORKOUT' , payload: json})                                    
            }
    }
    return(
        <form onSubmit={handleSubmit} className="create">
            <h3>
                Add A New Workout
            </h3>

            <label>Excersize Title: </label>
            <input 
            type="text"
            onChange={(e)=>setTitle(e.target.value)}
            value={title} required
            />

            <label>Load(in kg): </label>
            <input 
            type="number"
            onChange={(e)=>setLoad(e.target.value)}
            value={load} required
            />
            
            <label>Reps: </label>
            <input 
            type="number"
            onChange={(e)=>setReps(e.target.value)}
            value={reps} required
            />
            
            <button> Add Workout </button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}
export default WorkoutForms;