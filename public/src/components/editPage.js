import React from 'react'

import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import ExpenseForm from './expenseForm'
import { startEditExpense } from '../actions/expenses'
import { startRemoveExpense } from '../actions/expenses'


const editExpensePage = (props) => {
    return (
        < div >
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(startEditExpense(props.expense.id, expense))
                    props.history.push('/')
                }}
            />
            <button onClick={() => {
                props.dispatch(startRemoveExpense({ id: props.expense.id }))
                props.history.push('/')
            }}>Remove</button>
        </div>
    )

}


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(editExpensePage);