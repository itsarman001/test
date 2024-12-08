/*
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';

// App Config
const PORT = process.env.PORT || 4000;
const app = express();
await connectDB()

// Initialize middleware
app.use(express.json());
app.use(cors());

// API routes
app.get('/', (req, res) => res.send('api working...'));

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
*/

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
// import clerkWebHook from './controllers/UserControllers.js';

// App Config
const PORT = process.env.PORT || 4000;
const app = express();

// Database Connection
console.time("DB Connection Time");
await connectDB();
console.timeEnd("DB Connection Time");

// Initialize Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('API working...');
});

// Favicon Handling
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Webhook Route Example
// app.post('/api/user/webhooks', clerkWebHook);

// Server Listener
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
