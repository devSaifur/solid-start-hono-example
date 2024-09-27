import { createQuery } from '@tanstack/solid-query'
import { api } from '~/lib/api'
import { Loader2 } from 'lucide-solid'
import { Switch, Match } from 'solid-js'

export default function Users() {
  const query = createQuery(() => ({
    queryKey: ['users'],
    queryFn: () => api.users.$get().then((res) => res.json()),
  }))

  return (
    <div class='flex flex-col items-center justify-center'>
      <Switch>
        <Match when={query.isPending}>
          <div class='flex justify-center items-center'>
            <Loader2 class='size-10 animate-spin' />
          </div>
        </Match>
        <Match when={query.isError}>Error: {query.error?.message}</Match>
        <Match when={query.isSuccess}>
          <div>
            <pre>{JSON.stringify(query.data, null, 2)}</pre>
          </div>
        </Match>
      </Switch>
    </div>
  )
}
