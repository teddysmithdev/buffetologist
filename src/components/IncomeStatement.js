import React from 'react'

const IncomeStatement = (props) => {
    console.log(props.incomeStatement)
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
                    {/* <li class="list-group-item">Revenue: {props.incomeStatement.financials[0].Revenue}</li> */}
                    <li className="list-group-item">Expenses </li>
                    <li className="list-group-item">Netincome </li>
                    
                </ul>
        </div>
    )
}

export default IncomeStatement;