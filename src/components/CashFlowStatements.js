import React from 'react'

const BalanceSheets = (props) => {
    const operatingCashflow = (props.cashflowstatement.data.financials[0]['Operating Cash Flow']) / 1000000 + ' million'
    const investingCashflow = (props.cashflowstatement.data.financials[0]['Investing Cash flow']) / 1000000 + ' million'
    const financingCashflow = (props.cashflowstatement.data.financials[0]['Financing Cash Flow']) / 1000000 + ' million'
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
        </div>
    )
}

export default BalanceSheets;