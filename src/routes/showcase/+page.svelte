<script lang="ts">
    import Tile from "$lib/components/Tile.svelte";
</script>

<div class="flex flex-col gap-16">
    <div class="flex flex-row gap-4">
        <div class="text-4xl font-bold uppercase [writing-mode:vertical-rl]">projects</div>
        <div class="carousel gap-4">
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
        </div>
    </div>
    <div class="flex flex-row gap-4">
        <div class="text-4xl font-bold uppercase [writing-mode:vertical-rl]">events</div>
        <div class="carousel gap-4">
            <Tile />
            <Tile />
            <Tile />
        </div>
    </div>
</div>
