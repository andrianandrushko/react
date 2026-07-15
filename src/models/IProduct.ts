// інтерфейс який описує продукти
export interface IProduct {
    // id продукту
    id: number;

    // назва продукту
    title: string;

    // опис продукту
    description: string;

    // категорія продукту
    category: string;

    // ціна продукту
    price: number;

    // рейтинг продукту
    rating: number;

    // кількість на складі
    stock: number;

    // бренд продукту
    brand: string;

    // артикул продукту
    sku: string;

    // вага продукту
    weight: string;
}