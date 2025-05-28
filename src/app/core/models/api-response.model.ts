export interface ApiResponse<T> {
    status: "ok" | "error",
    totalResults: number;
    results: T;
    nextPage: string;
}