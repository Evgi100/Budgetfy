import React from 'react'
import { NavLink } from 'react-router-dom'



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
                            <p>{expense.amount}$ at:{expense.createdAt}</p>
                        </div>
                    )
                })

            }
        </div>
    )
}

export default ExpenseListItem;
