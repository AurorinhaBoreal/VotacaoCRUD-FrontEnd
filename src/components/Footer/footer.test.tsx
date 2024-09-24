import {render, screen} from "@testing-library/react"
import {describe, expect, test} from "vitest"
import Footer from "./index";

describe('Testa o componente do Footer', () => {

    test("Deve verificar o texto", () => {
        render(<Footer/>)
        const textElement = screen.getByText("2024 Made by Aurora Kruschewsky", {exact: false})
        expect(textElement).toBeTruthy()
    })
});