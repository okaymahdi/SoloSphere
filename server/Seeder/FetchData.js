import ConnectDB from '../Config/ConnectDB';
import Job from '../Models/Job.model';

const jobs = [
  {
    job_title: 'Full Stack Web App',
    category: 'web development',
    description: 'MERN Stack',
    min_price: 300,
    max_price: 600,
    buyer: 'Rahim',
    email: 'rahim@mail.com',
  },
  {
    job_title: 'Logo Design',
    category: 'graphics design',
    description: 'Creative logo',
    min_price: 50,
    max_price: 150,
    buyer: 'Nusrat',
    email: 'nusrat@mail.com',
  },
  // ... baki 18 jobs
];

const seedJobs = async () => {
  await ConnectDB();
  await Job.deleteMany(); // optional: clear old data
  await Job.insertMany(jobs);
  console.log('✅ Jobs seeded!');
  process.exit();
};

seedJobs();
