import React, { useState } from 'react';
import Keypad from '../Keypad/Keypad';
import './Calc.css';

const Calc = () => {
    const [cFace, setcFace] = useState('0');

    const handleClick = (e) => {
        if (cFace === '0' & e.target.innerHTML === '.') {
            setcFace(cFace + e.target.innerHTML);
        } else if (cFace === '0') {
            setcFace(e.target.innerHTML);
        } else {
            let nuValue = cFace + e.target.innerHTML;
            setcFace(nuValue);
        };
    };

    const handleOp = (e) => {
        if (['+', '-', '/', 'x'].indexOf(cFace[cFace.length - 2]) >= 0) {
            let nuValue = cFace.slice(0, cFace.length - 3) + ` ${e.target.innerHTML} `;
            setcFace(nuValue);
        } else {
            let nuValue = cFace  + ` ${e.target.innerHTML} `;
            setcFace(nuValue);
        }
    };

    const handleCE = () => {
        // make sure cFace is string
        if (cFace.indexOf(' ') >= 0) {
            console.log(typeof cFace);
            let space = cFace.lastIndexOf(' ');
            let nuValue = cFace.slice(0, space);
            console.log(nuValue);
            setcFace(nuValue);
        } else {
            setcFace('0');
        };
    };

    const handleC = () => {
        setcFace('0');
    };

    const handleCalc = () => {
        if (cFace !== '0') {
            let clean = cFace.replace('x', '*')
            let value = JSON.stringify(eval(clean));
            setcFace(value);
        };
    };

    return (
        <div id='cBody'>
            <div id='cFace'>
                {cFace}
            </div>
            <Keypad handleClick={handleClick} handleOp={handleOp} handleCE={handleCE} handleC={handleC} handleCalc={handleCalc}/>
        </div>
    );
};

export default Calc;
