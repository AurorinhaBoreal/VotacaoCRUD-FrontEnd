import { Box, Button, FormControl, FormLabel, Input, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Textarea, Tooltip, useToast } from "@chakra-ui/react"
import styles from "./am.module.css"
import { InfoIcon } from "@chakra-ui/icons"
import agendaService from "../../service/agendaService"
import CreateAgendaDTO from "../../types/CreateAgendaDTO"
import { ChangeEvent, useState } from "react"

interface modal {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export default function AgendaModal(props: modal) {
    const {isOpen, onClose } = props
    const toast = useToast()
    const [formData, setFormData] = useState<CreateAgendaDTO>({
        category: "",
        question: "",
        cpf: "",
        duration: 1
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(formData)
    }

    const handleSubmit = async () => {
        if (formData.duration < 1) {
            formData.duration = 1
            console.log(formData)
            toast({
                position: "bottom-right",
                status: "warning",
                title: 'Minimum Duration', 
                description: 'The duration was set to mininum, because a valid one was not informed!',
                duration: 5000,
                isClosable: true
            })
        }   
        const response = await agendaService.createAgenda(formData);
        if (response == "sucess") {
            toast({
                position: "bottom-right",
                status: "success",
                title: "Agenda Created",
                description: "Your Agenda was created Succesfully. Reload the page to see it.",
                duration: 10000,
                isClosable: true
            })
            setFormData({
                category: "",
                question: "",
                cpf: "",
                duration: 1,
            })
        } else if (response) {
            toast({
                position: "bottom-right",
                status: "error",
                title: 'Error', 
                description: response,
                duration: 5000,
                isClosable: false
              })
        }
    }

    return (
        <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent bg="#e6e6e6" borderRadius={20} width={"40vw"} display={"flex"}>
                    <ModalHeader className={styles.modalHeader} bg={"main.200"}>Create Agenda</ModalHeader>
                    <ModalCloseButton color={"black"} width={"2vw"}/>
                    <FormControl className={styles.formContainer} mt={"2vw"} >
                        <FormLabel className={styles.inputLabels}>Select Role:</FormLabel>
                        <Box display="flex" justifyContent="center">
                            <Select className={styles.category} name="category" value={formData.category} onChange={handleChange} placeholder="-" width="20vw">
                                    <option value={"S"}>Sports</option>
                                    <option value={"T"}>Technology</option>
                                    <option value={"O"}>Opinion</option>
                                    <option value={"P"}>Programming</option>
                            </Select>
                        </Box>
                        <FormLabel className={styles.inputLabels} mt={"2vw"}>Question:</FormLabel>
                        <Textarea className={styles.question} name="question" value={formData.question} onChange={handleChange}/>
                        <FormLabel className={styles.inputLabels}>
                            Duration:
                            <Tooltip label="In Minutes - Minimal duration is 1 minute" borderRadius={10} placement="top">
                                <InfoIcon maxWidth={25} boxSize={"1vw"} ml={2} color="black" justifyContent="center" alignSelf={"center"}/>
                            </Tooltip>
                        </FormLabel>
                        <Input className={styles.inputs} type="number" name="duration" value={formData.duration} onChange={handleChange}/>
                        <FormLabel className={styles.inputLabels}>
                            CPF:
                            <Tooltip label="To create a Agenda your cpf must be related to an Admin User" borderRadius={10} placement="top">
                                <InfoIcon maxWidth={25} boxSize={"1vw"} ml={2} color="black" justifyContent="center" alignSelf={"center"}/>
                            </Tooltip>
                        </FormLabel>
                        <Input className={styles.inputs} type="number" name="cpf" value={formData.cpf} onChange={handleChange}/>
                    </FormControl>
                    <Button
                        display="flex"
                        alignSelf="center"
                        height="3vw"
                        width="8vw"
                        fontSize="1vw"
                        bg={"main.200"} 
                        color={"main.500"}
                        mb="2vw" 
                        _hover={{ border: "3px solid black"}}
                        _active={{bg: "main.250"}}
                        onClick={handleSubmit}
                    >
                        Create Agenda
                    </Button>
                </ModalContent>
            </Modal>
    )
}
