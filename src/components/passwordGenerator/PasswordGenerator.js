import './PasswordGenerator.css';
import refresh from '../../assets/icons/refresh.svg';
import info from '../../assets/icons/info.svg';
import checked from '../../assets/icons/checked.png';
import unchecked from '../../assets/icons/unchecked.png';
import { useState, useEffect } from 'react';

const PasswordGenerator = () => {
    const [ numbers, setNumbers ] = useState(true);
    const [ lowercase, setLowercase ] = useState(true);
    const [ uppercase, setUppercase ] = useState(true);
    const [ letterToBeginWith, setLetterToBeginWith ] = useState(false);
    const [ symbols, setSymbols ] = useState(false);
    const [ similarChar, setSimilarChar ] = useState(false);
    const [ duplicateChar, setDuplicateChar ] = useState(false);
    const [ sequentialChar, setSequentialChar ] = useState(false);
    const [ stringToInclude, setStringToInclude ] = useState('');
    const [ passwordLength, setpasswordLength ] = useState(8);
    const [ copied, setCopied ] = useState(false);
    const infoMessages = [
      "Numbers Like 123456... Will Be Included",
      "Lowercase Characters Like abcd... Will Be Included",
      "Uppercase Characters Like ABCD... Will Be Included",
      "Generated Password Will Start With A Letter Instead Of Symbol Or Number",
      "Symbols Like !@#$%^&*()... Will Be Included",
      "Don't use characters like i, I, 1, L, o, O, 0, etc",
      "Same Character Won't Be Repeated More Than Once",
      "Sequential Characters Won't Be Used Like 123, abc",
      "Generated Password Will Contain The Input Word In Between", 
    ];

    const handleCopy = () => {
        setCopied(true);
        //Paste the code to copy the password to clipboard here
    }

    const handleChange = () => {
        setCopied(false);
        // Yash code here
    }

    const handleSelect = (callback, value) => {
        callback(value)
        handleChange()
    }

    const showSliderValue = () => {
        const rangeSlider = document.getElementById("rs-range-line");
        const rangeBullet = document.getElementById("rs-bullet");
        rangeBullet.innerHTML = rangeSlider.value;
        const bulletPosition = (rangeSlider.value /rangeSlider.max);
        rangeBullet.style.left = (bulletPosition * 578) + "px";
    }

    const outsideClick = () => {
        const allModals = document.querySelectorAll('.pop-modal')
        allModals.forEach(ele => {
            // ele.style['opacity'] = '0';
            ele.style['display'] = 'none';
        })
    }

    const showInfo = (event) => {
        // event.target.nextElementSibling.style['opacity'] = '1';
        event.target.nextElementSibling.style['display'] = 'block';
    }

    useEffect(()=>{
        document.addEventListener('click', (event)=>{
            const classList = event.target.classList.value;

            if(!classList.includes('pop-modal')){
                outsideClick();
            }

            if(classList.includes('info')){
                showInfo(event)
            }
        });
    }, [])

    useEffect(()=>{
        handleChange();
    }, [numbers, lowercase, uppercase, letterToBeginWith, symbols, similarChar, duplicateChar, sequentialChar, stringToInclude, passwordLength]);

    return (
        <div id='container'>
            <div style={{height: 'fit-content'}}><h1 className="title">Random Password Generator</h1></div>
            <div className="card-container">
                <div className="card">
                    <div className="option">
                        <img src={ numbers ? checked : unchecked } className='checked-unchecked' onClick={()=>handleSelect(setNumbers, !numbers)}/>
                        <h4>Inlcude Numbers</h4>
                        <div style={{position: 'relative'}} >
                            <img src={info} className="info" data-id="0" onClick={event => showInfo(event)}/>
                            <div className="pop-modal">
                                <span>{infoMessages[0]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="option">
                        <img src={ lowercase ? checked : unchecked } className='checked-unchecked' onClick={()=>handleSelect(setLowercase, !lowercase)}/>
                        <h4>Inlcude Lowercase Characters</h4>
                        <div style={{position: 'relative'}} >
                            <img src={info} className="info" data-id="1" onClick={event => showInfo(event)}/>
                            <div className="pop-modal">
                                <span>{infoMessages[1]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="option">
                        <img src={ uppercase ? checked : unchecked } className='checked-unchecked' onClick={()=>handleSelect(setUppercase, !uppercase)}/>
                        <h4>Inlcude Uppercase Characters</h4>
                        <div style={{position: 'relative'}} >
                            <img src={info} className="info" data-id="2" onClick={event => showInfo(event)}/>
                            <div className="pop-modal">
                                <span>{infoMessages[2]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="option">
                        <img src={ letterToBeginWith ? checked : unchecked } className='checked-unchecked' onClick={()=>handleSelect(setLetterToBeginWith, !letterToBeginWith)}/>
                        <h4>Begin With A Letter</h4>
                        <div style={{position: 'relative'}} >
                            <img src={info} className="info" data-id="3" onClick={event => showInfo(event)}/>
                            <div className="pop-modal">
                                <span>{infoMessages[3]}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="option">
                        <img src={ symbols ? checked : unchecked } className='checked-unchecked' onClick={()=>handleSelect(setSymbols, !symbols)}/>
                        <h4>Include Symbols</h4>
                        <div style={{position: 'relative'}} >
                            <img src={info} className="info" data-id="4" onClick={event => showInfo(event)}/>
                            <div className="pop-modal">
                                <span>{infoMessages[4]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="option">
                        <img src={ similarChar ? checked : unchecked } className='checked-unchecked' onClick={()=>handleSelect(setSimilarChar, !similarChar)}/>
                        <h4>No Similar Characters</h4>
                        <div style={{position: 'relative'}} >
                            <img src={info} className="info" data-id="5" onClick={event => showInfo(event)}/>
                            <div className="pop-modal">
                                <span>{infoMessages[5]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="option">
                        <img src={ duplicateChar ? checked : unchecked } className='checked-unchecked' onClick={()=>handleSelect(setDuplicateChar, !duplicateChar)}/>
                        <h4>No Duplicate Characters</h4>
                        <div style={{position: 'relative'}} >
                            <img src={info} className="info" data-id="6" onClick={event => showInfo(event)}/>
                            <div className="pop-modal">
                                <span>{infoMessages[6]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="option">
                        <img src={ sequentialChar ? checked : unchecked } className='checked-unchecked' onClick={()=>handleSelect(setSequentialChar, !sequentialChar)}/>
                        <h4>No Sequential Characters</h4>
                        <div style={{position: 'relative'}} >
                            <img src={info} className="info" data-id="7" onClick={event => showInfo(event)}/>
                            <div className="pop-modal">
                                <span>{infoMessages[7]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="out-option">
                <div className="option">
                    <img src={ stringToInclude ? checked : unchecked } className='checked-unchecked' onClick={()=>handleSelect(setStringToInclude, !stringToInclude)}/>
                    <h4>Include Below Name</h4>
                    <div style={{position: 'relative'}} >
                        <img src={info} className="info" data-id="8" onClick={event => showInfo(event)}/>
                        <div className="pop-modal">
                            <span>{infoMessages[8]}</span>
                        </div>
                    </div>
                </div>
                <input type="text" disabled={ !stringToInclude } style={{cursor: stringToInclude ? 'pointer' : 'not-allowed' }} placeholder="Word To Include In Password" className='input-text'/>
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
                        {/* <img src={refresh} className="refresh-icon" tabIndex='1'/> */}
                    </div>
                </div>
                <div className="copy-button" onClick={()=>handleCopy()}>
                    { copied ? 'Copied' : 'Copy'}
                </div>
            </div>
        </div>
    )
}

export default PasswordGenerator;

