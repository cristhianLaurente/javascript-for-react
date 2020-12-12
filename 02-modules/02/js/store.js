import { createStore } from "./redux/index.js"
import reducer from "./reducers/index.js"
const initialState = {
    burn: 0,
    burn2: 1360563
}
const store = createStore(reducer, initialState);

export default store
