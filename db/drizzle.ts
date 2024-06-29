import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

export const sql = neon(process.env.DATABASE_URL!); // ! was removed in the tutorial and didn't give an error?
export const db = drizzle(sql);
