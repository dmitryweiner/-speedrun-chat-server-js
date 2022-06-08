const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {nanoid} = require("nanoid");

let items = [
    {
        id: nanoid(),
        username: "Вася Пупкин",
        text: "Всем привет, я Вася!",
        timestamp: new Date().getTime()
    },
];

const app = express();

app.use(
    cors({
        credentials: true,
        origin: true
    })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.status(200).json(items);
});

app.post("/", (req, res) => {
    const data = {
        id: nanoid(),
        timestamp: new Date().getTime(),
        ...req.body
    };
    items.push(data);
    res.status(200).end();
});


const PORT = process.env.PORT || 3000;
console.log('Starting server...');
app.listen(PORT, '0.0.0.0', () => console.log(`Server is live at http://localhost:${PORT}`));
