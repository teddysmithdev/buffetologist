import React, { Component } from 'react'
import { BuffetContext } from '../Provider'

export class Search extends Component {

    static contextType = BuffetContext
   
    render() {
        const {query} = this.context
        return (
            <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">
              <input type="text" class="form-control bg-light border-0 small" value={query} onChange={this.context.handleOnInputChange} placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"></input>
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>
        )
    }
}

export default Search
