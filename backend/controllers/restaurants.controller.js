// Simple demo controller that returns mock restaurants and foods
const mockRestaurants = {
  alata: { id: 'alata', name: 'Alata Mike & Honey Restaurant' },
  item7go: { id: 'item7go', name: 'Item7go Party Rice Shawarma' },
  aroma: { id: 'aroma', name: 'Aroma Place Mosho Restaurant' },
  brent: { id: 'brent', name: 'Brent Mall Mosho Restaurant' }
}

const mockFoods = {
  alata: [
    { _id: 'a1', name: 'Jollof Rice', price: 6.5, description: 'Spicy jollof rice with chicken', image: '' },
    { _id: 'a2', name: 'Fried Plantain', price: 2.5, description: 'Sweet fried plantain', image: '' }
  ],
  item7go: [
    { _id: 'i1', name: 'Shawarma', price: 5.0, description: 'Grilled shawarma wrap', image: '' },
  ],
  aroma: [
    { _id: 'r1', name: 'Aroma Special', price: 8.0, description: 'Chef special dish', image: '' }
  ],
  brent: []
}

const getRestaurant = (req, res) => {
  const { id } = req.params
  const rest = mockRestaurants[id]
  if (!rest) {
    return res.status(200).json({ restaurant: { id, name: id } })
  }
  res.json({ restaurant: rest })
}

const getFoods = (req, res) => {
  const { id } = req.params
  const foods = mockFoods[id] || []
  // Always return 200 with an array (empty if none) so frontend can handle empty states gracefully
  res.json({ foods })
}

module.exports = { getRestaurant, getFoods }
