import { Component } from '../lib/react/index.js'
import Form from './form.js'
import Input from './input.js'
import Button from './button.js'

class Search extends Component {
    render() {
        return Form({
            children: [
                Input({
                    placeholder: 'Escribe tu película favorita',
                    name: 'title',
                    type:'text'
                }),
                Button(null, 'Buscar')
            ]
        })
    }
}

export default Search



