import type { SolutionPageData } from "./types";

// Dynamic loader for all solution data
const solutionLoaders: Record<string, () => Promise<{ default: SolutionPageData }>> = {
  "custom-software-development": () => import("./custom-software-development"),
  "web-development": () => import("./web-development"),
  "mobile-app-development": () => import("./mobile-app-development"),
  "erp-solutions": () => import("./erp-solutions"),
  "crm-solutions": () => import("./crm-solutions"),
  "billing-solutions": () => import("./billing-solutions"),
  "school-management": () => import("./school-management"),
  "digital-marketing": () => import("./digital-marketing"),
  "support-maintenance": () => import("./support-maintenance"),
};

export async function getSolutionPageData(slug: string): Promise<SolutionPageData | null> {
  const loader = solutionLoaders[slug];
  if (!loader) return null;
  try {
    const module = await loader();
    return module.default;
  } catch {
    return null;
  }
}

export const validSlugs = Object.keys(solutionLoaders);
