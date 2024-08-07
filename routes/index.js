import express from 'express';
import { getStatus, getStats } from '../controllers/AppController';
import UsersController from '../controllers/UsersController';

const router = express.Router();

router.get('/status', (req, res) => {
  getStatus(req, res);
});

router.get('/stats', (req, res) => {
  getStats(req, res);
});

router.post('/users', (req, res) => {
  UsersController.postNew(req, res);
});

export default router;
