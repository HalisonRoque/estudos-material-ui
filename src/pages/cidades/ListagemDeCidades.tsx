import { useSearchParams } from "react-router-dom"
import { FerramentasDaListagem } from "../../shared/components"
import { LayoutBasePagina } from "../../shared/layouts"
import { useMemo } from "react";

export const ListagemDeCidades: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams]); //no [] esta um ijetor de dependencias

    return (
        <LayoutBasePagina
            titulo='Listagem de cidades'
            barraDeFerramentas={
                <FerramentasDaListagem
                    textoBotaoNovo="Nova"
                    mostraInputBusca
                    textoDaBusca={busca}
                    aoMudarTextDeBusca={texto => setSearchParams({ busca: texto }, {replace: true})}
                />
            }
        >
        </LayoutBasePagina>
    )
}