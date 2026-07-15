// інтерфейс який описує коментарі
export interface IComments {
    // id коментаря
    id: number,

    // текст коментаря
    body: string,

    // id поста, до якого належить коментар
    postId: number,

    // кількість лайків
    likes: number,
}