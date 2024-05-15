import { application } from "express";
import mongoose from "mongoose";
import config from "./config";


async function main() {
    
  
    try {

        await mongoose.connect(config.database_url as string);

        application.listen(config.port, () => {
            console.log(`Database connected , Server is running on http://localhost:${config.port}`);
          });
        
    } catch (error) {
        console.log("Database connection error: " + error)
    }
  }

  main();