import { useAuthContext } from "./useRegistrationContext";

export const useLogout = () => {

    const { dispatch } = useAuthContext()

    const logout = () => {

        // remove user from storage
        localStorage.removeItem('user')

         // dispatch logout action
         dispatch({type: 'LOGOUT'})

    }

    return {logout}

} 