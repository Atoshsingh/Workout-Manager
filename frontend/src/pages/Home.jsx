import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import WorkoutForms from "../components/WorkoutForms";
const Home=()=> {
    const{workouts , dispatch} = useWorkoutsContext();
    // const [workouts, setWorkouts] = useState(null);
    useEffect(() => {
        
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:4000/api/workout',{
                method: "GET"
            })
            const json = await response.json()
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            if (response.ok) {
                // setWorkouts(json);
                //vid-11;       
                dispatch({type:'SET_WORKOUTS',payload:json})
            }
            console.log(response);
        }
        fetchWorkouts()

    }, [])

    return(
        <div className="home">
            <div className="workouts">
                {/* <h1>Hello world Tosh</h1> */}

                {  workouts && workouts.map((item) => (
                    <WorkoutDetails key={item._id} workout={item}/>
                ))}
            </div>
                <WorkoutForms/>
        </div>
    )
}

export default Home;