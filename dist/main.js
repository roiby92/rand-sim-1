// BAD PRACTICE - not proper MVC. Should be separated to files.
const render = Renderer()

const add = function () {
    $.ajax({
        method: "POST",
        data: { text: $("#todo-input").val() },
        url: '/todo',
        success: function (data) {
            render.render(data)
            $("#todo-input").val("")
        }
    })
}

$("#todos").on("click", ".fa-check-circle", function () {
    const id = $(this).closest(".todo").data().id
    console.log(id);
    $.ajax({
        method: "PUT",
        url: `/todo/${id}`,
        success: todos => render.render(todos)
    })
})

$("#todos").on("click", ".fa-trash", function () {
    const id = $(this).closest(".todo").data().id
    console.log(id);
    $.ajax({
        method: "DELETE",
        url: "/todo/" + id,
        success: todos => render.render(todos)
    })
})

$.get('/todos', todos => render.render(todos))