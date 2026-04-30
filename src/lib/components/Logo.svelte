<script lang="ts">
    import logo from "$lib/assets/logo.svg";

    let { size }: { size: number } = $props();
</script>

<img src={logo} alt="PROJECT Emory Logo" width={size} class="aspect-square" />
