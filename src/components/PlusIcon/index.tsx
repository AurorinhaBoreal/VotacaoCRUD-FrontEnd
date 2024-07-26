import { IconButton, useDisclosure } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import AgendaModal from '../AgendaModal'

export default function PlusIcon() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <IconButton
                    icon={<AddIcon
                        color="mono.100"
                        w="1.5vw" h="1.5vw"
                    />}
                    aria-label='Add New Agenda'
                    backgroundColor="main.100"
                    w="2.5vw"
                    h="2.5vw"
                    padding="1.5vw"
                    margin="1.5vw"
                    _hover={{ backgroundColor: "main.150" }}
                    onClick={onOpen}
                >
            </IconButton>
            <AgendaModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
        </>
    )
}
