// інтерфейс для пари токенів доступу та оновлення
export interface ITokenPair{
    // токен для доступу
    accessToken: string;
    // токен для оновлення
    refreshToken: string;
}