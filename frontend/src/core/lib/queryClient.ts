import { QueryClient } from '@tanstack/react-query';

/**
 * @singleton queryClient
 * @summary Global TanStack Query client configuration
 * @type query-client
 * @category core-library
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: (failureCount, error: unknown) => {
        const err = error as { status?: number };
        if (err?.status && err.status >= 400 && err.status < 500) {
          return false;
        }
        return failureCount < 3;
      },
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: 1,
    },
  },
});
