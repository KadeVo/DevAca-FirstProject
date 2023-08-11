import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

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
