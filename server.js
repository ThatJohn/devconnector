const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(
  express.json({
    extended: false
  })
);

app.get('/', (req, res) => res.send('API running'));

app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/post', require('./routes/api/post'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
