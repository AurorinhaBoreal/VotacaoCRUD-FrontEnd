import axios from "axios";
import CreateAgendaDTO from "../types/CreateAgendaDTO";
import Agenda from "../types/Agenda";

export default class agendaService {

    public static createAgenda = async (dataAgenda:CreateAgendaDTO) => {
        try {
            await axios.post("http://localhost:8080/agenda", dataAgenda)
            return "sucess"
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

    public static getActiveAgendas = async () => {
        try {
            let response = await axios.get<Agenda[]>("http://localhost:8080/agenda/active")
            console.log(response.data)
            return response.data
        } catch (error) {
            console.log(error)
            return null
        }
    }
}