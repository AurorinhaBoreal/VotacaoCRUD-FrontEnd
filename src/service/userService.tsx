import axios from "axios";
import CreateUserDTO from "../types/CreateUserDTO";

export default class userService {

    public static createUser = async (dataUser:CreateUserDTO) => {
        try {
            const response = await axios.post("http://localhost:8080/user", dataUser);
            console.log(response.data)
            return response.data;
        } catch (error) {
            if (axios.isAxiosError<Record<string, unknown>>(error)) {
                console.error(error.response?.data);
                console.log(error.name)
                return error.name
            }
        }
    }
}