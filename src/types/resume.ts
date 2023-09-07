export interface Resume {
    _id: string;
    category: "work" | "education";
    organization: string;
    title: string;
    description: string;
    duration: {
        startedAt: string;
        endAt?: string;
    };
}
