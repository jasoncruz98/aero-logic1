import { getRandomRiddle, RiddlesCollection } from './domain/riddles/RiddleService';

function getTimestamp(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}${minutes}`;
}

export function createLandingPageViewModel(date: Date, collection: RiddlesCollection) {
    const timestamp = getTimestamp(date);
    const randomRiddle = getRandomRiddle(collection);

    const currentHour = date.getHours();
    if (currentHour >= 11 && currentHour <= 17) {
        return {
            workInterval: 'Easy jets',
            timestamp,
            randomRiddle,
        };
    }

    if (currentHour >= 17 && currentHour <= 23) {
        return {
            workInterval: 'Returning pips',
            timestamp,
            randomRiddle,
        };
    }

    if (currentHour == 23 || currentHour <= 5) {
        return {
            workInterval: 'Sleepies',
            timestamp,
            randomRiddle,
        };
    }

    return {
        workInterval: 'Busy times',
        timestamp,
        randomRiddle,
    };
}
