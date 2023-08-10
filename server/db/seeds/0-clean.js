export async function seed(knex) {
  await knex('restaurants').del()
  await knex('restaurant_picture').del()
  await knex('restaurant_reviews').del()
}
