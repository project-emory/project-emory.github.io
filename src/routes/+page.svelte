<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import Test from "$lib/sections/Test.svelte";

    // maybe eventually it's better to loop through a list to instantiate components, but this
    // works for now.
</script>

<!-- Home page -->
<Navbar />
<Test />

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style>
</style>
