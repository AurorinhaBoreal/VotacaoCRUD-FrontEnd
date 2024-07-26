import axios from "axios"
import Log from "../types/Log"


export default class LogService {
    
    public static getLogs = async () => {
        try {
            const response = await axios.get<Log[]>("http://localhost:8080/log")
            console.log(response.data)
            return response.data
        } catch (error) {
            return null
        }
    }
}