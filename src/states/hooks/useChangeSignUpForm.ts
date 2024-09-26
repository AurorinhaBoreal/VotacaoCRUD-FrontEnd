import { useSetRecoilState } from "recoil"
import { signUpForm } from "../signUpForm"
import CreateUserDTO from "../../types/CreateUserDTO"

export const useChangeSignUpForm = () => {
    const setForm = useSetRecoilState(signUpForm)
    return (info: Partial<CreateUserDTO>) => {
        setForm((currentForm) => ({
            ...currentForm,
            ...info
        }))
    }
}