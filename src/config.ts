export default {
  client: 'postgresql',
  connection: {
    host : process.env.DATABASE_HOST || '127.0.0.1',
    database: process.env.DATABASE_DB || 'test',
    user: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'postgres'
  },
  pool: { min: 2, max: 10 },
}
