import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Retrying read queries is not useful in this app. We aren't interacting
      // with any 3rd-party apis, and since most of the Hyperdrive SDK is just
      // calling wasm functions which throw errors on bad inputs, a retry with
      // bad arguments isn't going to change those results. By turning this off
      // (the default is 3 retries w/ exponential backoff), users will get a
      // much better and faster experience seeing and loading data in the app.
      retry: false,

      // The duration until a query transitions from fresh to stale. As long as
      // the query is fresh, data will always be read from the cache only - no
      // network request will happen! If the query is stale (which per default
      // is: instantly), you will still get data from the cache, but a
      // background refetch can happen under certain conditions.
      staleTime: 60_000, // let's try 1 minute
    },
  },
});
