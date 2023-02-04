import mongoose from "mongoose";
import { db } from "./connfigURI";

class Database {
    public connection = mongoose.connect('') 
    constructor() {
       if (db.uri) {
         this.connection = mongoose.connect(db.uri, {
           useNewUrlParser: true,
           useUnifiedTopology: true,
         }, console.log("Connection with mongodb estabilished"));
       }
    }
}

export default new Database()