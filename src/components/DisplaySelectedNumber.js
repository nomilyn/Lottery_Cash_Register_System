import React from 'react';

class DisplaySelectedNumber extends React.Component {
    render() {
      if(this.props.selectedNumber !== "0")
        return (
          <h5 className = "text-danger custom-total-header"> Mark : {this.props.selectedNumber} </h5>
        );
      else
        return (
        <br/>
      );
  }
}

export default DisplaySelectedNumber 