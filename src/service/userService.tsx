import axios from "axios";
import CreateUserDTO from "../types/CreateUserDTO";

export default class userService {

    public static createUser = async (dataUser:CreateUserDTO) => {
        try {
            const response = await axios.post("http://localhost:8080/user", dataUser);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}