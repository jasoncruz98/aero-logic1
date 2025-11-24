import { Riddle, RiddlesCollection } from './RiddleService';

export function fetchRiddleCollection(): Promise<RiddlesCollection> {
    return fetch('http://localhost:3000/riddles').then((response) => response.json());
}

export function fetchSingleRiddle(id: string): Promise<Riddle> {
    return fetch(`http://localhost:3000/riddles/${id}`).then((response) =>
        response.json(),
    );
}
