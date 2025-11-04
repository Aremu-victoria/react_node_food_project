import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

const API_BASE = 'https://react-node-food-project.onrender.com/api'

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleConfirm = async () => {
    setError('')
    if (!name || !phone || !address) {
      setError('Please fill in all fields')
      return
    }

    setLoading(true)
    try {
      const payload = { customer: { name, phone, address }, items, total: subtotal }
      const res = await fetch(`${API_BASE}/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Checkout failed')
      setSuccess(true)
      clearCart()
    } catch (e) {
      setError(e.message || 'Failed to place order')
    } finally {
      setLoading(false)
    }
  }

  if (success) return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Thank you for your order!</h2>
      <p className="text-gray-600">We received your order and will start processing it shortly.</p>
    </div>
  )

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow p-4 rounded">
          <h3 className="font-semibold mb-3">Your details</h3>
          <label className="block text-sm">Name</label>
          <input value={name} onChange={e=>setName(e.target.value)} className="w-full border rounded px-3 py-2 mb-2" />
          <label className="block text-sm">Phone</label>
          <input value={phone} onChange={e=>setPhone(e.target.value)} className="w-full border rounded px-3 py-2 mb-2" />
          <label className="block text-sm">Delivery address</label>
          <textarea value={address} onChange={e=>setAddress(e.target.value)} className="w-full border rounded px-3 py-2 mb-2" rows={4} />
        </div>

        <div className="bg-white shadow p-4 rounded">
          <h3 className="font-semibold mb-3">Order summary</h3>
          {items.length === 0 ? (
            <div className="text-gray-600">No items in your cart.</div>
          ) : (
            <div className="space-y-2">
              {items.map(it => (
                <div key={it._id || it.id || it.name} className="flex justify-between">
                  <div>
                    <div className="font-medium">{it.name} <span className="text-sm text-gray-500">x{it.quantity}</span></div>
                    <div className="text-sm text-gray-500">${Number(it.price).toFixed(2)} each</div>
                  </div>
                  <div className="font-semibold">${(Number(it.price) * Number(it.quantity)).toFixed(2)}</div>
                </div>
              ))}
              <hr />
              <div className="flex justify-between font-bold"> <div> Total </div> <div>${subtotal.toFixed(2)}</div> </div>
            </div>
          )}

          {error && <div className="text-red-600 mt-3">{error}</div>}

          <button onClick={handleConfirm} disabled={loading || items.length===0} className="mt-4 w-full bg-[#FE4501] text-white px-4 py-2 rounded">
            {loading ? 'Processing...' : 'Confirm Order'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
