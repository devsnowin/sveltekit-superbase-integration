<script>
    import {addTodo} from "../store/todo.store"
    import {user} from '../store/authStore.js'

    let todo;

    function handleSubmit(){
        addTodo(todo, $user.id)
        todo = ""
    }
    
</script>

<form class="w-full flex justify-between items-center gap-2" on:submit|preventDefault={handleSubmit}>
    <input type="text" class="rounded p-2 w-4/5 text-gray-900 focus:outline outline-offset-2 outline-4 outline-green-400" bind:value={todo} name="todo" placeholder="eg:buy milk">
    <input type="submit" class="bg-green-500 p-2 rounded w-1/5" value="add">
</form>