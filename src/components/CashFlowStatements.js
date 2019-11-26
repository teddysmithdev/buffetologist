import React from 'react'

const BalanceSheets = (props) => {
    const operatingCashflow = (props.cashflowstatement.data.financials[0]['Operating Cash Flow']) / 1000000 + ' million'
    const investingCashflow = (props.cashflowstatement.data.financials[0]['Investing Cash flow']) / 1000000 + ' million'
    const financingCashflow = (props.cashflowstatement.data.financials[0]['Financing Cash Flow']) / 1000000 + ' million'
    const capEx = (props.cashflowstatement.data.financials[0]['Capital Expenditure']) / 1000000 + ' million'
    const stockBuyback = (props.cashflowstatement.data.financials[0]['Issuance (buybacks) of shares']) / 1000000 + ' million'
    console.log(props.cashflowstatement.data)
    return (
        <div>
        <div className="card mt-3">
                <div className="card-body">
                    A cash-flow statement is broken into 3 parts: 
                    <br></br>
                     1. <b>Operating activities</b> {operatingCashflow}
                     <br></br>
                     2. <b>Investing Activites</b> {investingCashflow}
                     <br></br>
                     3. <b>Financing Activites</b> {financingCashflow}
                </div>
            </div>
        <div className="card mt-3">
                <div className="card-body">
                    <b>Capital expenditures</b> are outlays of cash that are more permanent in nature. They can have a deep impact on company earnings. This is why Warren rarely invest in telephone companies.
                    <br></br>
                    <p className="text-success">Capex: {capEx}</p>
                </div>
            </div>
        <div className="card mt-3">
                <div className="card-body">
                    <b>Stock buybacks</b> are when a company with excess cash buyback their own stock. This reduces the number of shares and increases shareholder interest. Overtime this causes increases in share price.
                    <br></br>
                    <p className="text-success">Issuance of buybacks: {stockBuyback}</p>
                </div>
            </div>
        </div>
    )
}

export default BalanceSheets;