import { useRecoilValue } from "recoil";
import { signUpForm } from "../signUpForm"

export const getSignUpForm = () => {
    return useRecoilValue(signUpForm);
}