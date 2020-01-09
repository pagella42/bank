import React, { Component } from 'react';
import './App.css';
import Operations from './components/Operations';
import Transactions from './components/Transactions';
import Balance from './components/Balance';
import axios from 'axios'
import Details from './components/Details';

class App extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      balance:[],
      message:"",
      details:{}

    }

  }

  async componentDidMount() {
    await this.getData()

  }


  async getData() {
    let response = await axios.get('http://localhost:5000/transactions')
    this.setState({ transactions: response.data.transactions, balance: response.data.balance})
  }


  newTransaction = async (amount, type, description ) => {
    await axios.post('http://localhost:5000/newtransaction', ({ amount: amount, type: type, date: new Date(), description: description }))
    await this.getData()
  }

  showDetails = async (id)=>{
    let response = await axios.get(`http://localhost:5000/transaction/${id}`)
    this.setState({details: response.data})
  }

  render() {
    return (
      <div id="app">
        <Balance balance={this.state.balance} />
        <div id="acc">

          <Transactions showDetails={this.showDetails} transactions={this.state.transactions} />
          <div id="secondCol">

            <Operations className="up" newTransaction={this.newTransaction} transactions={this.state.transactions} message={this.state.message} />
            <Details className="down" transaction={this.state.details} />
          </div>
        </div>


      </div >
    )
  }

}

export default App;
