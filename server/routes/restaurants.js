import express from 'express'

import * as db from '../db/db.js'

import { urlToName } from '../helper.js'

const router = express.Router()

router.get('/:restaurant', async (req, res) => {
  try {
    const restaurantUrl = req.params.restaurant
    const restaurantName = urlToName(restaurantUrl)
    const restaurant = await db.getRestaurantByName(restaurantName)
    const reviews = await db.getRestaurantReviews(restaurant.id)

    res.render('restaurant', { ...restaurant, reviews })
  } catch (err) {
    console.error(err)
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

router.get('/:restaurant/add', async (req, res) => {
  try {
    const name = urlToName(req.params.restaurant)
    const url = req.params.restaurant
    res.render('addreview', { restaurantName: name, url })
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

router.post('/:restaurant/add', async (req, res) => {
  try {
    console.log(req.body)

    const restaurantName = req.params.restaurant
    const restaurant = await db.getRestaurantByName
    await db.addReview(req.body.username, req.body.rating, req.body.review)
    res.render('/:restaurant')
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

export default router
