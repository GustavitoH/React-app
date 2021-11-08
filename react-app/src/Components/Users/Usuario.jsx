
const Usuario = (props) => (
        <article>
            <div>
                <h2>{props._id}</h2>
            <h3>{props.nombre}</h3>
            <div>{props.cedula}</div>
            <div>{props.edad}</div>
            <div>{props.apellido}</div>
            </div>
        </article>
)
export default Usuario