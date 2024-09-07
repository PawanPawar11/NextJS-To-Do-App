import mongoose from "mongoose";

export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI, {
    dbName: "NextJSToDoApp",
  });

  console.log(`Database connected at host ${connection.host}`);
};
