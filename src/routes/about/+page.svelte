<script lang="ts">
    import { resolve } from "$app/paths";
    import { IconChevronLeft, IconChevronRight, IconExternalLink } from "@tabler/icons-svelte";
    import { execMembers } from "$lib/data/about";

    let boardIdx = $state(0);

    const handleBoardMove = (move: number) => {
        let next = boardIdx + move;
        if (next < 0) next = 0;
        else if (next >= execMembers.length) next = execMembers.length - 1;

        boardIdx = next;
    };

    let activeBoardMember = $derived(execMembers[boardIdx]);
</script>

<div class="grid grid-cols-1 gap-4 md:mr-40 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
    <section class="card">
        <div class="card-body flex flex-col justify-between gap-40">
            <div class="space-y-2">
                <h1 class="text-lg leading-tight">
                    Creating and nurturing a community of like-minded Computer Science enthusiasts
                    at Emory University through
                    <span class="font-semibold text-primary">running a hackathon</span>,
                    <span class="font-semibold text-secondary"
                        >facilitating collaborative project building</span
                    >, and
                    <span class="font-semibold text-accent">organizing other community events</span
                    >.
                </h1>
            </div>
            <div class="flex flex-row-reverse flex-wrap gap-2">
                <a
                    class="btn w-fit btn-outline btn-primary"
                    href="https://thehub.emory.edu/projectemory/home/"
                    target="_blank"
                    rel="noreferrer"
                >
                    visit us on the hub
                    <IconExternalLink size={18} />
                </a>
                <a
                    class="btn w-fit btn-outline btn-secondary"
                    href="https://thehub.emory.edu/projectemory/home/"
                    target="_blank"
                    rel="noreferrer"
                >
                    view our github
                    <IconExternalLink size={18} />
                </a>
            </div>
        </div>
    </section>

    <section class="card">
        <div class="card-body gap-4">
            <div class="space-y-4 text-base">
                <p>
                    We started this club at Emory University because we noticed that there was a
                    lack of school-recognized developer culture and focus on both personal career
                    advancement and community enrichment within the CS program. So, one day in our
                    DSA class taught by
                    <a
                        href="https://www.emorynlp.org/faculty/jinho-choi"
                        target="_blank"
                        class="link text-primary"
                    >
                        Dr. Jinho Choi
                    </a>, we decided to do something about it!
                </p>
                <p>
                    At first, we decided to try and do everything -- running web dev workshops,
                    managing three student-led project teams, and planning for a hackathon -- but we
                    quickly realized this wasn't sustainable. So, over the course of three years, we
                    slowly took time establishing ourselves on campus, and it's paid off.
                </p>
                <p>
                    Since our founding, we've laid the groundwork and demonstrated we are able to
                    accomplish our mission on campus. As of present, we've accomplished the
                    following:
                </p>
                <ol class="list-decimal pl-10">
                    <li>
                        Started Emory Hacks, run it twice, gotten MLH certified, and had over 150
                        attendees,
                    </li>
                    <li>
                        Moved from personal projects to working directly with an Atlanta-based
                        nonprofit, and
                    </li>
                    <li>
                        Hosted multiple career and community events, including a collaboration with
                        AWS!
                    </li>
                </ol>
                <p>
                    And that's not it -- we're continuing our efforts even now! Head to our
                    <a href={resolve("/contact")} class="link text-primary">contact page</a> to see
                    how you can get involved as a student, sponsor us as an
                    individual/organization, or collaborate with us on a project/event!
                </p>
            </div>
        </div>
    </section>

    <section class="card border-base-300 bg-base-100 shadow-sm card-border">
        <div class="card-body gap-6">
            <div class="flex items-start justify-between gap-4">
                <div class="space-y-2">
                    <h2 class="text-emph text-2xl">Meet the board</h2>
                </div>

                <div class="flex gap-2">
                    <button
                        class="btn btn-circle border border-base-300 btn-ghost"
                        class:btn-disabled={boardIdx === 0}
                        aria-label="Previous board member"
                        onclick={() => handleBoardMove(-1)}
                    >
                        <IconChevronLeft />
                    </button>
                    <button
                        class="btn btn-circle border border-base-300 btn-ghost"
                        class:btn-disabled={boardIdx === execMembers.length - 1}
                        aria-label="Next board member"
                        onclick={() => handleBoardMove(1)}
                    >
                        <IconChevronRight />
                    </button>
                </div>
            </div>

            <div class="rounded-box border border-base-300 bg-base-200/40 p-6">
                <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <img
                        class="h-24 w-24 shrink-0 rounded-full object-cover ring-2 ring-base-300"
                        src={activeBoardMember.image}
                        alt={`${activeBoardMember.name} profile`}
                    />
                    <div class="space-y-2">
                        <p class="text-sm tracking-[0.3em] text-base-content/60 uppercase">
                            {activeBoardMember.role}
                        </p>
                        <h3 class="text-xl font-semibold">{activeBoardMember.name}</h3>
                        <p class="leading-7 text-base-content/80">{activeBoardMember.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="card">
        <div class="card-body min-h-64"></div>
    </section>
</div>
