import faunadb from 'faunadb';
require('dotenv').config();

export const queries = faunadb.query;
export const client = new faunadb.Client({
  secret: process.env.SECRET_KEY!,
});



