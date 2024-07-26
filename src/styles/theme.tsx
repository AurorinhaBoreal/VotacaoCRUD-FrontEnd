import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
        main: {
            100: "#6a8eec",
            150: "#4262b3",
            200: "#edaf35",
            250: "#c49029",
            300: "#319410",
            350: "#1e6107",
            400: "#a30b0b",
            450: "#7b0000"
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