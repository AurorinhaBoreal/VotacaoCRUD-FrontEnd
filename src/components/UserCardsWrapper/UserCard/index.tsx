import { Box, Button, Text, useToast } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"
import styles from "./uc.module.css"
import User from "../../../types/User";
// import { info } from "console";
import userService from "../../../service/userService";

interface info {
  user: User
  index: number
}

export default function LogCard({user, index}: info) {
  const toast = useToast()

  const formatCpf = (cpf: string) => {
    if (cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
  }

  const deleteUser = async (cpf: string) => {
    const response = await userService.removeUser(cpf);
    if (!response) {
      toast({
          position: "bottom",
          status: "success",
          title: "User Deleted",
          description: "The user was deleted. Reload the page to update the information.",
          duration: 10000,
          isClosable: true
      })
    } else {
        toast({
            position: "bottom",
            status: "error",
            title: 'Error', 
            description: response,
            duration: 5000,
            isClosable: false
        })
    }
  }

  return (
    <Box className={styles.cardContainer}>
      <Box className={styles.generalInfo} key={index}>
          <Box className={styles.name}>
            <Text className={styles.title}>
              Name:
            </Text>
            <Text className={styles.info} data-cy="UserName-U">
              {user.firstName+" "+user.surname}
            </Text>
          </Box>
          <Box className={styles.cpfRole}>
            <Text className={styles.title}>
              CPF - Role:
            </Text>
            <Text className={styles.info} data-cy="UserCPFRole-U">
              {formatCpf(user.cpf)+" - "+user.userType}
            </Text>
          </Box>
      </Box>
      <Button data-cy="buttonDel-U" className={styles.delBtn} onClick={() => deleteUser(user.cpf)}>
        <DeleteIcon/>
        Delete
      </Button>
    </Box>
  )
}
