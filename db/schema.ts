import { pgTable, text } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';

// Accounts schema
export const accounts = pgTable('accounts', {
  // pg = Postgres
  id: text('id').primaryKey(),
  plaidId: text('plaid_id'),
  name: text('name').notNull(),
  userId: text('user_id').notNull(),
});

export const insertAccountSchema = createInsertSchema(accounts);

// Categories schema
export const categories = pgTable('categories', {
  id: text('id').primaryKey(),
  plaidId: text('plaid_id'),
  name: text('name').notNull(),
  userId: text('user_id').notNull(),
});

export const insertCategorySchema = createInsertSchema(categories);
