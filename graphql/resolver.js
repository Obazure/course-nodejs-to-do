const Task = require('../models/task')

module.exports = {
    async getTodos() {
        try {
            const some = await Task.findAll()
            return some
        } catch (e) {
            throw new Error('Fetch todos is not available.')
        }
    },
    async createTodo({todo}) {
        try {
            return await Task.create({
                title: todo.title,
                done: false
            })
        } catch (e) {
            throw new Error('Title is required.')
        }
    },
    async completeTodo({id}) {
        try {
            const todo = await Task.findByPk(id)
            todo.done = true
            await todo.save()
            return todo
        } catch (e) {
            throw new Error('Id is required.')
        }
    },
    async deleteTodo({id}) {
        try {
            const todos = await Task.findAll({
                where: { id }
            })
            await todos[0].destroy()
            return true
        } catch (e) {
            throw new Error('Id is required.')
        }
    }

}