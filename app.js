const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const alienRouter = require('./server/routes/aliens.js')

const url= 'mongodb+srv://user:phno@cbit.nuexp.mongodb.net/'
//const url = 'mongodb://localhost:27017/crud'
//const url='mongodb://127.0.0.1:27020,127.0.0.1:27021,127.0.0.1:27022'
const app = express()

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch(error => {
    console.error('Database connection error:', error);
  });

app.use('/aliens',alienRouter)
app.listen(9000, () =>
{
console.log('Server started');
}).on('error', (err) => {
  console.error('Error starting server:', err);
});
