import React, { Component } from 'react';
import moment from 'moment'
class Details extends Component {


    render() {

        return (<div id="details">
            {this.props.transaction.amount ? 
             <div className="detContainer">
                <span className="single-detail detail-top">Transaction number: {this.props.transaction.id}</span>
                <span className="single-detail">Type: {this.props.transaction.type}</span>
                <span className="single-detail">Date: { moment(this.props.transaction.date).format("MMM Do YY")}</span>
                <span className="single-detail">Amount: ${this.props.transaction.amount}</span>
                <span className="single-detail">Description: {this.props.transaction.description}</span>
            </div>
            : null}
           </div>)
    }
}
export default Details;
