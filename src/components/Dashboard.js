import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { BuffetContext } from '../Provider'
import Barchart from './Barchart'



export default class Dashboard extends Component {
  static contextType = BuffetContext

  componentDidMount() {
    this.context.infoFetch()
    this.context.infoFetchIncomeYearly()
  }

    render() {
      const {data, error, loading } = this.context
      console.log(this.context)
        return (
            <div>
                <div class="container-fluid">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Balance Sheet</h1>
                    <a href={`"${this.context.query}"`} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Spreadsheet</a>
                </div>
                {this.context.renderSearchResults()}
                <div class="row">
                {error && (
                <div class="alert alert-danger" role="alert">
                {JSON.stringify(error) }
                </div>
                )}
                {loading && (
                <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
                </div>
                )}

                {data && (
                    <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                      <div class="card-body">
                        <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Company Name</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{data.profile.companyName}</div>
                          </div>
                          <div class="col-auto">
                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                )}
                {data && (
                    <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-success shadow h-100 py-2">
                      <div class="card-body">
                        <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Market Cap</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{data.profile.mktCap}</div>
                          </div>
                          <div class="col-auto">
                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {data && (
                    <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                      <div class="card-body">
                        <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Price</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">${data.profile.price}</div>
                          </div>
                          <div class="col-auto">
                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                )}
                {data && (
                    <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                      <div class="card-body">
                        <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Dividend</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">%{data.profile.lastDiv}</div>
                          </div>
                          <div class="col-auto">
                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                )}
                <Barchart></Barchart>
                



                </div>
                </div>
            </div>
        )
    }
}
