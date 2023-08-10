export async function seed(knex) {
  await knex('restaurant_reviews').insert([
    {
      id: 1,
      review: 'some review',
      rating: 97.37,
      reviewer_name: 'Liang Wang',
      restaurant_id: 1,
    },
    {
      id: 2,
      review: 'some review',
      rating: 94.87,
      reviewer_name: 'Paul Guest',
      restaurant_id: 2,
    },
  ])
}
