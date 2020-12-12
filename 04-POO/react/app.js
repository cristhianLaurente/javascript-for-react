import { Component, createElement } from './lib/react/index.js';
import Wrapper from './components/wrapper.js'
import User from './components/user.js';
import UserStyled from './components/user-styled.js'

class App extends Component {

    
    render() {
        const user = {
            name: 'Ash', 
            avatar: './images/ash.jpg',
            age: 10
        }
        return createElement('div',{
            class: 'app',
            children: [
                new Wrapper({
                    children: [
                        new User(user),
                        new UserStyled(user)
                    ]
                })
            ]
            },'')
        }        
}

export default App