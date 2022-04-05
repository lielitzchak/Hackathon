import { loginUser } from "../services/user-service";
import jwt_decode from "jwt-decode";

export const VerifyLogin = async (userCheck, setUser) => {
    try {
        return await loginUser(userCheck)
            .then(res => {
                if (res.success) {
                    localStorage.setItem('token', res.token)
                    const token = localStorage.getItem("token");
                    const decoded = jwt_decode(token);
                    setUser({ ...decoded.user, isLogin: true });
                    alert(`Welcome ${decoded.user.firstName} ${decoded.user.lastName}`);
                }
                else {
                    alert(res.message);
                }
            })
            .catch(err => alert(err.message))
    } catch (err) {
        alert(err.message);
    }
};