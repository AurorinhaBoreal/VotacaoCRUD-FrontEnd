import {render, screen} from "@testing-library/react"
import {describe, expect, test} from "vitest"
import Footer from "./index";

describe('Test the footer component', () => {

    test("Should verify the text", () => {
        render(<Footer/>)
        const textElement = screen.getByText("2024 Made by Aurora Kruschewsky", {exact: false})
        expect(textElement).toBeTruthy()
    })
});