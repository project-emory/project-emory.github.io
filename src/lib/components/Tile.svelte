<script lang="ts">
    import { goto } from "$app/navigation";

    let { img, title, link }: { img: string; title: string; link: string } = $props();
</script>

<button
    class="card carousel-item card-side h-80 max-w-full border-base-300 card-border hover:cursor-pointer"
    onclick={() => goto(`/showcase/${link}`)}
>
    <figure class="">
        <img src={img} alt={title} />
    </figure>
    <div class="card-body p-1 text-left">
        <div class="text-subtitle card-title [writing-mode:vertical-rl]">
            {title}
        </div>
    </div>
</button>
