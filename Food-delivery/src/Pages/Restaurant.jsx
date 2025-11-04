import React, { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const API_BASE = 'https://react-node-food-project.onrender.com/api'

const FoodCard = ({food, onAdd}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={food.image || 'https://via.placeholder.com/400x250'} alt={food.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{food.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{food.description || 'Tasty meal'}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-orange-600 font-bold">${food.price?.toFixed(2) ?? '0.00'}</div>
          <button onClick={() => onAdd(food)} className="bg-[#FE4501] text-white px-3 py-1 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

const Restaurant = () => {
  const { id } = useParams()
  const [foods, setFoods] = useState([])
  const [restaurant, setRestaurant] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { addToCart, items } = useCart()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const fetchAll = async () => {
      setLoading(true)
      setError('')
      try {
        // fetch restaurant details (if available)
        try {
          const resRest = await axios.get(`${API_BASE}/restaurants/${id}`)
          setRestaurant(resRest.data.restaurant || { name: id })
        } catch (e) {
          // fallback: use id as name if endpoint not present
          setRestaurant({ name: id })
        }

        // fetch foods for restaurant
        const res = await axios.get(`${API_BASE}/restaurants/${id}/foods`)
        setFoods(res.data.foods || [])

        // fetch user info to personalize
        if (token) {
          try {
            const resUser = await axios.get(`${API_BASE}/user`, { headers: { Authorization: `Bearer ${token}` } })
            setUser(resUser.data.user)
          } catch (e) {
            // ignore user fetch failure
            setUser(null)
          }
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load restaurant data')
      } finally {
        setLoading(false)
      }
    }

    fetchAll()
  }, [id])

  const handleAdd = (food) => {
    addToCart(food, 1)
  }

  if (loading) return <div className="p-6 text-center">Loading restaurant menu...</div>
  if (error) return (
    <div className="p-6 text-center">
      <div className="text-red-600">{error}</div>
      <Link className="text-blue-600 underline mt-3 inline-block" to="/">Back to home</Link>
    </div>
  )

  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{restaurant?.name || id}</h1>
          {user && <p className="text-gray-600 mt-1">Welcome back, {user.fullName || user.name}!</p>}
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Cart</div>
          <div className="font-semibold">{items.length} item(s)</div>
          <Link to="/cart" className="mt-2 inline-block bg-[#FE4501] text-white px-3 py-1 rounded text-sm">View cart</Link>
        </div>
      </div>

      <hr className="my-6" />

      {foods.length === 0 ? (
        <div className="text-center text-gray-600">No meals available from this restaurant yet.</div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {foods.map(f => (
            <FoodCard key={f._id || f.id || f.name} food={f} onAdd={handleAdd} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Restaurant
