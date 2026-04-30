<script lang="ts">
    import { goto } from "$app/navigation";
    import logo from "$lib/assets/logo.svg";
    import Tile from "$lib/components/Tile.svelte";
    import { events, projects } from "$lib/data/showcase";
    import { IconChevronLeft, IconChevronRight } from "@tabler/icons-svelte";

    let projectIdx = $state(0);
    let eventIdx = $state(0);

    const handleCarouselClick = (
        group: "projects" | "events",
        move: number,
        length: number,
        current: number
    ) => {
        let next = current + move;
        if (next < 0) next = 0;
        else if (next >= length) next = length - 1;

        if (group === "projects") projectIdx = next;
        else eventIdx = next;

        goto(`#${group}-${next}`);
    };
</script>

<!--
note to future maintainers: padding on carousel can cause pixel offsets if one
carousel is full and the other is not, but shadow will not show since overflow
is hidden
-->

<div class="flex flex-col gap-16">
    <div class="flex flex-row gap-4">
        <div class="flex flex-col items-center gap-2">
            <div class="text-title pb-2 [writing-mode:vertical-rl]">projects</div>
            <button
                class="btn btn-circle border-base-300 btn-ghost"
                class:btn-disabled={projectIdx === 0}
                aria-label="Previous project"
                onclick={() => handleCarouselClick("projects", -1, projects.length, projectIdx)}
            >
                <IconChevronLeft />
            </button>
            <button
                class="btn btn-circle border-base-300 btn-ghost"
                class:btn-disabled={projectIdx === projects.length - 1}
                aria-label="Next project"
                onclick={() => handleCarouselClick("projects", 1, projects.length, projectIdx)}
            >
                <IconChevronRight />
            </button>
        </div>
        <div class="carousel w-full carousel-start gap-4">
            {#each projects as project, idx (project.slug)}
                <Tile
                    id={`projects-${idx}`}
                    img={project.images.length > 0 ? project.images[0] : logo}
                    title={project.name}
                    link={project.slug}
                />
            {/each}
        </div>
    </div>
    <div class="flex flex-row gap-4">
        <div class="flex flex-col items-center gap-2">
            <div class="text-title pb-2 [writing-mode:vertical-rl]">events</div>
            <button
                class="btn btn-circle border-base-300 btn-ghost"
                class:btn-disabled={eventIdx === 0}
                aria-label="Previous event"
                onclick={() => handleCarouselClick("events", -1, events.length, eventIdx)}
            >
                <IconChevronLeft />
            </button>
            <button
                class="btn btn-circle border-base-300 btn-ghost"
                class:btn-disabled={eventIdx === events.length - 1}
                aria-label="Next event"
                onclick={() => handleCarouselClick("events", 1, events.length, eventIdx)}
            >
                <IconChevronRight />
            </button>
        </div>
        <div class="carousel w-full carousel-start gap-4">
            {#each events as event, idx (event.slug)}
                <Tile
                    id={`events-${idx}`}
                    img={event.images.length > 0 ? event.images[0] : logo}
                    title={event.name}
                    link={event.slug}
                />
            {/each}
        </div>
    </div>
</div>
