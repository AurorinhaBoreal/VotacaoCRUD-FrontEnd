import { Box, Button, FormControl, FormLabel, Image, Input, Select, Text, Tooltip, useToast } from "@chakra-ui/react";
import styles from "./su.module.css"
import Logo from "/favicon.png"
import {InfoIcon} from "@chakra-ui/icons"
import { useState, ChangeEvent } from "react";
import CreateUserDTO from "../../types/CreateUserDTO";
import userService from "../../service/userService";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const toast = useToast()
  const navigate = useNavigate()
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
  }

  const handleSubmit = async () => {
      const response = await userService.createUser(formData);
      if (response) { 
        toast({
            position: "bottom-right",
            status: "error",
            title: 'Error', 
            description: response,
            duration: 5000,
            isClosable: false
          })
      } else {
        setFormData({
          firstName: "",
          surname: "",
          userType: "",
          cpf: "",
        })
        navigate("/agenda-active")
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
            <Box m="1vw">
              <FormLabel display={"flex"} justifyContent={"center"} margin={0} fontSize={"1.5vw"} opacity={0.8}>First Name:</FormLabel>
              <Input className={styles.textInput} type="text" name="firstName" value={formData.firstName} onChange={handleChange} bg={"var(--c-gray2)"} color={"var(--c-black)"} textAlign={"center"} fontSize={"2vh"} height={"2.2vw"} padding={0} width={"30vh"}/>
            </Box>
            <Box m="1vw">
              <FormLabel display={"flex"} justifyContent={"center"} margin={0} fontSize={"1.5vw"} opacity={0.8}>Surname:</FormLabel>
              <Input className={styles.textInput} type="text" name="surname" value={formData.surname} onChange={handleChange} bg={"var(--c-gray2)"} color={"var(--c-black)"} textAlign={"center"} fontSize={"2vh"} height={"2.2vw"} padding={0} width={"30vh"}/>
            </Box>
            <Box m="1vw">
              <FormLabel display={"flex"} justifyContent={"center"} margin={0} fontSize={"1.5vw"} opacity={0.8}>
                CPF:
                <Tooltip label="Only Digits" borderRadius={10} placement="end">
                  <InfoIcon maxWidth={25} boxSize={"2vw"} ml={2} color="black" justifyContent="center" alignSelf={"center"}/>
                </Tooltip>
              </FormLabel>
              <Input className={styles.textInput} name="cpf" value={formData.cpf} onChange={handleChange} type="text" bg={"var(--c-gray2)"} color={"var(--c-black)"} textAlign={"center"} fontSize={"2vh"} height={"2.2vw"} padding={0} width={"30vh"}/>
            </Box>
            <Box m="1vw">
              <FormLabel display={"flex"} justifyContent={"center"} margin={0} fontSize={"1.5vw"} opacity={0.8}>Select Role:</FormLabel>
              <Select className={styles.textInput} name="userType" value={formData.userType} onChange={handleChange} placeholder='-' bg={"var(--c-gray2)"} color={"var(--c-black)"} textAlign={"center"} height={"2.2vw"} fontSize={"2vh"} padding={0} width={"30vh"}>
                <option value={"C"}>Common</option>
                <option value={"A"}>Administrator</option>
              </Select>
            </Box>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mb={4}>
              <Button
                mb={2}
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
              <Link to={"/agenda-active"}>Or go to Active Agendas</Link>
            </Box>
          </FormControl>
        </Box>
        <Box className={styles.secondaryInfo}>
          2024 Made by Aurora Kruschewsky
        </Box>
      </Box>
    </Box>
  )
}
