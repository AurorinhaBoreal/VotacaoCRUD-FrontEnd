import { Box, Text } from "@chakra-ui/react"
import styles from "./lcw.module.css"
import UserCard from "./UserCard"
import User from "../../types/User"

interface info {
    emptyTitle: boolean
    users: User[]
}

export default function LogCardsWrapper({ emptyTitle, users}: info) {
    return (
        <>
            {emptyTitle ? (
                <Box bg={"rgba(0,0,0,0.5)"} borderRadius={20}>
                <Text width={"40ch"} color={"orange"} fontSize={"1.5vw"} padding={"2vw"} textAlign={"center"}>
                    There's no User registered at the moment. Please register someone.
                </Text>
              </Box>
            ) : (
                <Box className={styles.logWrapper} display={"flex"} flexDirection={"column"} gap={"0.7vw"} marginRight={"5vw"} marginLeft={"5vw"} justifyContent={"center"}>
                    {users.map((user, index) => {
                        return (<UserCard user={user} index={index} key={index}/>)
                    })}
                </Box>
            )}
        </>
    )
}
