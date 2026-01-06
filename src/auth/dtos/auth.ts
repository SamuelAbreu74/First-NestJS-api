// Esse arquivo define como os dados devem ser recebidos

export interface SignUpDTO {
    name: string;
    email: string;
    password: string;
}


export interface SignInDTO {
    email: string;
    password: string;
}