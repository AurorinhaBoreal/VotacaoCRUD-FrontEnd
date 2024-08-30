import { Box, Button, FormControl, FormLabel, Image, Input, Select, Text, Tooltip, useToast } from "@chakra-ui/react";
import styles from "./su.module.css"
import Logo from "/favicon.png"
import {InfoIcon} from "@chakra-ui/icons"
import InputMask from "react-input-mask"
import { useState, ChangeEvent } from "react";
import CreateUserDTO from "../../types/CreateUserDTO";
import { useEffect } from "react";
import userService from "../../service/userService";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const toast = useToast()
  const navigate = useNavigate()
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [formData, setFormData] = useState<CreateUserDTO>({
    firstName: "",
    surname: "",
    userType: "",
    cpf: "",
  });

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 500;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    if (name == "cpf") {
      const formattedCPF: string = value.replace(/\D/g, '');
      setFormData({
        ...formData,
        cpf: formattedCPF,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  }

  const handleSubmit = async () => {
    toast({
      position: "bottom-right",
      status: "warning",
      title: 'Aguarde...', 
      description: "Criando Usuário...",
      duration: 2000,
      isClosable: false
    })
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
    isMobile ? (
    <Box className={styles.image}>
      <Box className={styles.mInfo}>
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
              <FormLabel className={styles.textLabels} display={"flex"} justifyContent={"center"} margin={0} opacity={0.8}>First Name:</FormLabel>
              <Input className={styles.textInput} data-cy="inputSignUp-FN-Mobile" type="text" name="firstName" value={formData.firstName} onChange={handleChange} bg={"var(--c-gray2)"} color={"var(--c-black)"} textAlign={"center"}/>
            </Box>
            <Box m="1vw">
              <FormLabel className={styles.textLabels} display={"flex"} justifyContent={"center"} margin={0} opacity={0.8}>Surname:</FormLabel>
              <Input className={styles.textInput} data-cy="inputSignUp-S-Mobile" type="text" name="surname" value={formData.surname} onChange={handleChange} bg={"var(--c-gray2)"} color={"var(--c-black)"} textAlign={"center"}/>
            </Box>
            <Box m="1vw">
              <FormLabel className={styles.textLabels} display={"flex"} justifyContent={"center"} margin={0} opacity={0.8}>
                CPF:
                <Tooltip label="Only Digits" borderRadius={10} placement="end">
                  <InfoIcon maxWidth={25} boxSize={"2vw"} ml={2} color="black" justifyContent="center" alignSelf={"center"}/>
                </Tooltip>
              </FormLabel>
              <Input data-cy="inputSignUp-CPF-Mobile" as={InputMask} mask={"999.999.999-99"} maskChar={null} className={styles.textInput} name="cpf" value={formData.cpf} onChange={handleChange} type="text" bg={"var(--c-gray2)"} color={"var(--c-black)"} textAlign={"center"}/>
            </Box>
            <Box m="1vw">
              <FormLabel className={styles.textLabels} display={"flex"} justifyContent={"center"} margin={0} opacity={0.8}>Select Role:</FormLabel>
              <Select className={styles.textInput} name="userType" value={formData.userType} onChange={handleChange} placeholder='-' bg={"var(--c-gray2)"} color={"var(--c-black)"} textAlign={"center"}>
                <option value={"COMMON"} data-cy="inputSignUp-SelC-Mobile">Common</option>
                <option value={"ADMIN"} data-cy="inputSignUp-SelA-Mobile">Administrator</option>
              </Select>
            </Box>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mb={4}>
              <Button
                data-cy="buttonSignUp-Mobile"
                className={styles.addBtn}
                color="mono.500"
                bg="main.200"
                type='submit'
                onClick={handleSubmit}
              >
                Add to Database
              </Button>
              <Link to={"/agenda-active"} className={styles.linkAgenda} data-cy="buttonSignUp-AA-Mobile">Or go to Active Agendas</Link>
            </Box>
          </FormControl>
        </Box>
        <Box className={styles.secondaryInfo}>
          2024 Made by Aurora Kruschewsky
        </Box>
      </Box>
    </Box>
    ) : (
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
              <Input data-cy="inputSignUp-FN" className={styles.textInput} type="text" name="firstName" value={formData.firstName} onChange={handleChange} bg={"var(--c-gray2)"} color={"var(--c-black)"} textAlign={"center"}/>
            </Box>
            <Box m="1vw">
              <FormLabel display={"flex"} justifyContent={"center"} margin={0} fontSize={"1.5vw"} opacity={0.8}>Surname:</FormLabel>
              <Input data-cy="inputSignUp-S" className={styles.textInput} type="text" name="surname" value={formData.surname} onChange={handleChange} bg={"var(--c-gray2)"} color={"var(--c-black)"} textAlign={"center"}/>
            </Box>
            <Box m="1vw">
              <FormLabel display={"flex"} justifyContent={"center"} margin={0} fontSize={"1.5vw"} opacity={0.8}>
                CPF:
                <Tooltip label="Only Digits" borderRadius={10} placement="end">
                  <InfoIcon maxWidth={25} boxSize={"2vw"} ml={2} color="black" justifyContent="center" alignSelf={"center"}/>
                </Tooltip>
              </FormLabel>
              <Input data-cy="inputSignUp-CPF" as={InputMask} mask={"999.999.999-99"} maskChar={null} className={styles.textInput} name="cpf" value={formData.cpf} onChange={handleChange} type="text" bg={"var(--c-gray2)"} color={"var(--c-black)"} textAlign={"center"}/>
            </Box>
            <Box m="1vw">
              <FormLabel display={"flex"} justifyContent={"center"} margin={0} fontSize={"1.5vw"} opacity={0.8}>Select Role:</FormLabel>
              <Select className={styles.textInput} name="userType" value={formData.userType} onChange={handleChange} placeholder='-' bg={"var(--c-gray2)"} color={"var(--c-black)"} textAlign={"center"}>
                <option value={"COMMON"} data-cy="inputSignUp-SelC">Common</option>
                <option value={"ADMIN"} data-cy="inputSignUp-SelA">Administrator</option>
              </Select>
            </Box>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mb={4}>
              <Button
                data-cy="buttonSignUp"
                className={styles.addBtn}
                color="mono.500"
                bg="main.200"
                type='submit'
                onClick={handleSubmit}
              >
                Add to Database
              </Button>
              <Link to={"/agenda-active"} className={styles.linkAgenda} data-cy="buttonSignUp-AA">Or go to Active Agendas</Link>
            </Box>
          </FormControl>
        </Box>
        <Box className={styles.secondaryInfo}>
          2024 Made by Aurora Kruschewsky
        </Box>
      </Box>
    </Box>
    )    
  )
}
