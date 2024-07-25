import { Box, Text, useToast } from "@chakra-ui/react";
import styles from "./aa.module.css"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PlusIcon from "../../components/PlusIcon";
import { useCallback, useEffect, useState } from "react";
import agendaService from "../../service/agendaService";
import { debounce } from "lodash";
import Agenda from "../../types/Agenda";
import CardWrapper from "../../components/CardWrapper";

export default function AgendaActive() {
  const [emptyText, setEmptyText] = useState(false)
  const [data, setData] = useState<Agenda[]>()
  const toast = useToast()

  const getAgendas = useCallback(debounce(async () => {
    console.log("getAgendas called");
    try {
      const data = await agendaService.getAgendas();
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
    }
  }, 300), []);

  useEffect(() => {
    console.log("AgendaActive component mounted");
    getAgendas()
  }, [getAgendas])

  return (
    <Box >
      <Header/>
        <Box className={styles.bodyContainer}>
          <Box className={styles.titleContainer} width={"fit-content"}>
            <Text className={styles.title}>Active Agendas</Text>
            <PlusIcon/>
          </Box>
          {data ? <CardWrapper agendas={data} emptyTitle={emptyText}/> : (
            <Box bg={"rgba(0,0,0,0.7)"} borderRadius={20}>
              <Text width={"30ch"} color={"red"} fontSize={"2vw"} padding={"2vw"} textAlign={"justify"}>
                Cannot Load Active Agendas, please verify the connection with the API. If considered necessary, create an Issue in the GitHub repository
              </Text>
            </Box>
          ) }
          
        </Box>
      <Footer/>
    </Box>
  )
}
