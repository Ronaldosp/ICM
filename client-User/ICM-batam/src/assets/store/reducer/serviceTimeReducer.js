const initialState = {
    serviceTime:[],
}

export default function serviceTimeReducer (state = initialState , action){
    if(action.type === "serviceTime/get"){
        return{
            ...state,
            serviceTime : action.payload
        }
    }
    return state;
}