// routes/job.routes.js
import express from 'express';
import {
  getAllJobs,
  getJobsByCategory,
  getJobById,
} from '../Controllers/Job.controller.js';

const router = express.Router();

router.get('/', getAllJobs); // all jobs
router.get('/category/:category', getJobsByCategory); // by category
router.get('/:id', getJobById); // single job by id

export default router;
