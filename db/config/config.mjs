export default {
  test: {
    storage: ":memory",
    dialect: "sqlite",
  },  
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    logging: true,
    dialect: "postgres",
    ssl: true,
    dialectOptions :{
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    logging: false,
    dialect: "postgres",
  },
  
};
