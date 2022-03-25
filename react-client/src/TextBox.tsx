import React, {ChangeEventHandler, Dispatch, SetStateAction} from 'react';
import './App.css';

interface Properties {
    label: string;
    change: (value: string) => void;
}

function TextBox(props:Properties) {
    return (
        <div>
            <label>{props.label}</label>
            <input type='text' onChange={event => props.change(event.target.value)}/>
        </div>
);
}

export default TextBox;