const initialState = {
    sermons:[],
}

export default function sermonReducer (state = initialState , action){
    if(action.type === "sermons/get"){
        return{
            ...state,
            sermons : action.payload
        }
    }
    return state;
}