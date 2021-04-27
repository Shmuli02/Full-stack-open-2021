import React, { useState } from 'react'

const Button = ({feedback, text}) => (
  <button onClick={feedback}>{text}</button>
)

const StatisticLine = ({text,value}) => {
  return (
    <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const sum = (good+neutral+bad)
  const positive = (good/sum)*100
  const average = (((good)+((-1)*bad))/sum)
  if (sum > 0) {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={good}/>
            <StatisticLine text="neutral" value={neutral}/>
            <StatisticLine text="bad" value={bad}/>
            <StatisticLine text="all" value={sum}/>
            <StatisticLine text="average" value={average}/>
            <StatisticLine text="positive" value={positive}/>
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div>No feedback given</div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const feedback_good = () => {
    setGood(good + 1)
  }
  
  const feedback_neutral = () => {
    setNeutral(neutral + 1)
  }
  const feedback_bad = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <h1>Give feedback</h1>
      <Button feedback={feedback_good} text='good'/>
      <Button feedback={feedback_neutral} text='neutral'/>
      <Button feedback={feedback_bad} text='bad'/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App