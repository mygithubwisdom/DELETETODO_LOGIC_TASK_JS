import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Test server works!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Test server running on port ${PORT}`);
});