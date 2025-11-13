import { Link } from "react-router-dom";

export const Tarjeta = ({ datos, enlace = true }) => {
    const { name: nombre, image: imagen, id } = datos;

    const cardContent = (
        <article className='card'>
            <h3>{nombre}</h3>
            <img src={imagen} alt={nombre} />
        </article>
    );

    return enlace ? <Link to={`/personaje/${id}`}>{cardContent}</Link> : cardContent;
}