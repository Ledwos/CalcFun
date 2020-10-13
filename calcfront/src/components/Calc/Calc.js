import React, { useState } from 'react';
import Keypad from '../Keypad/Keypad';

const Calc = () => {
    const [cFace, setcFace] = useState('');

    const handleClick = (e) => {
        let btnText = e.target.innerHTML;
        let nuValue = cFace + btnText;
        setcFace(nuValue);
        // console.log(btnText);
    }
    return (
        <div>
            <div id='cFace'>
                {cFace}
            </div>
            <Keypad handleClick={handleClick} />
        </div>
    );
};

export default Calc;
