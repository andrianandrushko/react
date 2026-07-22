import type {IPosts} from "./IPosts.ts";
import type {IComments} from "./IComments.ts";

export interface IComplex {
    posts:IPosts[]
    comments:IComments[]
}