import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Cards from '../components/Cards'

const Home = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <Cards title="Income Statements"
            url='search'
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9A9kdJT7lvQW7yMzhIOv_mzSyrNnB7yR3DpuWPWBK85dLsn9&s"
            content="Learn how to read an income statment"/>
            <Cards title="Balance Sheets" 
            url='balance-sheet'
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9A9kdJT7lvQW7yMzhIOv_mzSyrNnB7yR3DpuWPWBK85dLsn9&s" 
            content="Learn how to read a balance sheet"
            />
            <Cards title="Cash-Flow Statements" 
            url='cashflow-statement'
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9A9kdJT7lvQW7yMzhIOv_mzSyrNnB7yR3DpuWPWBK85dLsn9&s" 
            content="Learn how to read a cash-flow statement"
            />
        </div>
    )
}

export default Home;
