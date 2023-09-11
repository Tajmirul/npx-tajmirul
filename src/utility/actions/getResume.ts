import { resumesDB } from '../../resource/resumes';
import { Resume } from '../../types/resume';
import { localAxios } from '../axios';

let resume: Resume[] = [];

export const getResume = async () => {
    return resumesDB;

    if (resume.length) {
        return resume;
    }

    try {
        const res = await localAxios.get('/resume');
        resume = res.data.resumes;
        return resume;
    } catch (error) {
        console.log('Error fetching resume');
        process.exit(1);
    }
};
