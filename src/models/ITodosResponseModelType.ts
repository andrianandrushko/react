import type {ITodos} from "./ITodos.ts";
// тип який описує структуру відповіді API задач
export type ITodosResponseModelType = {
    // загальна кількість задач
    total: number;

    // кількість пропущених задач
    skip: number;

    // ліміт задач
    limit: number;

    // масив задач
    todos: ITodos[]
}