import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = (props) => {
  return (
    <>
    <Header headline={props.course.name}/>
    <Content subPart={props.course.parts}/>
    
    </>
  )
}

export default Course