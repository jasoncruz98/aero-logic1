import { describe, expect, it } from 'vitest';
import { createLandingPageViewModel } from '../LandingPageService';
import { RiddlesCollection } from '../domain/riddles/RiddleService';

describe('Landing page view model', () => {
    it('Returns work interval for busy times', () => {
        //arrange
        const date = new Date('2024-11-30T10:44:00');
        const collection: RiddlesCollection = [];
        //act
        const result = createLandingPageViewModel(date, collection);
        //assert
        expect(result.workInterval).toBe('Busy times');
        expect(result.timestamp).toBe('2024-11-30 1044');
    });

    it('Returns work interval for easy jets', () => {
        const date = new Date('2024-06-09T11:08:00');
        const collection: RiddlesCollection = [];

        const result = createLandingPageViewModel(date, collection);

        expect(result.workInterval).toBe('Easy jets');
        expect(result.timestamp).toBe('2024-06-09 1108');
    });

    it('Returns work interval for returning pips', () => {
        const date = new Date('2024-06-15T21:00:00'); // 9 PM
        const collection: RiddlesCollection = [];

        const result = createLandingPageViewModel(date, collection);

        expect(result.workInterval).toBe('Returning pips');
    });

    it('Returns work interval for sleepies', () => {
        const date = new Date('2024-06-15T02:00:00'); // 2 AM
        const collection: RiddlesCollection = [];

        const result = createLandingPageViewModel(date, collection);

        expect(result.workInterval).toBe('Sleepies');
    });

    it('returns with random riddle', () => {
        const date = new Date('2024-06-15T02:00:00');
        const collection: RiddlesCollection = [{ id: 'x', contents: 'y', answers: [] }];

        const result = createLandingPageViewModel(date, collection);

        expect(result.randomRiddle).toEqual({ id: 'x', contents: 'y', answers: [] });
    });
});
