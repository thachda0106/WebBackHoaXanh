import { data } from "autoprefixer"

export const Actions = {
    Login(user) {
        return {
            type: 'LOGIN_USER',
            user
        }
    },
    //===================== API call
    initStateData(data) {
        return {
            type: 'SET_INITSTATE',
            data
        }
    },

    setCurrentUser(user) {
        return {
            type: 'SET_CURRENT_USER',
            data: user
        }
    },

    deleteCurUser() {
        return {
            type: 'DELETE_CUR_USER',
        }
    },
   //======================== changed initState
   deleteUserCart(productID){
       return {
           type: 'DELETE_USERCART',
           productID
       }
   },

   addToCart(cartInfo){
       return {
           type: 'ADD_TO_CART',
           cartInfo
       }
   },
   
   updateUserListCart(listCart){
        return {
            type: 'UPDATE_USER_LIST_CART',
            listCart
        }
   },
   updateUserListVoucher(voucherID){
        return {
            type: 'UPDATE_USER_LIST_VOUCHER',
            voucherID

        }
   },
   addVoucherToUser(voucher){
        return {
            type: 'ADD_VOUCHER_TO_USER',
            voucher
        }
   },

   signup(user) {
    return {
      type: 'SIGNUP',
      user
    }
  },
    updateUser(user){
    return {
        type: 'UPDATE_USER',
        user
    }
   }
}