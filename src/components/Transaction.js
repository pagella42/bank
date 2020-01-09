import React, { Component } from 'react';
class Transaction extends Component {



    render() {
        
        return (<div onClick={()=>this.props.showDetails(this.props.transaction.id)} className="transaction"> <span className="amount">${this.props.transaction.amount}</span> <span className="type">{this.props.transaction.type}</span>  </div>)
    }
}
export default Transaction;