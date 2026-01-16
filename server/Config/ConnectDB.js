import chalk from 'chalk';
import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

let isConnectedBefore = false;
const ConnectDB = async () => {
  try {
    const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER_NAME}.ue4br8k.mongodb.net/${process.env.MONGO_DATABASE_NAME}?retryWrites=true&w=majority`;

    // 🔗 Connect to MongoDB & return conn
    const conn = await mongoose.connect(MONGODB_URI);

    // ✅ Successful Connection Logs
    if (!isConnectedBefore) {
      console.log(
        `\n🍃 ${chalk.green.bold('MongoDB')} Connected Successfully!`,
      );
      console.log(`🏷️ Cluster Host: ${chalk.yellow(conn.connection.host)}`);
      console.log(
        `🕒 Connected At: ${chalk.cyan(new Date().toLocaleString())}\n`,
      );
      isConnectedBefore = true;
    }

    return conn; // Important to return conn if needed in server.js
  } catch (error) {
    // ❌ Connection Failed Logs
    console.error(
      chalk.red.bold(`❌ MongoDB Connection Failed: ${error.message || error}`),
    );
    process.exit(1); // Stop server if DB fails
  }
};

export default ConnectDB;
