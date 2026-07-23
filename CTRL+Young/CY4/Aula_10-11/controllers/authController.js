const jwt = require('jsonwebtoken');

const users = [
    { email: "ttt@sahur.com", password: "brainrot67", role: "admin" },
    { email: "miguel@bobao.com", password: "hihiha", role:"student"},
    { email: "felipe@bobao.com", password: "argh", role:"student"}
];

let refreshTokens = [];

// Responsável pela validação de token, permitindo o login
const login = (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
    }
    const access = jwt.sign(
        { email: user.email, role: user.role },
        "secreta",
        { expiresIn: "1h" }
    );
    const refresh = jwt.sign({ email: user.email }, "refresh_secreta", {
        expiresIn: "7d",
    });

    refreshTokens.push(refresh);

    res.json({ access, refresh });
};

// Responsável pela criação e validação de token renovado, gerando um novo Token sem precisar do login
const refresh = (req, res) => {
    const { token } = req.body;
    if (!token) return res.status(401).json({ error: "Acesso negado" });
    if (!refreshTokens.includes(token))
        return res.status(403).json({ error: "Token inválido" });

    // remove o token usado da lista
    refreshTokens = refreshTokens.filter((rt) => rt !== token);

    jwt.verify(token, "refresh_secreta", (err, user) => {
        if (err) return res.status(403).json({ error: "Token inválido" });
        
        // Cria um novo Refresh Token
        const newRefreshToken = jwt.sign({ email: decoded.email }, "refresh_secreta", {
            expiresIn: "7d",
        });
        refreshTokens.push(newRefreshToken);

        // Criar um novo Access Token
        const newAcessToken = jwt.sign({ email: decoded.email }, "secreta", {
            expiresIn: "15m",
        });

        res.json({ access: newAcessToken, refresh: newRefreshToken });
    });
};

// Atividade Prática: Logout do usuário e remoção do refresh token
const logout = (req, res) => {
    const { token } = req.body;

    if(!token) return res.status(401).json({ error: "Token não fornecido" });

    refreshTokens = refreshTokens.filter(rt => rt !== token);

    res.json({ message: "Logout realizado com sucesso!" });
}

module.exports = { login, refresh, logout };