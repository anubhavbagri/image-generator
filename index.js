import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
// import dotenv from 'dotenv';
import openAiRoute from './routes/openaiRoutes.js';

// Create __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', openAiRoute);

app.listen(port, () => console.log(`Server started on port ${port}`));
