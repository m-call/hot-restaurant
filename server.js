const express = require('express');

const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

const reservations = [
    {
        name: 'test1',
        phone: 'test1',
        email: 'test',
        id: 'test'
    },
    {
        name: 'test2',
        phone: 'test3',
        email: 'test3',
        id: 'test3'
    }
];

const waitlist = [
    {
        name: 'test2',
        phone: 'test3',
        email: 'test3',
        id: 'test3'
    }
];

app.get('/', (req, res) => {
    res.send('Welcome to the Hot Restaurant Page!');
  });

app.get('/tables', (req, res) => {
    res.json(reservations);
  });