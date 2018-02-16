import React from 'react'
import { NavLink } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'


const ExpenseListItem = (props) => {
    return (
        <div>
            {
                props.expenses.map((expense, index) => {
                    return (
                        <div key={expense.id}>
                            <NavLink to={`/edit/${expense.id}`} >
                                <h3>{expense.description}</h3>
                            </NavLink>
                            <p>
                                {numeral(expense.amount/100).format('$0,0.00')}
                                -
                            {moment(expense.createdAt).format('MMMM Do,YYYY')}</p>
                        </div>
                    )
                })

            }
        </div>
    )
}

export default ExpenseListItem;
