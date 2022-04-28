import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const todos = () => {
  return db.todo.findMany()
}

export const todo = ({ id }: Prisma.TodoWhereUniqueInput) => {
  return db.todo.findUnique({
    where: { id },
  })
}

interface CreateTodoArgs {
  input: Prisma.TodoCreateInput
}

export const createTodo = ({ input }: CreateTodoArgs) => {
  return db.todo.create({
    data: input,
  })
}

interface UpdateTodoArgs extends Prisma.TodoWhereUniqueInput {
  input: Prisma.TodoUpdateInput
}

export const updateTodo = ({ id, input }: UpdateTodoArgs) => {
  return db.todo.update({
    data: input,
    where: { id },
  })
}

export const deleteTodo = ({ id }: Prisma.TodoWhereUniqueInput) => {
  return db.todo.delete({
    where: { id },
  })
}
