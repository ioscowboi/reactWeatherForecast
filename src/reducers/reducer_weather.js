// reducers are just functions!
import { FETCH_WEATHER } from '../actions/index';
//      store the weather data in an array, for easier access:
export default function(state= [], action ) {
    // if you want to inspect the reducer, uncomment here: 
    // console.log('Action received', action);
    switch (action.type) {
        case FETCH_WEATHER:
            // handle the payload: 
            // action.payload.data is the only xhr response node that we care about:
            //  we want to store the array into the state, but remember the big nono from react: 
            //      dont do something like state.push(action.payload.data);
                //      we don't want to update the state directly, use setState() or concat
                //          or: [ action.payload.data, ...state ]
            // return state.concat([action.payload.data]); or
            // same thing: creates a new array without mutating the existing state. 
            return [ action.payload.data, ...state ];
    }
    return state;
}