import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const Header = ({course}) => (
    <h1>{course}</h1>
  )

  const Content = ({parts}) => {
    const [part1, part2, part3] = parts
    
    return (
    <>
      <Part name={part1.name} exercises={part1.exercises} />
      <Part name={part2.name} exercises={part2.exercises} />
      <Part name={part3.name} exercises={part3.exercises} />
    </>
  )
  }

  const Total = ({parts}) => {
    
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
    
    <p>Number of exercises {total}</p>
  )}

  const Part = ({name, exercises}) => (
    <p>{name} {exercises} </p>
  )


  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>

      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))