import { useEffect, useState } from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';


import { produtosService } from '../../shared/services/api/produtos/ProdutosService';

import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { CategoriaService } from '../../shared/services/api/categorias/CategoriasService';

export const Dashboard = () => {
  const [isLoadingCidades, setIsLoadingCidades] = useState(true);
  const [isLoadingProdutos, setIsLoadingProdutos] = useState(true);
  const [totalCountCidades, setTotalCountCidades] = useState(0);
  const [totalCountProdutos, setTotalCountProdutos] = useState(0);

  useEffect(() => {
    setIsLoadingCidades(true);
    setIsLoadingProdutos(true);

    CategoriaService.getAll(1)
      .then((result) => {
        setIsLoadingCidades(false);
        if (result instanceof Error) {
          alert(result.message);
        } else {
          setTotalCountCidades(result.totalCount);
        }
      });

    produtosService.getAll(1)
      .then((result) => {
        setIsLoadingProdutos(false);
        if (result instanceof Error) {
          alert(result.message);
        } else {
          setTotalCountProdutos(result.totalCount);
        }
      });
  }, []);

  return (
    <LayoutBaseDePagina
      titulo="Página inicial"
      barraDeFerramentas={<FerramentasDaListagem mostrarBotaoNovo={false} />}
    >
      <Box width="100%" display="flex">
        <Grid container margin={2}>
          <Grid item container spacing={2}>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card>
                <CardContent>
                  <Typography variant="h5" align="center">
                    Total de produtos
                  </Typography>
                  <Box padding={6} display="flex" justifyContent="center" alignItems="center">
                    {!isLoadingProdutos ? (
                      <Typography variant="h1">{totalCountProdutos}</Typography>
                    ) : (
                      <Typography variant="h6">Carregando...</Typography>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card>
                <CardContent>
                  <Typography variant="h5" align="center">
                    Total de cidades
                  </Typography>
                  <Box padding={6} display="flex" justifyContent="center" alignItems="center">
                    {!isLoadingCidades ? (
                      <Typography variant="h1">{totalCountCidades}</Typography>
                    ) : (
                      <Typography variant="h6">Carregando...</Typography>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Grid>
      </Box>
    </LayoutBaseDePagina>
  );
};
