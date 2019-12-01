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
    const otherLiabilities = (props.balancesheet.data.financials[0]['Other Liabilities']) / 1000000 + ' million'
    const currentLiabilities =  (props.balancesheet.data.financials[0]['Total current liabilities']) / 1000000 + ' million'
    const property = (props.balancesheet.data.financials[0]['Property, Plant & Equipment Net']) / 1000000 + ' million'
    const longtermDebt = (props.balancesheet.data.financials[0]['Long-term debt']) / 1000000 + ' million'
    const shorttermDebt = (props.balancesheet.data.financials[0]['Short-term debt']) / 1000000 + ' million'
    console.log(props.balancesheet.data)
    return (
        <div>
        <div className="card mt-3">
                <div className="card-body">
                    A balance sheet is broken into two parts: 
                    <br />
                     1. <b>Assets</b> (cash, real-estate, equipment)
                     <br/>
                     2. <b>Liabilities</b> (debt)
                     <br/>
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
                    <h5>Asset Breakdown</h5>
                    <b>Cash and Cash Equivalents</b> are exactly what they sound like. Low cash reserves indicate a competitive business enviornment or poor economics. Sometimes this can also indicate a company that has sold a large stake in bonds.
                    <br/>
                    <p className="text-success">{cashCashEquiv}</p>
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-body">
                    <b>Inventory</b> is the companies products that it has warehoused to sell it's vendors. Huge stockpiles or rapidly swinging inventory can be a sign of a business in trouble.
                    <br/>
                    <p className="text-success">{inventory}</p>
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-body">
                    <b>Current Assets vs Current Liabilities</b> is a popular metric to show the liquidity of a company and how much debt is accumulated in comparison to assets
                    <br/>
                    <p className="text-success">Current Assets {currentAssets}</p> 
                    <p className="text-success">Current Liabilities {currentLiabilities}</p>

                </div>
            </div>
            <div className="card mt-3">
                <div className="card-body">
                    <b>Property, Plant, Equipment</b> are the collective amounts of property in assets. Companies with poor competitive advantage require massive investments in machinery.
                    <br/>
                    <p className="text-success">{property}</p>
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-body">
                    <h5>Debt Breakdown</h5>
                    <p><b>Long-Term Debt</b> Companies with large amounts of long-term debt are viewed negativley, especially if they are younger. Long-term debt can sap a companies earning capability for years to come</p>
                    <p className="text-success">{longtermDebt}</p>
                </div>
            </div> 
            <div className="card mt-3">
                <div className="card-body">
                    <p><b>Other Liabilities</b> A catch-all for all other types of debt including tax liability, lawsuits, and derivative invesment</p>
                    <br/>
                    <p className="text-success">{otherLiabilities}</p>
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-body">
                    <p><b>Short-term Debt</b> Borrowing or lending short-term loans can be a dangerous game. Example: Bear Stearns. They borrowed short-term and used mortgage backed securities as collateral.</p>
                    <br/>
                    <p className="text-success">{shorttermDebt}</p>
                </div>
            </div>
        </div>
    )
}

export default BalanceSheets;
