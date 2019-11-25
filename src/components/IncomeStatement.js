import React from 'react'

const IncomeStatement = (props) => {
    const symbol = props.incomeStatement.data.symbol
    const sga = props.incomeStatement.data.financials[0]['SG&A Expense'] / (props.incomeStatement.data.financials[0]['Gross Profit'])
    const grossMargin = props.incomeStatement.data.financials[0]['Gross Margin']
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
                    "Cost of Revenue and Gross Profit are key in determing if a company is spending revenue wisely"
                </div>
            </div>
            <ul className="list-group">
                    <li class="list-group-item text-success">Revenue: {revenue}</li>
                    <li class="list-group-item text-danger">Cost of Revenue: - {costOfRevenue}</li>
                    <li class="list-group-item text-warning">Gross Profit: {grossProfit}</li>
                </ul>
                <div className="card mt-3">
                <div className="card-body">
                    Warren believes that companies with <b>consistently high gross margins</b> are likely more profitable and have a higher competitive advantage.
                    <p classname="text-success">{symbol} {grossMargin}</p>
                    <p classname="text-danger">A gross profit margin below %20 is consider a warning sign.</p>
                </div>
            </div>
                <div className="card mt-3">
                <div className="card-body">
                    Selling, General, Administrative (SGA) are sometimes the largest expense for a company. Warren believes a company with a low SGA has durability and high profit potential.
                    <p classname="text-success">{symbol} {sga}</p>
                    <p classname="text-danger">Comapnies with consistently low SGA are cosnider more desirable</p>
                </div>
            </div>
            </div>
    )
}

export default IncomeStatement;