import * as Path from 'node:path'
import * as URL from 'node:url'
import * as db from '../server/db/db.js'
import express from 'express'
import handlebars from 'express-handlebars'

import restaurants from './routes/restaurants.js'

const server = express()

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

// Middleware
server.engine('hbs', handlebars.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', Path.join(__dirname, 'views'))
server.use(express.urlencoded({ extended: true }))

// Home page
server.get('/', async (req, res) => {
  try {
    const restaurants = await db.getAllRestaurantsWithPictures()
    console.log('Restaurants Data:', restaurants)
    res.render('home', { restaurants: restaurants })
  } catch (err) {
    console.log(err.message)
  }
})

// Routes
server.use('/restaurants', restaurants)
server.use(express.static(__dirname + '/public'))

export default server
