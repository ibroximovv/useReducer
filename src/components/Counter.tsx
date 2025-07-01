import { useReducer } from "react"

interface CounterType {
    count: number
}

interface ReducerType {
    type: 'inc' | 'dec'
}

function reducerFn(state: CounterType, action: ReducerType) {
    switch (action.type) {
        case 'inc':
            return {
                count: state.count + 1
            }
        case 'dec':
            return {
                count: state.count - 1
            }
    }
}

const Counter = () => {
    const [counter, dispatch] = useReducer(reducerFn, { count: 0 })
    return (
        <>
            <button onClick={() => dispatch({ type: 'dec' })}>-</button>
            <button>{counter.count}</button>
            <button onClick={() => dispatch({ type: 'inc' })}>+</button>
        </>
    )
}

export default Counter