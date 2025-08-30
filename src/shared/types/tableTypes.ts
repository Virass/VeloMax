export type TableColumn<T> = {
    title: string;
    render?: (row: T) => string;
};

export interface TableProps<T> {
    columns: Record<string, TableColumn<T>>;
    data: T[];
}
