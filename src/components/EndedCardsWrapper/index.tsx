import { Box, Text } from "@chakra-ui/react"
import Agenda from "../../types/Agenda"
import EndedCards from "../EndedCards"

interface info {
    emptyTitle: boolean
    agendas: Agenda[]
}

export default function EndedCardsWrapper({ emptyTitle, agendas}: info) {
    
    return (
        <>
            {emptyTitle ? (
                <Box bg={"rgba(0,0,0,0.5)"} borderRadius={20}>
                <Text width={"40ch"} color={"orange"} fontSize={"1.5vw"} padding={"2vw"} textAlign={"center"}>
                    There's zero Ended Agendas at the moment. Please wait for one finish to see it here.
                </Text>
              </Box>
            ) : (
                <Box display={"flex"} gap={"2vw"} flexWrap={"wrap"} marginRight={"5vw"} marginLeft={"5vw"} justifyContent={"center"}>
                    {agendas.map((agenda) => {
                        return (<EndedCards agenda={agenda}/>)
                    })}
                </Box>
            )}
        </>
    )
}
