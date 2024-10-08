import { Box, Text } from "@chakra-ui/react"
import styles from "./acw.module.css"
import Agenda from "../../types/Agenda"
import ActiveCard from "./ActiveCard"

interface info {
    emptyTitle: boolean
    agendas: Agenda[]
}

export default function ActiveCardsWrapper({ emptyTitle, agendas}: info) {
    
    return (
        <>
            {emptyTitle ? (
                <Box bg={"rgba(0,0,0,0.5)"} borderRadius={20}>
                <Text className={styles.noCards} width={"40ch"} color={"orange"} padding={"2vw"} textAlign={"center"}>
                    There's zero Agendas Active at the moment. Please Create one to see it here.
                </Text>
              </Box>
            ) : (
                <Box className={styles.cardWrapper} display={"flex"} gap={"2vw"} flexWrap={"wrap"} justifyContent={"center"}>
                    {agendas.map((agenda, index) => {
                        return (<ActiveCard key={index} agenda={agenda}/>)
                    })}
                </Box>
            )}
        </>
    )
}
