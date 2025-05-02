import { Environment } from '../../../environment';
import { Api } from '../axios-config';

export interface IListagemCategoria {
  id: number;
  nome: string;
}

export interface IDetalheCategoria {
  id: number;
  nome: string;
}

type TCategoriasComTotalCount = {
  data: IListagemCategoria[];
  totalCount: number;
};

const getAll = async (
  page = 1,
  filter = ''
): Promise<TCategoriasComTotalCount | Error> => {
  try {
    const pageIndex = page - 1;
    const params = new URLSearchParams();

    params.append('page', pageIndex.toString());
    params.append('pageSize', Environment.LIMITE_DE_LINHAS.toString());

    if (filter) {
      params.append('query', filter);
      const { data } = await Api.get(`/categoria/procurar?${params.toString()}`);
      return {
        data: data.content,
        totalCount: data.totalElements,
      };
    } else {
      const { data } = await Api.get(`/categoria?${params.toString()}`);
      return {
        data: data.content,
        totalCount: data.totalElements,
      };
    }
  } catch (error) {
    console.error(error);
    return new Error('Erro ao listar as categorias.');
  }
};

const getById = async (id: number): Promise<IDetalheCategoria | Error> => {
  try {
    const { data } = await Api.get(`/categoria/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return new Error('Erro ao buscar a categoria.');
  }
};

const create = async (
  dados: Omit<IDetalheCategoria, 'id'>
): Promise<IDetalheCategoria | Error> => {
  try {
    const { data } = await Api.post<IDetalheCategoria>('/categoria/insert', dados);
    return data;
  } catch (error) {
    console.error(error);
    return new Error('Erro ao criar a categoria.');
  }
};

const updateById = async (
  id: number,
  dados: IDetalheCategoria
): Promise<void | Error> => {
  try {
    await Api.put(`/categoria/${id}`, dados);
  } catch (error) {
    console.error(error);
    return new Error('Erro ao atualizar a categoria.');
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await Api.delete(`/categoria/${id}`);
  } catch (error) {
    console.error(error);
    return new Error('Erro ao excluir a categoria.');
  }
};

export const CategoriaService = {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
};
