import { describe, expect, test } from "vitest";
import { products } from "../data/products.js";

describe('Product data (products.js)', () => {
    test('should be an array and contain at least one product', () => {

        //Assert
        expect(Array.isArray(products)).toBe(true);
        expect(products.length).toBeGreaterThan(0);
    });

    test('each product should have required properties', () => {

        //Arrange & Act
        products.forEach((product) => {

            //Assert
            expect(product).toHaveProperty('id');
            expect(product).toHaveProperty('name');
            expect(product).toHaveProperty('price');
            expect(product).toHaveProperty('images');

            expect(Array.isArray(product.images)).toBe(true);

            expect(product).toHaveProperty('category');
        });
    });

    test('all products must have unique IDs', () => {
        //Arrange
        const ids = products.map(product => product.id);

        //Act
        const uniqueIds = new Set(ids);

        //Assert
        expect(ids.length).toBe(uniqueIds.size);
    });

    test('category should be either "boy" or "girl"', () => {
        //Arrange
        const validCategories = ["boy", "girl"];

        //Act & Assert
        products.forEach((product) => {
            expect(validCategories).toContain(product.category);
        });
    });
});