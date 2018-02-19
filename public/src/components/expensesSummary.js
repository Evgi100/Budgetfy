import React from 'react'
import { connect } from 'react-redux'

import getExpenseTotal from '../selectors/expenses-total'
import selectExpense from '../selectors/expenses'

import numeral from 'numeral'

const ExpensesSummary = ({expenseCount,expensesTotal}) => {

    const expenseWord=expenseCount ===1 ? 'expense':'expenses'
    return (
        <div>
            <h3>Total expenses</h3>
            <p>
                Viewing {expenseCount} {expenseWord}  totalling {numeral(expensesTotal / 100).format('$0,0.00')}
            </p>
        </div>
    )

}


const mapStateToProps = (state) => {
    const visibleExpenses=selectExpense(state.expenses,state.filters)
    return {
       expenseCount:visibleExpenses.length,
       expensesTotal:getExpenseTotal(visibleExpenses)
    }

}



export default connect(mapStateToProps)(ExpensesSummary)