import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () => {
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