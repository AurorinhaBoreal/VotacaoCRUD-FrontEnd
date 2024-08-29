import { Box, Text } from '@chakra-ui/react'
import styles from "./v.module.css"
import Agenda from '../../../types/Agenda'

interface info {
  agenda: Agenda
}

export default function VotesContainer({agenda}: info) {
  return (
    <Box className={styles.votesContainer}>
          <Text fontFamily="Roboto Slab" mb={"0.2vw"} color="main.200">VOTES</Text>
          <Box className={styles.totalVotes}>
              <Box className={styles.header} bg="main.200">
                  TOTAL
              </Box>
              <Box className={styles.body} color="main.200">
                  {agenda.totalVotes}
              </Box>
          </Box>
          <Box className={styles.generalVotes} display={"flex"}>
              <Box className={styles.yesVotes}>
                  <Box className={styles.header} bg="main.300" borderRightRadius={0}>
                      YES
                  </Box>
                  <Box className={styles.body} borderRightRadius={0} color="main.300">
                      {agenda.yesVotes}
                  </Box>
              </Box>
              <Box className={styles.noVotes}>
                  <Box className={styles.header} bg="main.400" borderLeftRadius={0}>
                      NO
                  </Box>
                  <Box className={styles.body} borderLeftRadius={0} color="main.400">
                      {agenda.noVotes}
                  </Box>
              </Box>
          </Box>
      </Box>
  )
}
