import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts";

export const AppRoutes = () => {

    const { toggleTheme } = useAppThemeContext(); //CHAMANDO A FUNÇÃO PRA TROCAR O TEMA AO CLICAR NO BOTÃO
    return (
        /*ROTAS DO PROJETO*/
        <Routes>
            {/*ROTAS 1*/}
            <Route
                path="/pagina-inicial"
                element={
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={toggleTheme}
                    >
                        Teste
                    </Button>
                }
            />

            {/*ROTAS DEFAULT*/}
            <Route
                path="*"
                element={
                    <Navigate to="/pagina-inicial" />
                }
            />
        </Routes>
    );
};