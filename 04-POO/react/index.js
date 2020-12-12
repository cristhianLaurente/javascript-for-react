import { render } from './lib/react-dom.js'
import App from './app.js'

const container = document.querySelector('#root')

render(new App(), container )