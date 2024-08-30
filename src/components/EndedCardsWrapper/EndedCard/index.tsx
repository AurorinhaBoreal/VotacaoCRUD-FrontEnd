import { Badge, Box, Button, Input, Text, useToast } from "@chakra-ui/react"
import styles from "./ec.module.css"
import InputMask from "react-input-mask"
import Agenda from "../../../types/Agenda"
import VotesContainer from "./Votes";
import getBadgeColor from "../../../utils/getBadgeColor"
import { DeleteIcon } from "@chakra-ui/icons";
import agendaService from "../../../service/agendaService";
import { ChangeEvent, useState } from "react";
import userService from "../../../service/userService";

interface info {
  agenda: Agenda
}

export default function EndedCard({agenda}: info) {
  const [cpf, setCpf] = useState("")
  const createdIn: string[] = agenda.createdOn.split("T");
  const endedIn: string[] = agenda.finishOn.split("T");
  const color = getBadgeColor(agenda.category);
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
        description: "Deleting Agenda...",
        duration: 3000,
        isClosable: true
    })
    setCpf("")
    deleteAgenda(agenda.question)
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

  const deleteAgenda = async (question: string) => {
    const response = await agendaService.removeAgenda(question);
    if (!response) {
      toast({
          position: "bottom",
          status: "success",
          title: "Agenda Deleted",
          description: "The agenda was deleted. Reload the page to update the information.",
          duration: 10000,
          isClosable: true
      })
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
    <Box className={styles.cardContainer}>
        <Badge className={styles.badge} colorScheme={color} mt={"0.7vw"} border={"0.2vw solid #666666"} borderRadius={15}>{agenda.category}</Badge>
        <Text className={styles.question}>{agenda.question}</Text>
        <VotesContainer agenda={agenda}/>
        <Box className={styles.dateContainer}>
            <Text className={styles.dateTitle}>Created On:</Text>
            <Text className={styles.dateInfo}>{createdIn[0]+" - "+createdIn[1]}</Text>
            <Text className={styles.dateTitle}>Ended On:</Text>
            <Text className={styles.dateInfo}>{endedIn[0]+" - "+endedIn[1]}</Text>
        </Box>
        <Input className={styles.cpfInput} as={InputMask} mask={"999.999.999-99"} maskChar={null} onChange={handleChange} value={cpf} type="text" padding={0} textAlign={"center"} borderRadius={10} placeholder="CPF" bg={"var(--c-gray1)"} color={"black"}/>
        <Button data-cy="EA-button-D" className={styles.delBtn} onClick={() => validateCpf(cpf)}>
          <DeleteIcon/>
          Delete
        </Button>
    </Box>
  )
}
