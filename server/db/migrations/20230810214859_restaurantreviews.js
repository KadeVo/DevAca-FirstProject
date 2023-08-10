/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable('restaurant_reviews', (table) => {
        table.increments('id').primary()
        table.string('review')
        table.string('rating')
        table.string('restaurant_id').references('restaurants.id')
        table.string('reviewer_name')
        table.timestamp('created_at')
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    await knex.schema.dropTable('restaurant_reviews')
}
