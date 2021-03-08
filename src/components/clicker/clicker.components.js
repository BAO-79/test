import React, { Component } from 'react';
import Input from './input'
import '../../App.css';

let timer = undefined;


class Clicker extends Component {
    constructor(props) {
        super(props);
        this.start = this.start.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
       
    }
    state = {
        value: 60,
        inputValue: '60',
    }
    
     
    onInputChange(event){
        const value = event.target.value;
        this.setState({inputValue: value, value: parseInt(value)})
    }

    start(){
            timer = setInterval(() =>{
            this.setState({value:this.state.value-1})
            if (this.state.value===0) {
              clearInterval(timer); 
            }
        }, 1000)
    }

    pause(){
        if (timer) {
            clearInterval(timer); 
            timer = null;
        }
    }

    render() {
        
        return (<div className="container">
        <div className='timer-shell'>
        
       
        <div style={{transform: `rotate(${-this.state.value*6}deg)`, width: "3px", height: "75px", border: "1px solid black", margin: "auto"}}>
        {this.state.value}
        </div>
        
        </div>

        <div className="buttons">
      
                <button onClick={this.start}>Start</button>
                <button onClick={this.pause}>Pause</button>
                
                <div><Input onInputChange={this.onInputChange} inputValue={this.state.inputValue}/></div>
                </div>
       </div>
        
        );
    }
}
    export default Clicker;