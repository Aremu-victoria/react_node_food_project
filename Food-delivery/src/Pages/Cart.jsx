import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const { items, updateQuantity, removeItem, subtotal } = useCart()
  const navigate = useNavigate()

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">Your cart is empty.</p>
          <Link to="/buyer-dashboard" className="text-blue-600 underline mt-3 inline-block">Continue shopping</Link>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-white shadow rounded p-4">
            {items.map(item => (
              <div key={item._id || item.id || item.name} className="flex items-center gap-4 py-3 border-b last:border-b-0">
                <img src={item.image || 'https://via.placeholder.com/80'} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm text-gray-500">${Number(item.price).toFixed(2)} each</div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-700 font-semibold">${(Number(item.price) * Number(item.quantity)).toFixed(2)}</div>
                      <button onClick={() => removeItem(item._id || item.id)} className="text-sm text-red-600 mt-1">Remove</button>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <button onClick={() => updateQuantity(item._id || item.id, Number(item.quantity) - 1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                    <div className="px-3">{item.quantity}</div>
                    <button onClick={() => updateQuantity(item._id || item.id, Number(item.quantity) + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-right">
            <div className="text-lg">Subtotal: <span className="font-bold text-xl">${subtotal.toFixed(2)}</span></div>
            <div className="mt-4 flex justify-end gap-3">
              <button onClick={() => navigate('/')} className="px-4 py-2 border rounded">Continue shopping</button>
              <button onClick={() => navigate('/checkout')} className="px-4 py-2 bg-[#FE4501] text-white rounded">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
