export type Options = {
    lowercase: boolean;
    uppercase: boolean;
    numbers: boolean;
    symbols: boolean;
}

export type PasswordContextType = {
    password: string,
    options: Options,
    characterLength: number
}