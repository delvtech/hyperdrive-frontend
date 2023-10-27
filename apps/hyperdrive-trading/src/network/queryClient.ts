import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // The duration until a query transitions from fresh to stale. As long as
      // the query is fresh, data will always be read from the cache only - no
      // network request will happen! If the query is stale (which per default
      // is: instantly), you will still get data from the cache, but a
      // background refetch can happen under certain conditions.
      staleTime: 60_000, // let's try 1 minute
    },
  },
});
