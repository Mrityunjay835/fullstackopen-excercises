import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({good,neutral,bad}) => {
  return (
    <div>
        <StatisticLine  type="good" value={good}/>
        <StatisticLine  type="neutral" value={neutral}/>
        <StatisticLine  type="bad" value={bad}/>
        <StatisticLine  type="all" value={good+neutral+bad}/>

        <StatisticLine  type="average" value={(good-bad)/(good+neutral+bad)}/>

        <StatisticLine  type="positive" value={good/(good+neutral+bad)*100} symbol="%"/> 
    </div>  
  )
}

export default Statistics