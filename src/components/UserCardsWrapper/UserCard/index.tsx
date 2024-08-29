import { Box, Text } from "@chakra-ui/react"
import styles from "./uc.module.css"
import User from "../../../types/User";
import { info } from "console";

interface info {
  user: User
  index: number
}

export default function LogCard({user, index}: info) {

  return (
    <Box className={styles.cardContainer}>
      <Box className={styles.generalInfo} key={index}>
          <Box className={styles.name}>
            <Text className={styles.title}>
              Name:
            </Text>
            <Text className={styles.info}>
              {user.firstName+" "+user.surname}
            </Text>
          </Box>
          <Box className={styles.cpfRole}>
            <Text className={styles.title}>
              CPF - Role:
            </Text>
            <Text className={styles.info}>
              {user.cpf+" - "+user.userType}
            </Text>
          </Box>
      </Box>
    </Box>
  )
}
