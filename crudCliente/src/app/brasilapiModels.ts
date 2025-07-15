export interface Estado {
    sigla: string;
    nome: string
}

export interface Municipio {
    nome: string;
    codigo_ibge: string
}

export interface Cep {
    cep: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
}