import { useQuery } from '@tanstack/react-query';

import { client } from '@/lib/hono';

export const useGetCategory = (id?: string) => {
  const query = useQuery({
    enabled: !!id, // If there's no ID passed, then the query won't run
    queryKey: ['category', { id }],
    queryFn: async () => {
      const response = await client.api.categories[':id'].$get({
        // fetches a specific category id
        param: { id },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch category');
      }

      const { data } = await response.json();
      return data;
    },
  });

  return query;
};
