import chalk from 'chalk';
import { GeneralData } from '../../types/generalData';
import { localAxios } from '../axios';
import { generalDataDB } from '../../resource/generalData';

let generalData: GeneralData;

export const getGeneralData = async (): Promise<GeneralData> => {
    return new Promise((resolve, reject) => {
        resolve(generalDataDB);
    });

    if (generalData) {
        return generalData;
    }

    try {
        const res = await localAxios.get('/general-data');
        generalData = res.data.generalData[0];
        return generalData;
    } catch (error) {
        console.log('Error fetching general data');
        process.exit(1);
    }
};

export const showContacts = async () => {
    const generalData = await getGeneralData();

    const contacts = generalData.contact;

    const contactText = [
        ``,
        `Email: ${chalk.bold(contacts.email)}`,
        `Phone: ${contacts.phone}`,
        ``,
        `Social Media:`,
        ...contacts.socialMedia.map((socialMedia) => {
            return `-  ${socialMedia.name}: ${socialMedia.link}`;
        }),
        ``,
    ].join('\n');

    console.log(contactText);
};
