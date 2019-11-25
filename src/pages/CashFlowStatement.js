import React, { Component } from 'react';
import Axios from 'axios';
import Navbar from '../components/NavBar'
import CashFlowStatements from '../components/CashFlowStatements'
import CompanyInfo from '../components/CompanyInfo'

class CashFlowStatement extends Component {

    state = {
        search: '',
        cashflowStatement: '',
        description: '',
        isLoaded: false
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        Axios.get(`https://financialmodelingprep.com/api/v3/financials/cash-flow-statement/${this.state.search}`)
        .then(data => this.setState({ cashflowStatement: data, isLoaded: true }))
        .catch(err => console.log(err))
        Axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${this.state.search}`)
        // .then(data => console.log(data))
        .then(data => this.setState({description: data, isLoaded: true }))
    }

    render() {
        return (
            <div>
            <Navbar />
            <div className="card mt-3">
                <div className="card-body">
                    "A company can have alot of cash coming in and still not be profitable. The <b>cash-flow statement</b> will tell us if a company is <b>cash-flow positive or negative</b>"
                </div>
            </div>
            <div className="mt-3">
            <form onSubmit={this.submitHandler}>
                <input 
                className="form-control" 
                type="text"
                name="search"
                value={this.state.search} 
                onChange={this.onChange}
                placeholder="Examples: RDFN, MSFT, GE, TGT" 
                aria-label="Search"
                ></input>
                <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Search!</button>
            </form>
            {this.state.description && (<CompanyInfo description={this.state.description} />)}
            {this.state.cashflowStatement && (<CashFlowStatements cashflowstatement={this.state.cashflowStatement} />)}
            {/* {!this.state.isLoaded && (<Error />)} */}
            </div>
            </div>
        )
    }
}

export default CashFlowStatement;