import axios from "axios";
import CreateAgendaDTO from "../types/CreateAgendaDTO";
import Agenda from "../types/Agenda";
import AddVote from "../types/AddVote";

export default class agendaService {
    private static readonly API_URL = import.meta.env.VITE_API_URL;

    public static createAgenda = async (dataAgenda:CreateAgendaDTO) => {
        try {
            await axios.post(`${this.API_URL}/agenda`, dataAgenda)
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
            await axios.post(`${this.API_URL}/agenda/vote`, dataVote)
            return "success";
        } catch (error) {
            if (axios.isAxiosError<Record<string, unknown>>(error)) {
                if (typeof error.response?.data === 'string') {
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
            const response = await axios.get<Agenda[]>(`${this.API_URL}/agenda/active`)
            return response.data
        } catch (error) {
            return null
        }
    }

    public static getEndedAgendas = async () => {
        try {
            const response = await axios.get<Agenda[]>(`${this.API_URL}/agenda`)
            return response.data
        } catch (error) {
            return null
        }
    }
}