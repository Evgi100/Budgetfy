import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

const loginPage = (props) => {
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title"> Budgetify</h1>
                <p>Make a Personal Budget and Keep Track of Spending</p>
                <button className="box-layout__button" onClick={props.startLogin}>Login</button>
            </div>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})



export default connect(undefined, mapDispatchToProps)(loginPage)