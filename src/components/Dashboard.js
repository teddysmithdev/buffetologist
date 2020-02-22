import React, { Component } from 'react'
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
        return (

            <div>
                <div class="container-fluid">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
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
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Beta</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{data.profile.beta}</div>
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
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Beta</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{data.profile.beta}</div>
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
