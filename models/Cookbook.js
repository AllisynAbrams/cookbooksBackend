//import connection
const mongoose = require('../db/connection');


/* Create Cookbook as new schema
    Properties:
    title (string),
    yearPublished (integer),
*/

const Schema = mongoose.Schema

const cookbookSchema = new Schema(
    {
    title: { type: String },
    yearPublished: {type: Number}
}
);

const Cookbook = mongoose.model('Cookbook', cookbookSchema)



//export model
module.exports = Cookbook