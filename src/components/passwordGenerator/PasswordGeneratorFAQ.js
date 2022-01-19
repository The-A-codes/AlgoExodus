import './PasswordGeneratorFAQ.css';
import arrow from '../../assets/icons/arrow.png';

const PasswordGeneratorFAQ = () => {

    const qas = [
        {
            'question': 'Why should I use password generator ?',
            'answer': 
                `Because why not! People often use words or numbers or sentences or phrases that mean something to them like a pet’s name, date of birth/year etc. The trouble with this is that people end up with passwords that are easy to guess and crack. GPU-based cracking tools can guess over a hundred million passwords per second like these. So it’s necessary to use our password generator tool that creates the strongest passwords and It’ll take that much time to crack our password of length 16. So don’t you dare risk it. Use Algo Exodus, our password generator to create strong passwords that even the strongest computers and tools can’t crack, Or even think to crack. ;)`,
            'sub': []
        },
        {
            'question':'What is Algo Exodus?',
            'answer':
                `Algo exodus is our bot. He is Smart & Intelligent. He was born with just one purpose, which is Security. He found an algo which he altered uniquely to create the strongest passwords which can help your accounts stay secure. GPU based password cracking tools will take billions of years to crack these passwords. Of course nothing is impossible but preparing for the war before it happens is a good thing right.`,
            'sub': []
        },
        {
            'question': 'What are the powers of Algo exodus?',
            'answer':
                `Algo Exodus is different, powerful, strong and much more creative from other password generators that already exist online. Of Course he won’t tell you all the powers but here are some.`,
            'sub': [
                'You can add your given name or any word that you want to include in your password and Algo Exodus will use his power to create a strong password which will include your input word. (We recommend password length 16).',
                'So when Algo Exodus was being created our Internet connection got disconnected that led Algo Exodus to Neurology Sickness. Now he does his work perfectly but after creating passwords he forgets what he created. Good for you, close the tab after copying your password in a password manager and wooooosh! Only you know the password now.'
            ]
        },
        {
            'question': 'Is the Algo Exodus - Strongest Password Generator safe to use?',
            'answer': `Absolutely! Every single password you generate with Algo Exodus is generated locally at that time and nothing is saved or shared anywhere else. XYZ generates and forgets, that’s what his job is.`,
            'sub': []
        }
    ];

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

    const handleQuestionClick = (event) => {
        const parent = event.target.parentElement.parentElement;
        const answer = parent.querySelector('.answer');
        const arrow = parent.querySelector('.drop-arrow');
        if(arrow.classList.value.includes('rotate')) {
            arrow.classList.remove("rotate");
            answer.classList.remove('active');
        }
        else {
            arrow.classList.add("rotate");
            answer.classList.add('active');
        }
    }

    return (
        <div style={{width: "100%", flexDirection: 'column'}} className="center">
            <h1 className="heading center" loading="lazy" style={{height: '100px'}}>Things You Must Know</h1>
            {
                qas.map((qa,index)=>
                        <div className="heading center question" key={`question_${index}`}style={{height: 'fit-content'}}>
                            <div className="center" style={{padding: '0 2rem'}}>
                                <div className="question-heading" onClick={(event)=>handleQuestionClick(event)}/>
                                <h2>{qa['question']}</h2>
                                <div className="drop-arrow center">
                                    <img src={arrow} className="arrow"/>
                                </div>
                            </div>
                            <div className="answer center">
                                <h3>{qa['answer']}</h3>
                                <ul>
                                    {
                                        qa['sub'].map(s_point=><li><h4>{s_point}</h4></li>)
                                    }
                                </ul>
                            </div>
                        </div>
                )
            }
            <div className="tips-container center">
                <h2>Tips</h2>
                <ul>
                    {
                        tips.map(tip=><li><h3>{tip}</h3></li>)
                    }
                </ul>
            </div>
        </div>
    );
}

export default PasswordGeneratorFAQ;