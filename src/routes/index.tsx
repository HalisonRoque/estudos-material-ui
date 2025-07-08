import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import {
    Dashboard,
    ListagemDePessoas
} from "../pages";

export const AppRoutes = () => {

    const { toggleDrawerOpen, setDrawerOption } = useAppDrawerContext(); //CHAMANDO A FUNÇÃO PRA TROCAR O TEMA AO CLICAR NO BOTÃO

    //conteúdo dentro do menu lateral onde será mostrados os botões de navegação
    useEffect(() => {
        setDrawerOption([
            {
                icon: "home",
                path: "/pagina-inicial",
                label: "Página inicial"
            },
            {
                icon: "people",
                path: "/pessoas",
                label: "Pessoas"
            },
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
                element={<Dashboard />}
            />

            {/*ROTAS 2*/}
            <Route
                path="/pessoas"
                element={<ListagemDePessoas />}
            />
        </Routes>
    );
};