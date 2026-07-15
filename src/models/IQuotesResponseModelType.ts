import type {IQuotes} from "./IQuotes.ts";
// тип який описує стурктуру відповіді від API цитат
export type IQuotesResponseModelType = {
    // загальна кількість цитат
    total: number;

    // кількість пропущених цитат
    skip: number;

    // ліміт цитат
    limit: number;

    // масив цитат
    quotes: IQuotes[];
}