import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import getExpenseTotal from '../selectors/expenses-total'
import selectExpense from '../selectors/expenses'

import numeral from 'numeral'

const ExpensesSummary = ({ expenseCount, expensesTotal }) => {

    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    return (
        <div className="page-header">
            <div className="content-container">
                <h2 className="page-header__title">
                    Total:
                <span className="page-header__data">{expenseCount} </span> {expenseWord}  totalling <span>{numeral(expensesTotal / 100).format('$0,0.00')}</span>
                </h2>
                <div >
                    <Link className="page-header__link" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )

}


const mapStateToProps = (state) => {
    const visibleExpenses = selectExpense(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getExpenseTotal(visibleExpenses)
    }

}



export default connect(mapStateToProps)(ExpensesSummary)