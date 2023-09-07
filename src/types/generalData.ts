export interface Banner {
    header: string;
    description: string;
    image: string;
}

export interface SocialMedia {
    _id: string;
    name: string;
    link: string;
}

export interface Contact {
    phone: string;
    email: string;
    socialMedia: SocialMedia[];
}

export interface Skill {
    _id: string;
    skills: string[];
    skillTitle: string;
}

export interface GeneralData {
    banner: Banner;
    contact: Contact;
    _id: string;
    resume: string;
    skill: Skill[];
}
