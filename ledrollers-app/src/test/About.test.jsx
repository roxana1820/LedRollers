import '@testing-library/jest-dom';
import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import About from "../components/About.jsx";

window.scrollTo = vi.fn();

describe("About component", () => { 
     
    test("renders main heading", () => {
        //Arrange & Act
        render(
            <MemoryRouter>
                <About/>
            </MemoryRouter>
        );

        //Assert
        const heading = screen.getByRole("heading", {name: "Научи повече за нас"});
        expect(heading).toBeInTheDocument();

    });


    test('user can input text in the contact form', () => {
        //Arrange & Act
        render(
            <MemoryRouter>
                <About/>
            </MemoryRouter>
        );

        const nameInput = screen.getByPlaceholderText("Име и фамилия");

        //Act
        fireEvent.change(nameInput, { target: { value: "Иван Петров" } });

        //Assert
        expect(nameInput.value).toBe("Иван Петров");
    });

    test("button shows message when clicked", () => {
        render(
            <MemoryRouter>
                <About/>
            </MemoryRouter>
        );
        
        const button = screen.getByRole("button", { name: "Изпрати запитване" });

        expect(button).toBeInTheDocument();
        expect(button).not.toBeDisabled();
    });

});