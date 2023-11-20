import dotenv from 'dotenv';
import express from 'express';
import connectDb from './DbConfig/db.js';
import authRoutes from './Routes/authRoutes.js';
import cors from 'cors';
dotenv.config();
connectDb();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8080;
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
  res.send('<h1>helo world From Rohit</h1>');
});

app.listen(PORT, () => {
  console.log(`Node iS Running ON ${PORT}`);
});
