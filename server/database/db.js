import mongoose from "mongoose";

export const Connection = async (username, password) => {
  try {
    const URL = `mongodb://${username}:${password}@ac-hzdkjil-shard-00-00.dhvzquq.mongodb.net:27017,ac-hzdkjil-shard-00-01.dhvzquq.mongodb.net:27017,ac-hzdkjil-shard-00-02.dhvzquq.mongodb.net:27017/?ssl=true&replicaSet=atlas-wfrbr8-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ecommerce-web`;

    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database:", error.message);
  }
};

export default Connection;
