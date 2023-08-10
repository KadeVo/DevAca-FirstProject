import knex from 'knex'
import knexfile from './knexfile.js'

const environment = process.env.NODE_ENV || 'development'
const config = knexfile[environment]
export const connection = knex(config)

export async function getReviews() {
  // return connection('users').select()
}

export async function getRestaurants() {
  // return connection('users').where('id', id).first()
}

export async function addReview(
  username: string,
  rating: number,
  review: string,
  timestamp: number
) {
  return connection('reviews').insert({ username, rating, review, timestamp })
}
