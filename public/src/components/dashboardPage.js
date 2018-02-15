import React from 'react'
import { connect } from 'react-redux'

import  ExpenseListFilters from './expenseListFilters'
import ExpenseList from './expenseList'

const expenseDashboardPage = (props) => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)



export default expenseDashboardPage