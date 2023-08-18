import { useState } from 'react'
import AnswerList from './AnswerList'
import './App.css'

function App() {

  const questions = [
    {
      question: 'このクイズサイトはなんのUIフレームワークで構築されているでしょうか？',
      answers: ['react', 'vue', 'angular', 'Svelte'],
      correct: 'react'
    },
    {
      question: '世界で最も人気のあるUIフレームワークは以下のうちどれでしょうか？',
      answers: ['react', 'vue', 'angular', 'Svelte'],
      correct: 'react'
    }
  ]

  const [quizNumber, setQuizNumber] = useState(0)

  const handleJudge = (e) => {

    //正誤判定
    if (e.target.textContent === 'react') {
      console.log('正解')
    } else {
      console.log('不正解')
    }

    //問題番号加算
    if(quizNumber + 1 >= questions.length){
      setQuizNumber(0)
    }else{
      setQuizNumber(quizNumber + 1)
    }
  }

  return (
    <section>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-8 Small shadow p-5">
            <h1 className='title'>クイズ</h1>
            <h2 className='quiz_number_text'>{quizNumber + 1}st quiz</h2>
            <p className='question_text'>
              {questions[quizNumber].question}
            </p>
            <AnswerList answers={questions[quizNumber].answers} handleJudge={handleJudge} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
