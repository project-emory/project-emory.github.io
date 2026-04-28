<script lang="ts">
    import Logo from "./Logo.svelte";
    import { page } from "$app/state";
    import { IconMenu2, IconX } from "@tabler/icons-svelte";

    let isOpen = $state(false);

    const toggleMenu = () => {
        isOpen = !isOpen;
    };

    const closeMenu = () => {
        isOpen = false;
    };
</script>

<div class="navbar relative bg-base-100 px-4 shadow-sm">
    <div class="flex-1">
        <Logo size={36} />
    </div>

    <button
        class="btn btn-square btn-ghost lg:hidden"
        type="button"
        aria-controls="primary-nav"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onclick={toggleMenu}
    >
        {#if isOpen}
            <IconX />
        {:else}
            <IconMenu2 />
        {/if}
    </button>

    <ul
        id="primary-nav"
        class={[
            "menu rounded-box bg-base-100 lg:menu-horizontal",
            "lg:static lg:flex lg:flex-row lg:gap-4 lg:bg-transparent",
            isOpen
                ? "absolute top-full right-4 z-50 mt-2 flex gap-2 border border-base-200 p-2 shadow-lg"
                : "hidden lg:flex"
        ]}
    >
        <li>
            <a
                class="text-emph"
                href="/projects"
                onclick={closeMenu}
                class:menu-active={page.url.pathname.includes("/projects")}>projects</a
            >
        </li>
        <li>
            <a
                class="text-emph"
                href="/about"
                onclick={closeMenu}
                class:menu-active={page.url.pathname.includes("/about")}>what we do</a
            >
        </li>
        <li>
            <a
                class="text-emph"
                href="/contact"
                onclick={closeMenu}
                class:menu-active={page.url.pathname.includes("/contact")}>contact</a
            >
        </li>
    </ul>
</div>
