//import express from 'express';
//import toDoRouter from './routes/todo.js';

import express from 'express';
import toDoRouter from './router/toDorouter.js';

const app = express(); // <-- Add this line

// ...existing code...
app.use('/api/todos', toDoRouter);

// Optionally, add a port and start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
