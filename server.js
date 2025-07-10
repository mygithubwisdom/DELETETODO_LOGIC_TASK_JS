import express from 'express';
import toDoRouter from './router/toDorouter.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.use('/api/todos', toDoRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

