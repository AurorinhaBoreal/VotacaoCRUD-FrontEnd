import { Box, Text } from "@chakra-ui/react"
import styles from "./ecw.module.css"
import Agenda from "../../types/Agenda"
import EndedCard from "./EndedCard"

interface info {
    emptyTitle: boolean
    agendas: Agenda[]
}

export default function EndedCardsWrapper({ emptyTitle, agendas}: info) {
    
    return (
        <>
            {emptyTitle ? (
                <Box bg={"rgba(0,0,0,0.5)"} borderRadius={20}>
                <Text className={styles.noCards} width={"40ch"} color={"orange"} padding={"2vw"} textAlign={"center"}>
                    There's zero Ended Agendas at the moment. Please wait for one finish to see it here.
                </Text>
              </Box>
            ) : (
                <Box className={styles.bodyContainer} gap={"2vw"} justifyContent={"center"}>
                    {agendas.map((agenda, index) => {
                        return (<EndedCard key={index} agenda={agenda}/>)
                    })}
                </Box>
            )}
        </>
    )
}
