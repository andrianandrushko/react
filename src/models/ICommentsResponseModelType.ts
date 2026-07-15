import type {IComments} from "./IComments.ts";

// тип який описує структуру відповіді API для коментарів
export type ICommentsResponseModelType = {
    // загальна кількість коментарів
    total: number,

    // кількість пропущених коментарів
    skip: number,

    // ліміт коментарів
    limit: number,

    // масив коментарів
    comments:IComments[]
}