<script lang="ts">
    import type { ShowcaseEntry } from "$lib/data/showcase";

    let { entry }: { entry: ShowcaseEntry } = $props();
</script>

<!-- add photos, scroll, description, back button -->

<div class="min-h-96" data-slug={entry.slug}>
    {entry.description}
</div>
