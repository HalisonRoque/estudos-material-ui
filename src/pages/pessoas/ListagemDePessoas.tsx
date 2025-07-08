import { useSearchParams } from "react-router-dom"
import { FerramentasDaListagem } from "../../shared/components"
import { LayoutBasePagina } from "../../shared/layouts"
import { useEffect, useMemo } from "react";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { useDebouce } from "../../shared/hooks";

export const ListagemDePessoas: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { debounce } = useDebouce(3000);

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams]); //no [] esta um ijetor de dependencias

    useEffect(() => {
        debounce(() => {
            PessoasService.getAll(1, busca)
                .then((resp) => {
                    if (resp instanceof Error) {
                        alert(resp.message);
                    } else {
                        console.log(resp)
                    }
                });
        });
    }, [busca])

    return (
        <LayoutBasePagina
            titulo='Listagem de Pessoas'
            barraDeFerramentas={
                <FerramentasDaListagem
                    textoBotaoNovo="Nova"
                    mostraInputBusca
                    textoDaBusca={busca}
                    aoMudarTextDeBusca={texto => setSearchParams({ busca: texto }, { replace: true })}
                />
            }
        >
        </LayoutBasePagina>
    )
}