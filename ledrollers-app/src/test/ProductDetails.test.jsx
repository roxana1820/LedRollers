import '@testing-library/jest-dom';
import { describe, expect, test, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "../components/ProductDetails.jsx";

vi.mock("../data/products.js", () => ({
    products: [
        {
            id: 1, 
            name: "Тестов Модел Светещи маратонки с колелца", 
            price: "50.00 €", 
            oldPrice: "70.00 €", 
            images: ["img1.png", "img2.png"], 
            hasRollers: true
        }
    ]
}));

//scrollTo mock
beforeEach(() => {
    Element.prototype.scrollTo = vi.fn();
});

//function to render component with router context
const renderWithRouter = (productId) => {
    return render(
        <MemoryRouter initialEntries={[`/product/${productId}`]}>
            <Routes>
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
        </MemoryRouter>
    );
};

describe("ProductDetails component", () => {
    test("shows message when product is not found", () => {
        //Arrange & Act
        renderWithRouter(999); 

        //Assert
        expect(screen.getByText("Продуктът не е намерен.")).toBeInTheDocument();

    });

    test("renders the correct product details", () => {
        //Arrange & Act
        renderWithRouter(1);

        //Assert
        expect(screen.getByText("Тестов Модел Светещи маратонки с колелца")).toBeInTheDocument();
        expect(screen.getByText("50.00 €")).toBeInTheDocument();
        expect(screen.getByText("70.00 €")).toBeInTheDocument();
    });

    test("increase and decrease quantity", () => {
        renderWithRouter(1);


        //Arrange
        const increaseBtn = screen.getByRole("button", {name: "+"});
        const decreaseBtn = screen.getByRole("button", {name: "-"});
        const quantityInput = screen.getByText("1");

        expect(quantityInput).toBeInTheDocument();

        //Act & Assert
        fireEvent.click(increaseBtn);
        expect(screen.getByText("2")).toBeInTheDocument();

        fireEvent.click(decreaseBtn);
        expect(screen.getByText("1")).toBeInTheDocument();
    });

    test("shows an error message when trying to order with empty form", () => {
        renderWithRouter(1);

        //Arrange
        const submitBtn = screen.getByRole("button", {name: "Поръчай сега"});   

        //Act
        fireEvent.click(submitBtn);

        //Assert
        expect(screen.getByText("Моля, въведете поне две имена!")).toBeInTheDocument();
        expect(screen.getByText("Моля, въведете валиден телефонен номер!")).toBeInTheDocument();
        expect(screen.getByText("Моля, въведете точен адрес за доставка!")).toBeInTheDocument();
        expect(screen.getByText("Моля, изберете размер!")).toBeInTheDocument();
        expect(screen.getByText("Трябва да се съгласите с общите условия и Политика за сигурност, за да поръчате!")).toBeInTheDocument();
    });

    test("sends the order successfully with valid form data", async () => {
        //Arrange
        globalThis.fetch = vi.fn(() => 
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({}),
            })
        );

        renderWithRouter(1);
        fireEvent.change(screen.getByLabelText("Две имена"), { target: { value: "Иван Иванов" } });
        fireEvent.change(screen.getByLabelText("Телефонен номер"), { target: { value: "0888173406" } });
        fireEvent.change(screen.getByLabelText("Адрес за доставка"), { target: { value: "ул. Могила, София" } });
        fireEvent.change(screen.getByLabelText("Изберете размер"), { target: { value: "40" } });

        const checkbox = screen.getByRole("checkbox");
        fireEvent.click(checkbox);

        //Act
        const submitBtn = screen.getByRole("button", { name: "Поръчай сега" });
        fireEvent.click(submitBtn);

        //Assert
        await waitFor(() => {
          expect(screen.getByText("✅ Поръчката е изпратена успешно!")).toBeInTheDocument();
        });

        //Check that fetch was called with the correct data
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });

});