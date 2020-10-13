import React from 'react';
import './Keypad.css';

const Keypad = (props) => {
    return (
        <div id='KeypadDiv'>
            <div className='KeypadBtn'>
                
            </div>
            <div className='KeypadBtn' onClick={props.handleClick}>
                CE
            </div>
            <div className='KeypadBtn' onClick={props.handleClick}>
                C
            </div>
            <div className='KeypadBtn' onClick={props.handleClick}>
                +
            </div>
            <div className='KeypadBtn' onClick={props.handleClick}>
                7
            </div>
            <div className='KeypadBtn' onClick={props.handleClick}>
                8
            </div>
            <div className='KeypadBtn' onClick={props.handleClick}>
                9
            </div>
            <div className='KeypadBtn' onClick={props.handleClick}>
                -
            </div>
            <div className='KeypadBtn' onClick={props.handleClick}>
                4
            </div>
            <div className='KeypadBtn' onClick={props.handleClick}>
                5
            </div>
            <div className='KeypadBtn' onClick={props.handleClick}>
                6
            </div>
            <div className='KeypadBtn' onClick={props.handleClick}>
                x
            </div>
            <div className='KeypadBtn' onClick={props.handleClick}>
                1
            </div>
            <div className='KeypadBtn' onClick={props.handleClick}>
                2
            </div>
            <div className='KeypadBtn' onClick={props.handleClick}>
                3
            </div>
            <div className='KeypadBtn' onClick={props.handleClick}>
                /
            </div>
            <div className='KeypadBtn' onClick={props.handleClick}>
                .
            </div>
            <div className='KeypadBtn' onClick={props.handleClick}>
                0
            </div>
            <div className='KeypadBtn' onClick={props.handleClick}>
                
            </div>
            <div className='KeypadBtn' onClick={props.handleClick}>
                =
            </div>
        </div>
    );
};

export default Keypad;