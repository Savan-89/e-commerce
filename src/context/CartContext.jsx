import React, { createContext, useContext, useReducer } from 'react'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, size } = action.payload
      const lineId = `${product.id}-${size}`
      const existing = state.items.find((i) => i.lineId === lineId)
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.lineId === lineId ? { ...i, qty: i.qty + 1 } : i
          ),
        }
      }
      return {
        ...state,
        items: [
          ...state.items,
          { lineId, product, size, qty: 1 },
        ],
      }
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter((i) => i.lineId !== action.payload) }
    case 'SET_QTY':
      return {
        ...state,
        items: state.items
          .map((i) =>
            i.lineId === action.payload.lineId
              ? { ...i, qty: Math.max(1, action.payload.qty) }
              : i
          ),
      }
    case 'CLEAR':
      return { ...state, items: [] }
    case 'TOGGLE_DRAWER':
      return { ...state, drawerOpen: action.payload ?? !state.drawerOpen }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], drawerOpen: false })

  const addToCart = (product, size = 'M') => dispatch({ type: 'ADD', payload: { product, size } })
  const removeFromCart = (lineId) => dispatch({ type: 'REMOVE', payload: lineId })
  const setQty = (lineId, qty) => dispatch({ type: 'SET_QTY', payload: { lineId, qty } })
  const clearCart = () => dispatch({ type: 'CLEAR' })
  const toggleDrawer = (val) => dispatch({ type: 'TOGGLE_DRAWER', payload: val })

  const itemCount = state.items.reduce((sum, i) => sum + i.qty, 0)
  const subtotal = state.items.reduce((sum, i) => sum + i.qty * i.product.price, 0)

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        drawerOpen: state.drawerOpen,
        addToCart,
        removeFromCart,
        setQty,
        clearCart,
        toggleDrawer,
        itemCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
