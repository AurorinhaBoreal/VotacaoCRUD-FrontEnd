import { Box, Spinner, Text, useToast } from "@chakra-ui/react"
import styles from "./u.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useEffect, useMemo, useState } from "react"
import { debounce } from "lodash"
import userService from "../../service/userService"
import User from "../../types/User"
import UserCardsWrapper from "../../components/UserCardsWrapper"

export default function Users() {
  const [loading, setLoading] = useState(true)
  const [emptyText, setEmptyText] = useState(false)
  const [data, setData] = useState<User[]>()
  const toast = useToast()

  const getUsers = useMemo(() => debounce(async () => {
    try {
      const data = await userService.getUsers();
      if (!data) {
        throw new Error("Connection Error");
      }

      if (data.length > 0) {
        setEmptyText(false);
        setData(data);
      } else {
        setEmptyText(true);
        setData([]);
      }
    } catch (error) {
      toast({
        position: "top",
        status: "error",
        title: 'Connection Error', 
        description: "Cannot Communicate with the API",
        duration: 5000,
        isClosable: false
      });
    } finally {
      setLoading(false)
    }
  }, 300), [toast]); 

  useEffect(() => {
    ("Users component mounted");
    getUsers()
  }, [getUsers])
    
  return (
    <Box >
      <Header/>
      <Box className={styles.bodyContainer}>
        <Box className={styles.titleContainer} width={"fit-content"} mb={"2vw"}>
          <Text className={styles.title} data-cy="title-U">Users</Text>
        </Box>
        {loading ? (
          <Spinner color="main.100" thickness='4px' speed='0.65s' emptyColor="mono.200"/>) : data ? <UserCardsWrapper users={data} emptyTitle={emptyText}/> : (
          <Box bg={"rgba(0,0,0,0.7)"} borderRadius={20}>
            <Text width={"30ch"} color={"red"} fontSize={"2vw"} padding={"2vw"} textAlign={"justify"}>
              Please verify your connection. If considered necessary, create an Issue in the GitHub repository
            </Text>
          </Box>
        ) }
      </Box>
      <Footer/>
    </Box>
  )
}