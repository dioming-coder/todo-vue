import {defineStore} from "pinia";

export const useTodoStore = defineStore('todo',{
    state: () => ({
        todos: JSON.parse(localStorage.getItem('todos'))||[
            {id:1,title:'学习Vue',done:false}
            ,{id:2,title:'学习pinia',done:true}
        ],
        token: localStorage.getItem('token')||''
    }),
    getters:{
        total(){
            return this.todos.length;
        },
        doneTotal(){
            return this.todos.filter(todo=>todo.done).length;
        },
    },
    actions:{
        addTodo(todoObj){
            this.todos.unshift(todoObj)
            this.savaTodos()
        },
        deleteTodo(id){
            this.todos = this.todos.filter(todo=>todo.id!==id)
            this.savaTodos()
        },
        toggleTodo(id){
            const todo = this.todos.find(todo=>todo.id===id)
            if (todo){
                todo.done = !todo.done
                this.savaTodos()
            }
        },
        savaTodos(){
            localStorage.setItem('todos',JSON.stringify(this.todos))
        }
    }
})