// інтерфейс для користувача з токенами
export interface IUserWithTokens {
    // id користувача
    id: number;

    // ім'я користувача
    username: string;

    // пошта користувача
    email: string;

    // ім'я користувача
    firstName: string;

    // прізвище користувача
    lastName: string;

    // стать користувача
    gender: string;

    // зображення користувача
    image: string;

    // токен для доступу
    accessToken: string;

    // токен дляч оновлення
    refreshToken: string;
}