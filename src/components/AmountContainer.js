import React from 'react'

class AmountContainer extends React.Component {
    btnAmountClick = (amt) => {
        const totalAmount = this.props.currentTotal[0].value + parseInt(amt.target.value);
        this.props.amountClick(totalAmount)
    }
    render () {
        return (   
            <div className = "money-value">
                <h4 className = "text-primary custom-total-header">Choose Amount</h4>
                <table>
                    <tr>
                        <td><button value = "1" className = "btn btn-warning custom-amount" onClick = {this.btnAmountClick.bind(this)}> $1 </button></td>
                        <td><button value = "5" className = "btn btn-success custom-amount" onClick = {this.btnAmountClick.bind(this)}> $5 </button></td>
                    </tr>
                    <tr>
                        <td><button value = "10" className = "btn btn-primary custom-amount" onClick = {this.btnAmountClick.bind(this)}> $10 </button></td>
                        <td><button value = "20" className = "btn btn-danger custom-amount" onClick = {this.btnAmountClick.bind(this)}> $20 </button></td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default AmountContainer
