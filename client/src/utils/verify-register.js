import { registerUser } from "../services/user-service";

export const VerifyRegister = async (userCheck) => {
    try {
        return await registerUser(userCheck)
            .then(res => {
                if (res.success) {
                    alert(res.message);
                }
                else {
                    alert(res.message)
                }
            })
            .catch(err =>alert(err.message))
    } catch (err) {
        alert(err.message);
    }
};