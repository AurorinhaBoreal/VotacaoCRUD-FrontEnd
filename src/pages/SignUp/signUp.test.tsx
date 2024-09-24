import {render, screen} from "@testing-library/react"
import {describe, expect, test} from "vitest"
import { BrowserRouter } from "react-router-dom"
import SignUp from "./index"

describe("Test the User's SignUp Page", () => {
    test("Verify Render", () => {
        render(
            <BrowserRouter>
                <SignUp/>
            </BrowserRouter>
        )
        const title = screen.getByText("Sign Up")
        const description = screen.getByText("To vote, you first need to register yourself on our database")

        expect(title).toBeTruthy()
        expect(description).toBeTruthy()
    })
})