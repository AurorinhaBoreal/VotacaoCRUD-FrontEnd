import { Box, Button, FormLabel, Image, Input, Select, Text, Tooltip } from "@chakra-ui/react";
import styles from "./index.module.css"
import Logo from "/favicon.png"
import {InfoIcon} from "@chakra-ui/icons"

export default function SignUp() {
  return (
    <Box className={styles.page}>
      <Box className={styles.image}/>
      <Box className={styles.info}>
        <Box className={styles.mainInfo}>
          <Image src={Logo} className={styles.logo}/>
          <Text className={styles.title}>
            Sign Up
          </Text>
          <Box className={styles.description}>
            To vote, you first need to register yourself on our database
          </Box>
          <Box className={styles.forms}>
            <Box>
              <FormLabel display={"flex"} justifyContent={"center"} margin={0} fontSize={"1.5vw"} opacity={0.8}>First Name:</FormLabel>
              <Input type="text" bg={"var(--c-gray2)"} color={"var(--c-black)"} textAlign={"center"} fontSize={"1.8rem"} padding={0} width={60}/>
            </Box>
            <Box>
              <FormLabel display={"flex"} justifyContent={"center"} margin={0} fontSize={"1.5vw"} opacity={0.8}>Surname:</FormLabel>
              <Input type="text" bg={"var(--c-gray2)"} color={"var(--c-black)"} textAlign={"center"} fontSize={"1.8rem"} padding={0} width={60}/>
            </Box>
            <Box>
              <FormLabel display={"flex"} justifyContent={"center"} margin={0} fontSize={"1.5vw"} opacity={0.8}>
                CPF:
                <Tooltip label="Only Digits" borderRadius={10} placement="end">
                  <InfoIcon boxSize={6} ml={2} color="black" justifyContent="center" alignSelf={"center"}/>
                </Tooltip>
              </FormLabel>
              <Input type="text" bg={"var(--c-gray2)"} color={"var(--c-black)"} textAlign={"center"} fontSize={"1.5rem"} padding={0} width={60}/>
            </Box>
            <Box>
              <FormLabel display={"flex"} justifyContent={"center"} margin={0} fontSize={"1.5vw"} opacity={0.8}>Select Role:</FormLabel>
              <Select placeholder='-' bg={"var(--c-gray2)"} color={"var(--c-black)"} textAlign={"center"} fontSize={"1.5rem"} padding={0} width={60}>
                <option>Common</option>
                <option>Administrator</option>
              </Select>
            </Box>
          </Box>
          <Button
            mt={10}
            fontSize="1.5rem"
            color="mono.500"
            bg="main.200"
            type='submit'
            fontWeight={700}
          >
            Add to Database
          </Button>
        </Box>
        <Box className={styles.secondaryInfo}>
          2024 Made by Aurora Kruschewsky
        </Box>
      </Box>
    </Box>
  )
}
