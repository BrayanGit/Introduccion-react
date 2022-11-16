import './Card.css';

function Cards(props) {
    return(
        <article className='imagen_galeria'>
            <section><img alt="{props.titulo_imagen}" src={props.src_imagen} /></section>
            <section><h3>{props.titulo_imagen}</h3></section>
            <section><p>{props.descripcion_imagen}</p></section>
        </article>
    );
}

export default Cards;