import { useEffect, useState } from "react"
import { Menu } from "../componentes/Menu"

export const Blog = () => {

    const [publicaciones, setPublicaciones] = useState({})

    useEffect(
        function () {
            fetch("http://localhost/fs-1-tt-31/ws.php")
                .then(p => p.json())
                .then(function (blog) {
                    setPublicaciones(blog)
                })
        }, []
    );

    console.log(Object.values(publicaciones));

    /*
    Estas son las claves
descripcion_corta: "La introducción a Goku, Bulma, el Maestro Roshi y los primeros grandes villanos como Pilaf y el Rey Piccolo."
personaje_principal: "Goku (niño)"
saga: "Dragon Ball"
tema_central: "Aventuras, Torneos de Artes Marciales y el humor clásico."
titulo: "El Comienzo: Goku niño y la Búsqueda de las Esferas"
    */

    return <>
        <Menu />
        <h1>Blog</h1>
        <section className="blog">
            {
                Object.values(publicaciones).map((publicacion, index) => (
                    <article key={index}>
                        <h2>{publicacion.titulo}</h2>
                        <p>{publicacion.descripcion_corta}</p>
                        <p><strong>Personaje Principal:</strong> {publicacion.personaje_principal}</p>
                        <p><strong>Saga:</strong> {publicacion.saga}</p>
                        <p><strong>Tema Central:</strong> {publicacion.tema_central}</p>
                    </article>
                ))
            }
        </section>
    </>
}