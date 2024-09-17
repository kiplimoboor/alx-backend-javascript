import express from 'express';
import StudentsController from '../controllers/StudentsController';
import AppController from '../controllers/AppController';

const router = express.Router();

router.get('/', (req, resp) => {
  AppController.getHomepage(req, resp);
});

router.get('/students', (req, resp) => {
  StudentsController.getAllStudents(req, resp);
});

router.get('/students/:major', (req, resp) => {
  StudentsController.getAllStudentsByMajor(req, resp);
});

export default router;
