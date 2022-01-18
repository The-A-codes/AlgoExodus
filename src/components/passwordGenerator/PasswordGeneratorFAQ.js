import './PasswordGeneratorFAQ.css';
import arrow from '../../assets/icons/arrow.png';

const PasswordGeneratorFAQ = () => {

    const qas = [
        {
            'question': 'Why should I use password generator ?',
            'answer': 
                `Because why not! People often use words or numbers or sentences or phrases that mean something to them like a pet’s name, date of birth/year etc. The trouble with this is that people end up with passwords that are easy to guess and crack. GPU-based cracking tools can guess over a hundred million passwords per second like these. So it’s necessary to use our password generator tool that creates the strongest passwords and It’ll take that much time to crack our password of length 16. So don’t you dare risk it. Use Algo Exodus, our password generator to create strong passwords that even the strongest computers and tools can’t crack, Or even think to crack. ;)`
        },
        {
            'question':'What is Algo Exodus?',
            'answer':
                `Algo exodus is our bot. He is Smart & Intelligent. He was born with just one purpose, which is Security. He found an algo which he altered uniquely to create the strongest passwords which can help your accounts stay secure. GPU based password cracking tools will take billions of years to crack these passwords. Of course nothing is impossible but preparing for the war before it happens is a good thing right.`
        },
        {
            'question': 'What are the powers of Algo exodus?',
            'answer':
                `Algo Exodus is different, powerful, strong and much more creative from other password generators that already exist online. Of Course he won’t tell you all the powers but here are some.`
        },
        {
            'question': 'Is the Algo Exodus - Strongest Password Generator safe to use?',
            'answer': `Absolutely! Every single password you generate with Algo Exodus is generated locally at that time and nothing is saved or shared anywhere else. XYZ generates and forgets, that’s what his job is.`
        }
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
                            </div>
                        </div>
                )
            }
        </div>
    );
}

export default PasswordGeneratorFAQ;