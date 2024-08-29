import axios from "axios";
import CreateUserDTO from "../types/CreateUserDTO";

export default class userService {
    private static readonly API_URL = import.meta.env.VITE_API_URL;

    public static createUser = async (dataUser:CreateUserDTO) => {
        try {
            await axios.post(`${this.API_URL}/user`, dataUser);
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

    public static validateUser = async (cpf: string) => {
        try {
            await axios.post(`${this.API_URL}/user/validate`, cpf);
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