import { createStore } from 'redux'


// Reducer -this function watch for actions and take care of the state
// The reducer is the one that changes the state
// 

const countReducer=((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: action.count
            }
        default: return state
    }
});

const store=createStore(countReducer)

const unsubscribe = store.subscribe(() => {
});

// Action generators

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
}

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy
    }
}

const reset = ({count}) =>  ({
type:'RESET',
count
});



// Actions- Object that gets sent to the store when change happens

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(reset({count:-100}))

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy:5
// });

// store.dispatch({
//     type: 'INCREMENT',
// });

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

// store.dispatch({
//     type: 'SET',
//     count: 101
// });

