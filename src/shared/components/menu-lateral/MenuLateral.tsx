import {
    Avatar,
    Divider,
    Drawer,
    Icon,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme
} from "@mui/material"
import { Box } from "@mui/system"
import { useAppDrawerContext } from "../../contexts";

interface IMenuLaterlProps {
    children: React.ReactNode
};

export const MenuLateral: React.FC<IMenuLaterlProps> = ({ children }) => { 
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm")); //função que retorna um boolean para os brackpoints do MUI, tornando a rederização do tamanho da tela dinãmico para o menu lateral

    const { isDrawerOpen, toggleDrawerOpen } = useAppDrawerContext();
    return (
        <>
            <Drawer //componente para menu lateral --- um ternário par escolher, se smDown < que 'sm', o menu fica 'temporary', e for maior fica 'permanente'
                open={isDrawerOpen}
                variant={smDown ? "temporary" : "permanent"}
                onClose={toggleDrawerOpen}
            >
                <Box
                    width={theme.spacing(28)}
                    height="100%"
                    display="flex"
                    flexDirection="column"
                >
                    <Box
                        width="100%"
                        height={theme.spacing(20)}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Avatar
                            sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                            src=""
                        />
                    </Box>

                    <Divider />
                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Página Inicial" />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};