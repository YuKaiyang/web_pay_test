/**
 * Author：liRenhao
 * Create Date：2016/9/18
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {createReducer} from "redux-act"
import {addOrder, payAuth, remove} from "../actions"

export default createReducer({
    [addOrder]: (state, order) => {
        return {...state, [order.orderId]: {...order, isPayAuth: false}}
    },
    [payAuth]: (state, orderId) => {
        const order = state[orderId]
        return {...state, [order.orderId]: {...order, isPayAuth: true}}
    },
    [remove]: (state, orderId) => {
        const newState = {}
        state.keys().filter((key) => {
            return key !== orderId
        }).forEach((key) => {
            newState[key] = state[key]
        })
        return newState
    }
}, {})