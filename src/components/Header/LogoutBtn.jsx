import { useDispatch } from "react-redux"
import { logout } from "../../features/auth/authSlice"
import authService from "../../services/appwrite/auth"

function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandler = async () => {
        try{
            await authService.logout();
            dispatch(logout());
        } catch(error){
            console.error("LogoutBtn :: logoutHandler :: error ", error);
        }
        
    }
    return (
        <div>
            <button className="btn btn-primary rounded-pill px-4 py-2">Logout</button>
        </div>
    )
}

export default LogoutBtn
