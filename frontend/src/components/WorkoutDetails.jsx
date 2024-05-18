
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const WorkoutDetails = ({ workout }) => {

    const { dispatch } = useWorkoutsContext();

    const handleClick = async () => {
        console.log("delete button called! ")

        const response = await fetch('https://task-manager-backend-1-5oai.onrender.com/api/workout/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json();
        // if(!response.ok){
        //     setError(json.error);
        // }
        // console.log("start..................")
        // console.log(json);
        // console.log("end..................")
        if (response.ok) {
            // console.log("dispatch in detail file.. ")
            // console.log(json.workout._id);
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt) , {addSuffix:true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    );
}
export default WorkoutDetails;