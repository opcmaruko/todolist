var app = new Vue({
    el: '#app',
    data: {
        todos: JSON.parse(localStorage.getItem('todos')) || [],
        newTodo: ''
    },
    methods: {
        addTodo: function(todo) {
            this.todos.push({ content: todo, completed: false, target: true })
            localStorage.setItem('todos', JSON.stringify(this.todos))

        },
        removeTodo: function(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
            localStorage.setItem('todos', JSON.stringify(this.todos))

        },
        allremoveTodo: function(todo) {
            this.todos.splice(this.todos);
            localStorage.setItem('todos', JSON.stringify(this.todos))

        },

        allfalseTodo: function() {
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].target = !this.todos[i].completed;
                localStorage.setItem('todos', JSON.stringify(this.todos))
            }

        },
        alltrueTodo: function() {
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].target = this.todos[i].completed;
                localStorage.setItem('todos', JSON.stringify(this.todos))
            }


        },
        allTodo: function() {
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].target = true;
                localStorage.setItem('todos', JSON.stringify(this.todos))
            }
        },
        alltrue: function() {
            for (var i = 0; i < this.todos.length; i++) {
                //                 this.todos[i].target = true;
                if (this.todos[i].completed === false) {
                    this.todos[i].completed = true;
                    localStorage.setItem('todos', JSON.stringify(this.todos));

                } else {
                    if (this.todos[i].completed === true) {

                        for (var i = 0; i < this.todos.length; i++) {
                            this.todos[i].completed = false;
                            localStorage.setItem('todos', JSON.stringify(this.todos));
                        }
                    }
                }
            }
        }
    }
})