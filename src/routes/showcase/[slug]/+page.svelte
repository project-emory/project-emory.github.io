<script lang="ts">
    import ShowcaseDetail from "$lib/components/ShowcaseDetail.svelte";

    let { data } = $props();
</script>

<ShowcaseDetail entry={data.entry} />
