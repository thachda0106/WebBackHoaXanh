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
   } 
   

}