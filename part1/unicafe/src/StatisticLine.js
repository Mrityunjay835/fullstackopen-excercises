import React from 'react'

const StatisticLine = ({ type, value, symbol }) => {
    return (
        <>
            <tr>
                <td>{type}</td>
                <td> {value} {symbol}</td>
            </tr>
        </>
    )
}

export default StatisticLine