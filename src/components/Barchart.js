import React, { Component, useState, useContext, useEffect, Fragment } from 'react'
import { Bar } from 'react-chartjs-2'
import { BuffetContext } from '../Provider'
import PieChart from './PieChart'
import PieChartDebt from './PieChartDebt'



const Barchart = () => {
    const {yearlyIncome} = useContext(BuffetContext)
    const [revenue, setRevenue] = useState('')
    const [expenses, setExpenses] = useState('')
    const [netIncome, setNetIncome] = useState('')

   
    useEffect(() => {
        if(yearlyIncome){
            let data = {
                labels: yearlyIncome.financials.slice(0).reverse().map(i => i.date),
                datasets: [
                    {
                        label: 'Revenue',
                        data: yearlyIncome.financials.slice(0).reverse().map(i => i.Revenue)
                    }]
            }
            setRevenue(data)
            console.log(yearlyIncome)
        }
    }, [yearlyIncome])

    useEffect(() => {
        if(yearlyIncome){
            let data = {
                labels: yearlyIncome.financials.slice(0).reverse().map(i => i.date),
                datasets: [
                    {
                        label: 'Revenue',
                        data: yearlyIncome.financials.slice(0).reverse().map(i => i['Operating Expenses'])
                    }]
            }
            setExpenses(data)
            console.log(yearlyIncome)
        }
    }, [yearlyIncome])

    useEffect(() => {
        if(yearlyIncome){
            let data = {
                labels: yearlyIncome.financials.slice(0).reverse().map(i => i.date),
                datasets: [
                    {
                        label: 'Revenue',
                        data: yearlyIncome.financials.slice(0).reverse().map(i => i['Net Income'])
                    }]
            }
            setNetIncome(data)
            console.log(yearlyIncome)
        }
    }, [yearlyIncome])


        return (
            <Fragment>
            <div class="col-xl-8 col-lg-7">
              <div class="card shadow mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Revenue (Annual)</h6>
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
                  <div class="chart-area">
                    {yearlyIncome && (
                        <Bar
                        data={revenue}
                        options={{
                            title:{
                              display:false,
                              text: false,
                              fontSize:25
                            },
                            responsive:true,
                            maintainAspectRatio: false
                          }} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <PieChart />
            <div class="col-xl-8 col-lg-7">
              <div class="card shadow mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Operating Expenses (Annual)</h6>
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
                  <div class="chart-area">
                    {yearlyIncome && (
                        <Bar
                        data={expenses}
                        options={{
                            title:{
                              display:false,
                              text: false,
                              fontSize:25
                            },
                            responsive:true,
                            maintainAspectRatio: false
                          }} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <PieChartDebt />
            <div class="col-xl-8 col-lg-7">
              <div class="card shadow mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Net Income (Annual)</h6>
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
                  <div class="chart-area">
                    {yearlyIncome && (
                        <Bar
                        data={netIncome}
                        options={{
                            title:{
                              display:false,
                              text: false,
                              fontSize:25
                            },
                            responsive:true,
                            maintainAspectRatio: false
                          }} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            </Fragment>
        )
    }


export default Barchart
