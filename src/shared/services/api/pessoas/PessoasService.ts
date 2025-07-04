/* eslint-disable @typescript-eslint/no-redeclare */
import { Environment } from '../../../environment';
import { Api } from '../axios-config'
import { IlistagemPessoa } from './interfaces/InterfacesPessoas';

type TPessoasComTotalCount = {
    data: IlistagemPessoa[],
    totalCount: number,
}

const getAll = async (
    page = 1,
    filter = ''
): Promise<TPessoasComTotalCount | Error> => {
    try {
        const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
        const { data, headers } = await Api.get(urlRelativa);

        if (data) {
            return {
                data,
                totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS),
            };
        }

        return new Error('Erro ao listar os registros.')
    } catch (error) {
        return new Error((error as {message: string}).message || 'Erro ao listar os registros.')
    }
}

const getById = async (): Promise<any> => {
    try {

    } catch (error) {

    }
}
const create = async (): Promise<any> => {
    try {

    } catch (error) {

    }
}
const updateById = async (): Promise<any> => {
    try {

    } catch (error) {

    }
}
const deleteById = async (): Promise<any> => {
    try {

    } catch (error) {

    }
}

export const PessoasService = {
    getAll,
    create,
    getById,
    updateById,
    deleteById,
}