import '@testing-library/jest-dom';
import { describe, expect, test, vi, beforeAll } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Products from "../components/Products.jsx";
import { products } from '../data/products.js';


//mock products data
vi.mock('../data/products.js', () => ({
    products: [
    {id: 1, name: "Скъп продукт", price: "80.00 €", oldPrice: "100.00 €", images: ["img1.png"], category: "boy", isNew: false, hasRollers: true },
    { id: 2, name: "Евтин продукт", price: "20.00 €", oldPrice: "30.00 €", images: ["img2.png"], category: "girl", isNew: true, hasRollers: true },
    { id: 3, name: "Продукт без колелца", price: "50.00 €", oldPrice: "60.00 €", images: ["img3.png"], category: "boy", isNew: false, hasRollers: false },
    ]
}));

beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe("Products component", () => {
    test("renders products title when no category filter is applied", () => {
        //Act
        render(
            <MemoryRouter>
                <Products />
            </MemoryRouter>
        );

        //Assert
        const heading = screen.getByRole("heading", { name: "Всички модели" });
        expect(heading).toBeInTheDocument();

        const productCards = screen.getAllByRole("link"); 
        expect(productCards.length).toBe(3);
    });

    test("renders correct products when category filter 'girl' is applied", () => {
        //Act
        render(
            <MemoryRouter>
                <Products categoryFilter="girl" />
            </MemoryRouter>
        );

        //Assert
        const heading = screen.getByRole("heading", {name: "Модели за момичета"});
        expect(heading).toBeInTheDocument();

        const productCards = screen.getAllByRole("link");
        expect(productCards.length).toBe(1);
        expect(screen.getByText("Евтин продукт")).toBeInTheDocument();
    });

    test("sort products by price from low to high", () => {
        render(
            <MemoryRouter>
                <Products />
            </MemoryRouter> 
        );

        const selectMenu = screen.getByRole("combobox");

        //Act
        fireEvent.change(selectMenu, { target: { value: "Цена: Ниска към висока" } });

        //Assert
        const productCards = screen.getAllByRole("link");
        expect(productCards[0]).toHaveTextContent("Евтин продукт");
        expect(productCards[1]).toHaveTextContent("Продукт без колелца");
        expect(productCards[2]).toHaveTextContent("Скъп продукт");
    });
    

});