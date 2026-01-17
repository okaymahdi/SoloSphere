// models/Job.js
import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    job_title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    min_price: { type: Number, required: true },
    max_price: { type: Number, required: true },
    buyer: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Job = mongoose.model('Job', jobSchema, 'Jobs');

export default Job;
