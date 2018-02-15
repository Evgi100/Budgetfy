import React from 'react'

import ExpenseForm from './expenseForm'
import { addExpense } from '../actions/expenses'

import { connect } from 'react-redux'

const addExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={(expense) => {
            props.dispatch(addExpense(expense))
            props.history.push('/')
        }} />
    </div>
)

export default connect()(addExpensePage);