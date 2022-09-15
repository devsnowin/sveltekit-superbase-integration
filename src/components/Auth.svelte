<script>
	import { superbase } from '../superbase.js';

    let loading = false;
	let email;
	let message = '';

	async function handleLogin() {
		try {
            loading = true
			console.log(email);
			const { error } = await superbase.auth.signIn({ email });

			if (error) throw error;
			message = "Check your mail for login link!";
		} catch (error) {
            console.error(error);
			message = error.error_description || error.message;
		} finally{
            loading = false
        }
	}
</script>

<svelte:head>
	<title>Super Todo | Login</title>
</svelte:head>

<form
	on:submit|preventDefault={handleLogin}
	class="text-center w-full h-screen flex flex-col justify-center items-start gap-4"
>
	<h1 class="text-4xl font-black">Login</h1>
	<p>Sign in via magic links with your email ID</p>
	<p class="text-green-300">{message}</p>
	<input
		type="email"
		bind:value={email}
		placeholder="Email Id"
		class="rounded p-2 w-4/5 text-gray-900 focus:outline outline-offset-2 outline-4 outline-green-400"
	/>
    {#if loading}
        <p>Loging in.......</p>
    {/if}
	<input type="submit" class="bg-green-500 p-2 rounded w-1/5" value="Login" />
</form>
