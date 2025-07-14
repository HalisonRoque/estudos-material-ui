import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from "@mui/material";

import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBasePagina } from "../../shared/layouts";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { useDebouce } from "../../shared/hooks";
import { IlistagemPessoa } from "../../shared/services/api/pessoas/interfaces/InterfacesPessoas";
import { Environment } from "../../shared/environment";


export const ListagemDePessoas: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { debounce } = useDebouce();

    const [rows, setRows] = useState<IlistagemPessoa[]>([]);
    const [totalCount, setTotalCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams]); //no [] esta um injetor de dependencias

    useEffect(() => {
        setIsLoading(true);

        debounce(() => {
            PessoasService.getAll(1, busca)
                .then((resp) => {
                    setIsLoading(false);

                    if (resp instanceof Error) {
                        alert(resp.message);
                    } else {
                        console.log(resp)

                        setTotalCount(resp.totalCount)
                        setRows(resp.data)
                    }
                });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <TableContainer component={Paper} variant="outlined" sx={{ m: 1, width: 'auto' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Ações</TableCell>
                            <TableCell>Nome Completo</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell>Ações</TableCell>
                                <TableCell>{row.nomeCompleto}</TableCell>
                                <TableCell>{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                    {totalCount === 0 && !isLoading && (
                        <caption>
                            {Environment.LISTAGEM_VAZIA}
                        </caption>
                    )}

                    <TableFooter>
                        {isLoading && (<TableRow>
                            <TableCell colSpan={3}>
                                <LinearProgress variant="indeterminate" />
                            </TableCell>
                        </TableRow>
                        )}
                    </TableFooter>
                </Table>
            </TableContainer>
        </LayoutBasePagina>
    )
}