import { Menu } from "../componentes/Menu"

export const Contacto = () => {
    return <>
    <Menu />
    <h1>Página de contacto</h1>
    <form action="/" method="post" style={
        {flexDirection: "column"}
    }>
        <label htmlFor="correo">Correo</label>
        <input type="email" name="correo" id="correo" placeholder="pando@correo.net" />
        
        <label htmlFor="mensaje">Escribe tu consulta</label><br />
        <textarea name="mensaje" id="mensaje" placeholder="Me encantan los cursos, pero tengo dudas..."></textarea>
        
        <button>Enviar</button>
    </form>
    </>
}