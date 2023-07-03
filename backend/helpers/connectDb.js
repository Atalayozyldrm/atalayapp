import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://admin:19031903@atalayozy.swolt.mongodb.net/?retryWrites=true&w=majority"
    )
    .then((res) => console.log("piuv"));
};

export default connectDb;
