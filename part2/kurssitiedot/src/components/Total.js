import React from 'react'

const Total = ({part}) => {
  return (
    <>
    <strong>Total of {
    part.reduce((totalExercises,exercises) =>totalExercises+exercises.exercises
    ,0)} exercises</strong>
    </>
  )
}

export default Total