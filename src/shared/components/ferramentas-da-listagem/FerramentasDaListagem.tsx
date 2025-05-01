import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material"

interface IFerramentasDaListagemProps{
    textoDaBusca?: string; 
    mostrarInputBusca?: boolean;
    aoMudarTextDeBusca?: (novoTexto: string) => void;
    textoBotaoNovo?: string; 
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void;
}
export const FerramentasDalistagem: React.FC <IFerramentasDaListagemProps>= ({
   textoDaBusca = '',
   mostrarInputBusca = false,
    aoMudarTextDeBusca,
    aoClicarEmNovo,
    textoBotaoNovo= 'Novo', 
    mostrarBotaoNovo= true, 
}) => {

    const theme = useTheme();

    return (
        <Box
          height={theme.spacing(5)}
          marginX={1}
          padding={1}
          paddingX={2}
          display="flex"
          gap={1}
          alignItems="center"
          component={Paper}
        >
         {mostrarInputBusca && ( <TextField
            value={textoDaBusca}
            size="small"
            placeholder="Pesquisar ..."
            onChange={(e)=> aoMudarTextDeBusca?.(e.target.value)}
            InputProps={{
              endAdornment: (
                <Icon sx={{ cursor: 'pointer' }}>search</Icon>
              ),
            }}
          />
        )}
          <Box flex={1} display="flex" justifyContent="end">
            {mostrarBotaoNovo && (
            <Button variant="contained" color="primary" disableElevation endIcon={<Icon>add</Icon>} onClick={aoClicarEmNovo}>
              {textoBotaoNovo}
            </Button>
            )}
          </Box>
        </Box>
      );      
};