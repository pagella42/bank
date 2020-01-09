import React, { Component } from 'react';
class Balance extends Component {

    render() {
        
          
       
        return (
            <div>
                {
                    
                        <div id="balance" >
                            <div className="balanceCont">
                                Balance: {this.props.balance}
                            </div>
                        </div>

                }



            </div>)
    }
}
export default Balance;