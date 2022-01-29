const env = process.env;

/*
typically we would never persist this data to GitHub
but since this is not a produection product....
*/
const config = {
  db: {
    host: env.DB_HOST || 'localhost',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'cms_user',
    password: env.DB_PASSWORD || 'password',
    database: env.DB_NAME || 'fishfry',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;