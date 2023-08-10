export async function seed(knex) {
  await knex('users').del()
  await knex('restaurants').del()
  await knex('pictures').del()
  await knex('restaurant_reviews').del()
}
