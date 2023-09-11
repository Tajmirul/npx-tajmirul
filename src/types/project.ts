export interface Pagination {
    hasPrev: boolean;
    hasNext: boolean;
}

export interface Project {
    liveUrl?: string;
    sourceCode?: string;
    technologies: string[];
    _id: string;
    features?: string[];
    slug: string;
    title: string;
    image: string;
    shortDescription: string;
    description: string;
    updatedAt: string;
    createdAt: string;
}
