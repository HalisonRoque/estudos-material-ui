import { Icon, IconButton, Theme, ThemeCssVar, Typography, useTheme } from "@mui/material";
import { Box, useMediaQuery } from "@mui/system";
import { useAppDrawerContext } from "../contexts";

interface ILayoutBasePaginaProps {
    titulo: string,
    children: React.ReactNode
}

export const LayoutBasePagina: React.FC<ILayoutBasePaginaProps> = ({ children, titulo }) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm')); // const para usar com repansividade com tamanhos em breakpoints
    const theme = useTheme()
    const { toggleDrawerOpen } = useAppDrawerContext();

    return (
        <Box
            height="100%"
            display="flex"
            flexDirection="column"
            gap={1}
        >
            <Box
                padding={1}
                display="flex"
                alignItems="center"
                height={theme.spacing(12)}
                gap={1}
            >
                {smDown &&
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>}
                <Typography variant="h5">
                    {titulo}
                </Typography>
            </Box>
            <Box>
                <Typography>
                    Barra de ferramentas
                </Typography>
            </Box>
            <Box>
                <Typography>
                    {children}
                </Typography>
            </Box>
        </Box>
    );
}