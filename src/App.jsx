import { useState, useEffect } from 'react'
import './App.css'
import { guardar, obtener, limpiar } from "./utils/almacenamiento";
import { obtenerDatos } from "./utils/llamadas"
import Swal from 'sweetalert2'
import { Tarjeta } from './componentes/Tarjeta';
import { Menu } from './componentes/Menu';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Contacto } from './paginas/Contacto';
import { Blog } from './paginas/Blog';
import { Interna } from './paginas/Interna';


export function App() {

    const [personajes, setPersonajes] = useState([])
    const [pagina, setPagina] = useState(1)

    console.log("Renderizado...");


    

    useEffect(
        () => {
            fetch("https://dragonball-api.com/api/characters?page=2&limit=10").then(
                peticion => peticion.json()
            ).then(
                datos => {
                    console.log({datos});
                    setPersonajes(datos.items)
                }
            )
        }, []
    )

    return <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Menu />
                  
                    <section className="grilla">
                        {
                            personajes.map(
                                function (individuo, indice) {
                                    return <Tarjeta key={indice} datos={individuo}  />
                                }
                            )
                        }
                    </section>
                </Route>
                <Route path="/contacto.html">
                    <Contacto />
                </Route>
                <Route path="/blog" component={Blog} />
                <Route path="/personaje/:id" component={Interna} />
            </Switch>
        </BrowserRouter>
    </>
}
