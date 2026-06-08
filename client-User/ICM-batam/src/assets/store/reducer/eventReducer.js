const initialState = {
    events:[],
    eventsId:[]
}

export default function eventReducer (state = initialState , action){
    if(action.type === "events/get"){
        return{
            ...state,
            events : action.payload
        }
    }
    if(action.type === "events/getById"){
        return{
            ...state,
            eventsId : action.payload
        }
    }
    return state;
}