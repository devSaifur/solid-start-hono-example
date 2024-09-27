import { hc } from 'hono/client'
import type { APIType } from '~/routes/api/[...routes]'

const client = hc<APIType>('/')

export const api = client.api
