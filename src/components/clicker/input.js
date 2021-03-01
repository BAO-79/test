import React from 'react';

export default function Input(props){
   

    return (
            <input onChange={props.onInputChange} value={props.inputValue}/>
            );
}