'use strict';

/**
 * formatFileSize
 * Transforms bytes into formatted display string
 * E.g. 1000bytes --> 1KB
 * @param  {Number} bytes
 * @return {String}
 */
export function formatFileSize(bytes) {
    const units = ['B', 'KB', 'MB', 'GB'];
    let unit = 0;

    while (bytes > 1000) {
        bytes /= 1000;
        unit++;

        if (unit === units.length) break;
    }

    return bytes.toFixed(2) + units[unit];
}

/**
 *  FORMAT PHONE NUMBER (XXX) XXX-XXXX
 * @param {string}
 * @return {formattedString}
 */

export function formatPhoneNumber(num) {
    let numbers = num.replace(/\D/g, ''),
        char = { 0: '(', 3: ') ', 6: '-' },
        input = '';
    for (let i = 0; i < numbers.length; i++) {
        input += (char[i] || '') + numbers[i];
    }
    return input;
}

export function formatZipCode(num) {
    let numbers = num.replace(/\D/g, ''),
        input = '';
    for (let i = 0; i < numbers.length; i++) {
        input += numbers[i];
    }
    return input;
}
