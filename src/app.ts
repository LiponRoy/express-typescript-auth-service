import express, { Application, Request, Response } from 'express';
import cors from 'cors' 

const app:Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

// Testing Routes
app.get('/', (req:Request, res:Response) => {
  res.send('Testing successfully');
});



export default app;