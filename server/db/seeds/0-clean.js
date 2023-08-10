export async function seed(knex) {
  await knex('restaurant_reviews').del()
  await knex('restaurant_picture').del()
  await knex('restaurants').del()
}
