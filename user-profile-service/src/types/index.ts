export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserCreateInput {
    username: string;
    email: string;
    password: string;
}

export interface ResServiceDto {
    status: number;
    message: string;
    data: any;
}