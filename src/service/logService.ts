import axios from "axios"
import Log from "../types/Log"


export default class LogService {
    private static readonly API_URL = import.meta.env.API_URL;

    public static getLogs = async () => {
        try {
            console.log(this.API_URL)
            const response = await axios.get<Log[]>(`${this.API_URL}/log`)
            console.log(response.data)
            return response.data
        } catch (error) {
            return null
        }
    }
}