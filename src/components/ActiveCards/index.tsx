import { Badge, Box, Text, Input, Button } from "@chakra-ui/react"
import styles from "./ac.module.css"
import Agenda from "../../types/Agenda"

interface info {
  agenda: Agenda
}

export default function ActiveCards({agenda}: info) {
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
          <Input textAlign={"center"} borderRadius={10} placeholder="CPF" w={"60%"} h={"2vw"} bg={"var(--c-gray1)"} color={"black"} fontSize={"1vw"}/>
          <Box className={styles.buttonWrapper}>
            <Button className={styles.voteButton} bg={"var(--c-green)"} _hover={{ bg: "main.350" }}>YES</Button>
            <Button className={styles.voteButton} bg={"var(--c-red)"} _hover={{ bg: "main.450" }}>NO</Button>
          </Box>
        </Box>
    </Box>
  )
}
