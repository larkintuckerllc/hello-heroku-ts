import express from 'express';

const PORT = process.env.PORT || '5000';
const app = express();
app.get('/', (req, res) => res.send('Hello World 2!'));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
