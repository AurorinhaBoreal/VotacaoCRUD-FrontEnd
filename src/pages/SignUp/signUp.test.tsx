import {render, screen, fireEvent} from "@testing-library/react"
import {describe, expect, test} from "vitest"
import { BrowserRouter } from "react-router-dom"
import SignUp from "./index"
import { RecoilRoot } from "recoil"

describe("Test the User's SignUp Page", () => {
    test("Verify Render", () => {
        render(
            <BrowserRouter>
                <RecoilRoot>
                    <SignUp/>
                </RecoilRoot>
            </BrowserRouter>
        )
        const title = screen.getByText("Sign Up")
        const description = screen.getByText("To vote, you first need to register yourself on our database")

        expect(title).toBeTruthy()
        expect(description).toBeTruthy()
    })

    test("Verify Input", () => {
        render(
            <BrowserRouter>
                <RecoilRoot>
                    <SignUp />
                </RecoilRoot>
            </BrowserRouter>
        );
    
        const inputFN = screen.getByPlaceholderText("Mauricio") as HTMLInputElement;
        const inputSN = screen.getByPlaceholderText("Souza") as HTMLInputElement;
        expect(inputFN).toBeTruthy();
        expect(inputSN).toBeTruthy();
    
        fireEvent.change(inputFN, { target: { value: "John" } });
        fireEvent.change(inputSN, {target: { value: "Fernando"}})
        expect(inputFN.value).toBe("John");
        expect(inputSN.value).toBe("Fernando");
    });
})
