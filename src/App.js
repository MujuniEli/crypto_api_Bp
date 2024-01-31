
import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails } from './components'

import './App.css';

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='main'>
            <Layout>
              <div className='routes'>
                <Switch>
                  <Route exact path='/'>
                    <Homepage />
                  </Route>
                  <Route exact path='/'>
                    <Exchanges />
                  </Route>
                  <Route exact path='/'>
                    <Cryptocurrencies />
                  </Route>
                  <Route exact path='/'>
                    <CryptoDetails />
                  </Route>
                </Switch>
              </div>
            </Layout>
        </div>
        <div className='footer'>

        </div>
    </div>
  )
}

export default App