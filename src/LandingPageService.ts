export function createLandingPageViewModel(date: Date) {

    const currentHour = date.getHours();
    if (currentHour >= 11 && currentHour <= 17) {
        return {
            workInterval: 'Easy jets',
        }
    }

    if (currentHour >= 17 && currentHour <= 23) {
        return {
            workInterval: 'Returning pips',
        }
    }

    if (currentHour == 23 || currentHour <= 5) {
        return {
            workInterval: 'Sleepies',
        }
    }

    return {
        workInterval: 'Busy times',
    }
}