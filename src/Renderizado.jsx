function PanelUsuario() {
    const isLogged = true;
    const nuevosMensajes =["Mensaje 1"];

    return (
        <div>
            <h1>Panel de Usuario</h1>
        {/* Operador ternario */}
            {isLogged ? (
                //true ,if
                <button>Cerrar sesion</button> 
            ) : (
                //false,else
                <button>Iniciar sesion</button>
            )}


            {/* AND */}
        {nuevosMensajes.length > 0 && (
            //true
            <p>Tienes{nuevosMensajes.length} nuevos mensajes</p> 
        )}


        </div>
    );
}
export default PanelUsuario;