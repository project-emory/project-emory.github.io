<script lang="ts">
    import FooterContent from "./FooterContent.svelte";
</script>

<div class="toast toast-start toast-bottom">
    <div class="hidden flex-row items-center gap-2 md:flex">
        <div class="flex flex-row items-center gap-2 overflow-hidden">
            <FooterContent />
        </div>
    </div>

    <div class="marquee overflow-hidden md:hidden">
        <div class="flex flex-row items-center gap-4">
            <div class="marquee-item flex flex-none flex-row items-center gap-2 overflow-hidden">
                <FooterContent />
            </div>

            <div class="marquee-item flex flex-none flex-row items-center gap-2">
                <FooterContent />
            </div>

            <div class="marquee-item flex flex-none flex-row items-center gap-2">
                <FooterContent />
            </div>
        </div>
    </div>
</div>

<style lang="css">
    @keyframes marquee-content {
        from {
            transform: translateX(0%);
        }
        to {
            /* this works lol */
            transform: translateX(-104%);
        }
    }

    .marquee-item {
        animation: marquee-content 4s linear infinite;
    }

    .marquee:hover .marquee-item {
        animation-play-state: paused;
    }
</style>
