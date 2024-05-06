import { Children, React, createContext, useReducer } from 'react';

export const WorkoutContext = createContext();

export const workoutsReducer = (state, action) => {

    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'DELETE_WORKOUT':
            console.log("disptach called in action ..");
            console.log(action.payload._id);
            return {
                workouts: state.workouts.filter((w) => w._id !== action.payload.workout._id)
            }
        case 'CREATE_WORKOUT':
            // console.log("Create button called! ");
            return {
                workouts: [action.payload, ...state.workouts]
            }
        //console.log("after deleting array has been updated. !");
        default:
            return state
    }

}

export const WorkoutsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })

    // dispatch({type:'SET_WORKOUTS',payload:[{},{}]});

    return (
        <WorkoutContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WorkoutContext.Provider>
    )
}