import {createStore} from "redux";

// начальное состояние
const initialState = {count: 7}

// список всех actions
export const countIncremented = "count/increment";
export const countDecremented = "count/decrement";

// прописываем алгоритм: при каком action как менять состояние
function reducer(state, action) {
    switch (action.type) {
        case countIncremented: {
            const newState = {...state}
            newState.count = newState.count + action.payload
            return newState
        }
        case countDecremented: {
            const newState = {...state}
            newState.count = newState.count - action.payload
            return newState
        }
        default:
            return state;
    }
}

// Инициализируем store
export const store = createStore(reducer, initialState)