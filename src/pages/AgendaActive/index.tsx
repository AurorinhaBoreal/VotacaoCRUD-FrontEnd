import { Box, Text } from "@chakra-ui/react";
import styles from "./index.module.css"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PlusIcon from "../../components/PlusIcon";

export default function AgendaActive() {
  return (
    <>
      <Header/>
        <Box className={styles.bodyContainer}>
          <Box className={styles.titleContainer}>
            <Text className={styles.title}>Active Agendas</Text>
            <PlusIcon/>
          </Box>
        </Box>
      <Footer/>
    </>
  )
}
