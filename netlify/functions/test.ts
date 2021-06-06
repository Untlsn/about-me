require('dotenv').config();
import { Handler } from '@netlify/functions';
import faunadb from 'faunadb';

const { Get, Ref, Collection } = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.SECRET_KEY!,
});

export const handler: Handler = (ev, ctx, cb) => {

};