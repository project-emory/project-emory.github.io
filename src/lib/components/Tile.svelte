<script lang="ts">
    import { goto } from "$app/navigation";

    let {
        id,
        img,
        title,
        link
    }: { id?: string; img: string; title: string; link: string } = $props();
</script>

<button
    {id}
    class="card carousel-item h-80 max-w-full overflow-y-clip border-base-300 card-border hover:cursor-pointer"
    onclick={() => goto(`/showcase/${link}`)}
>
    <figure class="">
        <img src={img} alt={title} />
    </figure>
    <div class="card-body p-1 text-left">
        <div class="text-subtitle card-title">
            {title}
        </div>
    </div>
</button>
