/**
 * Author：liRenhao
 * Create Date：2016/9/18
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * Modified By：Yky
 * Why & What is modified  添加文件描述,添加orderIds数组的排序
 * orderIds的reducer：
 * addOrder——将订单id数组排序后存入state.orderIds
 * remove——将对应的orderId从state.orderIds中移除
 */
import {createReducer} from "redux-act"
import {addOrder, remove} from "../actions"

export default createReducer({
	[addOrder]: (state, order) => {
		if (state.indexOf(order.orderId) < 0) {
			let newState = [...state, order.orderId];
			const compare = (v1, v2)=>v1 - v2;
			newState.sort(compare);
			return newState
		}
		else
			return [...state]
	},
	[remove]: (state, orderId) => {
		return state.filter((value) => {
			return value !== orderId
		})
	}
}, [])