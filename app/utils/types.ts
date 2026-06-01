export interface IUser {
    id?: number;
    name: string;
    email: string;
    phone: string;
    is_admin?: boolean;
    phone_ext?: string;
    profile_image?: string;
    email_verified_at?: string;
}

export interface IHttpOption {
    method?: string;
    baseURL?: string | undefined;
    headers?: any;
    initialCache?: boolean;
    lazy?: boolean;
    key?: string | number;
    $?: any;
    body?: any;
}

