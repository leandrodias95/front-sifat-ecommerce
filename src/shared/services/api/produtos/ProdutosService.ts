import { Environment } from '../../../environment';
import { Api } from '../axios-config';

export interface IListagemProduto {
  id: number;
  nome: string;
  preco: number;
  categoriaId: number;
}

export interface IDetalheProduto {
  id: number;
  nome: string;
  preco: number;
  categoriaId: number;
}

type TProdutosComTotalCount = {
  data: IListagemProduto[];
  totalCount: number;
};

const getAll = async (
  page = 1,
  filter = '',
  categoriaId?: number
): Promise<TProdutosComTotalCount | Error> => {
  try {
    const pageIndex = page - 1; // Spring começa em 0
    const params = new URLSearchParams();

    params.append('page', pageIndex.toString());
    params.append('pageSize', Environment.LIMITE_DE_LINHAS.toString());

    if (categoriaId) {
      params.append('categoriaId', categoriaId.toString());
    }

    if (filter) {
      params.append('query', filter);
      const { data } = await Api.get(`/produto/procurar?${params.toString()}`);
      return {
        data: data.content,
        totalCount: data.totalElements,
      };
    } else {
      const { data } = await Api.get(`/produto?${params.toString()}`);
      return {
        data: data.content,
        totalCount: data.totalElements,
      };
    }
  } catch (error) {
    console.error(error);
    return new Error('Erro ao listar os produtos.');
  }
};

const getById = async (id: number): Promise<IDetalheProduto | Error> => {
  try {
    const { data } = await Api.get(`/produto/${id}`);
    if (data) return data;
    return new Error('Produto não encontrado.');
  } catch (error) {
    console.error(error);
    return new Error('Erro ao consultar o produto.');
  }
};

const create = async (
  dados: Omit<IDetalheProduto, 'id'>
): Promise<IDetalheProduto | Error> => {
  try {
    const { data } = await Api.post<IDetalheProduto>(`/produto/insert`, dados);
    if (data) return data;
    return new Error('Erro ao criar o produto.');
  } catch (error) {
    console.error(error);
    return new Error('Erro ao criar o produto.');
  }
};

const updateById = async (
  id: number,
  dados: IDetalheProduto
): Promise<void | Error> => {
  try {
    await Api.put(`/produto/${id}`, dados);
  } catch (error) {
    console.error(error);
    return new Error('Erro ao atualizar o produto.');
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await Api.delete(`/produto/${id}`);
  } catch (error) {
    console.error(error);
    return new Error('Erro ao deletar o produto.');
  }
};

export const produtosService = {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
};
