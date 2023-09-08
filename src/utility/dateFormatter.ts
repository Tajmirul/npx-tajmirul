export const dateFormatter = (date?: string | Date | number) => {
    let d: Date;

    if (!date) {
        d = new Date();
    } else {
        d = new Date(date);
    }

    return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
    });
};
