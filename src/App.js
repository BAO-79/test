import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clicker from './components/clicker/clicker.components'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
 

    render() {
        return (<Clicker/>);

    }

}
export default App;