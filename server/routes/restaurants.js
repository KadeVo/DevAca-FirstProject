import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

router.get('/:restaurant', async (req, res) => {
  try {
    const restaurantPara = req.params.restaurant
   
    //const restaurantName = restaurantPara.replace('-', '')
    const restaurant = await db.getRestaurantByName(restaurantPara)
   
    const reviews = await db.getRestaurantReviews(restaurant.id)
    
    res.render('restaurant', { ...restaurant, reviews })
  } catch (err) {
    console.error(err)
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

router.get('/:name', async (req, res) => {
  try {
    res.render('restaurant')
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

router.get('/:name/add', async (req, res) => {
  try {
    const restaurantName = req.params.name
    res.render('addreview')
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

router.post('/:name/add', async (req, res) => {
  try {
    const restaurantName = req.params.name
    res.render('addreview', restaurantName)
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})



export default router
