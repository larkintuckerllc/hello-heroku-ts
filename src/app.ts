import express from 'express';

const app = express();
app.get('/', (_, res) => res.send('Hello World 2!'));
export default app;
