import { Badge, Box, Text, Input, Button, useToast } from "@chakra-ui/react"
import styles from "./ac.module.css"
import Agenda from "../../../types/Agenda"
import AddVote from "../../../types/AddVote"
import { ChangeEvent, useState } from "react"
import agendaService from "../../../service/agendaService"
import getBadgeColor from "../../../utils/getBadgeColor"

interface info {
  agenda: Agenda
}

export default function ActiveCard({agenda}: info) {
  const [cpf, setCpf] = useState("");
  const toast = useToast()
  const color = getBadgeColor(agenda.category);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    const formattedCPF: string = value.replace(/\D/g, '');
    setCpf(formattedCPF);
  }

  const handleVote = async (vote: string) => {
    const newVote: AddVote = {
      question: agenda.question,
      cpf: cpf,
      vote: vote
    }
    const response = await agendaService.sendVote(newVote)
    if (response == "success") {
      toast({
        position: "bottom",
        status: "success",
        title: 'Vote Contabilized', 
        description: "Your vote was contabilized. Wait for the end of the Agenda to see the result.",
        duration: 10000,
        isClosable: true
      })
      setCpf("")
    } else {
      toast({
        position: "bottom",
        status: "warning",
        title: 'Vote not Contabilized', 
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
        <Box width={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Input className={styles.cpfInput} onChange={handleChange} value={cpf} type="number" padding={0} textAlign={"center"} borderRadius={10} placeholder="CPF" bg={"var(--c-gray1)"} color={"black"}/>
          <Box className={styles.buttonWrapper}>
            <Button className={styles.voteButton} onClick={() => handleVote("YES")} bg={"var(--c-green)"} _hover={{ bg: "main.350" }}>YES</Button>
            <Button className={styles.voteButton} onClick={() => handleVote("NO")} bg={"var(--c-red)"} _hover={{ bg: "main.450" }}>NO</Button>
          </Box>
        </Box>
    </Box>
  )
}
