import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
        main: {
            100: "#6a8eec",
            200: "#edaf35"
        },
        mono: {
            100: "#ffffff",
            200: "#e9e9e9",
            300: "#eaeaea",
            400: "#e6e6e6",
            500: "#000000"
        }
    },
})

export default theme;