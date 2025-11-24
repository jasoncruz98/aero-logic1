export type Riddle = {
    id: string;
    contents: string;
    answers: {
        id: string;
        text: string;
    }[];
};

export type RiddlesCollection = Riddle[];

export function getRandomRiddle(riddles: RiddlesCollection): Riddle | undefined {
    if (riddles.length === 0) {
        return undefined;
    }

    const randomIndex = Math.floor(Math.random() * riddles.length);
    return riddles[randomIndex];
}
