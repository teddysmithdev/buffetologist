import React, { Component } from 'react';
import Axios from 'axios';
import IncomeStatement from './IncomeStatement'
import CompanyInfo from './CompanyInfo'

class SearchBar extends Component {

    state = {
        search: '',
        incomeStatement: '',
        description: '',
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        Axios.get(`https://financialmodelingprep.com/api/v3/financials/income-statement/${this.state.search}`)
        .then(data => this.setState({ incomeStatement: data }))
        .catch(err => console.log(err))
        Axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${this.state.search}`)
        // .then(data => console.log(data))
        .then(data => this.setState({description: data }))
    }

    render() {
        return (
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
            {this.state.incomeStatement && (<IncomeStatement incomeStatement={this.state.incomeStatement} />)}            
            {/* {!this.state.isLoaded && (<Error />)} */}
            </div>
        )
    }
}

export default SearchBar;