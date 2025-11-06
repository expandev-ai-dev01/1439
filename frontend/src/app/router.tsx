import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import { RootLayout } from '@/pages/layouts/RootLayout';

const HomePage = lazy(() => import('@/pages/Home'));
const GamePage = lazy(() => import('@/pages/Game'));

/**
 * @router AppRouter
 * @summary Main application routing configuration with lazy loading
 * @type router-configuration
 * @category navigation
 *
 * @features
 * - Lazy loading of pages for optimization
 * - Hierarchical layouts for consistent structure
 * - Loading states for better UX
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'game',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <GamePage />
          </Suspense>
        ),
      },
    ],
  },
]);

/**
 * @component AppRouter
 * @summary Router provider component that wraps the entire application
 * with routing capabilities.
 */
export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
