import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Search from './Search'
import Dashboard from './Dashboard'
import Provider from '../Provider'




class Layout extends Component {
    render() {
        return (
            <Provider>
            <div>
              <div id="wrapper">
              <Sidebar></Sidebar>
              <div id="content-wrapper" class="d-flex flex-column">
              <div id="content">
              <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
              <i class="fa fa-bars"></i>
              </button>
              <Search/>
              </nav>
              <Dashboard />
              </div>
              </div>
              </div>
            </div>
            </Provider>
        )
    }
}

export default Layout
