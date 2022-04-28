export const schema = gql`
  type Todo {
    id: String!
    description: String!
    isFinished: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    todos: [Todo!]! @requireAuth
    todo(id: String!): Todo @requireAuth
  }

  input CreateTodoInput {
    description: String!
    isFinished: Boolean!
  }

  input UpdateTodoInput {
    description: String
    isFinished: Boolean
  }

  type Mutation {
    createTodo(input: CreateTodoInput!): Todo! @requireAuth
    updateTodo(id: String!, input: UpdateTodoInput!): Todo! @requireAuth
    deleteTodo(id: String!): Todo! @requireAuth
  }
`
