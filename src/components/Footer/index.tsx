import { Box, Text, Icon, IconButton } from "@chakra-ui/react"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import styles from "./index.module.css"

export default function Footer() {
    const linkedIn:string = "https://www.linkedin.com/in/aurora-kruschewsky"
    const gitHub:string = "https://github.com/AurorinhaBoreal?tab=overview&from=2024-06-01&to=2024-06-24"

  return (
    <Box className={styles.footerContainer}>
        <Text className={styles.footerText}>
            2024 Made by Aurora Kruschewsky - If you found any bug, please create an Issue in the GitHub repository :D
        </Text>
        <Box display={"flex"}>
            <IconButton
                onClick={() => window.open(gitHub, "_blank")}
                _hover="none"
                backgroundColor="var(--c-lightBlue)"
                colorScheme='gray'
                aria-label='GitHub Link'
                icon={<Icon as={FaGithubSquare} boxSize={8}/>}
            />
            <IconButton
                onClick={() => window.open(linkedIn, "_blank")}
                _hover="none"
                backgroundColor="var(--c-lightBlue)"
                colorScheme='gray'
                aria-label='LinkedIn Link'
                icon={<Icon as={FaLinkedin} boxSize={8}/>}
            />
        </Box>
    </Box>
  )
}
