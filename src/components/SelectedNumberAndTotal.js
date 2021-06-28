import React from 'react';

import DisplaySelectedNumber from './DisplaySelectedNumber';
import DisplayTotal from './DisplayTotal';

const SelectedNumberAndTotal = ({selectedNumber,totalAmount}) => {
  return (
      <div className="selected-numbers">
        <h4 className = "text-primary custom-total-header">Selected Numbers</h4>
        {selectedNumber.map(selected => (<DisplaySelectedNumber selectedNumber = {selected.value}/>))}
      
        <hr />

        {totalAmount.map(total => (<DisplayTotal totalAmount = {total.value}/>))}
      </div>
    )
  }
  
export default SelectedNumberAndTotal