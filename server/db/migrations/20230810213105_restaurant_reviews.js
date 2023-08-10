export async function up(knex) {
    await knex.schema.createTable('restaurant_reviews', (table) => {
        table.increments('id').primary()
        table.varchar('review')
        table.varchar('rating')
        table.varchar('restaurant_id')
        table.varchar('reviewer_name')
        table.timestamp('created_at')
    })
}

export async function down(knex) {
    await knex.schema.dropTable('restaurant_reviews')
}
