import knex from "knex";


const connection = knex({
	client: 'pg',
	version: '12.2',
	connection: {
		host: '127.0.0.1',
		user: 'next_level_week',
		password: 'Star1234',
		database: 'next_level_week'
	}
});

export default connection;