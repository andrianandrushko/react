export interface Reactions{
    likes: string
    dislikes: number
}

export interface IPosts {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: Reactions;
    views: string
    userId: number;
}