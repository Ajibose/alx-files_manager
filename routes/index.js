import express from 'express';
import { getStatus, getStats } from '../controllers/AppController';

const router = express.Router();

router.get('/status', (req, res) => {
  getStatus(req, res);
});

router.get('/stats', (req, res) => {
  getStats(req, res);
});

export default router;
