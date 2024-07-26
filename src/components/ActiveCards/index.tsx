import { Badge, Box, Text, Input, Button, useToast } from "@chakra-ui/react"
import styles from "./ac.module.css"
import Agenda from "../../types/Agenda"
import AddVote from "../../types/AddVote"
import { ChangeEvent, useState } from "react"
import agendaService from "../../service/agendaService"

interface info {
  agenda: Agenda
}

export default function ActiveCards({agenda}: info) {
  const [cpf, setCpf] = useState("");
  const toast = useToast()

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const {value} = e.target;
    setCpf(value);
    console.log(cpf);
  }

  const handleVote = async (vote: string) => {
    const newVote: AddVote = {
      question: agenda.question,
      cpf: cpf,
      yes: vote === "yes",
      no: vote === "no",
    }
    console.log(vote+" | Question: "+agenda.question)
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

  let color: string;
  switch (agenda.category) {
    case "TECHNOLOGY":
      color = "orange"
      break;
    case "SPORTS":
      color = "green"
      break;
    case "PROGRAMMING":
      color = "purple"
      break;
    case "OPINION":
      color = "blue"
      break;
    default:
      color = "gray"
      break;
  }

  return (
    <Box className={styles.cardContainer}>
        <Badge colorScheme={color} mt={"0.7vw"} fontSize={"0.8vw"} border={"0.2vw solid #666666"} borderRadius={15}>{agenda.category}</Badge>
        <Text className={styles.question}>{agenda.question}</Text>
        <Box width={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Input onChange={handleChange} value={cpf} type="number" padding={0} textAlign={"center"} borderRadius={10} placeholder="CPF" w={"60%"} h={"2vw"} bg={"var(--c-gray1)"} color={"black"} fontSize={"1vw"}/>
          <Box className={styles.buttonWrapper}>
            <Button className={styles.voteButton} onClick={() => handleVote("yes")} bg={"var(--c-green)"} _hover={{ bg: "main.350" }}>YES</Button>
            <Button className={styles.voteButton} onClick={() => handleVote("no")} bg={"var(--c-red)"} _hover={{ bg: "main.450" }}>NO</Button>
          </Box>
        </Box>
    </Box>
  )
}
