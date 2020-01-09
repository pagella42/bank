import React, { Component } from 'react';
class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: "",
            type: "",
            description:""
           

        }
    }


    deposit = () => {
        if (this.state.description && this.state.amount && !isNaN(this.state.amount) ) {
            this.props.newTransaction(this.state.amount, "credit", this.state.description)
            this.setState({ amount: "", type:"", description:"" })
        }
    }
    withdrawl = () => { 
        if (this.state.description && this.state.amount && !isNaN(this.state.amount) ) {
            this.props.newTransaction(this.state.amount, "debit", this.state.description)
            this.setState({ amount: "", type:"", description:""})
        }
    }

    update = async (event) => {
        await this.setState({
            [event.target.name]: event.target.value,
        })
    }
    
    render() {

        return (
            <div id="operations">
                <div className="opCont">
                 <input type="text" name="amount" placeholder="Amount" value={this.state.amount} onChange={this.update} />
                 <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.update} />
                    <div className="buttons">
                        <button className="deposit" onClick={this.deposit}>Deposit</button>
                        <button className="withdrawl" onClick={this.withdrawl}>Withdrawl</button>
                    </div>

                </div>
            </div>
        )
    }
}
export default Operations;