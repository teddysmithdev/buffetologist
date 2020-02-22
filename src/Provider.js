import React, { Component } from 'react'
import axios from 'axios'
import { initialURL } from './utils'

export const BuffetContext = React.createContext();


export class Provider extends Component {
  constructor(props) {
    super(props)

    this.state = {
        data: '',
        error: null,
        loading: false,
        query: '',
        newsearch: '',
        yearlyIncome: false,
        results: [],
        message: '',
        infoFetch: this.infoFetch,
        fetchSearchResults: this.fetchSearchResults,
        handleOnInputChange: this.handleOnInputChange,
        renderSearchResults: this.renderSearchResults,
        displaySearchNewSearch: this.renderSearchResults,
        infoFetchIncomeYearly: this.infoFetchIncomeYearly,
      };

      this.cancel = '';
    }

    infoFetch = () => {
        axios
        .get(initialURL)
        .then(res => {
          this.setState({ data: res.data, loading: false });
        })
        .catch(err => {
          this.setState({ error: err, loading: false });
        });
    }

    infoFetchIncomeYearly = () => {
        axios
        .get(`https://financialmodelingprep.com/api/v3/financials/income-statement/AAPL`)
        .then(res => {
          this.setState({ yearlyIncome: res.data, loading: false });
        })
        .catch(err => {
          this.setState({ error: err, loading: false });
        });
    }

    fetchSearchResults = query => {
      const searchUrl = `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ`

      if (this.cancel) {
          this.cancel.cancel()
      }

      this.cancel = axios.CancelToken.source()

      axios.get( searchUrl, {cancelToken: this.cancel.token} )
      .then(res => {
          // const resultNotFound = 
          this.setState({
              results: res.data,
          })
      })
      .catch(error => {
          if(axios.isCancel(error) || error) {
              this.setState({
                  loading: false
              })
          }
      })
      
  }

  handleOnInputChange = event =>{
      const query = event.target.value;
      this.setState({ query: query, message: '' }, () => {
          this.fetchSearchResults(query)
      })
  }


  handleNewSearch = e => {
    const newsearch = e.target.dataset.id
    console.log(newsearch)
    this.setState({newsearch: newsearch, loading: true}, () => {
      this.renderNewSearch(newsearch)
      this.yearlyIncome()
    })
  }


  renderSearchResults = () => {
      const { results } = this.state;
      if (results) {
          return (
              <ul >
              {results.map(i => {
                 return <li onClick={this.handleNewSearch} data-id={i.symbol}>{i.name}</li>
              })}
              </ul>
          )
      }
  }

  renderNewSearch = search => {
    const {newsearch} = this.state
    const searchUrl = `https://financialmodelingprep.com/api/v3/company/profile/${newsearch}`
    axios
        .get(searchUrl)
        .then(res => {
          console.log(res)
          this.setState({ data: res.data, loading: false });
        })
        .catch(err => {
          this.setState({ error: err, loading: false });
        });
  }

  yearlyIncome = (search) => {
    const {newsearch} = this.state
    const yearlyIncome = `https://financialmodelingprep.com/api/v3/financials/income-statement/${newsearch}`
    axios
        .get(yearlyIncome)
        .then(res => {
          console.log(res)
          this.setState({ yearlyIncome: res.data, loading: false });
        })
        .catch(err => {
          this.setState({ error: err, loading: false });
        });
  }    

    render() {
        return (
            <BuffetContext.Provider value={{...this.state}}>
                {this.props.children}
            </BuffetContext.Provider>
        )
    }
}

export default Provider
