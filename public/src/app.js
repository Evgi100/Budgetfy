import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './router/appRouter'
import configureStore from './store/configureStore'

import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import './styles/styles.scss'
import 'normalize.css/normalize.css'



const store = configureStore();


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
})

                                            
const expenseOne = store.dispatch(addExpense({ description: 'Watter bill', amount: 500 }));

const expenseTwo = store.dispatch(addExpense({ description: 'Gas bill', amount: 30000 }));

const expenseThree = store.dispatch(addExpense({ description: 'Rent', amount: 1100 }));


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))