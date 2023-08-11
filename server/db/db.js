import knex from 'knex'
import knexfile from './knexfile.js'

const environment = process.env.NODE_ENV || 'development'
const config = knexfile[environment]
export const connection = knex(config)

export function getAllRestaurantsWithPictures() {
  return connection('restaurants')
    .select(
      'restaurants.id',
      'restaurants.name',
      'restaurants.rating',
      'restaurants.cuisine_type',
      'restaurants.location',
      'restaurant_picture.url as imageSource'
    )
    .leftJoin(
      'restaurant_picture',
      'restaurants.id',
      'restaurant_picture.restaurant_id'
    )
}
export async function getReviews() {
  // return connection('users').select()
}

export async function getRestaurantByName(restaurantName) {
  return connection('restaurants')
    .join(
      'restaurant_picture',
      'restaurants.picture_id',
      'restaurant_picture.id'
    )
    .select(
      'restaurants.id',
      'restaurant_picture.url as imageSource',
      'restaurants.cuisine_type as cuisineType',
      'restaurants.location as address'
    )
    .where('restaurants.name', restaurantName)
    .first()
}

export function getRestaurantReviews(restaurantId) {
  return connection('restaurant_reviews')
    .select('*')
    .where('restaurant_reviews.restaurant_id', restaurantId)
}

export async function addReview(username, rating, review, timestamp) {
  return connection('reviews').insert({ username, rating, review, timestamp })
}
