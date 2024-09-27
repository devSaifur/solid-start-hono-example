import { Hono } from 'hono'

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@example.com',
  },
  {
    id: 3,
    name: 'Bob Smith',
    email: 'bob@example.com',
  },
  {
    id: 4,
    name: 'Alice Johnson',
    email: 'alice@example.com',
  },
  {
    id: 5,
    name: 'John Doe',
    email: 'john@example.com',
  },
]

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const usersRoute = new Hono()
  .get('/', async (c) => {
    await sleep(1000)

    return c.json(users)
  })
  .get('/:id', async (c) => {
    await sleep(1000)

    const id = c.req.param('id')
    const user = users.find((u) => u.id === Number(id))
    if (!user) {
      return c.json({ status: 'error', message: 'User not found' })
    }
    return c.json(user)
  })
