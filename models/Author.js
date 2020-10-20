//Import connection
const mongoose = require('../db/connection')


/* Create Author as new schema
    properties:
    firstName (string),
    lastName (string),
    cookbooks[] (reference to Cookbook model by id)
*/

const Schema = mongoose.Schema

const authorSchema = new Schema(
    {
	firstName: { type: String },
	lastName: { type: String },
    cookbooks: [
        {ref: 'Cookbook', type: Schema.Types.ObjectId} 
    ]
}
);

const Author = mongoose.model('Author', authorSchema)


//export model named "Author"
module.exports = Author
