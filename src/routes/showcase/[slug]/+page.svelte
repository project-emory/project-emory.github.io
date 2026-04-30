<script lang="ts">
    import { resolve } from "$app/paths";
    import ShowcaseDetail from "$lib/components/ShowcaseDetail.svelte";
    import { IconChevronLeft } from "@tabler/icons-svelte";

    let { data } = $props();
</script>

<div class="flex flex-col gap-4">
    <a
        class="btn btn-circle border-base-300 btn-ghost"
        href={resolve("/showcase")}
        aria-label="Back to showcase"
    >
        <IconChevronLeft />
    </a>

    <ShowcaseDetail entry={data.entry} />
</div>
