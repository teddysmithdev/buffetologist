import React from 'react'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'


const Search = () => {
    return (
        <div>
            <NavBar />
            <div class="card mt-3">
                <div class="card-body">
                    Instructions: Input stock ticker and hit submit.
                </div>
            </div>
            <SearchBar />
        </div>
    )
}


export default Search;