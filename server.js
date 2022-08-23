const app = require('./app');
const mongoose = require('mongoose');
const { PORT = 3001, MONGO_URL } = process.env;

console.log(MONGO_URL)
mongoose
.connect(MONGO_URL)
    .then(app.listen(PORT))
    .then(() => {
        console.log(`Database connected`)
        console.log(`Server run on port ${PORT}`)
    })
    .catch(error => () => {
        console.log(error)
        process.exit(1)
    });

    