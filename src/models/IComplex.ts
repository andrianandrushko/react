import type {IPosts} from "./IPosts.ts";
import type {IComments} from "./IComments.ts";
import type {IUsers} from "./IUsers.ts";

export interface IComplex {
    users: IUsers[]
    posts:IPosts[]
    comments:IComments[]
}