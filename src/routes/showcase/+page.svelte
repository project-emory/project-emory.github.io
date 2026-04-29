<script lang="ts">
    import logo from "$lib/assets/logo.svg";
    import Tile from "$lib/components/Tile.svelte";
    import { events, projects } from "$lib/data/showcase";
</script>

<!--
note to future maintainers: padding on carousel can cause pixel offsets if one
carousel is full and the other is not, but shadow will not show since overflow
is hidden
-->

<div class="flex flex-col gap-4">
    <div class="flex flex-row gap-4">
        <div class="text-title [writing-mode:vertical-rl]">projects</div>
        <div class="carousel w-full carousel-start gap-4">
            {#each projects as project (project.slug)}
                <Tile
                    img={project.images.length > 0 ? project.images[0] : logo}
                    title={project.name}
                    link={project.slug}
                />
            {/each}
        </div>
    </div>
    <div class="flex flex-row gap-4">
        <div class="text-title [writing-mode:vertical-rl]">events</div>
        <div class="carousel w-full carousel-start gap-4">
            {#each events as event (event.slug)}
                <Tile
                    img={event.images.length > 0 ? event.images[0] : logo}
                    title={event.name}
                    link={event.slug}
                />
            {/each}
        </div>
    </div>
</div>
