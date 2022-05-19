export interface TodoType {
    id: number,
    title: string,
    status: string
}

export enum TodoStatus {
    inProgress = "In progress",
    done = "Done"
}