import { Menu } from "../componentes/Menu"
import { useParams } from "react-router-dom";
import { obtener } from "../utils/almacenamiento";
import { useState, useEffect } from "react";

export const Personajex = () => {

    const { nombre } = useParams()
    const [ocultar, setOcultar] = useState(true)
    const [personaje_2, setPersonaje_2] = useState({id: 0})

    useEffect(() => {
        const baseDatos = JSON.parse(obtener("personajes"))
        const encontrado = baseDatos.find(
            item => item.name.toLowerCase() === nombre.toLowerCase()
        )

        if (encontrado) {
            setPersonaje_2(encontrado)
        }
    }, [nombre])

    useEffect(() => {
        document.title = `Personaje: ${personaje_2.name}`
        setTimeout(() => { 
            setOcultar(false) 
        }, 3000)
    }, [personaje_2.name])

    return <>
        <Menu />
        <h1>Hola, los datos de quién quieres ver? será de {nombre}?</h1>
        {ocultar ?
            <span> Esperando un momento... 🕛 </span> :
            <div>
                <img src={personaje_2.image} alt={personaje_2.name} style={{
                    width: "120px"
                }} />
                <p>
                    {personaje_2.description}
                </p>
            </div>
        }

    </>
}