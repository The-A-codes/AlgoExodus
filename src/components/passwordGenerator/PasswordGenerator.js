import './PasswordGenerator.css';
import refresh from '../../assets/icons/refresh.svg';
import checked from '../../assets/icons/checked.png';
import unchecked from '../../assets/icons/unchecked.png';
import { useState, useEffect } from 'react';

const PasswordGenerator = () => {
    const [ numbers, setNumbers ] = useState(false);
    const [ lowercase, setLowercase ] = useState(false);
    const [ uppercase, setUppercase ] = useState(false);
    const [ letterToBeginWith, setLetterToBeginWith ] = useState(false);
    const [ symbols, setSymbols ] = useState(false);
    const [ similarChar, setSimilarChar ] = useState(false);
    const [ duplicateChar, setDuplicateChar ] = useState(false);
    const [ sequentialChar, setSequentialChar ] = useState(false);
    const [ stringToInclude, setStringToInclude ] = useState('');
    const [ passwordLength, setpasswordLength ] = useState(8);

    const handleChange = () => {
    // Yash code here
    }

    const showSliderValue = () => {
        const rangeSlider = document.getElementById("rs-range-line");
        const rangeBullet = document.getElementById("rs-bullet");
        rangeBullet.innerHTML = rangeSlider.value;
        const bulletPosition = (rangeSlider.value /rangeSlider.max);
        rangeBullet.style.left = (bulletPosition * 578) + "px";
    }

    useEffect(()=>{
        handleChange();
    }, [numbers, lowercase, uppercase, letterToBeginWith, symbols, similarChar, duplicateChar, sequentialChar, stringToInclude, passwordLength]);

    return (
        <div id='container'>
            <div style={{height: 'fit-content'}}><h1 className="title">Random Password Generator</h1></div>
            <div className="card-container">
                <div className="card">
                    <div className="option">
                        <img src={ numbers ? checked : unchecked } className='checked-unchecked' onClick={()=>setNumbers(!numbers)}/>
                        <h4>Inlcude Numbers</h4>
                    </div>
                    <div className="option">
                        <img src={ lowercase ? checked : unchecked } className='checked-unchecked' onClick={()=>setLowercase(!lowercase)}/>
                        <h4>Inlcude Lowercase Characters</h4>
                    </div>
                    <div className="option">
                        <img src={ uppercase ? checked : unchecked } className='checked-unchecked' onClick={()=>setUppercase(!uppercase)}/>
                        <h4>Inlcude Uppercase Characters</h4>
                    </div>
                    <div className="option">
                        <img src={ letterToBeginWith ? checked : unchecked } className='checked-unchecked' onClick={()=>setLetterToBeginWith(!letterToBeginWith)}/>
                        <h4>Begin With A Letter</h4>
                    </div>
                </div>
                <div className="card">
                    <div className="option">
                        <img src={ symbols ? checked : unchecked } className='checked-unchecked' onClick={()=>setSymbols(!symbols)}/>
                        <h4>Include Symbols</h4>
                    </div>
                    <div className="option">
                        <img src={ similarChar ? checked : unchecked } className='checked-unchecked' onClick={()=>setSimilarChar(!similarChar)}/>
                        <h4>No Similar Characters</h4>
                    </div>
                    <div className="option">
                        <img src={ duplicateChar ? checked : unchecked } className='checked-unchecked' onClick={()=>setDuplicateChar(!duplicateChar)}/>
                        <h4>No Duplicate Characters</h4>
                    </div>
                    <div className="option">
                        <img src={ sequentialChar ? checked : unchecked } className='checked-unchecked' onClick={()=>setSequentialChar(!sequentialChar)}/>
                        <h4>No Sequential Characters</h4>
                    </div>
                </div>
            </div>
            <div className="out-option">
                <div className="option">
                    <img src={ stringToInclude ? checked : unchecked } className='checked-unchecked' onClick={()=>setStringToInclude(!stringToInclude)}/>
                    <h4>Include Below Name</h4>
                </div>
                <input type="text" disabled={ !stringToInclude } style={{cursor: stringToInclude ? 'pointer' : 'not-allowed' }} placeholder="Name To Include In Password" className='input-text'/>
            </div>
            {/* <div className="slider-container">
                <div className="range-slider">
                    <span id="rs-bullet" class="rs-label">0</span>
                    <input id="rs-range-line" onInput={()=>showSliderValue()} className="rs-range" type="range" value="0" min="0" max="50" />
                </div>
                <div className="box-minmax">
                    <span>0</span><span>50</span>
                </div>
            </div> */}
            <div className="generated-pass-container">
                <div className="gen-contain">
                    <input className="generated-password" placeholder="Generated Password Will Appear Here" readOnly />
                    <div className="refresh-icon-container">
                        <img src={refresh} className="refresh-icon" tabIndex='1'/>
                    </div>
                </div>
                <div className="copy-button" />
            </div>
        </div>
    )
}

export default PasswordGenerator;

