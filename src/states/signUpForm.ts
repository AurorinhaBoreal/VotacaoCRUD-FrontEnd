import { atom } from "recoil";
import CreateUserDTO from "../types/CreateUserDTO";

export const signUpForm = atom<CreateUserDTO>({
    key: 'signUpForm',
    default: {
        firstName: "",
        surname: "",
        cpf: "",
        userType: ""
    }
})