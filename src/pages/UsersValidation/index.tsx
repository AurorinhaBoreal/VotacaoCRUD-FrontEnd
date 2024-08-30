import { Box, Button, Input, Text, useToast} from "@chakra-ui/react";
import InputMask from "react-input-mask"
import styles from "./uv.module.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ChangeEvent, useState } from "react";
import userService from "../../service/userService";
import { useNavigate } from "react-router-dom";


export default function UsersValidation() {
    const navigate = useNavigate()
    const [cpf, setCpf] = useState("");
    const toast = useToast()

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        const formattedCPF: string = value.replace(/\D/g, '');
        setCpf(formattedCPF);
    }

    const validateCpf = async (cpf: string) => {
        const response = await userService.validateUser(cpf)
        if (!response) {
        toast({
            position: "bottom",
            status: "success",
            title: 'User Validated', 
            description: "Redirecting to Users Page...",
            duration: 3000,
            isClosable: true
        })
        setCpf("")
        navigate("/users")
        } else {
            toast({
                position: "bottom",
                status: "error",
                title: 'Error', 
                description: response,
                duration: 5000,
                isClosable: false
            })
        }
    }

    return (
        <Box >
            <Header/>
            <Box className={styles.validationContainer}>
                <Box className={styles.infoContainer} width={"fit-content"} mb={"2vw"}>
                    <Text className={styles.title}>Validation</Text>
                    <Text className={styles.description}>Please inform your cpf to be validated and access users page.</Text>
                    <Input className={styles.cpfInput} as={InputMask} mask={"999.999.999-99"} maskChar={null} onChange={handleChange} value={cpf} type="text" padding={0} textAlign={"center"} borderRadius={10} placeholder="CPF" bg={"mono.300"} color={"black"}/>
                    <Button className={styles.validateBtn}
                        color="mono.500"
                        bg="main.200"
                        type='submit'
                        onClick={() => validateCpf(cpf)}
                    >
                        Validate
                    </Button>
                </Box>
            </Box>
            <Footer/>
        </Box>
    )
}