import knex from 'knex'
import knexfile from './knexfile.js'

const environment = process.env.NODE_ENV || 'development'
const config = knexfile[environment]
export const connection = knex(config)

export async function getReviews() {
  // return connection('users').select()
}

export function getRestaurantByName(restaurantName: string) {
  return connection('restaurants')
    .select(
      'restaurants.id',
      'restaurants.url as imageSource',
      'restaurants.cuisine_type as cuisineType',
      'restaurants.location as address'
    )
    .where('restaurants.name', restaurantName)
    .first()
}

export function getRestaurantReviews(restaurantId: number)
{
  return connection('restaurant_reviews')
          .select('*')
          .where('restaurant_reviews.restaurant_id', restaurantId)
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
