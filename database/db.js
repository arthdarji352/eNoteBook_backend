import { connect } from "mongoose";
import "dotenv/config";

const connectToMongo = async () => {
  try {
    await connect(process.env.DB_URL);
    console.log("---***Database Connected Successfully***---");
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongo;
