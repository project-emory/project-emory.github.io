export type ShowcaseEntry = {
    slug: string;
    name: string;
    description: string;
    images: string[];
};

export const projects: ShowcaseEntry[] = [
    {
        slug: "odyssey",
        name: "Odyssey",
        description: "Internal HR Employee management hub for Odyssey Family Counseling.",
        images: []
    }
];

export const events: ShowcaseEntry[] = [
    {
        slug: "emory-hacks-2025",
        name: "Emory Hacks '25",
        description: "Second Annual CS Hackathon hosted by PROJECT Emory.",
        images: []
    },
    {
        slug: "aws-genai-25",
        name: "AWS GenAI Event",
        description: "GenAI innovation event in collaboration with AWS.",
        images: []
    },
    {
        slug: "emory-hacks-2024",
        name: "Emory Hacks '24",
        description: "First Annual CS Hackathon hosted by PROJECT Emory.",
        images: []
    }
];

export const showcaseEntries: ShowcaseEntry[] = [...projects, ...events];

export const showcaseEntriesBySlug = new Map(
    showcaseEntries.map((entry) => [entry.slug, entry] as const)
);
