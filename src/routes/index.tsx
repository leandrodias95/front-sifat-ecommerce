import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useDrawerContext } from '../shared/contexts';
import {
  Dashboard,
  DetalheDeProdutos,
  ListagemDeProdutos,
  DetalheDeCategorias,
  ListagemDeCategorias,
} from '../pages';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Página inicial',
      },
      {
        icon: 'category',
        path: '/categorias',
        label: 'Categorias',
      },
      {
        icon: 'inventory_2',
        path: '/produtos',
        label: 'Produtos',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />

      <Route path="/produtos" element={<ListagemDeProdutos />} />
      <Route path="/produtos/detalhe/:id" element={<DetalheDeProdutos />} />

      <Route path="/categorias" element={<ListagemDeCategorias />} />
      <Route path="/categorias/detalhe/:id" element={<DetalheDeCategorias />} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
