/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable('restaurants', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.decimal('rating')
        table.string('cuisine_type')
        table.string('location')
        table.timestamp('created_at')
        table.timestamp('updated_at')
        table.integer('picture_id')
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    await knex.schema.dropTable('restaurants')
}

