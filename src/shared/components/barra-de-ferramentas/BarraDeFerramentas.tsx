import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

interface IBarraDeFerramentasProps {
    textoDaBusca?: string;
    mostraInputBusca?: boolean;
    aoMudarTextDeBusca?: (novoTexto: string) => void;
    textoBotaoNovo?: string;
    mostraBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void;
}

export const BarraDeFerramentas: React.FC<IBarraDeFerramentasProps> = ({
    textoDaBusca = '',
    mostraInputBusca = false,
    aoMudarTextDeBusca,
    aoClicarEmNovo,
    textoBotaoNovo = 'Novo',
    mostraBotaoNovo = true
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
            {mostraInputBusca && (
                <TextField
                    size="small"
                    placeholder="Pesquisar..."
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        },
                    }}
              />
            )}

            <Box flex={1} display="flex" justifyContent="end">
                <Button
                    color='primary'
                    disableElevation
                    variant='contained'
                    onClick={aoClicarEmNovo}
                    endIcon={<Icon>add</Icon>}
                >{textoBotaoNovo}</Button>
            </Box>

        </Box>
    )
}