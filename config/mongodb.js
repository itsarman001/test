/*
import mongoose from 'mongoose';

const connectDB = async () => {
  // Listen for successful connection
  mongoose.connection.on('connected', () =>
    console.log('Connected to database')
  );

  // Connect to MongoDB
  await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`);
};

export default connectDB;
*/

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/bgRemoval`);
    console.log("MongoDB Connected...");
    mongoose.connection.on('connected', () =>
      console.log('Connected to database')
    );
  } catch (error) {
    console.error("MongoDB Connection Failed", error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
