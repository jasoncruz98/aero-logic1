import { describe, expect, it } from 'vitest';
import { getRandomRiddle, RiddlesCollection } from '../RiddleService';

describe('Riddle operations', () => {
    describe('get random riddle', () => {
        it('returns undefined when riddles collection is empty', () => {
            const collection: RiddlesCollection = [];

            const result = getRandomRiddle(collection);

            expect(result).toBeUndefined();
        });

        it('returns random riddle from riddles collection', () => {
            const collection: RiddlesCollection = [
                { id: 'x', contents: 'y', answers: [] },
            ];

            const result = getRandomRiddle(collection);

            expect(result).toEqual({ id: 'x', contents: 'y', answers: [] });
        });
    });
});
