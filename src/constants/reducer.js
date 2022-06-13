export const initState = {
	userLogin: {
		isLogin: false,
		info :{
		}
	},
	data: {
		isLoading: false
	}
};
const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_INITSTATE':
			// console.log({...state, data:action.data})
			return {...state, data:action.data}
		case 'SET_CURRENT_USER':
			return {
				...state,
				userLogin: {
					...state.userLogin,
					isLogin: true,
					info: {
						...action.data
					}
				}
			}
		
		case 'DELETE_CUR_USER':
			return {
				...state,
				userLogin: {
					...state.userLogin,
					isLogin: false,
					info: {}
				}
			}
		default:
			return state
	}
};

export default reducer;
