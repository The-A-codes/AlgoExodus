import { useState, useEffect } from 'react';
import tipIcon from '../../assets/icons/tips-info.svg';
import './Tips.css';

const Tips = () =>{
    const tips = [
        `Don’t use the same password across different accounts. `,
        `Use different & strong passwords for every account. Take full benefit from our free tool : ) `,
        `Never use passwords like these please ( Password!, 12345678a, qwerty, qwerty12345, letmein, football, iloveyou, yourname@birthyear e.g. ram@97 )`,
        `Use a password that has at least 16 characters, and include every option given above, must select the include symbols option above.`,
        `Do not use the names of your families, friends or pets in your passwords.`,
        `Do not store your passwords in web browsers( FireFox, Chrome, Safari, Opera, IE, Microsoft Edge ) since all passwords saved in Web browsers can be revealed easily.`,
        `Use a strong password generator to store all your passwords which can log you in with just a single click. <a href="https://keepass.info/download.html" target="_blank">(Take me to Download a safe password manager for me)<a>`,
        `Never log in to important accounts on the computers of others, or when connected to a public Wi-Fi hotspot, Tor, free VPN or web proxy.`,
        `It's recommended to change your passwords every 10 weeks.`,
        `Turn on 2-step authentication whenever possible.`,
        `Keep the operating systems and Web browsers of your devices up-to-date by installing the latest security update.`,
        `Access important websites in private or incognito mode.`,
        `Do not click the link in an email or SMS message, do not reset your passwords by clicking them, except that you are sure and know these messages are not fake.`,
    ];

    const [tip, setTip] = useState(tips[1]);
    useEffect(()=>{
        setNewTip();
    }, [])

    const setNewTip = () => {
        const randomIndex = parseInt(Math.random(10)*10);
        setTip(tips[randomIndex]);
    }

    const tipClickHandler = (event) => {
        setNewTip();
        const ele = document.querySelector('.tip-container');
        ele.classList.value.includes('active-tip')
            ? ele.classList.remove('active-tip')
            : ele.classList.add('active-tip')
    }

    return (
        <div className="tip-container" onClick={(event)=>tipClickHandler(event)}>
            <div className='tip-title-container'>
                <img src={tipIcon} className='tip-info'/>
                <span className='tip-title'>Tips</span>
            </div>
            <span className='tip-text'>{tip}</span>
        </div>
    );
}

export default Tips;