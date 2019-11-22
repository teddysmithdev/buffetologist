import React, { Component } from 'react'
import IncomeStatement from './IncomeStatement'

class SearchBar extends Component {

    state = {
        search: '',
        incomeStatement: []
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        fetch(`https://financialmodelingprep.com/api/v3/financials/income-statement/${this.state.search}`)
        .then(response => response.json())
        .then(data => this.setState({ incomeStatement: data }))
        .catch(err => console.log(err))
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
                placeholder="Search" 
                aria-label="Search"
                ></input>
                <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Submit</button>
            </form>
            <IncomeStatement incomeStatement={this.state.incomeStatement} />
            </div>
        )
    }
}

export default SearchBar;