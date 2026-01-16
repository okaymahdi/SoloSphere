// server/src/index.js
import dotenv from 'dotenv';
dotenv.config();

import chalk from 'chalk';
import ConnectDB from '../Config/ConnectDB.js';
import app from './app.js';

// Safety check for required env vars
if (
  !process.env.MONGO_USER ||
  !process.env.MONGO_PASSWORD ||
  !process.env.MONGO_CLUSTER_NAME ||
  !process.env.MONGO_DATABASE_NAME
) {
  console.error(chalk.red.bold('❌ MongoDB credentials missing in .env'));
  process.exit(1);
}

const startServer = async () => {
  try {
    // 🔗 Connect to MongoDB once
    await ConnectDB();

    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(
        `🚀 ${chalk.green.bold(
          'SoloSphere API Server',
        )} running on ${chalk.yellow(PORT)}`,
      );
      console.log(
        `🌐 Client App → ${process.env.CLIENT_URL || 'http://localhost:5173'}`,
      );
      console.log(`📦 API Docs / Server route: http://localhost:${PORT}/`);
      console.log('\n🛠️ Ready to start building your e-commerce API!');
    });
  } catch (err) {
    console.error(
      chalk.red.bold(`❌ MongoDB Connection Failed: ${err.message}`),
    );
    process.exit(1);
  }
};

// Start server
startServer();
