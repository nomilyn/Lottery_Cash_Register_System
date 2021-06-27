import React from 'react'

const DisplayTotal = (props) => {
  return (
    <div>
      <h2 className = "text-primary custom-total-header"> Total : $ {props.totalAmount}</h2>
    </div>
  )
}

export default DisplayTotal


  
/*
import React from 'react';
 class DisplayTotal extends React.Component {
  render() {
    return <p className = "text-primary"> Total : $ {this.props.totalAmount}</p>;
  }
}
export default DisplayTotal
*/