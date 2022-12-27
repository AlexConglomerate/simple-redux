import {useDispatch, useSelector} from "react-redux";
import {countDecremented, countIncremented} from "./store";

function App() {
    const headerClass = 'text-3xl hover:font-bold text-red-800 m-1'
    const buttonClass = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 m-1'

    const dispatch = useDispatch() // функция, которая изменяет state
    const count = useSelector(state => state.count) // достаём значение state

    // В функциях ниже вызываем dispatch, и передаём в него action. Тогда измениться state
    const handleIncrement = () => dispatch({type: countIncremented, payload: 1})
    const handleDecrement = () => dispatch({type: countDecremented, payload: 1})

    return (
        <div className="flex justify-center flex-col ">
            <h1 className={headerClass}> Count: {count} </h1>
            <button className={buttonClass} onClick={handleIncrement}>increment</button>
            <button className={buttonClass} onClick={handleDecrement}>decrement</button>
        </div>
    )
}

export default App;
