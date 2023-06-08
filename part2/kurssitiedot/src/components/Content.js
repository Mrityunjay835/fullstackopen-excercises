import React from 'react'
import Part from './Part'

const Content = ({subPart}) => {
    
  return (
    <>
    {
        subPart.map(item=>
            <Part key={item.id}  name={item.name} exercises={item.exercises}/>
        )
    }
    </>
  )
}

export default Content