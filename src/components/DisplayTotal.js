import React from 'react'

const DisplayTotal = (props) => {
  return (
    <div>
      <h2 className = "text-primary custom-total-header"> Total : $ {props.totalAmount}</h2>
    </div>
  )
}

export default DisplayTotal
