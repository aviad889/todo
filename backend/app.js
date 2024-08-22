import express from 'express'
import asyncHandler from 'express-async-handler'

const app = express()

const todos = [
    {
        _id: 1,
        title:"Do something 1",
        descreption: "bkbbkabkakbakbabkak"
    },
    {
        _id: 2,
        title:"Do something 2",
        descreption: "bkbbkabkakbakbabkak"
    },
    {
        _id: 3,
        title:"Do something 3",
        descreption: "bkbbkabkakbakbabkak"
    },
    {
        _id: 4,
        title:"Do something 4",
        descreption: "bkbbkabkakbakbabkak"
    },
    {
        _id: 5,
        title:"Do something 5",
        descreption: "bkbbkabkakbakbabkak"
    }
]
const users = [
    {
        _id: 1,
        name: "kobi",
        email: "kobi@sat.com"
    },
    {
        _id: 2,
        name: "kobi2",
        email: "kobi@sat.com"
    },
    {
        _id: 3,
        name: "kobi",
        email: "kobi@sat.com"
    },
    {
        _id: 4,
        name: "kobi",
        email: "kobi@sat.com"
    },
    {
        _id: 5,
        name: "kobi",
        email: "kobi@sat.com"
    }
]

app.get('/api/todos', asyncHandler(async(req, res, next)=>{
    res.send(todos)
}))
app.get('/api/todos/:todoId', asyncHandler(async(req, res, next)=>{
    const {todoId} = req.params
    res.send(todos.find(todo=> todo._id == todoId))
}))
app.get('/api/users', asyncHandler(async(req, res, next)=>{
    res.send(users)
}))
app.get('/api/users/:userId', asyncHandler(async(req, res, next)=>{
    const {userId} = req.params
    res.send(users.find(user=> user._id == userId))
}))


export default app