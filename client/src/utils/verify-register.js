import { registerUser } from "../services/user-service";

export const VerifyRegister = async (userCheck, navigate, setErrorMsg) => {
    try {
        return await registerUser(userCheck)
            .then(res => {
                if (res.success) {
                    alert(res.message);
                    navigate('/login');
                }
                else {
                    setErrorMsg(res.message)
                }
            })
            .catch(err => setErrorMsg(err.message))
    } catch (err) {
        setErrorMsg(err.message);
    }
};