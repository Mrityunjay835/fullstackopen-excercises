import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = (props) => {
  return (
    <>
    <Header headline={props.course.name}/>
    <Content subPart={props.course.parts}/>
    <Total part={props.course.parts}/>
    </>
  )
}

export default Course