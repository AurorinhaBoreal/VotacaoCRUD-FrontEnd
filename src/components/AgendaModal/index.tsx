import { Box, Button, FormControl, FormLabel, Input, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Textarea, Tooltip } from "@chakra-ui/react"
import styles from "./am.module.css"
import { InfoIcon } from "@chakra-ui/icons"

interface modal {
    isOpen: any
    onOpen: any
    onClose: any
}

export default function AgendaModal(props: modal) {
    const { isOpen, onClose } = props

    return (
        <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent bg="#e6e6e6" borderRadius={20} width={"40vw"} display={"flex"}>
                    <ModalHeader className={styles.modalHeader} bg={"main.200"}>Create Agenda</ModalHeader>
                    <ModalCloseButton color={"black"} width={"2vw"}/>
                    <FormControl className={styles.formContainer} mt={"2vw"} >
                        <FormLabel className={styles.inputLabel}>Select Role:</FormLabel>
                        <Box display="flex" justifyContent="center">
                            <Select className={styles.category} width="20vw">
                                    <option value={"S"}>Sports</option>
                                    <option value={"T"}>Technology</option>
                                    <option value={"O"}>Opinion</option>
                                    <option value={"P"}>Programming</option>
                            </Select>
                        </Box>
                        <FormLabel className={styles.inputLabel}>Question:</FormLabel>
                        <Textarea className={styles.question} />
                        <FormLabel className={styles.inputLabel}>
                            Duration:
                            <Tooltip label="In Minutes" borderRadius={10} placement="end">
                                <InfoIcon maxWidth={25} boxSize={"1vw"} ml={2} color="black" justifyContent="center" alignSelf={"center"}/>
                            </Tooltip>
                        </FormLabel>
                        <Input className={styles.input} type="number"/>
                        <FormLabel className={styles.inputLabel}>
                            CPF:
                            <Tooltip label="Only Digits" borderRadius={10} placement="end">
                                <InfoIcon maxWidth={25} boxSize={"1vw"} ml={2} color="black" justifyContent="center" alignSelf={"center"}/>
                            </Tooltip>
                        </FormLabel>
                        <Input className={styles.input} type="number"/>
                        {/* onClick={handleSubmit} */}
                    </FormControl>
                    <Button
                        display="flex"
                        alignSelf="center"
                        height="3vw"
                        width="8vw"
                        fontSize="1vw"
                        bg={"main.200"} 
                        color={"main.500"}
                        mb="2vw" 
                        _hover={{ border: "3px solid black"}}
                        _active={{bg: "main.250"}}    
                    >
                        Create Agenda
                    </Button>
                </ModalContent>
            </Modal>
    )
}
