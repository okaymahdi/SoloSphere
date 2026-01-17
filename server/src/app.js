// server/src/app.js
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import jobRoutes from '../routes/job.routes.js';

dotenv.config(); // .env ফাইল load

const app = express();

// =======================
// CORS CONFIGURATION
// =======================
const allowedOrigins = [
  process.env.CLIENT_URL, // e.g., http://localhost:3000
  process.env.ADMIN_URL, // optional: admin panel
];

const corsOptions = {
  origin: (origin, callback) => {
    // allow Postman / Mobile Apps / server-to-server requests
    if (!origin) return callback(null, true);

    // development: allow all origins
    if (process.env.NODE_ENV === 'development') return callback(null, true);

    // production: allow only listed origins
    if (allowedOrigins.includes(origin)) return callback(null, true);

    // block others
    return callback(new Error('❌ Not allowed by CORS'));
  },
  credentials: true, // allow cookies, authorization headers
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
};

// apply CORS middleware
app.use(cors(corsOptions));

// handle preflight requests
// app.options('*', cors(corsOptions));

// =======================
// BODY PARSERS
// =======================
app.use(express.json({ limit: '10mb' })); // JSON body
app.use(express.urlencoded({ limit: '10mb', extended: true })); // form-urlencoded

// =======================
// TEST ROUTE
// =======================
app.get('/', (req, res) => {
  res.json({ message: '✅ Server is running!' });
});

app.use('/jobs', jobRoutes);

// =======================
// ERROR HANDLER (Optional)
// =======================
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: err.message || 'Something went wrong',
  });
});

export default app;
