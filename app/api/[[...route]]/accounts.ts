import { Hono } from 'hono';
import { clerkMiddleware, getAuth } from '@hono/clerk-auth';
import { db } from '@/db/drizzle';
import { accounts, insertAccountSchema } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { zValidator } from '@hono/zod-validator';
import { createId } from '@paralleldrive/cuid2';

const app = new Hono()
  .get('/', clerkMiddleware(), async (c) => {
    // GET to return accounts
    const auth = getAuth(c);

    if (!auth?.userId) {
      return c.json({ error: 'Unauthorised' }, 401);
    }

    const data = await db
      .select({
        id: accounts.id,
        name: accounts.name,
      })
      .from(accounts)
      .where(eq(accounts.userId, auth.userId)); // only pulls accounts associated to the logged in user

    return c.json({ data });
  })
  .post(
    // POST to create an account
    '/',
    clerkMiddleware(), // validates authentication
    zValidator(
      'json', // validates json
      insertAccountSchema.pick({
        // uses the custom schema for accounts and only picks out the name
        name: true,
      })
    ),
    async (c) => {
      const auth = getAuth(c);
      const values = c.req.valid('json');

      if (!auth?.userId) {
        return c.json({ error: 'Unauthorised' }, 401);
      }

      const [data] = await db
        .insert(accounts)
        .values({
          id: createId(),
          userId: auth.userId,
          ...values,
        })
        .returning();

      return c.json({ data });
    }
  );

export default app;
