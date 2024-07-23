import { Box, Button, FormControl, FormLabel, Image, Input, Select, Text, Tooltip } from "@chakra-ui/react";
import styles from "./index.module.css"
import Logo from "/favicon.png"
import {InfoIcon} from "@chakra-ui/icons"
import { useState, ChangeEvent } from "react";
import CreateUserDTO from "../../types/CreateUserDTO";
import userService from "../../service/userService";

export default function SignUp() {
  const [formData, setFormData] = useState<CreateUserDTO>({
    firstName: "",
    surname: "",
    userType: "",
    cpf: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(formData)
  }

  const handleSubmit = () => {
    try {
      userService.createUser(formData);
      
    } catch (error) {

    }
  }

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
          <FormControl className={styles.forms}>
            <Box>
              <FormLabel display={"flex"} justifyContent={"center"} margin={0} fontSize={"1.5vw"} opacity={0.8}>First Name:</FormLabel>
              <Input type="text" name="firstName" value={formData.firstName} onChange={handleChange} m={5} bg={"var(--c-gray2)"} color={"var(--c-black)"} textAlign={"center"} fontSize={"1.8rem"} padding={0} width={60}/>
            </Box>
            <Box>
              <FormLabel display={"flex"} justifyContent={"center"} margin={0} fontSize={"1.5vw"} opacity={0.8}>Surname:</FormLabel>
              <Input type="text" name="surname" value={formData.surname} onChange={handleChange} m={5} bg={"var(--c-gray2)"} color={"var(--c-black)"} textAlign={"center"} fontSize={"1.8rem"} padding={0} width={60}/>
            </Box>
            <Box>
              <FormLabel display={"flex"} justifyContent={"center"} margin={0} fontSize={"1.5vw"} opacity={0.8}>
                CPF:
                <Tooltip label="Only Digits" borderRadius={10} placement="end">
                  <InfoIcon boxSize={6} ml={2} color="black" justifyContent="center" alignSelf={"center"}/>
                </Tooltip>
              </FormLabel>
              <Input name="cpf" value={formData.cpf} onChange={handleChange} type="text" m={5} bg={"var(--c-gray2)"} color={"var(--c-black)"} textAlign={"center"} fontSize={"1.5rem"} padding={0} width={60}/>
            </Box>
            <Box>
              <FormLabel display={"flex"} justifyContent={"center"} margin={0} fontSize={"1.5vw"} opacity={0.8}>Select Role:</FormLabel>
              <Select name="userType" value={formData.userType} onChange={handleChange} placeholder='-' m={5} bg={"var(--c-gray2)"} color={"var(--c-black)"} textAlign={"center"} fontSize={"1.5rem"} padding={0} width={60}>
                <option value={"C"}>Common</option>
                <option value={"A"}>Administrator</option>
              </Select>
            </Box>
            <Button
              // mt={4}
              mb={6}
              ml={8} mr={8}
              fontSize="1.5rem"
              color="mono.500"
              bg="main.200"
              type='submit'
              fontWeight={700}
              onClick={handleSubmit}
            >
              Add to Database
            </Button>
          </FormControl>
        </Box>
        <Box className={styles.secondaryInfo}>
          2024 Made by Aurora Kruschewsky
        </Box>
      </Box>
    </Box>
  )
}
