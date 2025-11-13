import { Menu } from "../componentes/Menu"
import { useParams } from "react-router-dom";
import { obtener } from "../utils/almacenamiento";
import { useState, useEffect } from "react";
import { Tarjeta } from "../componentes/Tarjeta";

export const Interna = () => {

    const { id } = useParams()
    const [ocultar, setOcultar] = useState(true)
    const [personaje, setPersonaje] = useState({})

    useEffect(() => {
        fetch(`https://dragonball-api.com/api/characters/${id}`)
            .then(peticion => peticion.json())
            .then(informacion => {
                setTimeout(() => {
                    setOcultar(false)
                }, 3000)
                setPersonaje(informacion)
            })
    }, [id])

    return <>
        <Menu />
        {ocultar ?
            <span> Esperando un momento... 🕛 </span> :
            <div className="contenido-interna">
                <h1>{personaje.name}</h1>
                <div>
                    <img src={personaje.image} alt={personaje.name} style={{
                        width: "120px"
                    }} />
                    <p>
                        {personaje.description}
                    </p>
                </div>
                <h1>Transformaciones</h1>
                <section className="grilla">
                    {
                        personaje.transformations.length > 0 ?
                        personaje.transformations.map((transformacion, indice) => {
                            return <Tarjeta key={indice} datos={transformacion} enlace={false} />
                        }):
                        <h3>Este personaje no tiene transformaciones</h3>
                    }
                </section>
            </div>
        }

    </>
}