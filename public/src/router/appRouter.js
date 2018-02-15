import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import Header from '../components/header.js'
import notFoundPage from '../components/notFoundPage.js'
import helpPage from '../components/helpPage.js'
import  editExpensePage from '../components/editPage.js'
import  addExpensePage from '../components/addExpensePage.js'
import expenseDashboardPage from '../components/dashboardPage.js'




const AppRouter=()=>(
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path='/' component={expenseDashboardPage} exact={true} />
                    <Route path='/create' component={addExpensePage} />
                    <Route path='/edit/:id' component={editExpensePage} />
                    <Route path='/help' component={helpPage} />
                    <Route component={notFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );    

    export default AppRouter



