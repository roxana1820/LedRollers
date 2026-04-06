import '@testing-library/jest-dom';
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Benefits from "../components/Benefits.jsx";

describe('Benefits component', () => {
    test('renders the correct heading of the section', () => {
        //Arrange & Act
        render(
            <Benefits />
        );

        //Assert
        const heading = screen.getByRole('heading', {name: "Защо да избереш LedRollers?"});
        expect(heading).toBeInTheDocument();
    });

    test('renders exactly 3 benefits', () => {
        //Arrange & Act
        render(
            <Benefits />
        );

        //Assert
        const benefits = screen.getAllByRole('img');
        expect(benefits).toHaveLength(3);
    });

    test('renders the correct alt text for the images', () => {
        //Arrange & Act
        render(
            <Benefits />
        );

        //Assert
        const firstImage = screen.getByAltText("Светещи маратонки");
        const secondImage = screen.getByAltText("Безопасност");
        const thirdImage = screen.getByAltText("Зареждане");

        expect(firstImage).toBeInTheDocument();
        expect(secondImage).toBeInTheDocument();
        expect(thirdImage).toBeInTheDocument(); 

    });

    test('renders the correct text for each benefit', () => {
        //Arrange & Act
        render(
            <Benefits />
        );

        //Assert
        const firstBenefitText = screen.getByText("Светят в 9 различни режима");
        const secondBenefitText = screen.getByText("Безопасни и удобни за носене без колелца");
        const thirdBenefitText = screen.getByText("Лесни за употреба и зареждане");

        expect(firstBenefitText).toBeInTheDocument();
        expect(secondBenefitText).toBeInTheDocument();
        expect(thirdBenefitText).toBeInTheDocument();

    });

})