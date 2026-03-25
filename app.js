const express = require("express");
const app = express();
app.use(express.json());

const login = [
    {
        id: 1,
        login: 'admin@gmail.com',
        password: 'umar1234',
    },
    {
        id: 2,
        login: 'hodim@gmail.com',
        password: 'umar1234',
    }
];

app.get('/', (req, res) => {
    res.send("Hey inson o'zinga hush kelding ...");
});

app.get('/login', (req, res) => {
    res.json(login);
});

app.get('/login/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const get_Id = login.find(izla => izla.id === id);

    if (!get_Id) {
        return res.status(404).send("Sizda id olishda xatolik bor ..");
    }

    res.json(get_Id);
});

app.post('/login', (req, res) => {
    const { login: userLogin, password } = req.body;

    if (!userLogin || !password) {
        return res.status(400).json({
            message: "login va password kiritilishi shart"
        });
    }

    const post_Login = {
        id: login.length + 1,
        login: userLogin,
        password: password
    };

    login.push(post_Login);

    res.status(201).json({
        message: "Login muvaffaqiyatli qo‘shildi",
        data: post_Login
    });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server ${port} portda ishlayapti ...`);
});