export interface ISummaryCategory<T> {
    Task: T;
    Random_Thought: T;
    Idea: T;
    Quote: T;
}

export interface ISummary {
    active: number;
    archived: number;
}