import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import AllReduser from './Reducer';

function saveToLocalStorage(state) {
    try {
        var serializedData = JSON.stringify(state)
        localStorage.setItem('state', serializedData)
    }
    catch (e) {
        console.log(e)
    }
}
function loadFromLocalStorage() {
    try {
        var serializedData = localStorage.getItem('state')
        if (serializedData === null) return undefined
        return JSON.parse(serializedData)
    }
    catch (e) {
        console.log(e)
        return undefined
    }
}
var storedReduxData = loadFromLocalStorage()

const store = createStore(
    AllReduser,
    storedReduxData,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
);

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;