const app = require('./app');
const mongoose = require('mongoose');
const { DBHOST, PORT = 3001 } = process.env;



mongoose
.connect(DBHOST)
    .then(app.listen(PORT))
    .then(() => {
        console.log(`Database connected`)
        console.log(`Server run on port ${PORT}`)
    })
    .catch(error => () => {
        console.log(error)
        process.exit(1)
    });