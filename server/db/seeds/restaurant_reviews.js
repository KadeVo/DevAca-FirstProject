export async function seed(knex) {
  await knex('restaurant_reviews').insert([
    { id: 1, text: 'some review', rating: 97.37, restaurant_id: 1 },
    { id: 2, text: 'some review', rating: 94.87, restaurant_id: 2 },
  ])
}
