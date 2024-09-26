import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test } from "vitest";
import UsersValidation from ".";
import { expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("Test userValidation Page", () => {
    test("Test if component renderize", () => {
        render(
            <BrowserRouter>
                <UsersValidation/>
            </BrowserRouter>
        )

        const title = screen.getByText("Validation")
        const description = screen.getByText("Please inform your cpf to be validated and access users page.")
        expect(title).toBeTruthy()
        expect(description).toBeTruthy()
    })

    test("Verify if input works", () => {
        render(
            <BrowserRouter>
                <UsersValidation/>
            </BrowserRouter>
        )
        const inputCPF = screen.getByRole("input") as HTMLInputElement

        fireEvent.change(inputCPF, { target: { value: "12345678910" } });
        expect(inputCPF.value).toBe("123.456.789-10");
    })
})