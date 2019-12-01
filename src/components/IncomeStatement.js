import React from 'react'

const IncomeStatement = (props) => {
    const symbol = props.incomeStatement.data.symbol
    const sga = props.incomeStatement.data.financials[0]['SG&A Expense'] / 1000000 + ' million'
    const grossMargin = props.incomeStatement.data.financials[0]['Gross Margin']
    const date = props.incomeStatement.data.financials[0]['date']
    const grossProfit = (props.incomeStatement.data.financials[0]['Gross Profit']) / 1000000 + ' million'
    const costOfRevenue = (props.incomeStatement.data.financials[0]['Cost of Revenue']) / 1000000 + ' million'
    const revenue = (props.incomeStatement.data.financials[0]['Revenue']) / 1000000 + ' million'
    const expenses = props.incomeStatement.data.financials[0]['Operating Expenses'] / 1000000 + ' million'
    const netIncome = props.incomeStatement.data.financials[0]['Net Income'] / 1000000 + ' million'
    const researchDev = props.incomeStatement.data.financials[0]['R&D Expenses'] / 1000000 + ' million'
    const interestExpense = props.incomeStatement.data.financials[0]['Interest Expense'] / 1000000 + ' million'
    const incomeTax = props.incomeStatement.data.financials[0]['Income Tax Expense'] / 1000000 + ' million'
    console.log(props.incomeStatement.data)
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
                    <b>Cost of Revenue</b>. Cost of Revenue are the <b>expenses of purchasing inventory and/or labor</b>.
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
                    <b>Gross Margin</b> Warren believes that companies with <b>consistently high gross margins</b> are likely more profitable and have a higher competitive advantage.
                    <br></br>
                    <p className="text-success">{symbol} {grossMargin}</p>
                </div>
            </div>
                <div className="card mt-3">
                <div className="card-body">
                    <b>Selling, General, Administrative (SGA)</b> are sometimes the largest expense for a company. Warren believes a company with a low SGA has durability and high profit potential.
                    <p className="text-success">{symbol} {sga}</p>
                </div>
            </div>
                <div className="card mt-3">
                <div className="card-body">
                    <b>Reasearch & Development</b> are often large expenses for companies. Warren believes a company with large R&D costs have an inherent flaw in their competitve advantage and aren't a sure bet.
                    <p className="text-success">{symbol} {researchDev}</p>
                </div>
            </div>
                <div className="card mt-3">
                <div className="card-body">
                    <b>Interest Expense</b> is the amount of money paid towards interest on loans. Companies with little to no interest expense are better investments because of low-debt.
                    <p className="text-success">{symbol} {interestExpense}</p>
                </div>
            </div>
                <div className="card mt-3">
                <div className="card-body">
                    <b>Income Taxes Paid</b> are the amount paid in taxes. Artifically low tax numbers are a sign of a dishonest company.
                    <p className="text-success">{symbol} {incomeTax}</p>
                </div>
            </div>
            </div>
    )
}

export default IncomeStatement;