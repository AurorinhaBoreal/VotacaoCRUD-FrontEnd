import axios from "axios";
import CreateUserDTO from "../types/CreateUserDTO";
import User from "../types/User";

export default class userService {
    private static readonly API_URL = import.meta.env.VITE_API_URL;

    public static getUsers = async () => {
        try {
            const response = await axios.get<User[]>(`${this.API_URL}/user`)
            return response.data
        } catch (error) {
            return null
        }
    }

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
            await axios.post(`${this.API_URL}/user/validate`, cpf, {
                headers: {
                    'Content-Type': 'text/plain',
                },
            });
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

    public static removeUser = async (cpf: string) => {
        try {
            await axios.delete(`${this.API_URL}/user/${cpf}`);
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