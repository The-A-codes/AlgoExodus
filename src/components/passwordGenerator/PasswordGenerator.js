import './PasswordGenerator.css';
import refresh from '../../assets/icons/refresh.svg';
import plusIcon from '../../assets/icons/plus.svg';
import minusIcon from '../../assets/icons/minus.svg';
import info from '../../assets/icons/info.svg';
import checked from '../../assets/icons/checked.png';
import unchecked from '../../assets/icons/unchecked.png';
import { useState, useEffect } from 'react';
import baffle from 'baffle';
import title from '../../assets/images/title.png';
import logo from '../../assets/images/site.png';

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
    const [ copied, setCopied ] = useState(false);
    const [ passLen, setPassLen ] = useState(12);
    const [ generatedPass, setGeneratedPass ] = useState('Show Generated Password');
    const infoMessages = [
      "Numbers Like 123456... Will Be Included",
      "Lowercase Characters Like abcd... Will Be Included",
      "Uppercase Characters Like ABCD... Will Be Includ ed",
      "Generated Password Will Start With A Letter Instead Of Symbol Or Number",
      "Symbols Like !@#$%^&*()... Will Be Included",
      "Don't use characters like i, I, 1, L, o, O, 0, etc",
      "Same Character Won't Be Repeated More Than Once",
      "Sequential Characters Won't Be Used Like 123, abc",
      "Generated Password Will Contain The Input Word In Between", 
    ];

    const handleCopy = () => {
        setCopied(true);
        navigator.clipboard.writeText(generatedPass).then(function() {
            console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
            console.error('Async: Could not copy text: ', err);
        });
        //Paste the code to copy the password to clipboard here
    }

    const handleChange = () => {
        const randomStrign = 'Show Generated Password';
        setCopied(false);
        const inputData = {
            numbers: numbers,
            lowercase: lowercase,
            uppercase: uppercase,
            letterToBeginWith: letterToBeginWith,
            symbols: symbols,
            similarChar: similarChar,
            duplicateChar: duplicateChar,
            sequentialChar: sequentialChar,
            stringToInclude: stringToInclude,
            passwordLength: passLen
        };

        //Yash code call or first function call goes here
        // Uncomment the below line having same function
        // const resultedData = myPasswordGenerator(inputData);

        const text = baffle('.generated-password', {
            characters: randomStrign,
            speed:100            
        });
        text.start();
        text.reveal(1000);
        //After Yash code uncomment the below line
        // text.text(text=>resultedData);
        //After Yash code comment the below line code
        text.text(text=>generatedPass);
    }

    //Yash functions starts here

    //Yash functions end here

    const handleSelect = (callback, value) => {
        callback(value)
        handleChange()
    }

    const outsideClick = () => {
        const allModals = document.querySelectorAll('.pop-modal')
        allModals.forEach(ele => {
            ele.style['display'] = 'none';
        })
    }

    const onWordChange = (event) => {
        const wordLength = event.target.value.length;
        const allowedLength = Math.round(passLen/3);

        document.getElementById('limitReachedMessage').style['opacity'] = '0';
        if(wordLength >= allowedLength) {
            document.getElementById('limitReachedMessage').style['opacity'] = '1';
        }
    }

    const showInfo = (event) => {
        event.target.nextElementSibling.style['display'] = 'block';
    }

    const sliderClickHandler = (value) => {
        const newVal = passLen + value;

        if(newVal > 7 && newVal < 51)
        {
            setPassLen(newVal);
            document.getElementById('passwordRange').value = newVal;
        }
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
    }, [numbers, lowercase, uppercase, letterToBeginWith, symbols, similarChar, duplicateChar, sequentialChar, stringToInclude, passLen]);

    return (
        <div id='container'>
            <div className="logo-title" style={{height: 'fit-content'}}>
                <img className='logo-image' src={logo}/>
                <img className='title-image' src={title}/>
            </div>
            <div style={{height: 'fit-content'}}><h2 className="title">Strongest Password Generator</h2></div>
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
                    <h4>Include Below Word</h4>
                    <div style={{position: 'relative'}} >
                        <img src={info} className="info" data-id="8" onClick={event => showInfo(event)}/>
                        <div className="pop-modal">
                            <span>{infoMessages[8]}</span>
                        </div>
                    </div>
                </div>
                <input type="text" maxLength={Math.round(passLen/3)} disabled={ !stringToInclude } style={{cursor: stringToInclude ? 'pointer' : 'not-allowed' }} placeholder="Word To Include In Password" className='input-text' onChange={(event)=>onWordChange(event)}/>
                { <span id="limitReachedMessage">It looks like you reached the word limit. Increase the password length to increase the word limit.</span> }
            </div>
            <div className='slider-conatiner'>
                <span style={{margin: '1rem 0', width: '160px', alignSelf: 'center'}}>{`Password Length: ${passLen}`}</span>
                <div className='slider-bar-container' style={{margin: '1rem 0'}}>
                    <div className='balls' onClick={()=>sliderClickHandler(-1)}>
                        <img src={minusIcon}/>
                    </div>
                    <input type="range" min="8" max="50" className="slider" id="passwordRange" defaultValue="12" onChange={(event)=>setPassLen(parseInt(event.target.value))}/>
                    <div className='balls' onClick={()=>sliderClickHandler(1)}>
                        <img src={plusIcon}/>
                    </div>
                </div>
            </div>
            <div className="generated-pass-container">
                <div className="gen-contain">
                    <div id="generatedPassword" className="generated-password" placeholder="Generated Password Will Appear Here" readOnly>
                        {/* { generatedPass && 'Show Generated Password'} */}
                        {generatedPass}
                    </div>
                    <div className="refresh-icon-container">
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
