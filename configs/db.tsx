import mongoose from 'mongoose';

const connectToDB = async (): Promise<void> => {
  try {
    if (mongoose.connections[0].readyState) {
      console.log("Already connected to DB");
      return;
    }

    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("Connected to DB successfully");

  } catch (err) {
    console.error("DB connection error =>", err);
  }
};

export default connectToDB;