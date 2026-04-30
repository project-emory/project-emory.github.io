<script>
    import {
        IconBrandGithubFilled,
        IconBrandInstagramFilled,
        IconBrandLinkedinFilled,
        IconExternalLink,
        IconMailFilled
    } from "@tabler/icons-svelte";
</script>

<div class="grid grid-cols-1 gap-4 md:mr-40 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
    <section class="card">
        <div class="card-body flex flex-col justify-between gap-40">
            <h1 class="text-title">contact us</h1>
            <div class="flex flex-col items-end gap-4">
                <a
                    href="https://www.instagram.com/project_emory_/"
                    class="text-emph flex flex-row items-center justify-center gap-4"
                    target="_blank"
                >
                    Keep up with updates:
                    <IconBrandInstagramFilled size={32} />
                </a>
                <a
                    href="https://www.linkedin.com/company/project-emory/"
                    class="text-emph flex flex-row items-center justify-center gap-4"
                    target="_blank"
                >
                    Updates, but less hip:
                    <IconBrandLinkedinFilled size={32} />
                </a>
                <a
                    href="https://github.com/project-emory"
                    class="text-emph flex flex-row items-center justify-center gap-4"
                    target="_blank"
                >
                    Our software:
                    <IconBrandGithubFilled size={32} />
                </a>
                <a
                    href="mailto:contactprojectemory@gmail.com"
                    class="text-emph flex flex-row items-center justify-center gap-4"
                    target="_blank"
                >
                    Sponsor/collaborate with us:
                    <IconMailFilled size={32} />
                </a>
                <a
                    href="https://thehub.emory.edu/PROJECTEmory/club_signup"
                    class="text-emph flex flex-row items-center justify-center gap-4"
                    target="_blank"
                >
                    Join us as a student:
                    <IconExternalLink size={32} />
                </a>
            </div>
        </div>
    </section>

    <!-- if needed for the future -->

    <!-- <section class="card">
        <div class="card-body gap-4"></div>
    </section>

    <section class="card">
        <div class="card-body gap-6"></div>
    </section>

    <section class="card">
        <div class="card-body min-h-64"></div>
    </section> -->
</div>
