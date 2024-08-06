import axios from "axios"
import Log from "../types/Log"


export default class LogService {
    private static readonly API_URL = import.meta.env.VITE_API_URL;

    public static getLogs = async () => {
        try {
            const response = await axios.get<Log[]>(`${this.API_URL}/log`)
            return response.data
        } catch (error) {
            return null
        }
    }
}