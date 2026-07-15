import type {IPosts} from "./IPosts.ts";

// тип який описує структуру відповіді API з постами
export type IPostsResponseModelType = {
    // загальна кількість постів
    total: number,

    // кількість пропущених постів
    skip: number,

    // ліміт постів
    limit: number,

    // масив постів
    posts:IPosts[]
}