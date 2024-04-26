import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.post(`/todos/:todoString`, async (req, res) => {
  const todoString: string = req.params.todoString;
  const todo = await prisma.toDo.create({
    data:{
      todo: todoString
    }
  })
  res.json(todo)
})

app.get(`/todos`, async (req, res) => {
  const todo = await prisma.toDo.findMany()
  res.json(todo)
})

app.delete(`/todos/:todoString`, async (req, res) => {
  const todoString: string = req.params.todoString;
  console.log(todoString)
  const todo = await prisma.toDo.deleteMany({
    where: {
      todo: todoString
    },
  })
  console.log(todo)
  res.json(todo)
})

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000`),
)
