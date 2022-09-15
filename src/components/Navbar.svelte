<script>
	import { todos } from '../store/todo.store.js';
    import {superbase} from '../superbase.js'

    function logoutUser(){
        superbase.auth.signOut()
        todos.set({})
    }
</script>

<header class="flex justify-between items-center my-12">
	<h1 class="text-4xl font-black">Todos</h1>
    <button class="bg-green-500 p-2 rounded w-1/5" on:click={logoutUser}>Logout</button>
</header>
