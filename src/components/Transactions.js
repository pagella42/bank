import React, { Component } from 'react';
import Transaction from './Transaction';
class Transactions extends Component {
    render() {
        return (
            <div id="transactions">
                <div className="transTitle"><span>Transactions</span></div>

                <div className="transCont">
                    {this.props.transactions.map(t => <Transaction showDetails={this.props.showDetails} transaction={t} key={t.id}/>)}
                </div>
                
                
                </div>
        )
    }
}
export default Transactions;