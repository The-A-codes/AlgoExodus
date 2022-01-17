import './PasswordGeneratorFAQ.css';
import arrow from '../../assets/icons/arrow.png';

const PasswordGeneratorFAQ = () => {

    const qas = [
        {
            'question': 'Why should I use password generator ?',
            'answer': 'This is answer'
        }
    ];

    const handleQuestionClick = (event) => {
        event.target.classList.value.includes('rotate')
            ? event.target.classList.remove("rotate")
            : event.target.classList.add("rotate")
    }

    return (
        <div style={{width: "100%", flexDirection: 'column'}} className="center">
            <h1 className="heading center" loading="lazy" style={{height: '100px'}}>Things You Must Know</h1>
            {
                qas.map((qa,index)=>
                    <div className='qa-container center' key={`question_${index}`}>
                        <div className="heading center question">
                            <h2>{qa['question']}</h2>
                            <div className="drop-arrow center" onClick={(event)=>handleQuestionClick(event)}>
                                <img src={arrow} className="arrow"/>
                            </div>
                        </div>
                        <div className="answer center">
                            <h2>{qa['answer']}</h2>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default PasswordGeneratorFAQ;