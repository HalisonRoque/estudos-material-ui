import { FerramentasDeDetalhe } from "../../shared/components"
import { LayoutBasePagina } from "../../shared/layouts"

export const Dashboard = () => {

    return (
        <LayoutBasePagina
            titulo="Página inicial"
            barraDeFerramentas={(
                <FerramentasDeDetalhe mostrarBotaoDeSalvarEFecharCarregando mostrarBotaoSalvarEFechar/>
            )}>
        </LayoutBasePagina>
    )
}