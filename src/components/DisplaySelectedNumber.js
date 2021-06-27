import React from 'react';

class DisplaySelectedNumber extends React.Component {
    render() {
      if(this.props.selectedNumber !== "0")
        return (
          <h5> Mark : {this.props.selectedNumber} </h5>);
      else
        return (
        <h5><br/></h5>);
  }}

  export default DisplaySelectedNumber 