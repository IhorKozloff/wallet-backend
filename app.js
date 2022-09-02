const dotenv = require('dotenv');
const express = require('express')
const logger = require('morgan')
const cors = require('cors')

dotenv.config();

const transactionsRouter = require('./routes/transactionsRoutes')
const userRouter = require('./routes/userRoutes');

const app = express()



const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))
app.use(express.json())



app.use('/transactions', transactionsRouter);

app.use('/user', userRouter);

app.get('/test', (req, res) => {
    res.json({meassage: "test passed"})
});



app.use((req, res) => {
  console.log("my server error")
  res.status(404).json({
      message: "No Routes Matched"
  })
})



app.use((err, req, res, next) => {
  const {status = 500, message = "Eyeshield Server Error"} = err;

  console.log(`Зара буде помилка з обробника помилок app(1,2,3,4)`, message, status);
  res.status(status).json({ message })
})

module.exports = app
