/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable('restaurant_picture', (table) => {
        table.increments('id').primary()
        table.int('restaurant_id').references('restaurants.id')
        table.string('url')
        table.string('description')
        table.timestamp('created_at')
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    await knex.schema.dropTable('restaurant_picture')
}
