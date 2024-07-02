import { useQuery } from '@tanstack/react-query';

import { client } from '@/lib/hono';

export const useGetAccount = (id?: string) => {
  const query = useQuery({
    enabled: !!id, // If there's no ID passed, then the query won't run
    queryKey: ['account', { id }],
    queryFn: async () => {
      const response = await client.api.accounts[':id'].$get({
        // fetches a specific account id
        param: { id },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch account');
      }

      const { data } = await response.json();
      return data;
    },
  });

  return query;
};
