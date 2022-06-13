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
    }


}