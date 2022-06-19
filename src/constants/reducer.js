import { data } from 'autoprefixer';

export const initState = {
	userLogin: {
		isLogin: false,
		info: {}
	},
	data: {
		isLoading: false
	},
	user: {
		userID: "",
        fullName: "",
        username: "",
        password: "",
        phoneNumber: "",
        email: "",
        avatar:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        userType: "user",
        userToken: "",
        shippingAddress: "",
        userListCart: [],
        userListVoucher: [],
	}
};
const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_INITSTATE':
			// console.log({...state, data:action.data})
			return { ...state, data: action.data }
		case 'SET_CURRENT_USER':
			return {
				...state,
				userLogin: {
					...state.userLogin,
					isLogin: true,
					info: action.data
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
		case 'SIGNUP':		
			state.data.users = [...state.data.users, action.user]
			return state
		case 'UPDATE_USER':
			state.userLogin.info = action.user
			return state
		case 'DELETE_USERCART':
			state.userLogin.info.userListCart = state.userLogin.info.userListCart.filter(
				(product) => product.productID != action.productID
			);
			return state;
		case 'ADD_TO_CART':
			state.userLogin.info.userListCart = [...state.userLogin.info.userListCart, action.cartInfo];
			return state;

		case 'UPDATE_USER_LIST_CART':
			state.userLogin.info.userListCart = state.userLogin.info.userListCart.filter((userCart) => {
				return !action.listCart.some((cart) => cart.productID == userCart.productID);
			});
			return state;
		case 'UPDATE_USER_LIST_VOUCHER':
			let index = state.userLogin.info.userListVoucher.findIndex(
				(voucher) => voucher.voucherID === action.voucherID
			);
			state.userLogin.info.userListVoucher[index].isUse = 'TRUE';
			return state;
		case 'ADD_VOUCHER_TO_USER': {

			// add voucher to user
			state.userLogin.info.userListVoucher = [...state.userLogin.info.userListVoucher, action.voucher]
			// minus voucher quantity
			let index = state.data.vouchers.findIndex(voucher => voucher.voucherID === action.voucher.voucherID)
			state.data.vouchers[index].quantity -= 1
			return state
		}
		default:
			return state;
	}
};

export default reducer;
