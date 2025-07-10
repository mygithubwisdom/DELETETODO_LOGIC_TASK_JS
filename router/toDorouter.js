import express from 'express';
import { getToDo, deleteToDo } from '../controllers/toDoController.js';

const router = express.Router();

router.get('/', getToDo);
router.delete('/:id', deleteToDo);

export default router;
