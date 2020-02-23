import React, { Component, useState, useContext, useEffect, Fragment } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { BuffetContext } from '../Provider'



const PieChart = () => {
    const {yearlyBalanceSheet} = useContext(BuffetContext)
    const [balance, setBalance] = useState('')
    const [equity, setEquity] = useState('')


   
    useEffect(() => {
        if(yearlyBalanceSheet){
            const data = {
                labels: [
                    'Total Assets',
                    'Total Debt',
                ],
                datasets: [{
                    data: [yearlyBalanceSheet.financials['0']['Total assets'],yearlyBalanceSheet.financials['0']['Total debt'] ],
                    backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                    ]
                }]
            };
            setBalance(data)
            console.log(yearlyBalanceSheet)
        }
    }, [yearlyBalanceSheet])


    useEffect(() => {
        if(yearlyBalanceSheet){
            const data = {
                labels: [
                    'Cash',
                    'Short-term Investments',
                    'Receivables',
                    'Inventories',
                    'Property',
                ],
                datasets: [{
                    data: [yearlyBalanceSheet.financials['0']['Cash and cash equivalents'],
                            yearlyBalanceSheet.financials['0']['Short-term investments'], 
                            yearlyBalanceSheet.financials['0']['Receivables'], 
                            yearlyBalanceSheet.financials['0']['Inventories'], 
                            yearlyBalanceSheet.financials['0']['Property, Plant & Equipment Net'], 
                        ],
                    backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                    ]
                }]
            };
            setEquity(data)
            console.log(yearlyBalanceSheet)
        }
    }, [yearlyBalanceSheet])
        return (
            <div class="col-xl-4 col-lg-5">
              <div class="card shadow mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Equity vs Debt</h6>
                  <div class="dropdown no-arrow">
                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                      <div class="dropdown-header">Dropdown Header:</div>
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                {yearlyBalanceSheet && (
                <Doughnut 
                  data={balance} 
                  options={{
                    title:{
                      display:false,
                      text: false,
                      fontSize:25
                    },
                    // responsive:true,
                    // maintainAspectRatio: false
                  }}/>  
                )}
                  </div>
                  </div>
                </div>
        )
    }
   

export default PieChart