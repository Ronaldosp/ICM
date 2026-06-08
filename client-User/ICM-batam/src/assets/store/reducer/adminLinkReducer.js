const initialState = {
    adminLinks:[],
}

export default function adminLinksReducer (state = initialState , action){
    if(action.type === "adminLinks/get"){
        return{
            ...state,
            adminLinks : action.payload
        }
    }
    return state;
}