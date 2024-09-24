import {render, screen} from "@testing-library/react"
import {describe, expect, test} from "vitest"
import Header from "./index";
import { BrowserRouter } from "react-router-dom";

describe('Test the header component', () => {

    test("Should verify the content", () => {
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        )
        const title = screen.getByText("Voting CRUD")
        expect(title).toBeTruthy()

        const links = [
            screen.getByText("Active Agendas"), 
            screen.getByText("Ended Agendas"), 
            screen.getByText("Logs"),
            screen.getByText("Users"),
            screen.getByText("Sign Up")
        ]
        
        expect(links.forEach(link => {
            expect(link).toBeTruthy()
        }))
    })
});