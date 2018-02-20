import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './router/appRouter'
import configureStore from './store/configureStore'

import { startSetExpenses } from './actions/expenses'
import { login ,logout } from './actions/auth'
import getVisibleExpenses from './selectors/expenses'
import getExpenseTotal from './selectors/expenses-total'
import LoadingMessage from './components/loadingPage'


import './styles/styles.scss'
import 'normalize.css/normalize.css'
import { firebase } from './firebase/firebase'


const store = configureStore();


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    // const total=getExpenseTotal(state.expenses);
})



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


var hasRendered = false

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered = true
    }
}
ReactDOM.render(<LoadingMessage/>, document.getElementById('app'))



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
    } else {
        store.dispatch(logout())
        renderApp();
        history.push('/')
    }
});