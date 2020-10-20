const mongoose = require('mongoose')

// //set up URI connection
// const mongoURI = 'mongodb://localhost/cookbooks_db';

// // config mongo connection
// const config = {
// 	useUnifiedTopology: true,
// 	useNewUrlParser: true,
// };

// // connect to db/URI
// mongoose.connect(mongoURI, config);

// // create the connection to the db
// const db = mongoose.connection

// // add additional message connections
// db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
// db.on('connected', () => console.log('mongo connected: ', mongoURI));
// db.on('disconnected', () => console.log('mongo disconnected'));

mongoose.connect('mongodb://localhost/cookbooks_db', { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.Promise = Promise

module.exports = mongoose
