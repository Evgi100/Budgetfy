import React from 'react'
import { connect } from 'react-redux'

import ExpenseListFilters from './expenseListFilters'
import ExpenseList from './expenseList'
import ExpensesSummary from './expensesSummary'

const expenseDashboardPage = (props) => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <hr/>
        <div className="expense-list__container">
        <ExpenseList />
        </div>
        
    </div>
)



export default expenseDashboardPage