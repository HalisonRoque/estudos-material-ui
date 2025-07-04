import { Box, Button, Divider, Icon, Paper, Skeleton, Typography, useMediaQuery, useTheme } from "@mui/material"

interface IFerramentasDeDetalheProps {
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;

    mostrarBotaoDeSalvarCarregando?: boolean;
    mostrarBotaoDeSalvarEFecharCarregando?: boolean;
    mostrarBotaoDeNovoCarregando?: boolean;
    mostrarBotaoDeApagarCarregando?: boolean;
    mostrarBotaoDeVoltarCarregando?: boolean;

    aoClicarEmNovo?: () => void;
    aoClicarEmVoltar?: () => void;
    aoClicarEmApagar?: () => void;
    aoClicarEmSalvar?: () => void;
    aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
    textoBotaoNovo = 'Novo',
    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarEFechar = false,

    mostrarBotaoDeSalvarCarregando = false,
    mostrarBotaoDeSalvarEFecharCarregando = false,
    mostrarBotaoDeNovoCarregando = false,
    mostrarBotaoDeApagarCarregando = false,
    mostrarBotaoDeVoltarCarregando = false,

    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar
}) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));

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
            {(mostrarBotaoSalvar && !mostrarBotaoDeSalvarCarregando) && (<Button
                color='primary'
                disableElevation
                variant='contained'
                onClick={aoClicarEmSalvar}
                startIcon={<Icon>save</Icon>}
            >
                Salvar
            </Button>)}

            {mostrarBotaoDeSalvarCarregando && (<Skeleton width={110} height={60} />)}

            {(mostrarBotaoSalvarEFechar && !mostrarBotaoDeSalvarEFecharCarregando && !smDown && !mdDown) && (
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    onClick={aoClicarEmSalvarEFechar}
                    startIcon={<Icon>save</Icon>}
                >
                    <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                        Salvar e fechar
                    </Typography>
                </Button>)}

            {(mostrarBotaoDeSalvarEFecharCarregando && !smDown && !mdDown) && (<Skeleton width={180} height={60} />)}

            {(mostrarBotaoApagar && !mostrarBotaoDeApagarCarregando) && (<Button
                color='primary'
                disableElevation
                variant='outlined'
                onClick={aoClicarEmApagar}
                startIcon={<Icon>delete</Icon>}
            >
                Apagar
            </Button>)}

            {mostrarBotaoDeApagarCarregando && (<Skeleton width={110} height={60} />)}

            {(mostrarBotaoNovo && !mostrarBotaoDeNovoCarregando) && (<Button
                color='primary'
                disableElevation
                variant='outlined'
                onClick={aoClicarEmNovo}
                startIcon={<Icon>add</Icon>}
            >
                {textoBotaoNovo}
            </Button>)}

            {mostrarBotaoDeNovoCarregando && (<Skeleton width={110} height={60} />)}

            <Divider variant='middle' orientation='vertical' />

            {(mostrarBotaoVoltar && !mostrarBotaoDeNovoCarregando) && (<Button
                color='primary'
                disableElevation
                variant='outlined'
                onClick={aoClicarEmVoltar}
                startIcon={<Icon>arrow_back</Icon>}
            >
                Voltar
            </Button>)}
            {(mostrarBotaoDeVoltarCarregando && <Skeleton width={110} height={60} />)}
        </Box>
    )
}

export default FerramentasDeDetalhe;