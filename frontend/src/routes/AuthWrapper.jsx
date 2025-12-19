
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";


const AuthWrapper = ({children}) => {

    const users = useSelector((state)=>state.user.users);



  return users? (
   <>{children}</>
  ):<Navigate to="/login"/>
}

export default AuthWrapper;
