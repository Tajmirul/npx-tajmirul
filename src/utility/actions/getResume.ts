import { Resume } from '../../types/resume';
import { localAxios } from '../axios';

let resume: Resume[] = [];

export const getResume = async () => {
    if (resume.length) {
        return resume;
    }

    const res = await localAxios.get('/resume');
    resume = res.data.resumes;
    return resume;
};
