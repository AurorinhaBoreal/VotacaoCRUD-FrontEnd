import { Box, Text } from "@chakra-ui/react"
import styles from "./lc.module.css"
import Log from "../../types/Log";
import { info } from "console";

interface info {
  log: Log
  index: number
}

export default function LogCard({log, index}: info) {
  const createdIn: string[] = log.realizedOn.split("T");

  return (
    <Box className={styles.cardContainer}>
      <Box className={styles.generalInfo}>
        <Box className={styles.operationObj}>
          <Box className={styles.operation}>
            <Text className={styles.title}>
              Operation:
            </Text>
            <Text className={styles.info}>
              {log.operation.toUpperCase()}
            </Text>
          </Box>
          <Box className={styles.object}>
            <Text className={styles.title}>
              Obj. Type - ID:
            </Text>
            <Text className={styles.info}>
              {log.objectType+" - "+log.objectId}
            </Text>
          </Box>
        </Box>
        <Box className={styles.realizedOn}>
          <Box className={styles.date}>
            <Text className={styles.title}>
              Date:
            </Text>
            <Text className={styles.info}>
              {createdIn[0]}
            </Text>
          </Box>
          <Box className={styles.time}>
            <Text className={styles.title}>
              Time:
            </Text>
            <Text className={styles.info}>
              {createdIn[1]}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box className={styles.objInfo}>
        <Text className={styles.title}>
          Obj. Info:
        </Text>
        <Text className={styles.info}>
          {log.objectInfo}
        </Text>
      </Box>
      <Text className={styles.numerator}>
          {index+1}
      </Text>
    </Box>
  )
}
