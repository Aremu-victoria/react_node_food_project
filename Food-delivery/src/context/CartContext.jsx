import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

const CART_KEY = 'cart_items_v1'

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(CART_KEY)
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items))
    } catch (e) {
      // ignore
    }
  }, [items])

  const addToCart = (food, qty = 1) => {
    setItems(prev => {
      const idx = prev.findIndex(i => i._id === food._id || i.id === food.id)
      if (idx >= 0) {
        const copy = [...prev]
        copy[idx].quantity += qty
        return copy
      }
      return [...prev, { ...food, quantity: qty }]
    })
  }

  const updateQuantity = (id, quantity) => {
    setItems(prev => prev.map(i => (i._id === id || i.id === id) ? { ...i, quantity: Math.max(1, quantity) } : i))
  }

  const removeItem = (id) => {
    setItems(prev => prev.filter(i => !(i._id === id || i.id === id)))
  }

  const clearCart = () => setItems([])

  const subtotal = items.reduce((s, it) => s + (Number(it.price || 0) * Number(it.quantity || 0)), 0)

  return (
    <CartContext.Provider value={{ items, addToCart, updateQuantity, removeItem, clearCart, subtotal }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)

export default CartContext
