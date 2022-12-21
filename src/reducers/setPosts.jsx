const initialState = {
    posts:[]
}

const setPosts = (state = initialState,action)=>{
    if(action.type==='SET_POSTS'){
        return {
            ...state, posts: action.payload
        }
    }
    else{
        return state
    }
}

export default setPosts