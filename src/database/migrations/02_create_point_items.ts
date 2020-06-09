import Knex from 'knex';

export async function up(knex: Knex) {
	return knex.schema.createTable('point_items', table => {
		table.increments('id').primary();
		table.integer('point_id').notNullable().references('points.id');
		table.integer('item_id').notNullable().references('items.id');
	});
}

export async function down(knex: Knex) {
	return knex.schema.dropTableIfExists('point_items'); 
}