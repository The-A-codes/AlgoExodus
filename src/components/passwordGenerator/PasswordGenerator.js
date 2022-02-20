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

    //code starts here

    /**This file contains all scripts required for A-codes - Password Generator application**/

    // let CountSymbols = 0;
    // let CountUpperCaseLetters = 0;
    // let CountLowerCaseLetters = 0;
    // let CountNumbers = 0;
    // let passchartext = "";
    
    // const myPasswordGenerator = ( inputData ) => {
    //     const { passwordLength,numbers,lowercase, uppercase, letterToBeginWith, symbols, similarChar, duplicateChar, sequentialChar, stringToInclude, refreshed } = inputData;
    //     refreshed && IsReset();
    //     DistributeCharacterlength( passwordLength, numbers, lowercase, uppercase,symbols );
        
    //     return Randomgenerator(passwordLength);
    // }

    // const IsReset = () => {
    //     //alert('refreshed');
    //     CountSymbols = 0;
    //     CountUpperCaseLetters = 0;
    //     CountLowerCaseLetters = 0;
    //     CountNumbers = 0;
    // }

    // const IsSymbol = (num) => {
    //     var result = false;
    //     if(	(num>=33 && num<=47)
    //         ||(num>=58 && num<=64)
    //         ||(num>=91 && num<=96)
    //         ||(num>=123 && num<=126)
    //         )
    //     {
    //         result = true;
    //     }
    //     return result;
    // }

    // const IsNumber = (num) => {
    //     var result = false;
    //     if(num >= 48 && num<=57){
    //         result = true;
    //     }
    //     return result;
    // }

    // const IsUpperCaseLetter = (num) => {
    //     var result = false;
    //     if(num >= 65 && num<=90){
    //         result = true;
    //     }
    //     return result;
    // }

    // const IsLowerCaseLetter = (num) => {
    //     var result = false;
    //     if(num >= 97 && num<=122){
    //         result = true;
    //     }
    //     return result;
    // }

    // const IsLetter = (num) => {
    //     return IsUpperCaseLetter(num)||IsLowerCaseLetter(num); 
    // }

    // const DistributeCharacterlength = ( passwordLength, numbers, lowercase, uppercase,symbols ) => {
    //     var parts = 0;
    //     if(numbers) parts++;
    //     if(lowercase)parts++; 
    //     if(uppercase)parts++; 
    //     if(symbols)  parts++;
    //     var num = passwordLength/parts;
    //     num = Math.floor(num);
    //     var spare = passwordLength%parts;
        
    //     //alert(num);
    //     //alert(spare);
        
    //     if(symbols) CountSymbols = num;
    //     if(numbers) CountNumbers = num;
    //     if(lowercase) CountLowerCaseLetters = num;
    //     if(uppercase) CountUpperCaseLetters = num;
        
    //     if (spare>0) {
    //         CountSymbols++;
    //         spare--;
    //     }
    //     if (spare>0) {
    //         CountNumbers++;
    //         spare--;
    //     }
    //     if (spare>0) {
    //         CountLowerCaseLetters++;
    //         spare--;
    //     }
    //     //alert(CountSymbols,CountUpperCaseLetters );
    //     //alert(CountNumbers);
    //     //alert(CountLowerCaseLetters);
    //     //alert(CountUpperCaseLetters );
        
        
    // }

    // const getNumber = () =>{
    //     var num = 0;
    //     do{ num = (Math.random()*1000)% 127;}
    //     while(!IsNumber(num));
    //     return num;
    // }


    // const getLetter = () => {
    //     var num = 0;
    //     do{ num = (Math.random()*1000)% 127;}
    //     while(!IsLetter(num));
    //     return num;
    // }

    // const getUpperCaseLetter = () => {
    //     var num = 0;
    //     do{ num = (Math.random()*1000)% 127;}
    //     while(!IsUpperCaseLetter(num));
    //     return num;
    // }

    // const getLowerCaseLetter = () => {
    //     var num = 0;
    //     do{ num = (Math.random()*1000)% 127;}
    //     while(!IsLowerCaseLetter(num));
    //     return num;
    // }


    // const getSymbols = () => {
    //     var num = 0;
    //     do{ num = (Math.random()*1000)% 127;}
    //     while(!IsSymbol(num));
    //     return num;
    // }

    // const selectRandomCharacterType = (passwordLength) => {
    //     var IsNumbers, IsUpper, IsLower, IsSymbols ;
    //     var temp = passwordLength;
    //     let num = 0;
    //     do{ 
    //         IsNumbers = (CountNumbers > 0);
    //         IsUpper = (CountUpperCaseLetters > 0);
    //         IsLower = (CountLowerCaseLetters > 0);
    //         IsSymbols = (CountSymbols > 0);
            
    //         var Temp_ascii_code = 0;
    //         var tempturn  = 0;
    //         tempturn = (IsNumbers)? tempturn + 1 : tempturn ;
    //         tempturn = (IsUpper)? tempturn + 1 : tempturn ;
    //         tempturn = (IsLower)? tempturn + 1 : tempturn ;
    //         tempturn = (IsSymbols)? tempturn + 1 : tempturn ;
            
    //         do{
    //             num = (Math.random()*1000)% tempturn;
                
    //             num = Math.floor(num); 
                
    //             num = ((!IsNumbers) && num == 0)? num + 1 : num ;
    //             num = ((!IsUpper) && num == 1)? num + 1 : num ;
    //             num = ((!IsLower) && num == 2)? num + 1 : num ;
    //             num = ((!IsSymbols) && num == 3)? num + 1 : num ;
    //         }
    //         while(num == 4);
    //         //alert(num);
            
    //         switch(num){
    //             case 0: 
    //                 if(IsNumbers){
    //                     Temp_ascii_code = getNumber();
    //                     CountNumbers--;
    //                     var text = String.fromCharCode(Temp_ascii_code);
    //                     passchartext = passchartext + text; 
    //                     //alert(passchartext);
    //                 }
    //                 break;
    //             case 1:
    //                 if(IsUpper){
    //                     Temp_ascii_code = getUpperCaseLetter();
    //                     CountUpperCaseLetters--;
    //                     var text = String.fromCharCode(Temp_ascii_code);
    //                     passchartext = passchartext + text; 
    //                     //alert(passchartext);
    //                 } 
    //                 break;
    //             case 2:
    //                 if(IsLower){							
    //                     Temp_ascii_code = getLowerCaseLetter();
    //                     CountLowerCaseLetters--;
    //                     var text = String.fromCharCode(Temp_ascii_code);
    //                     passchartext = passchartext + text; 
    //                     //alert(passchartext);
    //                 } 
    //                 break;
    //             case 3:
    //                 if(IsSymbols){
    //                     Temp_ascii_code = getSymbols();
    //                     CountSymbols--;
    //                     var text = String.fromCharCode(Temp_ascii_code);
    //                     passchartext = passchartext + text; 
    //                     //alert(passchartext);
    //                 }
    //                 break;
    //         }
    //     }
    //     while(IsNumbers||IsUpper ||IsLower ||IsSymbols);
    // }

    // const Randomgenerator = (passwordLength) => {
    //     var genratedpasswordLength = 0;
    //     var ascii_code= 0;//Math.random()*1000;
    //     selectRandomCharacterType(passwordLength);
    //     var passlength = passchartext.length;
    //     passchartext = String(passchartext).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    //     return passchartext;
    // }

    //code ends here


    const myPasswordGenerator = () => {
        const passwordLength = passLen;
        const isStringIncluded = stringToInclude;
        let calculatedLength = passwordLength;
        let word = '';

        if(isStringIncluded) {
            word = document.getElementById('includedWord').value || document.getElementById('includedWordMobile').value;
            const wordLength = word.length;
            calculatedLength = passwordLength - wordLength;
        }
        let generatedString = generateUniquePass(calculatedLength);
        if(isStringIncluded) {
            const position = Math.floor((Math.random() * (calculatedLength+1)));
            generatedString = generatedString.slice(0, position) + word + generatedString.slice(position, calculatedLength);
        }

        return generatedString;
    }

    const genrateChar = (number = null) => {
        const optionsArray = [];
        uppercase && optionsArray.push(0)
        symbols && optionsArray.push(1)
        lowercase && optionsArray.push(2)
        numbers && optionsArray.push(3)

        const charToAdd = Math.floor((Math.random() * optionsArray.length));
        const selectedOption = typeof number == 'number' ? number : optionsArray[charToAdd];

        switch (selectedOption) {
            case 0:
                //uppercase
                return String.fromCharCode(65 + Math.floor((Math.random() * 26)));
            case 1:
                //symbols
                const specialChars = `!@#$%^&*(){}[]~.<>/?:;'"|_-+=`;
                return specialChars[Math.floor((Math.random() * specialChars.length))];
            case 2:
                //lowercase
                return String.fromCharCode(97 + Math.floor((Math.random() * 26)));
            case 3:
                //numbers
                return Math.floor((Math.random() * 9));
            default:
                return ''
        }
    }

    const generateUniquePass = (calculatedLength, generatedString = '') => {
        let length = calculatedLength;
        let generatedPasswordString = '';
        const word = document.getElementById('includedWord').value || document.getElementById('includedWordMobile').value;

        if(generatedString) {
            generatedPasswordString = generatedString
        }

        while(length > 0) {
            const generatedChar = genrateChar();
            if( (duplicateChar && generatedPasswordString.includes(generatedChar)) || (word && word.includes(generatedChar)) ) {
                continue;
            }
            generatedPasswordString += generatedChar;
            length -= 1;
        }

        if(uppercase) {
            const uppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVQXYZ';
            if(!checkIfExist(uppercaseString, generatedPasswordString)) {
                const position = Math.floor((Math.random() * generatedPasswordString.length));
                let newChar = genrateChar(0);
                while((duplicateChar && generatedPasswordString.includes(newChar)) || (word && word.includes(newChar))) { newChar = genrateChar(0);}
                const updatedStr = generatedPasswordString.slice(0, position) + newChar + generatedPasswordString.slice(position + 1, generatedPasswordString.length);
                generatedPasswordString = generateUniquePass(0, updatedStr);
            }
        }

        if(symbols) {
            const symbolsString = `!@#$%^&*(){}[]~.<>/?:;'"|_-+=`;
            if(!checkIfExist(symbolsString, generatedPasswordString)) {
                const position = Math.floor((Math.random() * generatedPasswordString.length));
                let newChar = genrateChar(1);
                while((duplicateChar && generatedPasswordString.includes(newChar)) || (word && word.includes(newChar))) { newChar = genrateChar(1);}
                const updatedStr = generatedPasswordString.slice(0, position) + newChar + generatedPasswordString.slice(position + 1, generatedPasswordString.length);
                generatedPasswordString = generateUniquePass(0, updatedStr);
            }
        }

        if(lowercase) {
            const lowercaseString = 'abcdefghijklmnopqrstuvqxyz';
            if(!checkIfExist(lowercaseString, generatedPasswordString)) {
                const position = Math.floor((Math.random() * generatedPasswordString.length));
                let newChar = genrateChar(2);
                while((duplicateChar && generatedPasswordString.includes(newChar)) || (word && word.includes(newChar))) { newChar = genrateChar(2);}
                const updatedStr = generatedPasswordString.slice(0, position) + newChar + generatedPasswordString.slice(position + 1, generatedPasswordString.length);
                generatedPasswordString = generateUniquePass(0, updatedStr);
            }
        }

        if(numbers) {
            const numbersString = '0123456789';
            if(!checkIfExist(numbersString, generatedPasswordString)) {
                const position = Math.floor((Math.random() * generatedPasswordString.length));
                let newChar = genrateChar(3);
                while((duplicateChar && generatedPasswordString.includes(newChar)) || (word && word.includes(newChar))) { newChar = genrateChar(3);}
                const updatedStr = generatedPasswordString.slice(0, position) + newChar + generatedPasswordString.slice(position + 1, generatedPasswordString.length);
                generatedPasswordString = generateUniquePass(0, updatedStr);
            }
        }
        //TODO: Pending condition for similarChar

        if(sequentialChar) {
               const uppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVQXYZ';
               const lowercaseString = 'abcdefghijklmnopqrstuvqxyz';
               const numbersString = '0123456789';
            const strLength = generatedPasswordString.length;
            for(let offset = 0; offset < strLength - 1; offset++ ) {
                const chunk = generatedPasswordString.slice(offset, offset+2);
                if(uppercaseString.includes(chunk) || lowercaseString.includes(chunk) || numbersString.includes(chunk)) {
                    const updatedString = generatedPasswordString.slice(0, offset) + generatedPasswordString.slice(offset+1, strLength);
                    generatedPasswordString = generateUniquePass( 1, updatedString);
                    break;
                }
            }
        }

        if(letterToBeginWith) {
            const regExp = /[a-zA-Z]/g;
            if(!regExp.test(generatedPasswordString[0])) {
                const position = 0;
                let newChar = genrateChar(Math.floor((Math.random() * 2)));
                while((duplicateChar && generatedPasswordString.includes(newChar)) || (word && word.includes(newChar))) { newChar = genrateChar(1);}
                generatedPasswordString = generatedPasswordString.slice(0, position) + newChar + generatedPasswordString.slice(position + 1, generatedPasswordString.length);
            }
        }
        return generatedPasswordString;
    }

    const checkIfExist = (stringToBeMatchedWith, generatedString ) => {
        for(let offset = 0; offset < generatedString.length; offset++ ) {
            if(stringToBeMatchedWith.includes(generatedString[offset]))
            {
                return true;
            }
        }
        return false;
    }

    const fallbackCopyTextToClipboard = (text) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        
        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
    }

    const handleCopy = () => {
        setCopied(true);
        const text = generatedPass;
        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard(text);
            return;
        }
            navigator.clipboard.writeText(text).then(function() {
            console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
            console.error('Async: Could not copy text: ', err);
        });
    }

    const handleChange = () => {
        const randomString = 'Show Generated Password';
        setCopied(false);
        const resultedData = myPasswordGenerator();
        const text = baffle('.generated-password', {
            characters: randomString,
            speed:100
        });
        text.start();
        text.reveal(1000);
        text.text(text=>resultedData);
        setGeneratedPass(resultedData);
    }

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
        const updatedWord = event.target.value.replaceAll(' ', '')
        const wordLength = updatedWord.length;
        if(wordLength != event.target.value.length) {
            event.target.value = updatedWord;
        }
        else {
            const allowedLength = Math.round(passLen/3);
            handleChange();
            document.getElementById('limitReachedMessage').style['opacity'] = '0';
            if(wordLength >= allowedLength) {
                document.getElementById('limitReachedMessage').style['opacity'] = '1';
            }
        }
    }

    const showInfo = (event) => {
        event.target.nextElementSibling.style['display'] = 'block';
    }

    const sliderClickHandler = (value) => {
        const newVal = passLen + value;

        if(newVal > 7 && newVal < 51)
        {
            passLenHandler(newVal);
            document.getElementById('passwordRange').value = newVal;
        }
    }

    const passLenHandler = (val) => {
        document.getElementById('includedWord').value = '';
        document.getElementById('includedWordMobile').value = '';
        setPassLen(val);
    }

    useEffect(()=>{
        handleChange();
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
                        <img src={ numbers ? checked : unchecked } className={`checked-unchecked ${ numbers && 'checked-img'}`} onClick={()=>handleSelect(setNumbers, !numbers)}/>
                        <h4>Inlcude Numbers</h4>
                        <div style={{position: 'relative'}} >
                            <img src={info} className="info" data-id="0" onClick={event => showInfo(event)}/>
                            <div className="pop-modal">
                                <span>{infoMessages[0]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="option">
                        <img src={ lowercase ? checked : unchecked } className={`checked-unchecked ${ lowercase && 'checked-img'}`} onClick={()=>handleSelect(setLowercase, !lowercase)}/>
                        <h4>Inlcude Lowercase Characters</h4>
                        <div style={{position: 'relative'}} >
                            <img src={info} className="info" data-id="1" onClick={event => showInfo(event)}/>
                            <div className="pop-modal">
                                <span>{infoMessages[1]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="option">
                        <img src={ uppercase ? checked : unchecked } className={`checked-unchecked ${ uppercase && 'checked-img'}`} onClick={()=>handleSelect(setUppercase, !uppercase)}/>
                        <h4>Inlcude Uppercase Characters</h4>
                        <div style={{position: 'relative'}} >
                            <img src={info} className="info" data-id="2" onClick={event => showInfo(event)}/>
                            <div className="pop-modal">
                                <span>{infoMessages[2]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="option">
                        <img src={ letterToBeginWith ? checked : unchecked } className={`checked-unchecked ${ letterToBeginWith && 'checked-img'}`} onClick={()=>handleSelect(setLetterToBeginWith, !letterToBeginWith)}/>
                        <h4>Begin With A Letter</h4>
                        <div style={{position: 'relative'}} >
                            <img src={info} className="info" data-id="3" onClick={event => showInfo(event)}/>
                            <div className="pop-modal">
                                <span>{infoMessages[3]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="option in-option">
                        <img src={ stringToInclude ? checked : unchecked } className={`checked-unchecked ${ stringToInclude && 'checked-img'}`} onClick={()=>handleSelect(setStringToInclude, !stringToInclude)}/>
                        <h4>Include Below Word</h4>
                        <div style={{position: 'relative'}} >
                            <img src={info} className="info" data-id="8" onClick={event => showInfo(event)}/>
                            <div className="pop-modal">
                                <span>{infoMessages[8]}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="option">
                        <img src={ symbols ? checked : unchecked } className={`checked-unchecked ${ symbols && 'checked-img'}`} onClick={()=>handleSelect(setSymbols, !symbols)}/>
                        <h4>Include Symbols</h4>
                        <div style={{position: 'relative'}} >
                            <img src={info} className="info" data-id="4" onClick={event => showInfo(event)}/>
                            <div className="pop-modal">
                                <span>{infoMessages[4]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="option">
                        <img src={ similarChar ? checked : unchecked } className={`checked-unchecked ${ similarChar && 'checked-img'}`} onClick={()=>handleSelect(setSimilarChar, !similarChar)}/>
                        <h4>No Similar Characters</h4>
                        <div style={{position: 'relative'}} >
                            <img src={info} className="info" data-id="5" onClick={event => showInfo(event)}/>
                            <div className="pop-modal">
                                <span>{infoMessages[5]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="option">
                        <img src={ duplicateChar ? checked : unchecked } className={`checked-unchecked ${ duplicateChar && 'checked-img'}`} onClick={()=>handleSelect(setDuplicateChar, !duplicateChar)}/>
                        <h4>No Duplicate Characters</h4>
                        <div style={{position: 'relative'}} >
                            <img src={info} className="info" data-id="6" onClick={event => showInfo(event)}/>
                            <div className="pop-modal">
                                <span>{infoMessages[6]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="option">
                        <img src={ sequentialChar ? checked : unchecked } className={`checked-unchecked ${ sequentialChar && 'checked-img'}`} onClick={()=>handleSelect(setSequentialChar, !sequentialChar)}/>
                        <h4>No Sequential Characters</h4>
                        <div style={{position: 'relative'}} >
                            <img src={info} className="info" data-id="7" onClick={event => showInfo(event)}/>
                            <div className="pop-modal">
                                <span>{infoMessages[7]}</span>
                            </div>
                        </div>
                    </div>
                    <input type="text" id="includedWord" maxLength={Math.round(passLen/3)} disabled={ !stringToInclude } style={{cursor: stringToInclude ? 'pointer' : 'not-allowed' }} placeholder="Word To Include In Password" className='input-text in-option' onChange={(event)=>onWordChange(event)}/>
                </div>
                <div className="card">
                    <div className='slider-conatiner'>
                        <div className='slider-bar-container' style={{margin: '1rem 0'}}>
                            <div className='balls' onClick={()=>sliderClickHandler(1)}>
                                <img src={plusIcon}/>
                            </div>
                            <input type="range" min="8" max="50" className="slider" id="passwordRange" defaultValue="12" onChange={(event)=>passLenHandler(parseInt(event.target.value))}/>
                            <div className='balls' onClick={()=>sliderClickHandler(-1)}>
                                <img src={minusIcon}/>
                            </div>
                        </div>
                        <span style={{margin: '1rem 0', width: '160px', alignSelf: 'center'}}>{`Password Length: ${passLen}`}</span>
                    </div>
                </div>
            </div>
            <div className="out-option">
                <div className="option">
                    <img src={ stringToInclude ? checked : unchecked } className={`checked-unchecked ${ stringToInclude && 'checked-img'}`} onClick={()=>handleSelect(setStringToInclude, !stringToInclude)}/>
                    <h4>Include Below Word</h4>
                    <div style={{position: 'relative'}} >
                        <img src={info} className="info" data-id="8" onClick={event => showInfo(event)}/>
                        <div className="pop-modal">
                            <span>{infoMessages[8]}</span>
                        </div>
                    </div>
                </div>
                <input type="text" id='includedWordMobile' maxLength={Math.round(passLen/3)} disabled={ !stringToInclude } style={{cursor: stringToInclude ? 'pointer' : 'not-allowed' }} placeholder="Word To Include In Password" className='input-text' onChange={(event)=>onWordChange(event)}/>
            </div>
            { 
                <span id="limitReachedMessage">It looks like you reached the word limit. Increase the password length to increase the word limit.</span>
            }
            <div className='slider-conatiner out-slider'>
                <span style={{margin: '1rem 0', width: '160px', alignSelf: 'center'}}>{`Password Length: ${passLen}`}</span>
                <div className='slider-bar-container' style={{margin: '1rem 0'}}>
                    <div className='balls' onClick={()=>sliderClickHandler(-1)}>
                        <img src={minusIcon}/>
                    </div>
                    <input type="range" min="8" max="50" className="slider" id="passwordRange" defaultValue="12" onChange={(event)=>passLenHandler(parseInt(event.target.value))}/>
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
