const initialState = {
    pastors:[],
    pastorsId:[]
}

export default function pastorReducer (state = initialState , action){
    if(action.type === "pastors/get"){
        return{
            ...state,
            pastors : action.payload
        }
    }
    if(action.type === "pastors/getById"){
        return{
            ...state,
            pastorsId : action.payload
        }
    }
    return state;
}