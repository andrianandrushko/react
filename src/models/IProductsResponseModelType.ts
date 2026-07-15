import type {IProduct} from "./IProduct.ts";

// тип який описує структуру відповіді API з продуктами
export type IProductsResponseModelType = {
    // загальна кількість продуктів
    total: number;

    // кількість пропущених продуктів
    skip: number;

    // ліміт продуктів
    limit: number;

    // масив продуктів
    products: IProduct[];
}