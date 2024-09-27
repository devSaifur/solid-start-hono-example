import { Hono } from 'hono'
import type { APIEvent } from '@solidjs/start/server'
import { usersRoute } from '~/server/routes/users'

const app = new Hono().basePath('/api').route('/users', usersRoute)

const handler = (evt: APIEvent) => app.fetch(evt.request)

export const GET = handler
export const POST = handler
export const PUT = handler
export const DELETE = handler

export type APIType = typeof app
