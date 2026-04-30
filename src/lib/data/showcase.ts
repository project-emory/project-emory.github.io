import test from "$lib/assets/logo.svg";
import test1 from "$lib/assets/logo-w-text.svg";

export type ShowcaseEntry = {
    slug: string;
    name: string;
    description: string;
    images: string[];
    links?: {
        label: string;
        href: string;
    }[];
};

export const projects: ShowcaseEntry[] = [
    {
        slug: "odyssey",
        name: "Odyssey",
        description:
            "Internal HR Employee management hub for Odyssey Family Counseling.\n\n\
            Worked on over the course of two semesters on a student software team of one project manager and five that handled everything from task creation to implementation.",
        images: [test, test1],
        links: [
            {
                label: "Odyssey Family Counseling",
                href: "https://odysseycounseling.org/"
            },
            {
                label: "GitHub",
                href: "https://github.com/project-emory/Odyssey"
            }
        ]
    }
];

export const events: ShowcaseEntry[] = [
    {
        slug: "emory-hacks-2025",
        name: "Emory Hacks '25",
        description: "Second Annual CS Hackathon hosted by PROJECT Emory.",
        images: [],
        links: []
    },
    {
        slug: "aws-genai-25",
        name: "AWS GenAI Event",
        description: "GenAI innovation event in collaboration with AWS.",
        images: [],
        links: []
    },
    {
        slug: "emory-hacks-2024",
        name: "Emory Hacks '24",
        description: "First Annual CS Hackathon hosted by PROJECT Emory.",
        images: [],
        links: []
    }
];

export const showcaseEntries: ShowcaseEntry[] = [...projects, ...events];

export const showcaseEntriesBySlug = new Map(
    showcaseEntries.map((entry) => [entry.slug, entry] as const)
);
