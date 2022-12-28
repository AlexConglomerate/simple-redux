import {createStore} from "redux";

// начальное состояние
const initialState = {count: 0}

// список всех actions
export const countIncremented = "count/increment";
export const countDecremented = "count/decrement";

// Шаблоны всех actions
export const actionCountIncremented = (number) => ({type: countIncremented, payload: number})
export const actionCountDecremented = (number) => ({type: countDecremented, payload: number})

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

