import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const users = await db.getUsers()
    res.render('index', { users: users })
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

router.get('/:restaurant', async (req, res, next)=>{
  try{
    const restaurantPara: string = req.params.restaurant
    //const restaurantName = restaurantPara.replace('-', '')
    const restaurant = await db.getRestaurantByName(restaurantPara) 
    const reviews = await db.getRestaurantReviews(restaurant.id)
    res.render('restaurant', {restaurant, reviews})
  }catch(err){
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

export default router
