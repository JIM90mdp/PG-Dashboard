import { DateTime } from 'luxon';

export function timeParser(value) {
    // Convert a date string into a time with HH:MM format
    console.log('value: ', value);
    const dt = new DateTime(value);
    console.log('time: ', dt.toLocaleString(DateTime.TIME_24_SIMPLE));
    return value;
}

export function timeFormatter(value) {
    // Convert a date string into a time with HH:MM format
    if (value === null) return '';

    console.log('timeFormatter value: ', value);
    const dt = new DateTime(value);
    const time = dt.toLocaleString(DateTime.TIME_24_SIMPLE);
    console.log('time: ', time);
    return time;
}