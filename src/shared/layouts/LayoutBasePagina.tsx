import { Icon, IconButton, Theme, ThemeCssVar, Typography, useTheme } from "@mui/material";
import { Box, useMediaQuery } from "@mui/system";
import { useAppDrawerContext } from "../contexts";
import { ReactNode } from "react";

interface ILayoutBasePaginaProps {
    titulo: string,
    children?: React.ReactNode;
    barraDeFerramentas?: ReactNode;
}

export const LayoutBasePagina: React.FC<ILayoutBasePaginaProps> = ({ children, titulo, barraDeFerramentas }) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm')); // const para usar com repansividade com tamanhos em breakpoints
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md')); // const para usar com repansividade com tamanhos em breakpoints
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
                gap={1}
                height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
 
            >
                {smDown &&
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>}
                <Typography
                    variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                >
                    {titulo}
                </Typography>
            </Box>
            {barraDeFerramentas && (
                <Box>
                    <Typography>
                        {barraDeFerramentas}
                    </Typography>
                </Box>
            )}
            <Box flex={1} overflow="auto">
                <Typography>
                    {children}
                </Typography>
            </Box>
        </Box>
    );
}