// функція для отримання об'єкта з localStorage
export const retrieveLocalStorage = <T>(key: string): T | null => {
// дістаємо об'єкт з localStorage за ключем key
    const object = localStorage.getItem(key);

    // робимо перевірку на null, якщо об'єкт не знайдено, повертаємо null
    if (!object) {
        return null;
    }
    // перетворюємо дані з localStorage у тип T
    return JSON.parse(object) as T;

}