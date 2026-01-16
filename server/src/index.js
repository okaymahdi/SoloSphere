import dotenv from 'dotenv';
dotenv.config();

import chalk from 'chalk';
import ConnectDB from '../Config/ConnectDB.js';
import app from './app.js';

// Optional safety check
if (!process.env.MONGO_USER || !process.env.MONGO_PASSWORD) {
  console.error(chalk.red.bold('❌ MongoDB credentials missing in .env'));
  process.exit(1);
}

const startServer = async () => {
  try {
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

startServer();
