/**
 * Author：liRenhao
 * Create Date：2016/9/18
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * Modified By：Yky
 * Why & What is modified  添加文件描述
 * marketing的reducer：
 * addMarketing——将优惠信息按照orderId存入state.marketing
 * remove——将对应的orderId从state.marketing中移除
 */
import {createReducer} from "redux-act"
import {addMarketing, remove} from "../actions"

export default createReducer({
	[addMarketing]: (state, marketing) => {
		return {...state, [marketing.orderId]: marketing}
	},
	[remove]: (state, orderId) => {
		const newState = {};
		Object.keys(state).filter((key) => {
			return key !== orderId
		}).forEach((key) => {
			newState[key] = state[key]
		});
		return newState
	}
}, {})