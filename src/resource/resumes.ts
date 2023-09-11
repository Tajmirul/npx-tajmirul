import { Resume } from '../types/resume';

export const resumesDB: Resume[] = [
    {
        _id: '63e5ebee043e326172d95b53',
        category: 'work',
        organization: 'AnchorBlock Technology',
        title: 'Junior Frontend Engineer',
        description:
            'AnchorBlock is a US-based quantitative investment manager with offices in Miami, Dubai, and Dhaka. My task is to develop their front end with React and Next and connect with their APIs.',
        duration: {
            startedAt: '2022-10-01T00:00:00.000Z',
        },
    },
    {
        _id: '63e5ec0f043e326172d95b57',
        category: 'work',
        organization: 'Branex IT',
        title: 'Frontend Developer',
        description:
            'Joined as a frontend developer at Branex. I am building some excellent products (including govt projects) for our clients. The hard skills I used during working in this company were HTML, CSS & SCSS, Bootstrap & Tailwind CSS, JS & jQuery, and so on.',
        duration: {
            startedAt: '2022-01-01T00:00:00.000Z',
            endAt: '2022-10-01T00:00:00.000Z',
        },
    },
    {
        _id: '63e1448b1adef727bf7b6718',
        category: 'education',
        description:
            'I got admitted to B.Sc. in CSE to make my dreams come true. But luck is not always on your side. I dropped out after completing 22 credits. I plan to start the course again after one or two years.',
        duration: {
            startedAt: '2022-02-01T00:00:00.000Z',
        },

        organization: 'Green University of Bangladesh',
        title: 'BSc. in CSE',
    },
    {
        _id: '60bb53df2da1701c48b335fe',
        category: 'education',
        description:
            'I have been studying in this college since 2019, and I have found some new ways of thinking throughout HSC. I loved programming. My aim is changed again. So, I set my goal to be a programmer.',
        duration: {
            startedAt: '2018-06-01T00:00:00.000Z',
            endAt: '2020-12-01T00:00:00.000Z',
        },

        organization: 'Govt. Shahid Asad College',
        title: 'HSC',
    },
];
