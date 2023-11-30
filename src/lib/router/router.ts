import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      lazy: () => import('~/routes/Game/Game'),
    },
  ],
  { future: { v7_normalizeFormMethod: true, v7_fetcherPersist: true } },
)
