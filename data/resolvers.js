'use strict'

// sample data
const todos = []

const resolvers = {
  Query: {
    // fetch authenticated user todos
    myTodos (_, args, { user }) {
      // make sure user is logged in
      if (!user) {
        throw new Error('You are not authenticated!')
      }

      return todos.filter(todo => todo.userId === user.sub)
    }
  },

  Mutation: {
    // Add new todo
    addTodo (_, { title }, { user }) {
      // make sure user is logged in
      if (!user) {
        throw new Error('You are not authenticated!')
      }

      // add new todo to list of todos
      todos.push({
        userId: user.sub,
        title
      })

      return todos.find(todo => todo.userId === user.sub && todo.title === title)
    }
  }
}

module.exports = resolvers
