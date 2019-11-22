import React from 'react'

const IncomeStatement = (props) => {
    console.log(props.incomeStatement.data)
    const symbol = props.incomeStatement.data.symbol
    const date = props.incomeStatement.data.financials[0]['date']
    const grossProfit = (props.incomeStatement.data.financials[0]['Gross Profit']) / 1000000 + ' million'
    const costOfRevenue = (props.incomeStatement.data.financials[0]['Cost Of Revenue']) / 1000000 + ' million'
    const revenue = (props.incomeStatement.data.financials[0]['Revenue']) / 1000000 + ' million'
    const expenses = props.incomeStatement.data.financials[0]['Operating Expenses'] / 1000000 + ' million'
    const netIncome = props.incomeStatement.data.financials[0]['Net Income'] / 1000000 + ' million'
    return (
        <div>
            <div className="card mt-3">
                <div className="card-body">
                    "In his search for the magic company with a durable competitive advantage, Warren always starts with the firm's <b>income statement</b>"
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-body">
                    Every <b>income statement</b> has <b>3</b> parts:
                    <br/>
                    <b>Revenue, Expenses, and Net Income.</b>
                    
                </div>
            </div>
                <ul className="list-group">
                    <li class="list-group-item text-success">{symbol} Revenue: {revenue}</li>
                    <li class="list-group-item text-danger">{symbol} Expenses: - {expenses}</li>
                    <li class="list-group-item text-warning">{symbol} Net Income: {netIncome}</li>
                </ul>
                <div className="card mt-3">
                <div className="card-body">
                    "After Warren has taken a peek at the total <b>revenues</b>, he starts a long and careful dig thru <b>expenses</b>.
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-body">
                    "On the income statement, Total Revenue comes to <b>Cost of Revenue</b>. Cost of Revenue are the <b>expenses of purchasing inventory and/or labor</b>.
                </div>
            </div>
            <ul className="list-group">
                    <li class="list-group-item text-success">Revenue: {revenue}</li>
                    <li class="list-group-item text-danger">Cost of Revenue: - {expenses}</li>
                    <li class="list-group-item text-warning">Gross Profit: {grossProfit}</li>
                </ul>
                <div className="card mt-3">
                <div className="card-body">
                    "Cost of Revenue and Gross Profit are key in determing if a company is spending revenue wisely"
                </div>
            </div>
            </div>
    )
}

export default IncomeStatement;