import jwt_decode from "jwt-decode";

export const VerifyToken = (setUser) => {
    if (localStorage.token) {
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        if (Date.now() <= decoded.exp * 1000) {
            setUser({ ...decoded.user, isLogin: true });
        }
        else {
            localStorage.clear();
            setUser({});
        }
    }
};