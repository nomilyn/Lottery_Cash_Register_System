import React from 'react'

class NumberContainer extends React.Component {
    btnNumberClick = (eNumber) => {
        if (document.getElementById(eNumber.target.id).style.backgroundColor === "green") {
            document.getElementById(eNumber.target.id).style.backgroundColor = "#ffc107";//rgb(230, 163, 236)";
            eNumber.target.value = 0;
            let i = 0;
            while (i < 5) {
                if (this.props.selectedNumber[i].value === eNumber.target.value) {
                    this.props.selectedNumber[i].value = "0";
                    this.props.selectedNumber[i].isSelected = "0";
                }
                i++;
                /*if(i == 5) {
                    alert("Opps")
                }*/
            }
            this.props.numberClick(eNumber)
        }
        else {
            document.getElementById(eNumber.target.id).style.backgroundColor = "green";
            document.getElementById(eNumber.target.id).style.color = "white";
            this.props.numberClick(eNumber)
        }
    } 
    
    btnCashClick = () => {
        this.props.cashClick()
    }

    btnClearClick = () => {
        for(let id = 1; id <= 20; id++) {
            document.getElementById(id).style.backgroundColor = "#ffc107"; 
        }
        this.props.clearClick()
    }

    btnRandomClick = () => {
        this.btnClearClick();
        const minNumber = 1;
        const maxNumber = 20;
        const randomNumber = [];
        for (let i = 0; i < 5; i++) {
            randomNumber[i] = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
        }
        this.props.ranClick(randomNumber)
    }

    render() {
        return (
            <div>
                <h4 className = "text-primary custom-total-header"> Choose 5 Numbers</h4>
                <table className = "number-list">
                    <tr>
                        <td> <button id = "1" value = "1" className = "btn btn-warning custom-number" onClick = {this.btnNumberClick.bind(this)}> 1 </button> </td>
                        <td> <button id = "2" value = "2" className = "btn btn-warning custom-number" onClick = {this.btnNumberClick.bind(this)}> 2 </button> </td>
                        <td> <button id = "3" value = "3" className = "btn btn-warning custom-number" onClick = {this.btnNumberClick.bind(this)}> 3 </button> </td>
                        <td> <button id = "4" value = "4" className = "btn btn-warning custom-number" onClick = {this.btnNumberClick.bind(this)}> 4 </button> </td>
                        <td> <button id = "5" value = "5" className = "btn btn-warning custom-number" onClick = {this.btnNumberClick.bind(this)}> 5 </button> </td>
                    </tr>
                    <tr>  
                        <td> <button id = "6" value = "6" className = "btn btn-warning custom-number" onClick = {this.btnNumberClick.bind(this)}> 6 </button> </td>
                        <td> <button id = "7" value = "7" className = "btn btn-warning custom-number" onClick = {this.btnNumberClick.bind(this)}> 7 </button> </td>
                        <td> <button id = "8" value = "8" className = "btn btn-warning custom-number" onClick = {this.btnNumberClick.bind(this)}> 8 </button> </td>
                        <td> <button id = "9" value = "9" className = "btn btn-warning custom-number" onClick = {this.btnNumberClick.bind(this)}> 9 </button> </td>
                        <td> <button id = "10" value = "10" className = "btn btn-warning custom-number" onClick = {this.btnNumberClick.bind(this)}> 10 </button> </td>
                    </tr>
                    <tr> 
                        <td> <button id = "11" value = "11" className = "btn btn-warning custom-number" onClick = {this.btnNumberClick.bind(this)}> 11 </button> </td>
                        <td> <button id = "12" value = "12" className = "btn btn-warning custom-number" onClick = {this.btnNumberClick.bind(this)}> 12 </button> </td>
                        <td> <button id = "13" value = "13" className = "btn btn-warning custom-number" onClick = {this.btnNumberClick.bind(this)}> 13 </button> </td>
                        <td> <button id = "14" value = "14" className = "btn btn-warning custom-number" onClick = {this.btnNumberClick.bind(this)}> 14 </button> </td>
                        <td> <button id = "15" value = "15" className = "btn btn-warning custom-number" onClick = {this.btnNumberClick.bind(this)}> 15 </button> </td>
                    </tr>
                    <tr>
                        <td> <button id = "16" value = "16" className = "btn btn-warning custom-number" onClick = {this.btnNumberClick.bind(this)}> 16 </button> </td>
                        <td> <button id = "17" value = "17" className = "btn btn-warning custom-number" onClick = {this.btnNumberClick.bind(this)}> 17 </button> </td>
                        <td> <button id = "18" value = "18" className = "btn btn-warning custom-number" onClick = {this.btnNumberClick.bind(this)}> 18 </button> </td>
                        <td> <button id = "19" value = "19" className = "btn btn-warning custom-number" onClick = {this.btnNumberClick.bind(this)}> 19 </button> </td>
                        <td> <button id = "20" value = "20" className = "btn btn-warning custom-number" onClick = {this.btnNumberClick.bind(this)}> 20 </button> </td>
                    </tr>
                    <tr>
                        <td colSpan = "3"> <button className = "btn btn-success btn-block" onClick = {this.btnCashClick.bind(this)}> CASH </button> </td>
                        <td colSpan = "2"> <button className = "btn btn-danger btn-block" onClick = {this.btnClearClick.bind(this)}> CLEAR </button> </td>
                    </tr>
                    <tr>
                        <td colSpan = "5"> <button className = "btn btn-primary btn-block" onClick = {this.btnRandomClick.bind(this)}> RANDOM </button> </td>
                    </tr>
                </table>
                <br/><br/><br/><br/><br/><br/><br/>
            </div> 
        )
    }
}

export default NumberContainer
