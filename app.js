const dotenv = require('dotenv');
const express = require('express')
const logger = require('morgan')
const cors = require('cors')

dotenv.config();

const transactionsRouter = require('./routes/transactionsRoutes')
const userRouter = require('./routes/userRoutes');
const dragonReviewerUserDataRouter = require('./routes/dragonReviewerUserDataRouter');

const app = express();

const corsOptions ={
  origin:'*', 
  credentials:true,
  optionSuccessStatus:200
}


const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors(corsOptions))
app.use(express.json())



app.use('/transactions', transactionsRouter);

app.use('/user', userRouter);

app.use('/dragon', dragonReviewerUserDataRouter);


app.use((req, res) => {
  console.log("my server error")
  res.status(404).json({
      message: "No Routes Matched"
  })
})



app.use((err, req, res, next) => {
  const {status = 500, message = "Eyeshield Server Error"} = err;

  console.log(`Зара буде помилка з обробника помилок:`, message, status);
  res.status(status).json({ message })
})

module.exports = app
