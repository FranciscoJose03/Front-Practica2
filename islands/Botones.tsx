export const BVolver = () => {
    return (
        <button class="btn btn-primary centro" onClick={() => window.location.href = "/"}>Volver</button>
    );
}

export const BCrear = () => {
    return (
        <button class="btn btn-primary" onClick={() => window.location.href = "/createpokemon"}>Crear</button>
    );
}

export const BBuscar = () => {
    return (
        <button class="btn btn-primary" onClick={() => window.location.href = "/buscarpokemon"}>Buscar</button>
    );
}
