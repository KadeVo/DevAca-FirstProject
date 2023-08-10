export async function seed(knex) {
  await knex('restaurant_picture').insert([
    { id: 1, url: 'https://www.lillius.co.nz/media/1370/web-size-1.jpg', description: 'some description', restaurant_id: 1 },
    { id: 2, url: 'https://www.lillius.co.nz/media/1371/web-size-50.jpg', description: 'some description', restaurant_id: 1 },
    { id: 3, url: 'https://hellobeasty.nz/beasty-gallery/mjadjokwzw8bhpagw9g8dkcfho1zi6', description: 'some description', restaurant_id: 2 },
  { id: 4, url: 'https://hellobeasty.nz/beasty-gallery/aeizhays8y6l0canbb5wzreoo87xqa', description: 'some description', restaurant_id: 2 },])
}