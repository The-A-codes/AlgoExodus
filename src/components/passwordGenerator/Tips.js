import { useState, useEffect } from 'react';
import tipIcon from '../../assets/icons/tips-info.svg';
import refresh from '../../assets/icons/refresh.svg';
import './Tips.css';

const Tips = () =>{
    const tips = [
        <span className='tip-text'>Don’t use the same password across different accounts. </span>,
        <span className='tip-text'>Use different & strong passwords for every account. Take full benefit from our free tool : ) </span>,
        <span className='tip-text'>Never use passwords like these please ( Password!, 12345678a, qwerty, qwerty12345, letmein, football, iloveyou, yourname@birthyear e.g. ram@97 )</span>,
        <span className='tip-text'>Use a password that has at least 16 characters, and include every option given above, must select the include symbols option above.</span>,
        <span className='tip-text'>Do not use the names of your families, friends or pets in your passwords.</span>,
        <span className='tip-text'>Do not store your passwords in web browsers( FireFox, Chrome, Safari, Opera, IE, Microsoft Edge ) since all passwords saved in Web browsers can be revealed easily.</span>,
        <span className='tip-text'>Use a strong password generator to store all your passwords which can log you in with just a single click. <a href="https://keepass.info/download.html" target="_blank">(Take me to Download a safe password manager for me)</a></span>,
        <span className='tip-text'>Never log in to important accounts on the computers of others, or when connected to a public Wi-Fi hotspot, Tor, free VPN or web proxy.</span>,
        <span className='tip-text'>It's recommended to change your passwords every 10 weeks.</span>,
        <span className='tip-text'>Turn on 2-step authentication whenever possible.</span>,
        <span className='tip-text'>Keep the operating systems and Web browsers of your devices up-to-date by installing the latest security update.</span>,
        <span className='tip-text'>Access important websites in private or incognito mode.</span>,
        <span className='tip-text'>Do not click the link in an email or SMS message, do not reset your passwords by clicking them, except that you are sure and know these messages are not fake.</span>,
    ];

    const [tip, setTip] = useState(tips[1]);
    useEffect(()=>{
        setNewTip();

        document.addEventListener('click', (event)=>{
            let parent = event.target;
            while(parent) {
                if(parent.id) {
                    if(parent.id == 'tip-modal') {
                        return;
                    }
                }
                parent = parent.parentElement;
            }

            const ele = document.querySelector('.tip-container');
            ele.classList.remove('active-tip');
        })
    }, [])

    const setNewTip = () => {
        const randomIndex = parseInt(Math.random(10)*10);
        setTip(tips[randomIndex]);
    }

    const tipClickHandler = (event) => {
        const ele = document.querySelector('.tip-container');
        if (!ele.classList.value.includes('active-tip')){
            ele.classList.add('active-tip');
        }
    }

    return (
        <div id='tip-modal' className="tip-container" onClick={(event)=>tipClickHandler(event)}>
            <div className='tip-title-container'>
                <img src={tipIcon} className='tip-info'/>
                <span className='tip-title'>Tips</span>
            </div>
            {tip}
            <div className='refresh-container'>
                <img src={refresh} className='tip-refresh-icon' onClick={()=>setNewTip()}/>
                <span className='tip-refresh'>Refresh</span>
            </div>
        </div>
    );
}

export default Tips;