const initialState = {
    articles:[],
    articlesId:[]
}

export default function articleReducer (state = initialState , action){
    if(action.type === "articles/get"){
        return{
            ...state,
            articles : action.payload
        }
    }
    if(action.type === "articles/getById"){
        return{
            ...state,
            articlesId : action.payload
        }
    }
    return state;
}