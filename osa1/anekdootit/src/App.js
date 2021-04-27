import React, { useState } from 'react'

const Button = ({action,text}) => (
    <button onClick={action}>{text}</button>
)

const Display = ({point}) => {
  if (point<2) {
    return (
      <p>has {point} vote</p>
    )
  }
  return (
    <p>has {point} votes</p>
  )
}

const App = () => {
  const [points, setPoints] = useState(Array(6).fill(0))
  const [selected, setSelected] = useState(0)
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  const add_points = () => {
    const copy = [ ...points ]
    copy[selected] += 1
    setPoints(copy)
    
  }
  const most_voted = points.indexOf(Math.max(...points))
  
  const new_anecdotes = () => {
    const random_int = Math.floor(Math.random() * anecdotes.length)
    setSelected(random_int)
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <Display point={points[selected]} />
      <br></br>
      <Button action={add_points} text="Vote!"/>
      <Button action={new_anecdotes} text="next anecdote"/>
      
      <h1>Anecdote with most votes</h1>
      
      {anecdotes[most_voted]}
      <Display point={points[most_voted]} />
    </div>
  )
}

export default App