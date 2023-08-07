export interface INote {
    id: string;
    name?: string;
    content?: string;
    category: string;
    created: string;
    dates: string;
}

export interface IUpdateNote {
    id: string;
    name?: string;
    content?: string;
    category?: string;
    created?: string;
    dates?: string;
}

export interface ICreateNote {
    name?: string;
    content?: string;
    category?: string;
}