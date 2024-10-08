import { Box, Button, FormControl, FormLabel, Input, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Textarea, Tooltip, useToast } from "@chakra-ui/react"
import styles from "./am.module.css"
import InputMask from "react-input-mask"
import { InfoIcon } from "@chakra-ui/icons"
import agendaService from "../../service/agendaService"
import CreateAgendaDTO from "../../types/CreateAgendaDTO"
import { ChangeEvent, useState } from "react"

interface modal
 {
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
        if (name == "cpf") {
            const formattedCPF: string = value.replace(/\D/g, '');
            setFormData({
              ...formData,
              cpf: formattedCPF,
            });
          } else {
            setFormData({
              ...formData,
              [name]: value
            });
          }
    }

    const validateQuestion = (): boolean => {
        if (formData.question.includes("?")) {
            return true
        } else {
            toast({
                position: "bottom",
                status: "warning",
                title: "Question Format",
                description: "Your question didn't have a question Mark. For better redability and logic insert one.",
                duration: 8000,
                isClosable: true
            })
            return false
        }
    }

    const handleSubmit = async () => {
        const validation: boolean = validateQuestion();
        if (validation) {
            if (formData.duration < 1) {
                formData.duration = 1
                toast({
                    position: "bottom",
                    status: "warning",
                    title: 'Minimum Duration', 
                    description: 'The duration was set to mininum (1 Minute), because a valid one was not informed!',
                    duration: 5000,
                    isClosable: true
                })
            } else if (formData.duration > 999) {
                formData.duration = 999
                toast({
                    position: "bottom",
                    status: "warning",
                    title: 'Maximum Duration', 
                    description: 'The duration was set to maximum (999 Minutes), because the maximum one was excedeed!',
                    duration: 5000,
                    isClosable: true
                })
            }
            const response = await agendaService.createAgenda(formData);
            if (response == "sucess") {
                toast({
                    position: "bottom",
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
                    position: "bottom",
                    status: "error",
                    title: 'Error', 
                    description: response,
                    duration: 5000,
                    isClosable: false
                })
            }
        } else {
            toast({
                position: "bottom",
                status: "error",
                title: 'Invalid Creation', 
                description: "Please verify your information and try again.",
                duration: 5000,
                isClosable: false
            })
        }
    }

    return (
        <Modal
                size={"xl"}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent className={styles.modalBody} bg="#e6e6e6" borderRadius={20} display={"flex"}>
                    <ModalHeader className={styles.modalHeader} bg={"main.200"}>Create Agenda</ModalHeader>
                    <ModalCloseButton className={styles.closeButton} color={"black"}/>
                    <FormControl className={styles.formContainer} mt={"2vw"} >
                        <FormLabel className={styles.inputLabels}>Select Role:</FormLabel>
                        <Box display="flex" justifyContent="center">
                            <Select className={styles.category} name="category" value={formData.category} onChange={handleChange} placeholder="-" width={"25vw"}>
                                    <option value={"SPORTS"} data-cy="CA-select-S">Sports</option>
                                    <option value={"TECHNOLOGY"} data-cy="CA-select-T">Technology</option>
                                    <option value={"OPINION"} data-cy="CA-select-O">Opinion</option>
                                    <option value={"PROGRAMMING"} data-cy="CA-select-P">Programming</option>
                            </Select>
                        </Box>
                        <FormLabel className={styles.inputLabels} mt={"2vw"}>Question:</FormLabel>
                        <Textarea data-cy="CA-text-Q" className={styles.question} name="question" value={formData.question} onChange={handleChange}/>
                        <FormLabel className={styles.inputLabels}>
                            Duration:
                            <Tooltip label="In Minutes - Minimal duration is 1 minute" borderRadius={10} placement="top">
                                <InfoIcon className={styles.tooltips} color="black" justifyContent="center" alignSelf={"center"}/>
                            </Tooltip>
                        </FormLabel>
                        <Input data-cy="CA-input-D" className={styles.inputs} type="number" name="duration" value={formData.duration} onChange={handleChange}/>
                        <FormLabel className={styles.inputLabels}>
                            CPF:
                            <Tooltip label="To create a Agenda your cpf must be related to an Admin User" borderRadius={10} placement="top">
                                <InfoIcon className={styles.tooltips} color="black" justifyContent="center" alignSelf={"center"}/>
                            </Tooltip>
                        </FormLabel>
                        <Input data-cy="CA-select-CPF" as={InputMask} mask={"999.999.999-99"} maskChar={null} className={styles.inputs} type="text" name="cpf" value={formData.cpf} onChange={handleChange}/>
                    </FormControl>
                    <Button
                        data-cy="CA-button-CA"
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
