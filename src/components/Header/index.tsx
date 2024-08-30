import { Box, Image, Text } from '@chakra-ui/react'
import styles from "./index.module.css"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Box className={styles.headerContainer}>
        <Box className={styles.infoLeft}>
          <Image className={styles.headerLogo} src="/favicon.png"/>
          <Text className={styles.mainTitle}>
            Voting CRUD
          </Text>
          <Box className={styles.headerDivider}/>
          <Box className={styles.linksWrapper}>
            <Link to={"/agenda-active"}>
              <Text className={styles.headerText} data-cy="Header-AA">
                Active Agendas
              </Text>
            </Link>
            <Box className={styles.headerDivider}/>
              <Link to={"/agenda-ended"}>
                <Text className={styles.headerText} data-cy="Header-EA">
                  Ended Agendas
                </Text>
              </Link>
            <Box className={styles.headerDivider}/>
              <Link to={"/logs"}>
                <Text className={styles.headerText} data-cy="Header-L">
                  Logs
                </Text>
              </Link>
              <Box className={styles.headerDivider}/>
                <Link to={"/user-validation"}>
                  <Text className={styles.headerText} data-cy="Header-U">
                    Users
                  </Text>
                </Link>
          </Box>
        </Box>
        <Box className={styles.infoRight}>
          <Link to={"/"}>
            <Text className={styles.signUpText} data-cy="Header-SU">
              Sign Up
            </Text>
          </Link>
        </Box>
    </Box>
  )
}
