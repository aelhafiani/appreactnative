import { LOGIN_ATTEMPT, LOGIN_FAILED, LOGIN_SUCCESS, TOKEN_VALID,TOKEN_INVALID } from "../../actions/types";

const INITIAL_STATE = {user:null,loading:false,error:'',login:false}

export default   (state=INITIAL_STATE,action)=>{
    switch (action.type){
        case LOGIN_ATTEMPT:
        return {...state,loading:true}
        case LOGIN_FAILED:
        return {...INITIAL_STATE,loading:false,login:false,error:action.error}
        case LOGIN_SUCCESS:
        return {...INITIAL_STATE,loading:false,user:action.user,login:true}
        case TOKEN_VALID:
        return {...INITIAL_STATE,loading:false,login:true}
        case TOKEN_INVALID:
        return {...INITIAL_STATE,loading:false,login:false}
        default:
        return state
    }
}