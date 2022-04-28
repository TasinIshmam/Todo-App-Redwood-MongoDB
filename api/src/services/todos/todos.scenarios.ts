import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TodoCreateArgs>({
  todo: {
    one: { data: { description: 'String', updatedAt: '2022-04-28T12:22:15Z' } },
    two: { data: { description: 'String', updatedAt: '2022-04-28T12:22:15Z' } },
  },
})

export type StandardScenario = typeof standard
