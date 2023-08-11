import knex from 'knex'
import knexfile from './knexfile.js'

const environment = process.env.NODE_ENV || 'development'
const config = knexfile[environment]
export const connection = knex(config)

export async function getReviews() {
  // return connection('users').select()
}

export async function getRestaurantByName(restaurantName) {
  return connection('restaurants')
    .select('*')
    .where('restaurants.name', restaurantName)
}

export async function getRestaurants() {
  // return connection('users').where('id', id).first()
}

export async function addReview(username, rating, review, timestamp) {
  return connection('reviews').insert({ username, rating, review, timestamp })
}
