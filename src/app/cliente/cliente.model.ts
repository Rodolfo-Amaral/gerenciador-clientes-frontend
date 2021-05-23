
export interface Cliente {
    id: number;
    nome: string;
    cpfCnpj: string;
    nascimento: Date;
    sexo: string;
    logradouro: string;
    numero: number;
    bairro: string;
    cep: string;
    complemento: string;
    fone: string;
    email: string;
    estadoCivil: string;
    dataCadastro: Date;
    status: string;
    cidade: string;
}