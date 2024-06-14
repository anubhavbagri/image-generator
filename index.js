import express from 'express';
// import dotenv from 'dotenv';
import openAiRoute from './routes/openaiRoutes.js';

// dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use('/openai', openAiRoute);

app.listen(port, () => console.log(`Server started on port ${port}`));
