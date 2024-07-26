import axios from "axios";
import CreateAgendaDTO from "../types/CreateAgendaDTO";
import Agenda from "../types/Agenda";
import AddVote from "../types/AddVote";

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

    public static sendVote = async (dataVote: AddVote) => {
        try {
            console.log("Dados "+dataVote.cpf+""+dataVote.question+""+dataVote.no+""+dataVote.yes)
            await axios.post("http://localhost:8080/agenda/vote", dataVote)
            return "success";
        } catch (error) {
            if (axios.isAxiosError<Record<string, unknown>>(error)) {
                if (typeof error.response?.data === 'string') {
                    console.log("ERRO: "+error.response.data)
                    const errorMessage = error.response.data
                    return errorMessage
                } else {
                    return "Reload the page and try again. If the error persists, verify your Information and Connection with API"
                }
            }
        }
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