import { BURN } from "../actions/index.js"
const reducer = (state, { type, payload }) => {
    
    switch(type) {
        case BURN:
            return { 
                burn2: state.burn2 - payload, 
                burn: state.burn + payload 
            } 
        default:
            return state
    }
}

export default reducer