// // 

// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// const PORT = 3000;

// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/blogdatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// mongoose.connection.on('error', (err) => {
//   console.error('MongoDB connection error:', err);
// });

// mongoose.connection.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
// });

// const User = mongoose.model('User', userSchema);

// app.post('/api/users', async (req, res) => {
//   try {
//     const user = new User(req.body);
//     await user.save();
//     res.status(201).send(user);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// app.get('/api/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).send(users);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });






const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/blogdatabase';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

app.post('/api/users', async (req, res) => {
  try {
    console.log('Received request:', req.body);
    const user = new User(req.body);
    await user.save();
    console.log('Saved user:', user);
    res.status(201).send(user);
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(400).send(error);
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    console.log('Fetched users:', users);
    res.status(200).send(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
