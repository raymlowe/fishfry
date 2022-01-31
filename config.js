const env = process.env;

/*
typically we would never persist this data to GitHub
but since this is not a produection product....
*/

//Local DB
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
//Heroku DB
// const config = {
//   db: {
//     host: env.DB_HOST || 'ec2-54-208-139-247.compute-1.amazonaws.com',
//     port: env.DB_PORT || '5432',
//     user: env.DB_USER || 'ptgylvipgpoxff',
//     password: env.DB_PASSWORD || 'f0638811b3fa15a0e3501ffd80282b0a9336748d527bc407a8e9349c4a25ef3e',
//     database: env.DB_NAME || 'd69fhr8q8bnnb9',
//   },
//   listPerPage: env.LIST_PER_PAGE || 10,
// };

module.exports = config;