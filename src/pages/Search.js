import React from 'react'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'


const Search = () => {
    return (
        <div>
            <NavBar />
             <div class="card mt-3">
                <div class="card-body">
                    Instructions: Input stock ticker and hit submit. Buffetologist will walk you through the income statement.
                </div>
            </div>
            <SearchBar />
            <div className="card mt-3">
                <div className="card-body">
                    "In his search for the magic company with a durable competitive advantage, Warren always starts with the firm's <b>income statement</b>"
                </div>
            </div>
           
        </div>
    )
}


export default Search;