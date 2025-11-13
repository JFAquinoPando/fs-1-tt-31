export function Paginacion({ paginaActual, cantidadTotal, setPagina }) {
    const elementos = [...Array(cantidadTotal)]
    return <footer>
        <ul className="paginacion">
            {
                elementos.map(
                    (_, idx) => {
                        const pageNumber = idx + 1;
                        return (
                            <li key={pageNumber}>
                                <button 
                                    onClick={() => setPagina(pageNumber)} 
                                    className={paginaActual === pageNumber ? "pagina-actual" : ""}
                                >
                                    {pageNumber}
                                </button>
                            </li>
                        )
                    }
                )
            }
        </ul>
        {cantidadTotal > 0 && <div>Tenemos un total de {cantidadTotal} páginas</div>}
    </footer>
}
