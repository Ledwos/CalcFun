import React, { useState } from 'react';
import Keypad from '../Keypad/Keypad';
import './Calc.css';

const Calc = () => {
    const [cFace, setcFace] = useState('');

    const handleClick = (e) => {
        let nuValue = cFace + e.target.innerHTML;
        setcFace(nuValue);
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

    return (
        <div>
            <div id='cFace'>
                {cFace}
            </div>
            <Keypad handleClick={handleClick} handleOp={handleOp} />
        </div>
    );
};

export default Calc;
