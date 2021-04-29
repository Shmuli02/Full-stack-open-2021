import React from 'react'

const Header = ({course_name}) => {
    return (
        <h1>{course_name}</h1>
    )
  }
  
const Part = ({part}) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

const Content = ({course_parts}) => {
    return (
        <div>
        {course_parts.map(part =>
            <Part key={course_parts.id} part={part}/>
            )}
        </div>
    )
}

const Total = ({course_parts}) => {
    const exercices = []
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    {course_parts.map(part => 
        exercices.push(part.exercises)
        )}
    const total_exercices = exercices.reduce(reducer)

    return (
        <div>
        <p><strong>total of {total_exercices} exercises</strong></p>
        </div>
    )
}

const Course = ({course}) => {
    return (
        <div>
        <Header course_name ={course.name}/>
        <Content course_parts = {course.parts}/>
        <Total course_parts={course.parts}/>
        </div>
    )
}

export default Course