export const Actions = {
    Login(user){
        return {
            type: 'LOGIN_USER',
            user
        }
    },
    //===================== API call
   initStateData(data){
        return {
            type: 'SET_INITSTATE',
            data
        }
   } ,
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
   }
   

}