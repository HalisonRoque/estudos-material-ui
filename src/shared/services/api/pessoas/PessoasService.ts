/* eslint-disable @typescript-eslint/no-redeclare */
import { Environment } from '../../../environment';
import { Api } from '../axios-config'
import { IDetalhePessoa, IlistagemPessoa } from './interfaces/InterfacesPessoas';

type TPessoasComTotalCount = {
    data: IlistagemPessoa[],
    totalCount: number,
}

const getAll = async (
    page = 1,
    filter = ''
): Promise<TPessoasComTotalCount | Error> => {
    console.log("filter", filter)
    try {
        const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
        console.log("url", urlRelativa)
        const { data, headers } = await Api.get(urlRelativa);

        if (data) {
            return {
                data,
                totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS),
            };
        }

        return new Error('Erro ao listar os registros.')
    } catch (error) {
        return new Error((error as { message: string }).message || 'Erro ao listar os registros.')
    }
}

const getById = async (id: number): Promise<IDetalhePessoa | Error> => {
    try {
        const { data } = await Api.get(`/pessoas/${id}`);

        if (data) {
            return data;
        }

        return new Error('Erro ao consultar o registro.')
    } catch (error) {
        return new Error((error as { message: string }).message || 'Erro ao consultar o registro.')
    }
}

const create = async (dados: Omit<IDetalhePessoa, 'id'>): Promise<number | Error> => {
    try {
        const { data } = await Api.post<IDetalhePessoa>(`/pessoas`, dados);

        if (data) {
            return data.id;
        }

        return new Error('Erro ao criar o registro.')
    } catch (error) {
        return new Error((error as { message: string }).message || 'Erro ao criar o registro.')
    }
}

const updateById = async (id: number, dados: IDetalhePessoa): Promise<void | Error> => {
    try {
        await Api.put<IDetalhePessoa>(`/pessoas/${id}`, dados);
    } catch (error) {
        return new Error((error as { message: string }).message || 'Erro ao atualizar o registro.')
    }
}

const deleteById = async (id: number): Promise<void | Error> => {
    try {
        await Api.delete(`/pessoas/${id}`);

    } catch (error) {
        return new Error((error as { message: string }).message || 'Erro ao deletar o registro.')
    }
}

export const PessoasService = {
    getAll,
    create,
    getById,
    updateById,
    deleteById,
}