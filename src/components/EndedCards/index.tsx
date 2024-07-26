import { Badge, Box, Text } from "@chakra-ui/react"
import styles from "./ec.module.css"
import Agenda from "../../types/Agenda"
import VotesContainer from "./Votes";

interface info {
  agenda: Agenda
}

export default function EndedCards({agenda}: info) {
  let color: string;
  let createdIn: string[] = agenda.createdOn.split("T");
  let endedIn: string[] = agenda.finishOn.split("T");

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
        <VotesContainer agenda={agenda}/>
        <Box className={styles.dateContainer}>
            <Text className={styles.dateTitle}>Created On:</Text>
            <Text className={styles.dateInfo}>{createdIn[0]+" - "+createdIn[1]}</Text>
            <Text className={styles.dateTitle}>Ended On:</Text>
            <Text className={styles.dateInfo}>{endedIn[0]+" - "+endedIn[1]}</Text>
        </Box>
    </Box>
  )
}
