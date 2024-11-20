export interface Loginmodel {
    username: string;
    password: string;
}

export interface User {
    id: string;
    password: string;
    name: string;
    role: string;
    gender: string;
    email: string;
}

export interface Role {
    value: string;
    viewValue: string;
}

