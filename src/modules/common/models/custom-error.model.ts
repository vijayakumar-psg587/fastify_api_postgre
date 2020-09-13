export class CustomErrorModel extends Error {
    status: number;
    code: string;
    message: string;
    timestamp: string;
}