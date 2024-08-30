import { IconButton, useDisclosure } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import styles from './pi.module.css'
import AgendaModal from '../AgendaModal'

export default function PlusIcon() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <IconButton
                    data-cy="buttonCA"
                    className={styles.buttonBody}
                    icon={<AddIcon className={styles.plusIcon}
                        color="mono.100"
                        
                    />}
                    aria-label='Add New Agenda'
                    backgroundColor="main.100"
                    _hover={{ backgroundColor: "main.150" }}
                    onClick={onOpen}
                >
            </IconButton>
            <AgendaModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
        </>
    )
}
