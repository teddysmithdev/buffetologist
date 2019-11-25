import React from 'react'

const BalanceSheets = (props) => {
    const totalAssets = (props.balancesheet.data.financials[0]['Total assets']) / 1000000 + ' million'
    const symbol = props.balancesheet.data.symbol
    const totalLiabilities = (props.balancesheet.data.financials[0]['Total liabilities']) / 1000000 + ' million'
    const shareholderEquity = (props.balancesheet.data.financials[0]['Total shareholders equity']) / 1000000 + ' million'
    const currentAssets = (props.balancesheet.data.financials[0]['Total current assets']) / 1000000 + ' million'
    const cashCashEquiv = (props.balancesheet.data.financials[0]['Cash and cash equivalents']) / 1000000 + ' million'
    const shorttermINvestments = (props.balancesheet.data.financials[0]['Short-term investments']) / 1000000 + ' million'
    const inventory = (props.balancesheet.data.financials[0]['Inventories']) / 1000000 + ' million'
    const otherAssets = (props.balancesheet.data.financials[0]['Other Assets']) / 1000000 + ' million'
    return (
        <div>
        <div className="card mt-3">
                <div className="card-body">
                    A balance sheet is broken into two parts: 
                    <br></br>
                     1. <b>Assets</b> (cash, real-estate, equipment)
                     <br></br>
                     2. <b>Liabilities</b> (debt)
                     <br></br>
                     Assets - Liabilities = Net-worth
                </div>
            </div>
            <ul className="list-group">
                    <li class="list-group-item text-success">{symbol} Total Assets: {totalAssets}</li>
                    <li class="list-group-item text-danger">{symbol} Total Liabilities: - {totalLiabilities}</li>
                    <li class="list-group-item text-primary">{symbol} Shareholder Equity: {shareholderEquity}</li>
                </ul>
                <div className="card mt-3">
                <div className="card-body">
                    "In search of a great company, Warren looks for a high networth. But he also is careful to judge different types of assets and liabilities"
                </div>
            </div>
                <div className="card mt-3">
                <div className="card-body">
                    One of the first indicators Warren looks at to judge assets is <b>Current Assets.</b>
                    <br/>
                    <b>Current assets</b> ({symbol} {currentAssets}) are made of
                    <br/>
                    1. <b>Cash and cash equivalents</b> {cashCashEquiv}
                    <br/>
                    2. <b>Short term investments</b> {shorttermINvestments}
                    <br/>
                    3. <b>Inventory</b> {inventory}
                    <br/>
                    4. <b>Other Assets</b> {otherAssets}
                </div>
            </div>
        </div>
    )
}

export default BalanceSheets;
