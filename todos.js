/*global $*/

var todoList = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position - 1].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position - 1, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position - 1];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        
        for (var i = 0; i < totalTodos; i++) {
            
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        if (completedTodos === totalTodos) {
            
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        }
        else {
            
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};

var handlers = {
    displayTodos: function() { 
        if ($('#todos').text().length === 0) {
            todoList.displayTodos();    
        } else {
            $('#todos').text('');
        }
            
    },
    addTodo: function() {
        todoList.addTodo($('#addTodoTextInput').val());
        $('#addTodoTextInput').val("");
    },
    changeTodo: function() {
        todoList.changeTodo($('#changeTodoPositionInput').val(), $('#changeTodoTextInput').val()); 
        $('#changeTodoPositionInput').val("");
        $('#changeTodoTextInput').val("");
    },
    deleteTodo: function() {
        todoList.deleteTodo($('#deleteTodoPositionInput').val()); 
        $('#deleteTodoPositionInput').val("");
    },
    toggleCompleted: function() {
        todoList.toggleCompleted($('#toggleCompletedPositionInput').val());
        $('#toggleCompletedPositionInput').val("");
    },
    toggleAll: function() {
        todoList.toggleAll();
    }
};

var view = {
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log("Todo list empty");
            $('#todos').text("Todo list empty");
        }
        else {
            $('#todos').text("");    
        }
        for (var i = 0; i < this.todos.length; i++){
            var check = "( ) ";
            
            if (this.todos[i].completed === true){
                check = "(x) ";
                console.log('Todo', i, ':', check, this.todos[i].todoText);
                $('#todos').append('<li>' + check + this.todos[i].todoText + '</li>');
            }
            else {
                console.log('Todo', i, ':', check, this.todos[i].todoText);
                $('#todos').append('<li>'+ check + this.todos[i].todoText + '</li>');
            }
        }
        
    },
    createDeleteButton: function() {
        var deleteButton = $('<button>');
        deleteButton.text('Delete');
        deleteButton.attr("class", 'deleteButton');
        return deleteButton;
    }
};