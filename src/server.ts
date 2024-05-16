import mongoose from "mongoose";
import config from "./config";
import app from "./app";


async function main() {
    
  
    try {

      // database connection
        await mongoose.connect(config.database_url as string);
        console.log(`Database connected , Server is running`);

      // server running
          app.listen(config.port,()=>{
            console.log("Application listening on port",config.port);
          })
        
    } catch (error) {
        console.log("Database connection error: " + error)
    }
  }

  main();