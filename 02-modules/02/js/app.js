import { BURN } from "./actions/index.js"
import store from "./store.js"


const burn = () => {
    store.dispatch({
        type: BURN,
        payload: 1.42
    })
    window.result.textContent = `Haz quemado ${store.getState().burn} calorias`
}

const burn2 = () => {
    window.result2.textContent = `Te Faltan quemar ${store.getState().burn2} calorias`
}

window.burn.addEventListener('click', burn)
window.burn2.addEventListener('click', burn2)