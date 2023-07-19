const apiUrl = 'https://localhost:7087/';

const methods = {
    async Create(dto) {
        const usuarioPost = await fetch(apiUrl + 'Usuarios', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(dto)
        });

        return usuarioPost;
    }
}

export default methods;