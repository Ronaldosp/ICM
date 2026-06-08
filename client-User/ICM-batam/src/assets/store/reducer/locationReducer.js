const initialState = {
    locations:[],
}

export default function locationReducer (state = initialState , action){
    if(action.type === "locations/get"){
        return{
            ...state,
            locations : action.payload
        }
    }
    return state;
}