import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'
import Nav from '~/components/Nav'
import './app.css'

import { SolidQueryDevtools } from '@tanstack/solid-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <SolidQueryDevtools />
      <Router
        root={(props) => (
          <>
            <Nav />
            <Suspense>{props.children}</Suspense>
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </QueryClientProvider>
  )
}
