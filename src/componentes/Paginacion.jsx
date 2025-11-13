export function Paginacion({ paginaActual, cantidadTotal, setPagina }) {
    const elementos = [...Array(cantidadTotal)]
    return <footer>
        <ul className="paginacion">
            {
                elementos.map(
                    (_, idx) => {
                        return <li onClick={() => setPagina(idx + 1)} className={`pagina-${paginaActual === (idx + 1) ? "actual" : ""}`}>{idx + 1}</li>
                    }
                )
            }
        </ul>
        <div>Tenemos un total de {cantidadTotal} páginas</div>
    </footer>
}
