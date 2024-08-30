import { Box, Text } from "@chakra-ui/react"
import styles from "./lcw.module.css"
import LogCard from "./LogCard"
import Log from "../../types/Log"

interface info {
    emptyTitle: boolean
    logs: Log[]
}

export default function LogCardsWrapper({ emptyTitle, logs}: info) {
    return (
        <>
            {emptyTitle ? (
                <Box bg={"rgba(0,0,0,0.5)"} borderRadius={20}>
                <Text width={"40ch"} color={"orange"} fontSize={"1.5vw"} padding={"2vw"} textAlign={"center"}>
                    There's no Log at the moment. Please... Do something to be logged here.
                </Text>
              </Box>
            ) : (
                <Box className={styles.logWrapper} display={"flex"} flexDirection={"column"} gap={"0.7vw"} marginRight={"5vw"} marginLeft={"5vw"} justifyContent={"center"}>
                    {logs.map((log, index) => {
                        return (<LogCard log={log} index={index} key={index}/>)
                    })}
                </Box>
            )}
        </>
    )
}
