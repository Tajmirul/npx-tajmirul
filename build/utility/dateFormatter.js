"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFormatter = void 0;
const dateFormatter = (date) => {
    let d;
    if (!date) {
        d = new Date();
    }
    else {
        d = new Date(date);
    }
    return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
    });
};
exports.dateFormatter = dateFormatter;
