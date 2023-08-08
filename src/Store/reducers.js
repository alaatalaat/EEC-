import { DECREAMENT, INCREAMENT ,CART} from "./actions";

const counterReducer = (
    state = {count:0,
    cart:[]
} ,action) => {
    switch(action.type){
        case INCREAMENT :
            return {...state , count : state.count + 1 } ;
        case DECREAMENT :
            return {...state , count : state.count - 1 } ;
        case CART :
            return{...state };
        default :
            return state ;
    }
}


export default counterReducer ;