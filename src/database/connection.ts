import mongoose from "mongoose";
import { db } from "./configURI";

class Database {
  public connection;
  constructor() {
    this.connection = mongoose.connect(
      `${db.uri}`,
      (): void => console.log(`Connection with mongoDB established`)
    );
  }
}

export default new Database()