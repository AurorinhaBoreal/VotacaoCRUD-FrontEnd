import axios from "axios";
import CreateUserDTO from "../types/CreateUserDTO";

export default class userService {

    public static createUser = async (dataUser:CreateUserDTO) => {
        try {
            await axios.post("http://localhost:8080/user", dataUser);
            return null;
        } catch (error) {
            if (axios.isAxiosError<Record<string, unknown>>(error)) {
                if (typeof error.response?.data === 'string') {
                    const errorMessage = error.response.data
                    return errorMessage
                } else {
                    return "Verify your Information and Connection with API"
                }
            }
        }
        return "Unexpected Error Ocurred"
    }
}