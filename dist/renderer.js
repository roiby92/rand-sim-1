const Renderer = function (todos) {

    const createTodo = function (todo) {
        return `
        <div data-id=${todo.id}
         class="todo ${todo.complete ? 'complete' : ''}">
            <i class="fas fa-check-circle"></i>
            <span class=text>${todo.text}</span>
            <span class="delete">
            <i class="fas fa-trash"></i>
            </span>
        </div>
        `
    }


    const render = function (todos) {
        $("#todos").empty()
        todos.forEach(todo => {
            $("#todos").append(createTodo(todo))
        })
    }

    return { render }
}
