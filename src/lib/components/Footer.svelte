<script lang="ts">
    import { IconBrandSvelte, IconBrandTailwind, IconPoint } from "@tabler/icons-svelte";
    import daisyui from "$lib/assets/daisyui.svg";
</script>

<div class="toast toast-start toast-bottom flex flex-row items-center">
    <div class="text-emph">building @ emory since 2023</div>
    <IconPoint size={16} />
    <div class="text-emph flex flex-row items-center gap-2">
        with
        <a href="https://svelte.dev/" target="_blank">
            <IconBrandSvelte size={20} />
        </a>
        &
        <a class="px-0.5" href="https://daisyui.com/" target="_blank">
            <img src={daisyui} alt="DaisyUI logo" width={20} class="aspect-square" />
        </a>
    </div>
</div>
