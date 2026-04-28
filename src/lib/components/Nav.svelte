<script lang="ts">
    import Logo from "./Logo.svelte";
    import { page } from "$app/state";
</script>

<div class="navbar bg-base-100 px-4 shadow-sm">
    <div class="flex-1">
        <Logo size={36} />
    </div>
    <ul class="menu gap-4 rounded-box bg-base-100 lg:menu-horizontal">
        <li>
            <a
                class="text-emph"
                href="/projects"
                class:menu-active={page.url.pathname.includes("/projects")}>projects</a
            >
        </li>
        <li>
            <a
                class="text-emph"
                href="/about"
                class:menu-active={page.url.pathname.includes("/about")}>what we do</a
            >
        </li>
        <li>
            <a
                class="text-emph"
                href="/contact"
                class:menu-active={page.url.pathname.includes("/contact")}>contact</a
            >
        </li>
    </ul>
</div>
