import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import api from '../api/axios'

function Restaurants() {
  const [restaurant, setRestaurant] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await api.get("/restaurants")
        setRestaurant(response.data.data || response.data)
      } catch (error) {
        setError("Failed to load restaurants")
      } finally {
        setLoading(false)
      }
    }
    fetchRestaurants()
  }, [])
  const handleSelectRestaurant = (restaurantId) => {
    navigate(`/menu/${restaurantId}`)
  }
  if (loading) return <p className='text-blue-500'> loading Restaurant</p>
  if (error) return <p className='text-red-500'> {error}</p>

  return (
    <div className='max-w-7xl mx-auto'>
      <h2 className='text-center text-3xl my-2'>Restaurants</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  '>
        {restaurant.length == 0 && <p>No Restaurants available</p>}
        <ul>
          {restaurant.map((resto) => (
            <li key={resto._id} onClick={() => handleSelectRestaurant(resto._id)}>
              <img src={resto.image} alt='' className='w-50 h-full rounded-md object-cover' />
              <h2 className='font-bold'>{resto.name}</h2>
              <h2>{resto.loaction}</h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Restaurants
