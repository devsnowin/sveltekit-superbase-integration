<script>
	import { onMount } from 'svelte';
	import Todo from '../components/Todo.svelte';
	import TodoForm from '../components/TodoForm.svelte';
	import { loadData, todos } from '../store/todo.store';

	onMount(() => {
		loadData();
	})

</script>

<svelte:head>
	<title>Super Todo | Home</title>
</svelte:head>

<main class="flex flex-col items-center justify-between gap-8">
	<TodoForm />
	<div class="w-full flex flex-col items-center gap-4">
		{#each $todos as todo (todo.id)}
			<Todo {todo} index={todo.id} />
		{/each}
	</div>
</main>
