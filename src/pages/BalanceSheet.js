import React, { Component } from 'react';
import Axios from 'axios';
import Navbar from '../components/NavBar'
import BalanceSheets from '../components/BalanceSheets'
import CompanyInfo from '../components/CompanyInfo'

class BalanceSheet extends Component {
    _isMounted = false;

    state = {
        search: '',
        balanceSheet: '',
        description: '',
        isLoaded: false
    }


    onChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }


    submitHandler = e => {
        e.preventDefault()
        Axios
        .get(`https://financialmodelingprep.com/api/v3/financials/balance-sheet-statement/${this.state.search}`)
        .then(data => 
            this.setState({ balanceSheet: data, isLoaded: true }))
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
                    "One of the first things Warren does when he is evaluating a company is to see how much a company has in assets --think <b>cash and property.</b> To do this he looks at the <b>Balance Sheet</b>"
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
            {this.state.balanceSheet && (<BalanceSheets balancesheet={this.state.balanceSheet} />)}
            {/* {!this.state.isLoaded && (<Error />)} */}
            </div>
            </div>
        )
    }
}

export default BalanceSheet;