import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

const loginPage = (props) => {
    return (
        <div>
            <h2>Welcome to the Budgetfy app</h2>
            <p>Press the login button to login</p>
            <button onClick={props.startLogin}>Login</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})



export default connect(undefined, mapDispatchToProps)(loginPage)