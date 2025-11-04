const express = require('express')
const router = express.Router()
const { getRestaurant, getFoods } = require('../controllers/restaurants.controller')

// Simple checkout handler (mock)
router.post('/api/checkout', (req, res) => {
	const { customer, items, total } = req.body
	console.log('Received checkout', { customer, items, total })
	// In a real app you would create an order in DB, charge payment, send emails, etc.
	return res.status(200).json({ success: true, message: 'Order received' })
})

// Provide demo restaurant endpoints under /api/restaurants/:id
router.get('/api/restaurants/:id', getRestaurant)
router.get('/api/restaurants/:id/foods', getFoods)

module.exports = router
