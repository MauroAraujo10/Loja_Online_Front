const apiUrl = 'https://localhost:7087/';

const methods = {
    async Logar(loginViewModel) {
        const login = await fetch(apiUrl + 'Login', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(loginViewModel)
        });
        return login.json();
    }
}

export default methods;