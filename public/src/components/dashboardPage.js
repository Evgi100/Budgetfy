import React from 'react'
import { connect } from 'react-redux'

import  ExpenseListFilters from './expenseListFilters'
import ExpenseList from './ExpenseList'

const expenseDashboardPage = (props) => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)



export default expenseDashboardPage