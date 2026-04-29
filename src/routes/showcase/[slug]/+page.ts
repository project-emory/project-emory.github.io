import { error } from "@sveltejs/kit";
import { showcaseEntriesBySlug } from "$lib/data/showcase";

import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
    const entry = showcaseEntriesBySlug.get(params.slug);

    if (!entry) {
        error(404, "Showcase entry not found");
    }

    return { entry };
};
