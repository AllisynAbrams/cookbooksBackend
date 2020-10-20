const express = require('express')
const { restart } = require('nodemon')
const router = express.Router()

// Require the Cookbook controller. <---- does this mean MODEL??
const Cookbook = require('../models/Cookbook')

// Write the route to list all cookbooks
// INDEX
router.get('/', async (req, res) => {
    const allCookbooks = await Cookbook.find({})
    res.json(
        {
            status: 200,
            data: allCookbooks
        }
    )
})
// checked on http://localhost:4000/api/cookbooks and I see it - woohoo!


// Write the route to get cookbook by title
// SHOW (need params here?)
router.get('/:title', async (req, res) => {
    const cookbook = await Cookbook.find({title: req.params.title})
    res.json(
        {
            status: 200, 
            data: cookbook
        }
    )
})
// localhost:4000/api/cookbooks/fresh%20india

// Write the route to get cookbook by year published
// SHOW
router.get('/year/:yearPublished', async (req, res) => {
	const cookbook = await Cookbook.find({yearPublished: req.params.yearPublished});
	res.json({
		status: 200,
		data: cookbook
	})
});
// localhost:4000/api/cookbooks/year/2014

// Write the route to create a cookbook
// POST
router.post('/', async (req, res) => {
    const cookbook = await Cookbook.create(req.body)
    res.json(
        {
            status: 200, 
            data: cookbook
        }
    )
})
// worked to POST on postman to create title ilovefood and year 2020


// Write the route to update a cookbook
// PUT
router.put('/:id', async (req, res) => {
    console.log('put request to update:', req.params.title)
    const cookbook = await Cookbook.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.json(
        {
            status: 200,
            msg: 'item has been updated',
            data: cookbook
        
        }
    )
})
// localhost:4000/api/cookbooks/5f8ce95644da5d4208f0fdae <-- in postman PUT (updated) title to fresh china and yearPublished to 2020

// Write the route to delete the cookbook by title
// DELETE
router.delete('/:title', async (req, res) => {
    const cookbook = await Cookbook.deleteOne({title: req.params.title});
    res.json(
        {
            status: 200, 
            msg: 'item has been deleted'
        }
    )
})
// worked in postman!!

module.exports = router;