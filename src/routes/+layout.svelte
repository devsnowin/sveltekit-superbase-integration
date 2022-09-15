<script>
	import Auth from '../components/Auth.svelte';
	import { user } from '../store/authStore.js';
	import '../global.css';
	import { superbase } from '../superbase';
	import { loadData } from '../store/todo.store';
	import { onMount } from 'svelte';
	import Navbar from '../components/Navbar.svelte';

	onMount(() => {
		console.log(superbase.auth.user());
		user.set(superbase.auth.user());

		superbase.auth.onAuthStateChange((_, session) => {
			user.set(session?.user);
		});
	});
</script>

<div class="container mx-auto max-w-lg my-8">
	{#if $user}
		<Navbar />
		<slot />
	{:else}
		<Auth />
	{/if}
</div>
