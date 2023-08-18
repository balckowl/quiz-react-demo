import React from 'react'

const AnswerList = ({ answers, handleJudge }) => {

    return (
        <ul className='answer_list'>
            {answers.map((answer,key)=>(
                <li className="answer_list_item" key={key} onClick={handleJudge}>{ answer }</li>
            ))}
        </ul>
    )
}

export default AnswerList