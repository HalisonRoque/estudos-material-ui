import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppDrawerContext } from "../shared/contexts";
import { useEffect } from "react";

export const AppRoutes = () => {

    const { toggleDrawerOpen, setDrawerOption } = useAppDrawerContext(); //CHAMANDO A FUNÇÃO PRA TROCAR O TEMA AO CLICAR NO BOTÃO

    useEffect(() => {
        setDrawerOption([
            {
                icon: "home",
                path: "/pagina-inicial",
                label: "Página inicial"
            }
        ]);
    }, []);

    return (
        /*ROTAS DO PROJETO*/
        <Routes>
            {/*ROTAS DEFAULT*/}
            <Route
                path="*"
                element={
                    <Navigate to="/pagina-inicial" />
                }
            />

            {/*ROTAS 1*/}
            <Route 
                path="/pagina-inicial"
                element={
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={toggleDrawerOpen}
                    >
                        Teste Drawer
                    </Button>
                }
            />
        </Routes>
    );
};