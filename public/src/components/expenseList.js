import React from 'react';
import { connect } from 'react-redux'
import ExpenseListItem from './expenseListItem'
import selectedExpenses from '../selectors/expenses'
import setExpenses from '../actions/expenses'


const ExpenseList = (props) => (
    <div>
        <h1>Expenses List</h1>
        <ExpenseListItem expenses={props.expenses} />
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectedExpenses(state.expenses, state.filters)
    }
}





export default connect(mapStateToProps)(ExpenseList)
