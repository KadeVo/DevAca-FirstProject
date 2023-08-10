export async function seed(knex) {
  await knex('restaurants').insert([
    { id: 1, name: 'Lillius', rating: 97.38, cuisine_type: 'European', location:'19 Khyber Pass Road', picture_id: 1 },
    { id: 2, name: 'Hello Beasty', rating: 94.87, cuisine_type: 'European', location:'Market Square, 95-97 Customs Street West', picture_id: 3 },
  ])
}
