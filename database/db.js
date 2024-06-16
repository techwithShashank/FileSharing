import mongoose from "mongoose";

const DBConnection = async () => {
  const MONGO_URI =
    "mongodb+srv://user:user@filesharing.0k744es.mongodb.net/?retryWrites=true&w=majority&appName=FileSharing";
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default DBConnection;
