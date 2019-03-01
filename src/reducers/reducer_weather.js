import { FETCH_WEATHER } from '../actions/index';
export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
        //we use concat because it doesn't change the existing array. it creates a new array that contains
        //all the old stuff plus the new stuff in action.payload.data.  remember don't mutate state.
        
        // return state.concat([ action.payload.data ]);

        //or we can us ES6 and refactor like below
        return [action.payload.data, ...state];
    }
    return state;
}