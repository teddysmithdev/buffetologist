import React, { Component, useState, useContext, useEffect, Fragment } from 'react'
import { Radar } from 'react-chartjs-2'
import { BuffetContext } from '../Provider'



const PieChartDebt = () => {
    const {yearlyBalanceSheet} = useContext(BuffetContext)
    const [equity, setEquity] = useState('')


   
   
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
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [yearlyBalanceSheet.financials['0']['Cash and cash equivalents'],
                            yearlyBalanceSheet.financials['0']['Short-term investments'], 
                            yearlyBalanceSheet.financials['0']['Receivables'], 
                            yearlyBalanceSheet.financials['0']['Inventories'], 
                            yearlyBalanceSheet.financials['0']['Property, Plant & Equipment Net'], 
                        ],
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
                  <h6 class="m-0 font-weight-bold text-primary">Debt (In-Depth)</h6>
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
                <Radar
                  data={equity} 
                  options={{
                    title:{
                      display:false,
                      text: false,
                      label: false
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
   

export default PieChartDebt