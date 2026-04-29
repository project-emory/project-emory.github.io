<script lang="ts">
    import { goto } from "$app/navigation";
    import type { ShowcaseEntry } from "$lib/data/showcase";
    import {
        IconChevronLeft,
        IconChevronRight,
        IconExternalLink,
        IconInfoCircle,
        IconX
    } from "@tabler/icons-svelte";

    let { entry }: { entry: ShowcaseEntry } = $props();
    let img = $state(0);
    let open = $state(false);

    const closeModal = () => {
        open = false;
    };

    const handleCarouselClick = (move: number) => {
        let r = img + move;
        if (r < 0) r === 0;
        else if (r >= entry.images.length) r === entry.images.length - 1;
        img = r;
        goto(`#img-${img}`);
    };

    const handleWindowKeydown = (event: KeyboardEvent) => {
        if (open && event.key === "Escape") {
            closeModal();
        }
    };
</script>

<svelte:window onkeydown={handleWindowKeydown} />

<div class="flex h-[85vh] items-center justify-center">
    <div class="flex h-fit max-h-4/5 w-full flex-col items-center gap-4" data-slug={entry.slug}>
        {#if entry.images.length > 0}
            <div class="carousel w-full carousel-center gap-4">
                {#each entry.images as image, idx (`${entry.slug}-${idx}`)}
                    <img
                        id={`img-${idx}`}
                        src={image}
                        alt={`${entry.name} image ${idx}`}
                        class="carousel-item max-h-4/5 flex-none first:ml-[50%] last:mr-[50%]"
                    />
                {/each}
            </div>
            <div class="flex flex-row items-center justify-center gap-4">
                <button
                    class="btn btn-circle border-base-300 btn-ghost"
                    class:btn-disabled={img === 0}
                    aria-label="Previous picture"
                    onclick={() => handleCarouselClick(-1)}
                >
                    <IconChevronLeft />
                </button>
                <div class="text-emph">
                    {img + 1} / {entry.images.length}
                </div>
                <button
                    class="btn btn-circle border-base-300 btn-ghost"
                    class:btn-disabled={img === entry.images.length - 1}
                    aria-label="Next picture"
                    onclick={() => handleCarouselClick(1)}
                >
                    <IconChevronRight />
                </button>
            </div>
        {/if}

        <button
            class="text-emph btn w-fit rounded-full border-base-300 btn-ghost"
            onclick={() => (open = true)}
        >
            <IconInfoCircle />
            Learn More
        </button>
        <dialog class="modal modal-bottom md:modal-middle" class:modal-open={open}>
            <div class="modal-box w-full md:max-w-2xl">
                <button
                    class="btn absolute top-2 right-2 btn-circle btn-ghost btn-sm"
                    onclick={closeModal}
                >
                    <IconX />
                </button>
                <div class="flex flex-col gap-4">
                    <h2 class="text-title capitalize">{entry.name}</h2>
                    <p class="whitespace-pre-line">{entry.description}</p>
                    <div class="divider m-0"></div>
                    {#if entry.links && entry.links.length > 0}
                        <div class="flex flex-col gap-2">
                            <div class="flex flex-wrap gap-2">
                                {#each entry.links as link (link.href)}
                                    <a
                                        class="btn border-base-300 btn-ghost btn-sm"
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {link.label}
                                        <IconExternalLink size={16} />
                                    </a>
                                {/each}
                            </div>
                        </div>
                    {/if}
                </div>
            </div>
            <button class="modal-backdrop" aria-label="Close dialog" onclick={closeModal}></button>
        </dialog>
    </div>
</div>
