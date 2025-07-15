import { v4 as uuid } from 'uuid';

export class Cliente {
    id?: string;
    nome?: string;
    cpf?: string;
    dataNascimento?: string;
    telefone?: string;
    email?: string;
    uf?: string;
    municipio?: string;
    cep?: string;
    bairro?: string;
    logradouro?: string;
    numero?: string;
    complemento?: string;
    deletando:boolean = false;

    static newCliente(){
        const cliente = new Cliente();
        cliente.id = uuid();
        return cliente;
    }
}