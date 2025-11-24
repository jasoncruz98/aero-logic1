import { describe, expect, it } from 'vitest';
import { createLandingPageViewModel } from '../LandingPageService';

describe('Landing page view model', () => {
    it('Returns work interval for busy times', () => {
        //arrange
        const date = new Date('2024-06-15T09:00:00'); // 9 AM
        //act
        const result = createLandingPageViewModel(date);
        //assert
        expect(result.workInterval).toBe('Busy times')
    });

    it('Returns work interval for easy jets', () => {
        const date = new Date('2024-06-15T12:00:00'); // 12 PM

        const result = createLandingPageViewModel(date);

        expect(result.workInterval).toBe('Easy jets')
    });

    it('Returns work interval for returning pips', () => {
        const date = new Date('2024-06-15T21:00:00'); // 9 PM

        const result = createLandingPageViewModel(date);

        expect(result.workInterval).toBe('Returning pips')
    });

    it('Returns work interval for sleepies', () => {
        const date = new Date('2024-06-15T02:00:00'); // 2 AM

        const result = createLandingPageViewModel(date);

        expect(result.workInterval).toBe('Sleepies')
    });
});