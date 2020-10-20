const express = require('express')
const router = express.Router()
const Author = require('../models/Author');
const Cookbook = require('../models/Cookbook');




// Write the route to list all authors
// INDEX
router.get('/', async (req, res) => {
	const allAuthors = await Author.find({});
	res.json({
		status: 200,
		data: allAuthors,
	});
});
// checked on http://localhost:4000/api/authors


// Write the route to get authors by firstname
// SHOW
router.get('/:firstName', async (req, res) => {
    const author = await Author.find({ firstName: req.params.firstName})
    res.json(
        {
            status: 200,
            data: author
        }
    )
})

// Write the route to create an author
// POST
router.post('/',async (req, res) => {
    console.log('post/create new owner - ', req.body)
    const author = await Author.create(req.body)
    res.json(
        {
            status: 200,
            data: author
        }
    )
})



// Write the route to update an author
// PUT
router.put('/:firstName', async (req, res) => {
    const author = await Author.findOneAndUpdate({firstName: req.params.firstName}, req.body, {new:true})
    res.json(
        {
            status: 200, 
            msg: 'author has been updated', 
            data: author
        }
    )
})
// localhost:4000/api/authors/lesley <-- changed back to meera and then back to les

// Update the cookbook using Postman.
// PUT
// author id: 5f8d0aafe2454b531a99c9f8 (allisyn)
// book title/id: ilovefood 5f8cf73d7f778f49ecf3a18f (ilovefood)
router.put('/:authorId/addCookbook/:cookbookId', async (req, res) => {
    console.log('author route from put method update cookbook: ', req.params)
    const cookbook = await Cookbook.findById(req.params.cookbookId)
    const author = await Author.findByIdAndUpdate(
        req.params.authorId,
        { $push: {cookbooks: cookbook.id}, new: true}
    )
    res.json(
        {
            status: 200,
            data: author
        }
    )
})
// localhost:4000/api/authors/5f8d0aafe2454b531a99c9f8/addCookbook/5f8cf73d7f778f49ecf3a18f


// Bonus: Write the route to delete cookbooks by author name. (hint: There are a couple on different ways to do this and you may have to change/add code in other files)


module.exports = router