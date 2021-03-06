import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/App.css';

import { useState } from 'react';

import Header from "./Header"
import NumberContainer from "./NumberContainer"
import AmountContainer from "./AmountContainer"
import SelectedNumberAndTotal from "./SelectedNumberAndTotal"

const App = () => {
  const [selectedNumber, setSelectedNumber] = useState([ 
    { value:"0", isSelected:false },
    { value:"0", isSelected:false },
    { value:"0", isSelected:false },
    { value:"0", isSelected:false },
    { value:"0", isSelected:false }
  ]);

  const numberClick = (eNum) => {
    const tempSelectedNumber = selectedNumber;
    for(let i = 0; i < 5; i++) {
      if(tempSelectedNumber[i].value === "0") {
        tempSelectedNumber[i].value = eNum.target.value;
        tempSelectedNumber[i].isSelected = true;
        break;
      }
    }
    setSelectedNumber([
      { value:tempSelectedNumber[0].value, isSelected:tempSelectedNumber[0].isSelected },
      { value:tempSelectedNumber[1].value, isSelected:tempSelectedNumber[1].isSelected },
      { value:tempSelectedNumber[2].value, isSelected:tempSelectedNumber[2].isSelected },
      { value:tempSelectedNumber[3].value, isSelected:tempSelectedNumber[3].isSelected },
      { value:tempSelectedNumber[4].value, isSelected:tempSelectedNumber[4].isSelected }
    ]);
  }

  const [totalAmount, setTotalAmount] = useState([{ value:0 } ]);
  
  const amountClick = (eAmount) => {
    setTotalAmount([{ value:eAmount }])
  }
 
  const [value, setValue] = useState([
    { chosen: 0 }
  ]);

  const cashClick = () => { 
    if(value[0].chosen===5) {
      if(totalAmount[0].value !== 0) {
        alert("Numbers has been chosen for you!");
      }
    }
  }

  const randomClick = (eRand) => { 
    setSelectedNumber([
    { value:eRand[0], isSelected:true },
    { value:eRand[1], isSelected:true },
    { value:eRand[2], isSelected:true },
    { value:eRand[3], isSelected:true },
    { value:eRand[4], isSelected:true }
  ])
  setValue([ { chosen: 5 }])
  }
  
  const clearClick = () => {
    setSelectedNumber([
      { value:"0", isSelected:false },
      { value:"0", isSelected:false },
      { value:"0", isSelected:false },
      { value:"0", isSelected:false },
      { value:"0", isSelected:false }
    ]);

    setTotalAmount([
      { value:0 }
    ]);
  }
  
  return(
    <>
      <div className="main-grid">
        <Header/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md">
              <AmountContainer amountClick = {amountClick} currentTotal = {totalAmount}/>
            </div>
            <div className="col-md">
              <NumberContainer numberClick = {numberClick} cashClick = {cashClick} clearClick = {clearClick}  randomClick = {randomClick} selectedNumber = {selectedNumber}/>
            </div>
            <div className="col-md">
              <SelectedNumberAndTotal selectedNumber = {selectedNumber} totalAmount = {totalAmount}/>
            </div>
          </div>
        </div>      
        </>
  )
}

export default App;

